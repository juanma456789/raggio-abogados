const areas = [
  {
    t: "Derecho Penal",
    d: "Defensa y representación en distintas etapas de una investigación o proceso penal.",
  },
  {
    t: "Víctimas y querellas",
    d: "Asesoramiento para comprender vías de participación y evaluar los pasos adecuados.",
  },
  {
    t: "Derecho Penal Económico",
    d: "Asuntos con impacto patrimonial, profesional, empresarial o reputacional.",
  },
  {
    t: "Situaciones urgentes",
    d: "Orientación inicial ante detenciones, allanamientos, citaciones u otras medidas sensibles.",
  },
];

export const Proceso = () => (
  <section id="areas" className="bg-secondary py-14 lg:py-20">
    <div className="container">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-petroleo">
          Áreas principales
        </span>
        <h2 className="mt-3 font-display text-2xl leading-snug text-tinta sm:text-3xl">
          Cómo organizamos la práctica
        </h2>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {areas.map((a) => (
          <li key={a.t} className="relative rounded-lg bg-papel p-6 shadow-soft">
            <span className="absolute left-0 top-6 h-8 w-1 rounded-r bg-petroleo" aria-hidden="true" />
            <h3 className="pl-4 font-display text-lg text-tinta">{a.t}</h3>
            <p className="mt-2 pl-4 text-sm leading-relaxed text-pizarra">{a.d}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
