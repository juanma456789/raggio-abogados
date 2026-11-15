# Raggio Abogados: contexto del proyecto

15/11/2026

## Resumen

El sitio ya está migrado de Lovable y publicado en Cloudflare Pages. Lo que falta es mover el dominio `raggioabogados.com`, que todavía apunta a Lovable.

| Dato | Valor |
| --- | --- |
| Repo | `juanma456789/raggio-abogados` (público) |
| Rama oficial | `main`. Todas las ramas remotas están en el commit `fde7107` |
| Tecnología | Sitio estático con Vite, React, TypeScript, Tailwind y shadcn/ui. Node 20 (`.nvmrc`) |
| Hosting | Cloudflare Pages, proyecto `raggio-abogados`: https://raggio-abogados.pages.dev |
| Publicación | Automática: cada push a `main` se publica. Build `npm run build`, salida `dist` |
| Dominio | `raggioabogados.com`, registrado en Hostinger. Todavía apunta a Lovable |
| Mail | `contacto@raggioabogados.com` en Google Workspace. No puede cortarse |
| Repo viejo | `juanma456789/bright-remix-garden` sigue conectado a Lovable. No usarlo |

## Código y comandos

El sitio tiene dos páginas: la home y `/derecho-penal`. El formulario de contacto no manda nada a un servidor: abre WhatsApp con el mensaje armado.

| Ruta | Qué hay |
| --- | --- |
| `src/pages/` | Páginas: `Index.tsx` (home), `DerechoPenal.tsx`, `NotFound.tsx` |
| `src/components/` | Secciones (`home/`, `penal/`, `sections/`), Header, Footer, botón de WhatsApp y componentes `ui/` de shadcn |
| `src/config/site.ts` | Datos de contacto (WhatsApp, email, redes) y abogados |
| `src/config/seo.json` | Títulos y descripciones SEO de cada página |
| `src/config/faqs.json` | Preguntas frecuentes |
| `src/assets/` | Logo y fotos de la oficina |
| `scripts/prerender.mjs` y `scripts/seo-head.mjs` | Después del build generan el HTML de cada ruta con sus metadatos SEO |
| `public/` | Favicons, imágenes para redes (`og/`), `robots.txt` y `sitemap.xml` |

Comandos de desarrollo:

```bash
npm install
npm run dev      # servidor local en http://localhost:8080
npm run build    # genera el sitio en dist/
npm test         # pruebas (vitest)
```

## Lo que ya está hecho

La migración desde Lovable y la publicación en Cloudflare Pages están terminadas. El 7/11 se revisó el sitio en Cloudflare y se ve bien.

| Fecha | Qué se hizo |
| --- | --- |
| 7/11/2026 | Se revisó https://raggio-abogados.pages.dev: home, `/derecho-penal`, WhatsApp y vista en celular. Todo bien |
| 30/9/2026 | Se creó el proyecto de Cloudflare Pages conectado a GitHub (`raggio-abogados`, rama `main`, build `npm run build`, salida `dist`). El primer build salió bien |
| 30/9/2026 | Commit `fde7107` "Independizar el sitio de Lovable": se quitaron Supabase, lovable-tagger, la configuración de Playwright de Lovable, `.lovable/`, `.env` y los lockfiles de bun. Se regeneró `package-lock.json`, se fijó Node 20 y se reescribió el README |
| 29/9/2026 | Se trajo el código y su historial desde `bright-remix-garden` (el repo de Lovable) a `raggio-abogados` |

Desde la migración no hubo ediciones nuevas en Lovable, así que las dos versiones del sitio son iguales.

## Pendiente: mover el dominio a Cloudflare

El próximo paso es pasar el DNS de `raggioabogados.com` de Hostinger a Cloudflare sin cortar el mail de Google. El dominio sigue registrado y pagado en Hostinger; solo cambian los nameservers.

Hay que hacerlo con Claude in Chrome, que tiene las sesiones iniciadas de Cloudflare y Hostinger. Antes de cambiar nameservers, tocar DNSSEC o borrar registros, Claude tiene que pedir confirmación.

- [ ] **Etapa 1 (no afecta nada):** en Cloudflare, Account home → Add a domain → `raggioabogados.com`, con "Quick scan for DNS records" y plan Free. No seguir todavía.
- [ ] Anotar todos los registros DNS de Hostinger (hPanel → Dominios → `raggioabogados.com` → DNS / Nameservers) y ver si DNSSEC está activado.
- [ ] Comparar con lo que importó Cloudflare y agregar lo que falte. Tienen que estar: los MX de Google, el TXT de SPF `v=spf1 include:_spf.google.com`, el TXT `google._domainkey` (DKIM), `_dmarc` y `google-site-verification`. Los MX y TXT van como "DNS only".
- [ ] **Etapa 2 (el paso delicado):** si DNSSEC está activado, apagarlo en Hostinger. Después cambiar los nameservers por los dos que asigna Cloudflare. Tarda entre minutos y unas horas.
- [ ] Verificar que el mail siga funcionando.
- [ ] **Etapa 3:** cuando el dominio esté activo en Cloudflare, agregar `raggioabogados.com` y `www` como Custom domains del proyecto de Pages, y redirigir `www` al dominio sin `www`.
- [ ] **Etapa 4:** recién cuando `raggioabogados.com` funcione desde Cloudflare, despublicar y desconectar el proyecto en Lovable.

Una sesión anterior dejó una tarjeta de tarea con este mismo plan en la app de escritorio: "Mover dominio raggioabogados.com a Cloudflare".

## Automatización de posteos en redes (se perdió)

El 28/9 una sesión armó un sistema completo, pero el push a GitHub falló (error 403) y el trabajo nunca llegó al repo. La rama `claude/automatizar-posteos-redes-sociales-o4epq0` no existe en GitHub, así que hay que rehacerlo desde cero.

**Cómo funcionaba el sistema diseñado:**

1. **Borradores:** los lunes y viernes Claude tomaba el próximo tema de una lista y escribía el artículo, más un texto distinto para LinkedIn, Facebook e Instagram. Usaba búsqueda web para confirmar la normativa vigente. Todo llegaba como pull request, con una lista de datos a verificar.
2. **Revisión:** en el pull request se editaba el texto o la fecha. Al hacer merge, el artículo quedaba programado (por defecto, martes y jueves a las 9:00).
3. **Publicación:** dos veces por día salía en el blog lo que ya había llegado a su fecha, y después se compartía en las tres redes. Las imágenes se generaban solas con los colores del estudio.

**Reglas de ética profesional:** nada de prometer resultados, compararse con otros estudios ni inventar datos o casos. Cada artículo lleva al pie un aviso de que es contenido informativo.

**Para tener en cuenta al rehacerlo:**

- Se pensó cuando el sitio estaba en Lovable, con el blog aparte en `blog.raggioabogados.com`. Ahora el sitio vive en este repo, así que el blog se puede integrar directamente.
- Los colores y el tono fueron una suposición porque no se pudo entrar al sitio. Ahora se pueden tomar de `src/index.css`, `tailwind.config.ts` y el logo en `src/assets/`.
- LinkedIn exige aprobar la "Community Management API" (puede tardar días) y su token vence cada 60 días.
- Hacen falta claves de la API de Claude, LinkedIn y de la página de Facebook (sirve también para Instagram).

**Ideas habladas, sin decidir:**

- Carruseles: placas 4:5 (1080×1350) en Instagram, un PDF en LinkedIn y varias fotos en Facebook.
- Reels armados con `ffmpeg` a partir de los carruseles o de videos de stock de Pexels.
- Guiones para que el equipo grabe videos propios con el celular.
- Evitar clichés como el martillo de juez (los jueces argentinos no lo usan), los avatares de IA y las personas reconocibles en el stock.
- Quedó pendiente decidir si se hacía un reel de prueba con Pexels (necesita una clave gratuita de su API).

## Forma de trabajo y otras sesiones

GitHub es lo que conecta la carpeta local con las sesiones en la nube. `main` es la versión oficial.

- Antes de empezar en cualquier lado: `git pull`. Al terminar: commit y `git push`.
- Las sesiones en la nube trabajan en ramas `claude/...`. Sus cambios se unen a `main` con un pull request y después se hace `git pull` en local.
- Para seguir desde el celular sobre la carpeta local se puede usar Remote Control. Para traer a local una sesión de la nube existe `claude --teleport`.
- La red de las sesiones en la nube bloquea `raggio-abogados.pages.dev` y `raggioabogados.com`. Se pueden habilitar en la configuración de red del entorno.

| Sesión en la nube | Fecha | Resultado |
| --- | --- | --- |
| Migrar sitio desde Lovable | 29/9 al 7/11 | Migración y Cloudflare Pages hechos. Dejó el plan del DNS |
| Recursos en español | 30/9 | Abierta por error: el pedido era para `rank-hotelier-website`. Sin cambios |
| Proyecto local y nube simultáneamente | 30/9 | Explicó cómo trabajar local y en la nube a la vez. Sin cambios |
| Raggio Abogados sitio web | 29/9 | Archivada: falló el acceso a GitHub. Sin cambios |
| Automatización de posteos en redes sociales | 28/9 | Sistema completo que no se pudo subir (ver arriba) |
