// Genera HTML por ruta con su metainformación en el HTML inicial (sin depender de JavaScript).
// Se ejecuta después de `vite build` (hook postbuild).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { headFor, routes } from "./seo-head.mjs";

const START = "<!--head:start-->";
const END = "<!--head:end-->";

const distIndex = resolve("dist/index.html");
const html = readFileSync(distIndex, "utf8");

if (!html.includes(START) || !html.includes(END)) {
  throw new Error("prerender: no se encontraron los marcadores head:start/head:end en dist/index.html");
}

function render(key) {
  const before = html.slice(0, html.indexOf(START) + START.length);
  const after = html.slice(html.indexOf(END));
  return `${before}\n${headFor(key)}\n    ${after}`;
}

// Home
writeFileSync(distIndex, render("home"));
console.log("prerender: dist/index.html");

// Rutas adicionales
for (const [key, r] of Object.entries(routes)) {
  if (r.path === "/") continue;
  const slug = r.path.replace(/^\/+|\/+$/g, "");
  const out = render(key);
  mkdirSync(resolve(`dist/${slug}`), { recursive: true });
  writeFileSync(resolve(`dist/${slug}/index.html`), out);
  writeFileSync(resolve(`dist/${slug}.html`), out);
  console.log(`prerender: dist/${slug}/index.html`);
}
