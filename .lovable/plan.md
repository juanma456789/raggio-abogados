## Agregar perfiles de Instagram y Google Business

Incorporar los enlaces a Instagram y al perfil de Google Business en el sitio, manteniendo la identidad visual actual y sin alterar `/derecho-penal` ni la navegación principal.

### 1. Configuración
- En `src/config/site.ts`: agregar `instagram: "https://www.instagram.com/raggio_abogados/"` y `googleBusiness: "https://share.google/gTVUTpN8yqs1aeAI2"`.

### 2. Íconos
- Instagram: usar `Instagram` de `lucide-react`.
- Google Business: crear un ícono SVG propio sobrio (lettermark "G" o pin de ubicación estilizado) en `src/components/icons/GoogleIcon.tsx`, siguiendo el patrón de `WhatsAppIcon.tsx`.

### 3. Footer
- Agregar una cuarta columna/sección "Redes" debajo del bloque de contacto en `src/components/Footer.tsx`.
- Listar los dos enlaces con sus íconos, texto legible ("Instagram" y "Google"), `target="_blank"`, `rel="noopener noreferrer"` y `aria-label` descriptivo.
- Conservar colores de texto existentes (`text-papel/70`, hover `text-papel`) y tipografía.

### 4. Consideración adicional: contacto
- Añadir una línea breve en `src/components/sections/Contacto.tsx` debajo del bloque de datos de contacto: "También podés encontrarnos en Instagram y Google" con los dos enlaces pequeños e íconos. No modificar el formulario ni los CTAs de WhatsApp.

### 5. Verificación
- Ejecutar `bunx tsgo --noEmit`.
- Revisar en preview desktop y mobile que los enlaces sean visibles, estén bien alineados y abran las URLs correctas.
