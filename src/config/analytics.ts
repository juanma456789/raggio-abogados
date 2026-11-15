// Herramientas de medición del sitio.
// Un ID vacío deja esa herramienta desactivada: no se carga nada y no se pide consentimiento.
// Mientras no haya ninguna cargada, el sitio no usa cookies y el aviso no aparece.
// Las variables VITE_* (por ejemplo, en Cloudflare Pages o en un .env local) tienen prioridad.
const env = import.meta.env;

export const analytics = {
  /**
   * Google Analytics 4 (propiedad "Raggio Abogados", cuenta Rank Hotelier).
   * Usa cookies: requiere consentimiento (analítica).
   */
  ga4: (env.VITE_GA4_ID as string | undefined) || "G-Y0FYV8GFR0",
  /**
   * Píxel de Meta "Raggio Abogados - Sitio web" (portfolio Arandú Media Agency).
   * Usa cookies: requiere consentimiento (publicidad).
   */
  metaPixel: (env.VITE_META_PIXEL_ID as string | undefined) || "4136382733165902",
  /** Google Ads, formato "AW-XXXXXXXXXX". Usa cookies: requiere consentimiento (publicidad). */
  googleAds: (env.VITE_GOOGLE_ADS_ID as string | undefined) || "",
  /**
   * Acción de conversión de Google Ads para el contacto (WhatsApp o correo),
   * formato "AW-XXXXXXXXXX/etiqueta". Vacío = no se envía la conversión.
   */
  googleAdsConversion: (env.VITE_GOOGLE_ADS_CONVERSION as string | undefined) || "",
  /**
   * Cloudflare Web Analytics. No usa cookies ni necesita consentimiento; se activa desde el panel
   * de Cloudflare Pages (Metrics → Web Analytics). Este valor solo cambia el texto de la política.
   */
  cloudflare: false,
};
