import { media } from "@/assets/media";

const puntos = [
  {
    t: "Atención directa",
    d: "El seguimiento del asunto queda a cargo de los abogados responsables.",
  },
  {
    t: "Análisis de cada situación",
    d: "Revisamos los hechos, la documentación y el estado del proceso antes de opinar.",
  },
  {
    t: "Comunicación clara",
    d: "Explicamos el escenario y las alternativas en términos comprensibles.",
  },
  {
    t: "Reserva profesional",
    d: "La información que compartís se trata con confidencialidad.",
  },
];

export const Presentacion = () => (
  <section className="relative isolate overflow-hidden bg-tinta py-16 text-papel lg:py-24">
    <img
      src={media.oficinaPanoramica}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.14]"
    />
    <div className="absolute inset-0 -z-10 bg-tinta/85" aria-hidden="true" />

    <div className="container">
      <div className="max-w-3xl">
        <span className="eyebrow text-bronce-soft">El estudio</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
          Criterio, claridad e involucramiento directo
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-papel/80 sm:text-base">
          Frente a una situación jurídica, la respuesta profesional no puede ser automática. Es
          necesario comprender los hechos, analizar el contexto judicial, explicar las alternativas
          y definir un curso de acción adecuado.
        </p>
      </div>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-[8px] border border-papel/15 bg-papel/15 sm:grid-cols-2 lg:grid-cols-4">
        {puntos.map((p) => (
          <li key={p.t} className="bg-tinta/95 p-6">
            <h3 className="font-display text-xl leading-snug text-papel">{p.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-papel/70">{p.d}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
