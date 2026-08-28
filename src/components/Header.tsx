import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Logo } from "@/components/Logo";
import { btnWaSm, waDefault } from "@/config/site";

type NavItem = { label: string; href: string };

const navHome: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Cómo trabajamos", href: "#trabajo" },
  { label: "Contacto", href: "#contacto" },
];

const navPenal: NavItem[] = [
  { label: "Casos", href: "#casos" },
  { label: "Cómo trabajamos", href: "#trabajo" },
  { label: "Raggio Abogados", href: "#estudio" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export const Header = ({ variant = "home" }: { variant?: "home" | "penal" }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = variant === "home" ? navHome : navPenal;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-piedra bg-papel/95 backdrop-blur" : "border-transparent bg-papel"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" aria-label="Raggio Abogados — Inicio" className="flex items-center">
          <Logo className="h-8 md:h-10" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm text-pizarra transition-colors hover:text-tinta"
            >
              {i.label}
            </a>
          ))}
          {variant === "home" && (
            <Link
              to="/derecho-penal"
              className="text-sm text-bronce transition-colors hover:text-tinta"
            >
              Derecho Penal
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waDefault}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnWaSm} hidden sm:inline-flex`}
          >
            <WhatsAppIcon className="h-4 w-4" /> Consultar
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-piedra text-tinta lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-piedra bg-papel lg:hidden">
          <nav className="container flex flex-col py-2" aria-label="Navegación móvil">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="border-b border-piedra/70 py-3 text-sm text-pizarra"
              >
                {i.label}
              </a>
            ))}
            <Link
              to={variant === "home" ? "/derecho-penal" : "/"}
              onClick={() => setOpen(false)}
              className="border-b border-piedra/70 py-3 text-sm text-bronce"
            >
              {variant === "home" ? "Derecho Penal" : "Inicio"}
            </Link>
            <a
              href={waDefault}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnWaSm} my-4 w-full py-3.5 text-xs`}
            >
              <WhatsAppIcon className="h-4 w-4" /> Consultar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
