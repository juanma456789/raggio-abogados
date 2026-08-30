# Homepage: ampliar el posicionamiento del estudio

Objetivo: que la home comunique asesoramiento legal a personas, familias y empresas, manteniendo Derecho Penal como especialización destacada con acceso a `/derecho-penal`. Sin rediseño: se conservan identidad visual, colores, fotos, Instrument Sans, botones, espaciados y WhatsApp. La landing `/derecho-penal` no se toca.

## Nuevo orden de secciones

Hero → El estudio → Áreas del Derecho (nueva) → Derecho Penal → Empresas (nueva) → Cómo trabajamos → Áreas de cobertura → Contacto → Footer.

## Cambios por sección

**Navegación (header)**: Inicio, Áreas del Derecho (ancla a la nueva sección), Cómo trabajamos, Contacto + botón verde “Consultar”. El acceso a la landing penal queda en su sección y en el footer.

**Hero**: nuevo título (“Asesoramiento legal especializado para personas, familias y empresas”) y nuevo párrafo. Cargos: “Abogado” / “Abogada”. Se mantienen monogramas GR y BZ, foto y botón “Consultar por WhatsApp”.

**El estudio**: nuevo título “Criterio, claridad y atención directa”, nuevo párrafo, y los cuatro conceptos con los textos indicados (“Análisis de cada asunto”). Se quitan referencias a causas y procesos penales.

**Áreas del Derecho (nueva)**: etiqueta “Áreas de práctica”, título “Asesoramiento en distintas áreas del Derecho”, texto introductorio y cuatro tarjetas (Familia y sucesiones, Laboral, Civil y Comercial, Penal) con el estilo de tarjetas actual. La tarjeta penal lleva una marca discreta de “más información abajo”.

**Derecho Penal**: se reutiliza la sección de áreas actual con etiqueta “Derecho Penal”, título “Asesoramiento y defensa ante situaciones penales”, primera tarjeta renombrada a “Defensa penal” y las otras tres sin cambios. El enlace textual pasa a botón azul oscuro institucional, texto blanco, flecha a la derecha, mismo redondeado y sombra, hacia `/derecho-penal`.

**Empresas (nueva)**: etiqueta “Empresas”, título y texto indicados, cuatro ejes breves y cierre con botón verde “Consultar por WhatsApp”. Sin página nueva.

**Cómo trabajamos**: mismo layout y foto; nuevo título “Una forma de trabajar clara y ordenada” y los cuatro pasos generalizados (sin causa, etapa procesal ni organismo).

**Áreas de cobertura**: mismo bloque, nuevo párrafo y solo dos tarjetas (CABA / Provincia de Buenos Aires). Sin mapas ni imágenes nuevas.

**Contacto**: título principal igual. Formulario reducido a cuatro campos (Nombre y apellido, Teléfono, Motivo de la consulta, Mensaje); se eliminan email, jurisdicción y preferencia. Nuevo título del formulario y bajada, nuevas opciones de motivo, mensaje de confirmación nuevo y, debajo, “¿Preferís escribirnos por correo electrónico?” con el enlace a contacto@raggioabogados.com.ar. Se conserva el aviso de datos personales y el envío al estudio (no abre WhatsApp).

**Footer**: nuevo claim (“Asesoramiento legal para personas, familias y empresas · CABA y provincia de Buenos Aires”), cargos “Abogado”/“Abogada”, y navegación: Inicio, Áreas del Derecho, Derecho Penal (`/derecho-penal`), Cómo trabajamos, Áreas de cobertura, Contacto.

**Metadatos**: se mantiene el title. Nueva meta description y og:description; se actualiza el JSON-LD de la home (descripción y `areaServed` = CABA y provincia de Buenos Aires) para que no presente al estudio como exclusivamente penalista.

Se eliminan todas las menciones a Zona Norte, Mercedes y Necochea en home, footer, configuración y metadatos.

## Detalles técnicos

- `src/config/site.ts`: `claim`, `jurisdicciones`, cargos de los abogados y una clase de botón institucional (`btnInst`) reutilizable.
- Nuevos componentes: `src/components/home/AreasDerecho.tsx` y `src/components/home/Empresas.tsx`.
- `src/components/home/Areas.tsx` pasa a ser la sección penal (`id="derecho-penal"`), y la nueva sección general toma `id="areas"` para la navegación.
- `Header.tsx` y `Footer.tsx`: navegación actualizada (variante home únicamente).
- `Trabajo.tsx` y `Cobertura.tsx`: sólo textos/datos, sin cambios de layout. Al usarse también en `/derecho-penal`, los textos generalizados se pasarán por props desde cada página para no alterar la landing penal.
- `Contacto.tsx`: estado, validaciones y payload reducidos a cuatro campos; nuevo bloque de correo alternativo.
- `supabase/functions/enviar-consulta/index.ts`: quitar email/jurisdicción/preferencia del payload, validación y plantilla del mail; mantener el registro en base y redeploy de la función. Las columnas existentes quedan como opcionales (sin migración).
- `index.html` y `src/pages/Index.tsx`: descripciones y datos estructurados.
- Verificación final con typecheck y revisión de la home en desktop y mobile; la landing penal se revisa para confirmar que no cambió.
