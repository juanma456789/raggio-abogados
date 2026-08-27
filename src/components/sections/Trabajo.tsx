const pasos = [
  {
    t: "Primer mensaje",
    d: "Nos contás brevemente qué ocurrió, dónde tramita la situación y si existe alguna medida o fecha próxima.",
  },
  {
    t: "Evaluación inicial",
    d: "Identificamos la jurisdicción, el estado del proceso y las decisiones que requieren atención.",
  },
  {
    t: "Estrategia y alcance",
    d: "Explicamos el escenario, las alternativas disponibles, los próximos pasos y el alcance de la intervención profesional.",
  },
  {
    t: "Intervención y seguimiento",
    d: "Implementamos la estrategia acordada y mantenemos una comunicación clara durante el proceso.",
  },
];

export const Trabajo = () => (
  <section id="trabajo" className="bg-papel py-16 lg:py-24">
    <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <span className="eyebrow text-bronce">Cómo trabajamos</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
          Del primer mensaje a la estrategia del caso
        </h2>
      </div>

      <ol className="relative border-l border-piedra pl-8 sm:pl-10">
        {pasos.map((p, i) => (
          <li key={p.t} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[calc(2rem+1px)] top-1 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-bronce/50 bg-papel font-display text-[11px] text-bronce sm:-left-[calc(2.5rem+1px)]"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <h3 className="font-display text-2xl leading-snug text-tinta">{p.t}</h3>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-pizarra">{p.d}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
