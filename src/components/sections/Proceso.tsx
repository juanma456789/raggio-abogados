const areas = [
  {
    t: "Derecho Penal",
    d: "Defensa y representación durante las distintas etapas de una investigación o proceso penal.",
  },
  {
    t: "Víctimas y querellas",
    d: "Asesoramiento para evaluar las vías de intervención y participar activamente en una causa.",
  },
  {
    t: "Derecho Penal Económico",
    d: "Intervención en asuntos con impacto patrimonial, profesional, empresarial o reputacional.",
  },
  {
    t: "Situaciones urgentes",
    d: "Orientación inicial ante detenciones, allanamientos, citaciones u otras medidas próximas.",
  },
];

export const Proceso = () => (
  <section id="areas" className="bg-secondary py-16 lg:py-24">
    <div className="container">
      <div className="max-w-2xl">
        <span className="eyebrow text-bronce">Áreas principales</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
          Cómo organizamos la práctica
        </h2>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {areas.map((a, i) => (
          <li
            key={a.t}
            className="border-t border-tinta/15 bg-papel px-6 py-8 transition-colors hover:border-bronce lg:px-8 lg:py-10"
          >
            <span className="font-display text-sm text-bronce">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-2xl leading-snug text-tinta">{a.t}</h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-pizarra">{a.d}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
