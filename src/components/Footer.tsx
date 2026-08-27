import { site } from "@/config/site";
import { logoMarkPaper } from "@/assets/logo-mark-paper";

export const Footer = () => (
  <footer className="bg-tinta text-papel">
    <div className="container grid gap-8 py-12 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-3">
          <img
            src={logoMarkPaper}
            alt="Raggio Abogados"
            className="h-10 w-10 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight">Raggio</span>
            <span className="text-[10px] uppercase tracking-[0.34em] text-papel/70">Abogados</span>
          </span>
        </div>
        <p className="mt-4 text-sm text-papel/70">{site.claim}</p>
        <p className="mt-2 text-sm text-papel/70">{site.matricula}</p>
      </div>
      <nav className="text-sm" aria-label="Secciones">
        <p className="font-semibold">Secciones</p>
        <ul className="mt-3 space-y-2 text-papel/70">
          <li><a href="#urgencias" className="hover:text-papel">Urgencias</a></li>
          <li><a href="#situaciones" className="hover:text-papel">Situaciones</a></li>
          <li><a href="#areas" className="hover:text-papel">Áreas principales</a></li>
          <li><a href="#estudio" className="hover:text-papel">El estudio</a></li>
          <li><a href="#cobertura" className="hover:text-papel">Cobertura</a></li>
          <li><a href="#faq" className="hover:text-papel">Preguntas frecuentes</a></li>
          <li><a href="#contacto" className="hover:text-papel">Contacto</a></li>
        </ul>
      </nav>
      <div className="text-sm">
        <p className="font-semibold">Contacto</p>
        <ul className="mt-3 space-y-2 text-papel/70">
          <li>{site.whatsappVisible} · WhatsApp</li>
          <li>{site.email}</li>
          <li>{site.direccion}</li>
          <li>{site.horario}</li>
        </ul>
      </div>
    </div>
    <div className="container border-t border-papel/15 py-6 text-xs leading-relaxed text-papel/60">
      <p>
        © {new Date().getFullYear()} {site.nombre}. La información publicada es de carácter general y
        no constituye asesoramiento jurídico para un caso particular. Cada situación requiere analizar
        sus circunstancias y documentación.
      </p>
    </div>
  </footer>
);
