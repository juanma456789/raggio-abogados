import { site } from "@/config/site";

export const Footer = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="container grid gap-8 md:grid-cols-3">
      <div>
        <p className="font-display text-lg text-primary">
          Raggio <span className="text-accent">Abogados</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{site.claim}</p>
        <p className="mt-2 text-sm text-muted-foreground">{site.matricula}</p>
      </div>
      <nav className="text-sm" aria-label="Secciones">
        <p className="font-semibold text-primary">Secciones</p>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li><a href="#urgencias" className="hover:text-accent">Urgencias por detención</a></li>
          <li><a href="#situaciones" className="hover:text-accent">Casos que atendemos</a></li>
          <li><a href="#cobertura" className="hover:text-accent">Zona de actuación</a></li>
          <li><a href="#faq" className="hover:text-accent">Preguntas frecuentes</a></li>
          <li><a href="#contacto" className="hover:text-accent">Contacto</a></li>
        </ul>
      </nav>
      <div className="text-sm">
        <p className="font-semibold text-primary">Contacto</p>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li>{site.whatsappVisible}</li>
          <li>{site.email}</li>
          <li>{site.direccion}</li>
          <li>{site.horario}</li>
        </ul>
      </div>
    </div>
    <div className="container mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {site.nombre}. Todos los derechos reservados. El contenido de
        este sitio es informativo y no constituye asesoramiento legal para un caso concreto ni genera
        relación profesional. Cada situación debe analizarse en una consulta.
      </p>
    </div>
  </footer>
);
