// Núcleo de las publicaciones: lectura de los archivos .md, metadatos SEO y datos estructurados.
// Es JavaScript plano para que lo usen tanto el sitio (Vite) como scripts/prerender.mjs (Node).
import { parse as parseYaml } from "yaml";
import { Marked } from "marked";

export const ESTADOS = ["borrador", "publicado"];
// Slugs que no pueden usar las publicaciones porque son rutas propias de la sección.
const SLUGS_RESERVADOS = ["redes"];
const PALABRAS_POR_MINUTO = 200;

const slugify = (s) =>
  String(s)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const textoPlano = (html) =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

function crearMarked() {
  const m = new Marked({ gfm: true });
  m.use({
    renderer: {
      // Los h2 llevan id para poder armar el índice y enlazar secciones.
      heading({ tokens, depth }) {
        const html = this.parser.parseInline(tokens);
        const id = slugify(textoPlano(html));
        return `<h${depth} id="${id}">${html}</h${depth}>\n`;
      },
      // Los enlaces externos abren en otra pestaña.
      link({ href, title, tokens }) {
        const html = this.parser.parseInline(tokens);
        const externo = /^https?:\/\//.test(href) && !href.startsWith("https://raggioabogados.com");
        const t = title ? ` title="${title}"` : "";
        const ext = externo ? ` target="_blank" rel="noopener noreferrer"` : "";
        return `<a href="${href}"${t}${ext}>${html}</a>`;
      },
    },
  });
  return m;
}

const marked = crearMarked();

/** Separa el bloque de frontmatter (--- ... ---) del cuerpo en Markdown. */
function separar(raw, archivo) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!m) throw new Error(`publicaciones: ${archivo} no tiene encabezado (--- ... ---)`);
  return { datos: parseYaml(m[1]) ?? {}, cuerpo: m[2].trim() };
}

const fechaValida = (s) => /^\d{4}-\d{2}-\d{2}$/.test(String(s ?? ""));

/**
 * Convierte el contenido de un archivo .md en una publicación.
 * @param {string} raw contenido del archivo
 * @param {string} archivo ruta o nombre del archivo (para errores y slug por defecto)
 */
export function parsePublicacion(raw, archivo) {
  const { datos: d, cuerpo } = separar(raw, archivo);
  const base = archivo.split("/").pop().replace(/\.md$/, "");
  const slug = d.slug ? slugify(d.slug) : slugify(base);

  const faltan = ["titulo", "descripcion", "resumen", "fecha", "categoria", "estado"].filter(
    (k) => !d[k]
  );
  if (faltan.length) throw new Error(`publicaciones: a ${archivo} le falta ${faltan.join(", ")}`);
  if (!ESTADOS.includes(d.estado))
    throw new Error(`publicaciones: ${archivo} tiene estado "${d.estado}" (usar borrador o publicado)`);
  if (!fechaValida(d.fecha)) throw new Error(`publicaciones: ${archivo} tiene fecha inválida (AAAA-MM-DD)`);
  if (d.actualizado && !fechaValida(d.actualizado))
    throw new Error(`publicaciones: ${archivo} tiene "actualizado" inválido (AAAA-MM-DD)`);
  if (SLUGS_RESERVADOS.includes(slug)) throw new Error(`publicaciones: el slug "${slug}" está reservado`);

  const html = marked.parse(cuerpo);
  const palabras = textoPlano(html).split(" ").filter(Boolean).length;
  const indice = [...html.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)].map((x) => ({
    id: x[1],
    texto: textoPlano(x[2]),
  }));

  return {
    slug,
    archivo: base,
    titulo: String(d.titulo),
    tituloSeo: d.tituloSeo ? String(d.tituloSeo) : null,
    descripcion: String(d.descripcion),
    resumen: String(d.resumen),
    fecha: String(d.fecha),
    actualizado: d.actualizado ? String(d.actualizado) : null,
    categoria: String(d.categoria),
    estado: d.estado,
    imagen: d.imagen ? String(d.imagen) : null,
    imagenAlt: d.imagenAlt ? String(d.imagenAlt) : null,
    temaWhatsApp: d.temaWhatsApp ? String(d.temaWhatsApp) : String(d.titulo),
    verificar: Array.isArray(d.verificar) ? d.verificar.map(String) : [],
    redes: normalizarRedes(d.redes),
    html,
    indice,
    minutosLectura: Math.max(1, Math.round(palabras / PALABRAS_POR_MINUTO)),
  };
}

function normalizarRedes(r) {
  if (!r) return null;
  const ig = r.instagram ?? {};
  return {
    linkedin: r.linkedin ? String(r.linkedin).trim() : null,
    facebook: r.facebook ? String(r.facebook).trim() : null,
    instagram: {
      placas: Array.isArray(ig.placas) ? ig.placas.map((p) => String(p).trim()) : [],
      texto: ig.texto ? String(ig.texto).trim() : null,
    },
  };
}

/** Ordena de la más reciente a la más antigua y controla slugs repetidos. */
export function ordenar(pubs) {
  const vistos = new Set();
  for (const p of pubs) {
    if (vistos.has(p.slug)) throw new Error(`publicaciones: el slug "${p.slug}" está repetido`);
    vistos.add(p.slug);
  }
  return [...pubs].sort((a, b) => (a.fecha < b.fecha ? 1 : a.fecha > b.fecha ? -1 : a.titulo.localeCompare(b.titulo)));
}

export const visibles = (pubs, mostrarBorradores) =>
  mostrarBorradores ? pubs : pubs.filter((p) => p.estado === "publicado");

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

/** "2026-11-15" → "15 de noviembre de 2026" (sin depender de la zona horaria). */
export function formatearFecha(iso) {
  const [a, m, d] = iso.split("-").map(Number);
  return `${d} de ${MESES[m - 1]} de ${a}`;
}

// ---------- SEO ----------

export const urlListado = (site) => `${site.origin}/publicaciones`;
export const urlPublicacion = (site, p) => `${site.origin}/publicaciones/${p.slug}`;
const imagenAbsoluta = (site, img) => (img.startsWith("http") ? img : `${site.origin}${img}`);

/** Metainformación del <head> de una publicación. */
export function metaPublicacion(p, site, imagenPorDefecto) {
  const url = urlPublicacion(site, p);
  return {
    title: p.tituloSeo ?? `${p.titulo} | ${site.name}`,
    description: p.descripcion,
    canonical: url,
    robots: p.estado === "borrador" ? "noindex, nofollow" : site.robots,
    og: {
      type: "article",
      url,
      image: p.imagen ? imagenAbsoluta(site, p.imagen) : imagenPorDefecto.image,
      imageAlt: p.imagenAlt ?? imagenPorDefecto.imageAlt,
    },
    article: {
      published: p.fecha,
      modified: p.actualizado ?? p.fecha,
      section: p.categoria,
    },
  };
}

const organizacion = (site) => ({
  "@type": "Organization",
  name: site.name,
  url: `${site.origin}/`,
  logo: { "@type": "ImageObject", url: `${site.origin}/logo-raggio.png` },
});

/** Datos estructurados (schema.org) de una publicación. */
export function ldPublicacion(p, site, imagenPorDefecto) {
  const url = urlPublicacion(site, p);
  const meta = metaPublicacion(p, site, imagenPorDefecto);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: p.titulo,
        description: p.descripcion,
        datePublished: p.fecha,
        dateModified: p.actualizado ?? p.fecha,
        inLanguage: "es-AR",
        articleSection: p.categoria,
        mainEntityOfPage: url,
        image: meta.og.image,
        author: organizacion(site),
        publisher: organizacion(site),
        isPartOf: { "@id": `${site.origin}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${site.origin}/` },
          { "@type": "ListItem", position: 2, name: "Publicaciones", item: urlListado(site) },
          { "@type": "ListItem", position: 3, name: p.titulo, item: url },
        ],
      },
    ],
  };
}

/** Datos estructurados del listado de publicaciones. */
export function ldListado(pubs, site, route) {
  const url = urlListado(site);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: route.title,
        description: route.description,
        inLanguage: "es-AR",
        isPartOf: { "@id": `${site.origin}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: pubs.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: urlPublicacion(site, p),
            name: p.titulo,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${site.origin}/` },
          { "@type": "ListItem", position: 2, name: "Publicaciones", item: url },
        ],
      },
    ],
  };
}
