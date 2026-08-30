import { media } from "@/assets/media";

export type Paso = { t: string; d: string };

const pasosPenal: Paso[] = [
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

type Props = { titulo?: string; pasos?: Paso[]; tono?: "papel" | "arena" };

export const Trabajo = ({
  titulo = "Un proceso ordenado, desde la primera consulta",
  pasos = pasosPenal,
  tono = "papel",
}: Props) => (
  <section
    id="trabajo"
    className={`py-16 lg:py-24 ${
      tono === "arena" ? "border-y border-border bg-arena" : "bg-papel"
    }`}
  >
    <div className="container">
      <div className="max-w-2xl">
        <span className="eyebrow text-bronce">Cómo trabajamos</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
          {titulo}
        </h2>
      </div>

      <ol className="relative mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* Línea conectora vertical en mobile */}
        <span
          className="absolute left-[23px] top-3 -z-0 h-[calc(100%-2rem)] w-px bg-piedra md:hidden"
          aria-hidden="true"
        />

        {pasos.map((p, i) => (
          <li key={p.t} className="relative z-10 lg:border-t lg:border-tinta/15 lg:pt-6">
            <span
              className="absolute -top-px left-0 hidden h-px w-10 bg-bronce lg:block"
              aria-hidden="true"
            />
            <div className="flex items-start gap-4 lg:items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-tinta font-display text-lg font-semibold text-papel">
                {i + 1}
              </span>
              <h3 className="font-display text-xl font-semibold leading-snug text-tinta">{p.t}</h3>
            </div>
            <p className="mt-3 pl-16 text-[15px] leading-relaxed text-pizarra lg:pl-0">{p.d}</p>
          </li>
        ))}
      </ol>

      <img
        src={media.documentosLapicera}
        alt="Detalle de una mano firmando documentación con pluma"
        loading="lazy"
        className="mt-14 h-[220px] w-full rounded-[8px] object-cover object-[50%_45%] sm:h-[300px]"
      />
    </div>
  </section>
);

export const pasosGenerales: Paso[] = [
  {
    t: "Primera consulta",
    d: "Contanos qué necesitás y compartinos la información inicial que consideres relevante.",
  },
  {
    t: "Análisis del asunto",
    d: "Revisamos los antecedentes, la documentación disponible y el contexto para comprender el escenario.",
  },
  {
    t: "Definición del curso de acción",
    d: "Te explicamos las alternativas, los próximos pasos y la estrategia que consideramos adecuada.",
  },
  {
    t: "Acompañamiento y seguimiento",
    d: "Te acompañamos durante la gestión y mantenemos una comunicación clara sobre cada avance.",
  },
];
