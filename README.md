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

## Publicaciones

Los artículos de `/publicaciones` son archivos Markdown en `src/content/publicaciones/`. El nombre del archivo es la dirección del artículo (`familiar-detenido-que-hacer.md` → `/publicaciones/familiar-detenido-que-hacer`).

Cada archivo empieza con un encabezado entre `---` con estos campos:

| Campo | Para qué sirve |
| --- | --- |
| `titulo` | Título visible del artículo |
| `tituloSeo` | Opcional. Título para Google, si conviene que sea distinto |
| `descripcion` | Descripción para Google (máximo 160 caracteres) |
| `resumen` | Bajada que se ve debajo del título y en el listado |
| `fecha` / `actualizado` | `AAAA-MM-DD` |
| `categoria` | Por ejemplo `Derecho Penal` |
| `estado` | `borrador` o `publicado` |
| `temaWhatsApp` | Cómo se nombra el tema en el mensaje de WhatsApp ("estoy consultando desde la publicación sobre …") |
| `verificar` | Datos que los abogados tienen que confirmar. Una publicación no puede pasar a `publicado` con esta lista llena (lo controla `npm test`) |
| `redes` | Textos para LinkedIn, Facebook e Instagram (placas del carrusel y texto). No se muestran en el sitio |

**Borradores.** Se ven en `npm run dev` y en las vistas previas de Cloudflare (ramas distintas de `main`), con la etiqueta "Borrador" y sin indexar. En producción no se publican ni se incluyen en el código del sitio.

**Textos para redes.** `/publicaciones/redes` reúne los textos de redes de todas las publicaciones, con botones para copiarlos. No está en el menú ni en buscadores.

**SEO.** Al hacer el build, cada artículo sale con su texto completo, su metainformación y sus datos estructurados (`BlogPosting`) en el HTML inicial. El `sitemap.xml` se genera solo e incluye únicamente las publicaciones aprobadas.
