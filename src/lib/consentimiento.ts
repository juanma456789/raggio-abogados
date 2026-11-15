import { analytics } from "@/config/analytics";

/**
 * Consentimiento de cookies y carga de las herramientas de medición.
 * Ningún script de terceros se carga hasta que la persona lo acepta.
 * La decisión se guarda en el navegador (localStorage), que es estrictamente necesario
 * para recordarla y no requiere consentimiento.
 */

export type Categoria = "analitica" | "publicidad";
export type Preferencias = Record<Categoria, boolean>;
type Guardado = Preferencias & { version: number; fecha: string };

const CLAVE = "raggio-consentimiento";
// Subir la versión obliga a volver a pedir el consentimiento (por ejemplo, si se suma una herramienta).
const VERSION = 1;
const EVENTO_CAMBIO = "raggio:consentimiento";
const EVENTO_ABRIR = "raggio:configurar-cookies";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}
type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: FbqFn;
  loaded?: boolean;
  version?: string;
  disablePushState?: boolean;
};

export const categoriasActivas = (): Categoria[] => [
  ...(analytics.ga4 ? (["analitica"] as const) : []),
  ...(analytics.metaPixel || analytics.googleAds ? (["publicidad"] as const) : []),
];

export const hayCookiesOpcionales = () => categoriasActivas().length > 0;

export function leerConsentimiento(): Preferencias | null {
  try {
    const raw = localStorage.getItem(CLAVE);
    if (!raw) return null;
    const g = JSON.parse(raw) as Guardado;
    if (g.version !== VERSION) return null;
    return { analitica: g.analitica === true, publicidad: g.publicidad === true };
  } catch {
    return null;
  }
}

export function guardarConsentimiento(p: Preferencias) {
  const previo = leerConsentimiento();
  try {
    const g: Guardado = { ...p, version: VERSION, fecha: new Date().toISOString() };
    localStorage.setItem(CLAVE, JSON.stringify(g));
  } catch {
    // Sin almacenamiento disponible la decisión vale solo para esta visita.
  }
  // Retirar un consentimiento ya dado: se borran sus cookies y se recarga para descargar los scripts.
  const retirado =
    previo && ((previo.analitica && !p.analitica) || (previo.publicidad && !p.publicidad));
  if (retirado) {
    // Se frena GA antes de borrar, para que no vuelva a escribir sus cookies antes de recargar.
    if (!p.analitica && analytics.ga4) {
      (window as unknown as Record<string, boolean>)[`ga-disable-${analytics.ga4}`] = true;
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
    }
    limpiarCookies(p);
    window.location.reload();
    return;
  }
  window.dispatchEvent(new CustomEvent<Preferencias>(EVENTO_CAMBIO, { detail: p }));
}

export const alCambiarConsentimiento = (cb: (p: Preferencias) => void) => {
  const h = (e: Event) => cb((e as CustomEvent<Preferencias>).detail);
  window.addEventListener(EVENTO_CAMBIO, h);
  return () => window.removeEventListener(EVENTO_CAMBIO, h);
};

export const abrirPreferencias = () => window.dispatchEvent(new Event(EVENTO_ABRIR));

export const alAbrirPreferencias = (cb: () => void) => {
  window.addEventListener(EVENTO_ABRIR, cb);
  return () => window.removeEventListener(EVENTO_ABRIR, cb);
};

const COOKIES_GA = /^_ga(_|$)|^_gid$|^_gat/;
const COOKIES_PUBLICIDAD = /^_fb[pc]$|^_gcl_/;

/** Borra las cookies de las categorías no aceptadas. */
function limpiarCookies(p: Preferencias) {
  if (!p.analitica) borrarCookies(COOKIES_GA);
  if (!p.publicidad) borrarCookies(COOKIES_PUBLICIDAD);
}

/** Borra las cookies cuyo nombre coincide, en el host actual y en cada dominio superior. */
function borrarCookies(nombre: RegExp) {
  const partes = window.location.hostname.split(".");
  const dominios = ["", ...partes.map((_, i) => partes.slice(i).join("."))];
  for (const c of document.cookie.split(";")) {
    const n = c.split("=")[0].trim();
    if (!nombre.test(n)) continue;
    for (const d of dominios) {
      document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=.${d}` : ""}`;
    }
  }
}

function cargarScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

let gtagCargado = false;
let ga4Cargado = false;
let adsCargado = false;
let pixelCargado = false;

/** Carga gtag.js una sola vez, con todo denegado hasta que cada categoría se acepte. */
function asegurarGtag(id: string) {
  if (gtagCargado) return;
  gtagCargado = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag necesita el objeto arguments, no un array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  cargarScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`);
}

/** Carga lo que corresponda según las preferencias. Llamarla varias veces es seguro. */
export function aplicarConsentimiento(p: Preferencias) {
  limpiarCookies(p);

  // Google Analytics 4 (analítica).
  if (p.analitica && analytics.ga4 && !ga4Cargado) {
    ga4Cargado = true;
    asegurarGtag(analytics.ga4);
    window.gtag!("consent", "update", { analytics_storage: "granted" });
    // Las páginas vistas al navegar dentro del sitio las registra GA4 solo
    // ("Medición mejorada" → cambios de página según el historial del navegador).
    window.gtag!("config", analytics.ga4);
  }

  // Google Ads (publicidad): conversiones y audiencias de remarketing.
  if (p.publicidad && analytics.googleAds && !adsCargado) {
    adsCargado = true;
    asegurarGtag(analytics.googleAds);
    window.gtag!("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
    window.gtag!("config", analytics.googleAds);
  }

  // Píxel de Meta (publicidad).
  if (p.publicidad && analytics.metaPixel && !pixelCargado) {
    pixelCargado = true;
    if (!window.fbq) {
      const n = function (...args: unknown[]) {
        if (n.callMethod) n.callMethod(...args);
        else n.queue!.push(args);
      } as FbqFn;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      window.fbq = n;
      window._fbq = n;
    }
    // Las páginas vistas al navegar se registran a mano (registrarPaginaVista) para no duplicarlas.
    window.fbq.disablePushState = true;
    // Sin eventos automáticos: el píxel no lee botones, formularios ni el contenido de las páginas.
    window.fbq("set", "autoConfig", false, analytics.metaPixel);
    window.fbq("init", analytics.metaPixel);
    window.fbq("track", "PageView");
    cargarScript("https://connect.facebook.net/en_US/fbevents.js");
  }
}

/** Página vista al navegar dentro del sitio (solo Meta; Google la registra por su cuenta). */
export function registrarPaginaVista() {
  if (pixelCargado) window.fbq?.("track", "PageView");
}

/**
 * Contacto iniciado (WhatsApp o correo). Solo se envía a las herramientas aceptadas.
 * Nunca se manda el contenido de la consulta: solo el medio de contacto.
 */
export function registrarContacto(metodo: "whatsapp" | "email") {
  if (ga4Cargado) window.gtag?.("event", "contacto", { metodo });
  if (adsCargado && analytics.googleAdsConversion) {
    window.gtag?.("event", "conversion", { send_to: analytics.googleAdsConversion });
  }
  if (pixelCargado) window.fbq?.("track", "Contact", { content_name: metodo });
}
