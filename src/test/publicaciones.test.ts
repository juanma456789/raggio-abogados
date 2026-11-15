import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { ordenar, parsePublicacion, visibles } from "@/lib/publicaciones-core.js";

const DIR = resolve(__dirname, "../content/publicaciones");
const archivos = readdirSync(DIR).filter((f) => f.endsWith(".md"));
const pubs = archivos.map((f) => parsePublicacion(readFileSync(resolve(DIR, f), "utf8"), f));

const ejemplo = (frontmatter: string, cuerpo = "## Título\n\nTexto.") =>
  `---\n${frontmatter}\n---\n${cuerpo}`;
const base = `titulo: Prueba
descripcion: Desc
resumen: Res
fecha: 2026-01-01
categoria: Derecho Penal
estado: borrador`;

describe("publicaciones", () => {
  it("todos los archivos se leen sin errores y los slugs no se repiten", () => {
    expect(pubs.length).toBeGreaterThan(0);
    expect(() => ordenar(pubs)).not.toThrow();
  });

  it("las descripciones SEO no superan los 160 caracteres", () => {
    for (const p of pubs) expect(p.descripcion.length, p.slug).toBeLessThanOrEqual(160);
  });

  it("las publicaciones aprobadas no tienen datos pendientes de verificar", () => {
    for (const p of pubs.filter((x) => x.estado === "publicado"))
      expect(p.verificar, `${p.slug} está publicada con datos a verificar`).toEqual([]);
  });

  it("producción oculta los borradores", () => {
    const lista = ordenar([
      parsePublicacion(ejemplo(base), "a.md"),
      parsePublicacion(ejemplo(base.replace("borrador", "publicado")), "b.md"),
    ]);
    expect(visibles(lista, false).map((p) => p.slug)).toEqual(["b"]);
    expect(visibles(lista, true)).toHaveLength(2);
  });

  it("rechaza archivos incompletos, estados inválidos y slugs reservados", () => {
    expect(() => parsePublicacion(ejemplo("titulo: X"), "x.md")).toThrow(/le falta/);
    expect(() => parsePublicacion(ejemplo(base.replace("borrador", "listo")), "x.md")).toThrow(/estado/);
    expect(() => parsePublicacion(ejemplo(base), "redes.md")).toThrow(/reservado/);
  });

  it("genera ids en los subtítulos para el índice", () => {
    const p = parsePublicacion(ejemplo(base, "## Qué hacer después\n\nTexto."), "x.md");
    expect(p.html).toContain('<h2 id="que-hacer-despues">');
    expect(p.indice).toEqual([{ id: "que-hacer-despues", texto: "Qué hacer después" }]);
  });

  it("convierte las preguntas frecuentes en desplegables y arma tarjetas", () => {
    const p = parsePublicacion(
      ejemplo(
        base,
        ":::pasos\n### Uno\nTexto uno.\n\n### Dos\nTexto dos.\n:::\n\n## Preguntas frecuentes\n\n### ¿Pregunta?\n\nRespuesta."
      ),
      "x.md"
    );
    expect(p.html).toContain('<ol class="pub-pasos not-prose">');
    expect(p.html).toContain('<span class="pub-num" aria-hidden="true">02</span>');
    expect(p.html).toContain('<details class="pub-faq-item"><summary>¿Pregunta?</summary>');
    expect(p.faqs).toEqual([{ q: "¿Pregunta?", a: "Respuesta." }]);
  });
});
