import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { abogados, site } from "@/config/site";
import { Logo } from "@/components/Logo";
import { GoogleIcon } from "@/components/icons/GoogleIcon";

export const Footer = ({ variant = "home" }: { variant?: "home" | "penal" }) => (
  <footer className="bg-tinta-deep text-papel">
    <div className="container grid gap-10 py-14 md:grid-cols-3">
      <div>
        <Logo variant="paper" size={56} />
        <p className="mt-6 text-sm leading-relaxed text-papel/70">{site.claim}</p>
        <ul className="mt-5 space-y-1 text-sm text-papel/70">
          {abogados.map((a) => (
            <li key={a.nombre}>
              {a.nombre} — {a.cargo}
            </li>
          ))}
        </ul>
      </div>

      <nav className="text-sm" aria-label="Secciones">
        <p className="eyebrow text-bronce-soft">Secciones</p>
        <ul className="mt-4 space-y-2.5 text-papel/70">
          {variant === "home" ? (
            <>
              <li><a href="#inicio" className="hover:text-papel">Inicio</a></li>
              <li><a href="#areas" className="hover:text-papel">Áreas del Derecho</a></li>
              <li>
                <Link to="/derecho-penal" className="hover:text-papel">
                  Derecho Penal
                </Link>
              </li>
              <li><a href="#trabajo" className="hover:text-papel">Cómo trabajamos</a></li>
              <li><a href="#cobertura" className="hover:text-papel">Áreas de cobertura</a></li>
              <li><a href="#contacto" className="hover:text-papel">Contacto</a></li>
            </>
          ) : (

            <>
              <li><a href="#casos" className="hover:text-papel">Casos y áreas de intervención</a></li>
              <li><a href="#trabajo" className="hover:text-papel">Cómo trabajamos</a></li>
              <li><a href="#estudio" className="hover:text-papel">Raggio Abogados</a></li>
              <li><a href="#cobertura" className="hover:text-papel">Dónde intervenimos</a></li>
              <li><a href="#faq" className="hover:text-papel">Preguntas frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-papel">Contacto</a></li>
              <li>
                <Link to="/" className="text-bronce-soft hover:text-papel">
                  Inicio
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <div className="text-sm">
        <p className="eyebrow text-bronce-soft">Contacto</p>
        <ul className="mt-4 space-y-2.5 text-papel/70">
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-papel">
              {site.email}
            </a>
          </li>
          <li>{site.horario}</li>
          <li>CABA y provincia de Buenos Aires</li>
        </ul>
      </div>
    </div>

    <div className="container border-t border-papel/15 py-6 text-xs leading-relaxed text-papel/60">
      <p>
        © {new Date().getFullYear()} {site.nombre}. La información publicada es de carácter general y
        no constituye asesoramiento jurídico para un caso particular. Cada asunto requiere
        analizar sus circunstancias y documentación.
      </p>
    </div>
  </footer>
);
