import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site, waDefault } from "@/config/site";

const nav = [
  { label: "Urgencias", href: "#urgencias" },
  { label: "Casos que atendemos", href: "#situaciones" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "El estudio", href: "#estudio" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="font-display text-lg tracking-tight text-primary md:text-xl">
            Raggio <span className="text-accent">Abogados</span>
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Derecho penal · CABA
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm text-ink-700 transition-colors hover:text-accent"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${site.telefono.replace(/\s|-/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
          >
            <Phone className="h-4 w-4" /> {site.telefono}
          </a>
          <a
            href={waDefault}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4 w-4" /> Consultar ahora
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container flex flex-col py-2" aria-label="Navegación móvil">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-ink-700 last:border-0"
              >
                {i.label}
              </a>
            ))}
            <a
              href={waDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="my-3 flex items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" /> Escribir por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
