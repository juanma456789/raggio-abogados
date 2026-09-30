# Raggio Abogados

Sitio web de Raggio Abogados: https://raggioabogados.com

Sitio estático hecho con Vite, React, TypeScript y Tailwind CSS. Se publica en Cloudflare Pages: cada cambio que llega a `main` se publica automáticamente.

## Desarrollo local

Requiere Node.js 20 (ver `.nvmrc`).

```sh
npm install
npm run dev      # servidor local en http://localhost:8080
npm run build    # genera el sitio en dist/
npm test         # pruebas
```

## Estructura

- `src/pages/`: páginas (home, `/derecho-penal`, 404).
- `src/components/`: secciones y componentes del sitio.
- `src/config/site.ts`: datos de contacto (WhatsApp, email, redes) y abogados.
- `src/config/seo.json` y `src/config/faqs.json`: títulos, descripciones y preguntas frecuentes.
- `scripts/prerender.mjs`: después del build genera el HTML de cada ruta con sus metadatos SEO.
- `public/`: favicons, imágenes para redes (`og/`), `robots.txt` y `sitemap.xml`.

## Publicación (Cloudflare Pages)

- Comando de build: `npm run build`
- Carpeta de salida: `dist`
- Rama de producción: `main`
