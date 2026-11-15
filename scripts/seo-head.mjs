// Fuente única de la metainformación por ruta.
// Usado por scripts/prerender.mjs (build) y espejado por src/components/Seo.tsx (navegación SPA).
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const seo = JSON.parse(readFileSync(resolve("src/config/seo.json"), "utf8"));
const faqs = JSON.parse(readFileSync(resolve("src/config/faqs.json"), "utf8"));

const { site, routes } = seo;
const EMAIL = "contacto@raggioabogados.com";
const LOGO = `${site.origin}/logo-raggio.png`;
const AREAS = ["Ciudad Autónoma de Buenos Aires", "Provincia de Buenos Aires"];

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const jsonLd = {
  home: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.origin}/#website`,
        url: `${site.origin}/`,
        name: site.name,
        inLanguage: "es-AR",
        publisher: { "@id": `${site.origin}/#legalservice` },
      },
      {
        "@type": "LegalService",
        "@id": `${site.origin}/#legalservice`,
        name: site.name,
        url: `${site.origin}/`,
        email: EMAIL,
        logo: LOGO,
        image: LOGO,
        inLanguage: "es-AR",
        description: routes.home.description,
        areaServed: AREAS.map((name) => ({ "@type": "AdministrativeArea", name })),
      },
    ],
  },
  derechoPenal: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${routes.derechoPenal.canonical}#webpage`,
        url: routes.derechoPenal.canonical,
        name: routes.derechoPenal.title,
        description: routes.derechoPenal.description,
        inLanguage: "es-AR",
        isPartOf: { "@id": `${site.origin}/#website` },
        about: { "@id": `${site.origin}/#legalservice` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${routes.derechoPenal.canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${site.origin}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Derecho Penal",
            item: routes.derechoPenal.canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${routes.derechoPenal.canonical}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  },
};

/** Metainformación de una ruta fija de seo.json, en el mismo formato que metaPublicacion(). */
export function metaFor(key) {
  const r = routes[key];
  return {
    title: r.title,
    description: r.description,
    canonical: r.canonical,
    robots: site.robots,
    og: { type: "website", url: r.og.url, image: r.og.image, imageAlt: r.og.imageAlt },
  };
}

/** Etiquetas del <head> a partir de la metainformación y los datos estructurados. */
export function headFromMeta(m, ld) {
  const lines = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<meta name="robots" content="${esc(m.robots)}" />`,
    `<link rel="canonical" href="${m.canonical}" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:type" content="${m.og.type}" />`,
    `<meta property="og:locale" content="${site.locale}" />`,
    `<meta property="og:url" content="${m.og.url}" />`,
    `<meta property="og:image" content="${m.og.image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(m.og.imageAlt)}" />`,
  ];
  if (m.article) {
    lines.push(
      `<meta property="article:published_time" content="${m.article.published}" />`,
      `<meta property="article:modified_time" content="${m.article.modified}" />`,
      `<meta property="article:section" content="${esc(m.article.section)}" />`
    );
  }
  if (ld) {
    const json = JSON.stringify(ld).replace(/</g, "\\u003c");
    lines.push(`<script type="application/ld+json" id="ld-route">${json}</script>`);
  }
  return lines.map((l) => `    ${l}`).join("\n");
}

export function headFor(key, ld = jsonLd[key]) {
  return headFromMeta(metaFor(key), ld);
}

export { esc };
export { seo, routes, site };
