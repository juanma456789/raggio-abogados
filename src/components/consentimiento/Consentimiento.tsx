import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { analytics } from "@/config/analytics";
import {
  type Categoria,
  type Preferencias,
  alAbrirPreferencias,
  aplicarConsentimiento,
  categoriasActivas,
  guardarConsentimiento,
  leerConsentimiento,
  registrarContacto,
  registrarPaginaVista,
} from "@/lib/consentimiento";

const textos: Record<Categoria, { titulo: string; detalle: string }> = {
  analitica: {
    titulo: "Medición de visitas",
    detalle:
      "Google Analytics nos muestra, de forma agregada, cuántas personas visitan el sitio y qué páginas y publicaciones leen. Nos ayuda a saber qué información resulta útil.",
  },
  publicidad: {
    titulo: "Anuncios",
    detalle: `${
      analytics.googleAds && analytics.metaPixel
        ? "Google Ads y el píxel de Meta nos permiten"
        : analytics.googleAds
          ? "Google Ads nos permite"
          : "El píxel de Meta nos permite"
    } medir el resultado de nuestros anuncios en ${
      analytics.googleAds && analytics.metaPixel
        ? "Google, Instagram y Facebook"
        : analytics.googleAds
          ? "Google"
          : "Instagram y Facebook"
    } y mostrarlos a personas que ya visitaron el sitio.`,
  },
};

const btn =
  "inline-flex items-center justify-center rounded-[8px] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronce";
// Aceptar y rechazar tienen el mismo peso visual: ninguna opción se impone sobre la otra.
const btnPrincipal = `${btn} bg-tinta text-papel hover:bg-tinta-deep`;
const btnSecundario = `${btn} border border-piedra bg-papel text-tinta hover:border-tinta`;

const todas = (valor: boolean): Preferencias => ({ analitica: valor, publicidad: valor });

/**
 * Aviso de cookies, panel de preferencias y carga de la medición según el consentimiento.
 * No muestra nada mientras no haya herramientas configuradas en src/config/analytics.ts.
 */
export const Consentimiento = () => {
  const activas = categoriasActivas();
  const [prefs, setPrefs] = useState<Preferencias | null>(() => leerConsentimiento());
  const [panel, setPanel] = useState(false);
  const [borrador, setBorrador] = useState<Preferencias>(() => prefs ?? todas(false));
  const { pathname } = useLocation();
  const primeraRuta = useRef(true);

  useEffect(() => {
    if (prefs) aplicarConsentimiento(prefs);
  }, [prefs]);

  useEffect(
    () =>
      alAbrirPreferencias(() => {
        setBorrador(leerConsentimiento() ?? todas(false));
        setPanel(true);
      }),
    []
  );

  // Página vista al navegar dentro del sitio (la primera la registra la carga del píxel).
  useEffect(() => {
    if (primeraRuta.current) {
      primeraRuta.current = false;
      return;
    }
    registrarPaginaVista();
  }, [pathname]);

  // Clics en enlaces de WhatsApp o correo, en cualquier parte del sitio.
  useEffect(() => {
    const h = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      const href = a?.getAttribute("href") ?? "";
      if (href.startsWith("https://wa.me/")) registrarContacto("whatsapp");
      else if (href.startsWith("mailto:")) registrarContacto("email");
    };
    document.addEventListener("click", h, true);
    return () => document.removeEventListener("click", h, true);
  }, []);

  if (activas.length === 0) return null;

  const decidir = (p: Preferencias) => {
    guardarConsentimiento(p);
    setPrefs(p);
    setPanel(false);
  };

  return (
    <>
      {!prefs && !panel && (
        <section
          aria-label="Aviso de cookies"
          className="fixed inset-x-3 bottom-3 z-[60] rounded-[8px] border border-piedra bg-papel p-4 text-tinta shadow-[0_18px_40px_-18px_hsl(213_42%_17%/0.45)] sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-sm sm:p-5"
        >
          <p className="text-sm leading-relaxed text-pizarra">
            {activas.includes("publicidad")
              ? "Usamos cookies para medir las visitas y nuestros anuncios."
              : "Usamos cookies para medir las visitas."}{" "}
            <Link to="/privacidad" className="border-b border-bronce/50 text-tinta hover:text-bronce">
              Política de privacidad
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button type="button" className={btnPrincipal} onClick={() => decidir(todas(false))}>
              Rechazar
            </button>
            <button type="button" className={btnPrincipal} onClick={() => decidir(todas(true))}>
              Aceptar
            </button>
            <button
              type="button"
              className="ml-auto border-b border-bronce/50 pb-0.5 text-sm text-tinta hover:text-bronce"
              onClick={() => {
                setBorrador(todas(false));
                setPanel(true);
              }}
            >
              Configurar
            </button>
          </div>
        </section>
      )}

      <Dialog open={panel} onOpenChange={setPanel}>
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-[8px] border-piedra bg-papel sm:max-w-lg">
          <DialogTitle className="font-display text-xl font-semibold text-tinta">
            Configurar cookies
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-pizarra">
            Elegí qué herramientas querés permitir. Podés volver a cambiarlo desde «Configurar
            cookies», en el pie de página.
          </DialogDescription>

          <ul className="mt-2 divide-y divide-piedra border-y border-piedra">
            <li className="flex items-start gap-4 py-4">
              <div className="flex-1">
                <p className="text-sm font-semibold text-tinta">Necesarias</p>
                <p className="mt-1 text-sm leading-relaxed text-pizarra">
                  Guardan en tu navegador la decisión que tomes en este panel. No identifican a
                  quien visita el sitio.
                </p>
              </div>
              <span className="pt-0.5 text-xs font-semibold uppercase tracking-[0.08em] text-pizarra">
                Siempre
              </span>
            </li>
            {activas.map((c) => (
              <li key={c} className="flex items-start gap-4 py-4">
                <label htmlFor={`cookies-${c}`} className="flex-1 cursor-pointer">
                  <span className="block text-sm font-semibold text-tinta">{textos[c].titulo}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-pizarra">
                    {textos[c].detalle}
                  </span>
                </label>
                <Switch
                  id={`cookies-${c}`}
                  checked={borrador[c]}
                  onCheckedChange={(v) => setBorrador((b) => ({ ...b, [c]: v }))}
                  className="mt-0.5"
                />
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap gap-3">
            <button type="button" className={btnPrincipal} onClick={() => decidir(todas(false))}>
              Rechazar todas
            </button>
            <button type="button" className={btnSecundario} onClick={() => decidir(borrador)}>
              Guardar selección
            </button>
            <button type="button" className={btnPrincipal} onClick={() => decidir(todas(true))}>
              Aceptar todas
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
