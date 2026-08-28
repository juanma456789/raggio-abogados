import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { btnWa, waLink } from "@/config/site";

const pasos = [
  {
    t: "Ordená la información",
    d: "Reuní la cédula, la citación, el acta o cualquier documento recibido, y anotá fechas, organismo y número de causa si figuran.",
  },
  {
    t: "No declares sin defensa",
    d: "Antes de dar explicaciones o firmar documentación, conviene conocer el alcance del asunto y las consecuencias de cada paso.",
  },
  {
    t: "Consultá cuanto antes",
    d: "Escribinos por WhatsApp con una descripción breve. Analizamos la situación y te indicamos cómo continuar.",
  },
];

export const Recomendaciones = () => (
  <section id="recomendaciones" className="bg-tinta py-16 text-papel lg:py-24">
    <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
      <div>
        <span className="eyebrow text-bronce-soft">Si la situación es reciente</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
          Qué conviene hacer en las primeras horas
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-papel/75 sm:text-base">
          Frente a una detención, un allanamiento o una citación con fecha próxima, las decisiones
          iniciales influyen en el desarrollo posterior del proceso.
        </p>
        <a
          href={waLink(
            "Hola, tengo una situación penal reciente y necesito orientación. Les cuento brevemente:"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnWa} mt-8 w-full px-8 py-5 sm:w-auto`}
        >
          <WhatsAppIcon className="h-5 w-5" /> Consultar por WhatsApp
        </a>
      </div>

      <ol className="space-y-px overflow-hidden rounded-[8px] border border-papel/15 bg-papel/15">
        {pasos.map((p, i) => (
          <li key={p.t} className="bg-tinta/95 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-papel font-display text-lg font-semibold text-tinta">
                {i + 1}
              </span>
              <h3 className="font-display text-xl font-semibold leading-snug sm:text-2xl">
                {i + 1}. {p.t}
              </h3>
            </div>
            <p className="mt-3 pl-16 text-[15px] leading-relaxed text-papel/75">{p.d}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
