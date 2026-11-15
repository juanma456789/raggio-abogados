// Genera HTML por ruta con su metainformación en el HTML inicial (sin depender de JavaScript).
// Las publicaciones salen además con el texto completo dentro de #root, para que los buscadores
// lo lean sin ejecutar JavaScript (React lo reemplaza al cargar).
// También genera dist/sitemap.xml. Se ejecuta después de `vite build` (hook postbuild).
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { esc, headFor, headFromMeta, routes, site } from "./seo-head.mjs";
import { mostrarBorradores } from "./borradores.mjs";
import {
  formatearFecha,
  ldListado,
  ldPublicacion,
  metaPublicacion,
  ordenar,
  parsePublicacion,
  urlPublicacion,
  visibles,
} from "../src/lib/publicaciones-core.js";

const START = "<!--head:start-->";
const END = "<!--head:end-->";
const ROOT = '<div id="root"></div>';

const distIndex = resolve("dist/index.html");
const html = readFileSync(distIndex, "utf8");

if (!html.includes(START) || !html.includes(END)) {
  throw new Error("prerender: no se encontraron los marcadores head:start/head:end en dist/index.html");
}
if (!html.includes(ROOT)) throw new Error(`prerender: no se encontró ${ROOT} en dist/index.html`);

function render(head, body = "") {
  const before = html.slice(0, html.indexOf(START) + START.length);
  const after = html.slice(html.indexOf(END));
  const page = `${before}\n${head}\n    ${after}`;
  return body ? page.replace(ROOT, `<div id="root">${body}</div>`) : page;
}

/** Escribe dist/<ruta>/index.html y dist/<ruta>.html (igual que las rutas existentes). */
function write(path, out) {
  const slug = path.replace(/^\/+|\/+$/g, "");
  mkdirSync(resolve(`dist/${slug}`), { recursive: true });
  writeFileSync(resolve(`dist/${slug}/index.html`), out);
  writeFileSync(resolve(`dist/${slug}.html`), out);
  console.log(`prerender: dist/${slug}/index.html`);
}

// ---------- Publicaciones ----------
const DIR = resolve("src/content/publicaciones");
const todas = ordenar(
  readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parsePublicacion(readFileSync(resolve(DIR, f), "utf8"), f))
);
const conBorradores = mostrarBorradores("production");
const pubs = visibles(todas, conBorradores);
const publicadas = todas.filter((p) => p.estado === "publicado");
const imagenPorDefecto = { image: routes.publicaciones.og.image, imageAlt: routes.publicaciones.og.imageAlt };
console.log(
  `prerender: ${publicadas.length} publicadas, ${todas.length - publicadas.length} borradores` +
    (conBorradores ? " (borradores visibles en este build)" : " (borradores ocultos)")
);

const bodyListado = () =>
  `<main><h1>Publicaciones</h1><p>${esc(routes.publicaciones.description)}</p><ul>` +
  pubs
    .map(
      (p) =>
        `<li><a href="/publicaciones/${p.slug}">${esc(p.titulo)}</a><p>${esc(p.resumen)}</p></li>`
    )
    .join("") +
  `</ul></main>`;

const bodyPublicacion = (p) =>
  `<main><article><p>${esc(p.categoria)}</p><h1>${esc(p.titulo)}</h1><p>${esc(p.resumen)}</p>` +
  `<p><time datetime="${p.fecha}">${formatearFecha(p.fecha)}</time></p>${p.html}</article>` +
  `<nav><a href="/publicaciones">Publicaciones</a> · <a href="/derecho-penal">Derecho Penal</a> · <a href="/">Inicio</a></nav></main>`;

// ---------- Rutas ----------
writeFileSync(distIndex, render(headFor("home")));
console.log("prerender: dist/index.html");

for (const [key, r] of Object.entries(routes)) {
  if (r.path === "/") continue;
  if (key === "publicaciones") {
    write(r.path, render(headFor(key, ldListado(pubs, site, r)), bodyListado()));
  } else {
    write(r.path, render(headFor(key)));
  }
}

for (const p of pubs) {
  const head = headFromMeta(metaPublicacion(p, site, imagenPorDefecto), ldPublicacion(p, site, imagenPorDefecto));
  write(`/publicaciones/${p.slug}`, render(head, bodyPublicacion(p)));
}

// Página interna de textos para redes: nunca indexable.
write(
  "/publicaciones/redes",
  render(
    headFromMeta({
      title: `Textos para redes | ${site.name}`,
      description: "Uso interno.",
      canonical: `${site.origin}/publicaciones/redes`,
      robots: "noindex, nofollow",
      og: { type: "website", url: `${site.origin}/publicaciones/redes`, ...imagenPorDefecto },
    })
  )
);

// ---------- Sitemap (solo publicaciones aprobadas) ----------
const hoy = new Date().toISOString().slice(0, 10);
const entradas = [
  { loc: routes.home.canonical, prioridad: "1.0", frecuencia: "monthly" },
  { loc: routes.derechoPenal.canonical, prioridad: "0.9", frecuencia: "monthly" },
  {
    loc: routes.publicaciones.canonical,
    prioridad: "0.8",
    frecuencia: "weekly",
    lastmod: publicadas.length ? publicadas.map((p) => p.actualizado ?? p.fecha).sort().at(-1) : hoy,
  },
  ...publicadas.map((p) => ({
    loc: urlPublicacion(site, p),
    prioridad: "0.7",
    frecuencia: "monthly",
    lastmod: p.actualizado ?? p.fecha,
  })),
  { loc: routes.privacidad.canonical, prioridad: "0.2", frecuencia: "yearly" },
];
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  entradas
    .map(
      (e) =>
        `  <url>\n    <loc>${e.loc}</loc>\n` +
        (e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>\n` : "") +
        `    <changefreq>${e.frecuencia}</changefreq>\n    <priority>${e.prioridad}</priority>\n  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;
writeFileSync(resolve("dist/sitemap.xml"), sitemap);
console.log(`prerender: dist/sitemap.xml (${entradas.length} URLs)`);
