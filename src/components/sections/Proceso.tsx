const pasos = [
  {
    t: "Nos escribe por WhatsApp",
    d: "Cuenta brevemente qué pasó. Le respondemos un abogado del estudio, no un contestador.",
  },
  {
    t: "Evaluamos la urgencia",
    d: "Identificamos el fuero, la fiscalía y los plazos. Si hay una detención, actuamos en el día.",
  },
  {
    t: "Estrategia y honorarios claros",
    d: "Le explicamos el escenario realista, los pasos a seguir y el presupuesto por escrito, sin sorpresas.",
  },
  {
    t: "Intervención judicial",
    d: "Presentamos la defensa, acompañamos cada audiencia y lo mantenemos informado del avance.",
  },
];

export const Proceso = () => (
  <section id="proceso" className="bg-secondary py-14 lg:py-20">
    <div className="container">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Cómo trabajamos
        </span>
        <h2 className="mt-3 font-display text-2xl leading-snug text-primary sm:text-3xl">
          Cuatro pasos, desde el primer mensaje hasta la audiencia
        </h2>
      </div>

      <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pasos.map((p, i) => (
          <li key={p.t} className="relative rounded-lg bg-background p-6 shadow-soft">
            <span className="font-display text-3xl text-bronze-300">0{i + 1}</span>
            <h3 className="mt-3 font-display text-base text-primary">{p.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
