import { Briefcase, Gavel, Landmark, Users } from "lucide-react";

const areas = [
  {
    icon: Users,
    t: "Familia y sucesiones",
    d: "Divorcios, filiación, alimentos, régimen de comunicación y sucesiones.",
  },
  {
    icon: Briefcase,
    t: "Derecho Laboral",
    d: "Despidos, reclamos individuales y colectivos y otros conflictos derivados de las relaciones laborales.",
  },
  {
    icon: Landmark,
    t: "Derecho Civil y Comercial",
    d: "Contratos, daños y perjuicios, sociedades comerciales, concursos y quiebras.",
  },
  {
    icon: Gavel,
    t: "Derecho Penal",
    d: "Defensa, asesoramiento y representación ante investigaciones, denuncias, causas penales y reclamos de víctimas.",
    nota: "Más información en la sección de Derecho Penal",
  },
];

export const AreasDerecho = () => (
  <section id="areas" className="bg-papel py-16 lg:py-24">
    <div className="container">
<div>
        <div className="max-w-2xl">
          <span className="eyebrow text-bronce">Áreas de práctica</span>
          <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
          <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
            Asesoramiento en distintas áreas del Derecho
          </h2>
        </div>
        <p className="mt-6 text-[15px] leading-relaxed text-pizarra sm:text-base">
          Brindamos asesoramiento legal a personas y familias en asuntos de familia, sucesorios,
          laborales, civiles, comerciales y penales. Analizamos cada consulta de manera particular
          para definir cómo podemos intervenir.
        </p>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {areas.map((a) => (
          <li
            key={a.t}
            className="rounded-[8px] border-t border-tinta/15 bg-secondary/50 px-6 py-8 shadow-soft transition-colors hover:border-bronce lg:px-8 lg:py-10"
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-[8px] border border-bronce/30 bg-papel"
              aria-hidden="true"
            >
              <a.icon className="h-8 w-8 text-bronce" strokeWidth={1.5} />
            </span>
            <h3 className="mt-5 font-display text-2xl leading-snug text-tinta">{a.t}</h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-pizarra">{a.d}</p>
            {a.nota && (
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-bronce">{a.nota}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
