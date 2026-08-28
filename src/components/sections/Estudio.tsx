import { abogados } from "@/config/site";
import { media } from "@/assets/media";

const atributos = [
  "Intervención directa de los abogados responsables del caso.",
  "Análisis previo de los hechos, la prueba y la etapa procesal.",
  "Explicación clara de alternativas, plazos y riesgos.",
  "Reserva profesional sobre la información recibida.",
];

export const Estudio = () => (
  <section id="estudio" className="bg-papel py-16 lg:py-24">
    <div className="container grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <div>
        <span className="eyebrow text-bronce">Raggio Abogados</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
          Un estudio con foco en Derecho Penal
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-pizarra sm:text-base">
          Trabajamos en la defensa y representación de personas, familias y organizaciones en
          asuntos penales. Priorizamos el análisis del caso, la comunicación clara y el seguimiento
          sostenido del expediente.
        </p>

        <ul className="mt-8 space-y-3 border-t border-piedra pt-6">
          {atributos.map((a) => (
            <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-pizarra">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-bronce" aria-hidden="true" />
              {a}
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {abogados.map((a) => (
            <li key={a.nombre} className="rounded-[8px] border border-piedra bg-secondary/50 p-5">
              <span className="font-display text-sm text-bronce">{a.iniciales}</span>
              <p className="mt-2 font-display text-lg leading-snug text-tinta">{a.nombre}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-pizarra">{a.cargo}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative order-first lg:order-last">
        <span
          className="absolute -bottom-3 -right-3 hidden h-24 w-24 border-b border-r border-bronce/40 lg:block"
          aria-hidden="true"
        />
        <img
          src={media.consultaProfesional}
          alt="Reunión de consulta entre profesionales y consultante en el estudio"
          loading="lazy"
          className="relative h-[320px] w-full rounded-[8px] object-cover object-center sm:h-[420px] lg:h-[520px]"
        />
      </div>
    </div>
  </section>
);
