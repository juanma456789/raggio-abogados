## Raggio Abogados — Landing única con la marca y el contenido definitivos

Una sola página, reescrita con los textos del documento de contenido y el sistema visual de la hoja de marca. WhatsApp sigue siendo la acción principal; el formulario queda como alternativa.

### 1. Identidad visual

Nueva paleta como tokens semánticos (reemplaza navy + bronce):

- Azul tinta `#39485C` — color principal, títulos y fondos oscuros
- Gris pizarra `#5A5F66` — texto de cuerpo y elementos secundarios
- Papel cálido `#F2EEE6` — fondo de secciones claras
- Piedra `#D8D2C8` — bordes, separadores y superficies suaves
- Verde de WhatsApp reservado únicamente para los botones de contacto

Tipografía: **Cormorant Garamond** para títulos y wordmark, **Public Sans** para todo el texto funcional (reemplaza Libre Baskerville / IBM Plex Sans).

Logo: el obelisco se incorpora como marca en el header y el footer (versión tinta sobre claro, versión papel sobre oscuro) y como favicon.

### 2. Reescritura del contenido (todo del documento)

- **Hero.** Antetítulo "ESTUDIO JURÍDICO CON FOCO EN DERECHO PENAL"; título "Criterio jurídico para actuar frente a una situación penal"; texto con atención  en CABA y provincia de Buenos Aires. Botón "Hablar por WhatsApp" + enlace "Dejar una consulta" y el microtexto de orientación.
- **Situaciones.** "Cuando una situación penal exige comprender y actuar", con las cinco situaciones del documento (citación o denuncia, detención, defensa en investigación, víctima/querella, impacto profesional o empresarial) y cierre con CTA.
- **Áreas principales.** Derecho Penal · Víctimas y querellas · Derecho Penal Económico · Situaciones urgentes.
- **Urgencias.** Se mantiene la sección, pero con tono sereno: orientación inicial ante detenciones, allanamientos y citaciones, sin lenguaje que amplifique el miedo.
- **Por qué Raggio Abogados.** Criterio estratégico · Explicaciones claras · Atención directa · Seriedad y discreción.
- **El estudio.** Presentación de Gonzalo y Agustina con el texto del documento; sin afirmar especializaciones ni resultados no respaldados.
- **Cobertura.** CABA, Zona Norte, Mercedes y Necochea, aclarando que la actuación se confirma según jurisdicción y asunto.
- **FAQ.** Preguntas del documento (incluye "¿Trabajan con familiares?" y "¿Dónde intervienen?").
- **Cierre + Contacto.** "Contanos brevemente tu situación", WhatsApp como acción principal, formulario como alternativa con mensaje de confirmación y nota de privacidad pendiente de validar.
- **Footer.** Línea del documento: estudio con foco en Derecho Penal · CABA, Zona Norte, Mercedes y Necochea, con datos y matrículas placeholder.

Se elimina de todo el sitio cualquier promesa de resultado, superlativo o urgencia comercial ("guardia 24 horas", "respuesta en minutos" se reformulan como capacidad de respuesta ágil).

### 3. Conversión

- Botón flotante de WhatsApp en móvil, presente durante toda la navegación.
- Cada CTA abre `wa.me` con un mensaje precargado distinto según la sección (hero, urgencias, situación puntual, penal económico, cierre).
- El formulario arma el mensaje y abre WhatsApp; se agrega estado de confirmación y bloqueo de envíos duplicados.

### 4. SEO

Título "Abogados penalistas en Buenos Aires | Raggio Abogados" y descripción del documento; Open Graph y Twitter card; un solo H1; JSON-LD de `LegalService` + `FAQPage` actualizado con las cuatro jurisdicciones; `alt` en el logo e imágenes.

### Detalles técnicos

- `src/index.css` y `tailwind.config.ts`: tokens HSL nuevos (`--tinta`, `--pizarra`, `--papel`, `--piedra`), import de Cormorant Garamond y Public Sans, sombras y gradiente adaptados.
- Logo: se sube `logo-mark-ink.png` y `logo-mark-paper.png` como assets CDN y se usan vía pointer; copia cuadrada en `public/favicon.png` y se elimina `favicon.ico`.
- Se editan `Header`, `Footer`, `FloatingWhatsApp` y las secciones `Hero`, `Urgencias`, `Situaciones`, `Proceso` (pasa a "Áreas principales" o se ajusta), `Estudio`, `Cobertura`, `Faq`, `Contacto`, más `src/config/site.ts` (jurisdicciones y placeholders) y `index.html`.
- Datos de contacto siguen siendo placeholder en `src/config/site.ts`.
