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

export function headFor(key) {
  const r = routes[key];
  const ld = JSON.stringify(jsonLd[key]).replace(/</g, "\\u003c");
  return [
    `<title>${esc(r.title)}</title>`,
    `<meta name="description" content="${esc(r.description)}" />`,
    `<meta name="robots" content="${esc(site.robots)}" />`,
    `<link rel="canonical" href="${r.canonical}" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`,
    `<meta property="og:description" content="${esc(r.description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${site.locale}" />`,
    `<meta property="og:url" content="${r.og.url}" />`,
    `<meta property="og:image" content="${r.og.image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(r.og.imageAlt)}" />`,
    `<script type="application/ld+json" id="ld-route">${ld}</script>`,
  ]
    .map((l) => `    ${l}`)
    .join("\n");
}

export { seo, routes, site };
