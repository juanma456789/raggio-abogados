import { media } from "@/assets/media";

const pasos = [
  {
    t: "Primer contacto",
    d: "Escribinos por WhatsApp con una descripción breve de lo que ocurrió y de la instancia en la que se encuentra el asunto.",
  },
  {
    t: "Análisis del caso",
    d: "Revisamos los hechos, la documentación disponible y el estado del proceso para dimensionar el escenario.",
  },
  {
    t: "Definición de estrategia",
    d: "Explicamos las alternativas, los plazos relevantes y el curso de acción que consideramos adecuado.",
  },
  {
    t: "Intervención y seguimiento",
    d: "Actuamos ante el organismo interviniente y mantenemos informado el avance de la causa.",
  },
];

export const Trabajo = () => (
  <section id="trabajo" className="bg-papel py-16 lg:py-24">
    <div className="container">
      <div className="max-w-2xl">
        <span className="eyebrow text-bronce">Cómo trabajamos</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
          Un proceso ordenado, desde la primera consulta
        </h2>
      </div>

      <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {pasos.map((p, i) => (
          <li key={p.t} className="relative border-t border-tinta/15 pt-6">
            <span
              className="absolute -top-px left-0 h-px w-10 bg-bronce"
              aria-hidden="true"
            />
            <span className="font-display text-sm text-bronce">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-display text-xl leading-snug text-tinta">{p.t}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-pizarra">{p.d}</p>
          </li>
        ))}
      </ol>

      <img
        src={media.documentosLapicera}
        alt="Detalle de una mano firmando documentación con pluma"
        loading="lazy"
        className="mt-14 h-[200px] w-full rounded-[8px] object-cover object-center sm:h-[280px]"
      />
    </div>
  </section>
);
