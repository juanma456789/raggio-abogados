import { ArrowRight, Building2, Scale, ShieldAlert, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  {
    icon: Scale,
    t: "Derecho Penal",
    d: "Defensa y representación durante las distintas etapas de una investigación o proceso penal.",
  },
  {
    icon: UserCheck,
    t: "Víctimas y querellas",
    d: "Asesoramiento para evaluar las vías de intervención y participar activamente en una causa.",
  },
  {
    icon: Building2,
    t: "Derecho Penal Económico",
    d: "Intervención en asuntos con impacto patrimonial, profesional, empresarial o reputacional.",
  },
  {
    icon: ShieldAlert,
    t: "Situaciones que requieren atención",
    d: "Orientación inicial ante detenciones, allanamientos, citaciones u otras medidas próximas.",
  },
];

export const Areas = () => (
  <section id="areas" className="bg-secondary py-16 lg:py-24">
    <div className="container">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <span className="eyebrow text-bronce">Áreas de práctica</span>
          <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
          <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
            Áreas del Derecho Penal en las que intervenimos
          </h2>
        </div>
        <Link
          to="/derecho-penal"
          className="group inline-flex items-center gap-2 border-b border-bronce/40 pb-1 text-sm font-medium text-pizarra transition-colors hover:border-bronce hover:text-tinta"
        >
          Ver nuestra intervención en Derecho Penal
          <ArrowRight
            className="h-4 w-4 text-bronce transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {areas.map((a) => (
          <li
            key={a.t}
            className="rounded-[8px] border-t border-tinta/15 bg-papel px-6 py-8 shadow-soft transition-colors hover:border-bronce lg:px-8 lg:py-10"
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-[8px] border border-bronce/30 bg-secondary/60"
              aria-hidden="true"
            >
              <a.icon className="h-8 w-8 text-bronce" strokeWidth={1.5} />
            </span>
            <h3 className="mt-5 font-display text-2xl leading-snug text-tinta">{a.t}</h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-pizarra">{a.d}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
