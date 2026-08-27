import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { btnWa, waLink } from "@/config/site";

const datos = [
  "Nombre completo de la persona involucrada.",
  "Dependencia o localidad.",
  "Fecha y hora aproximada.",
  "Fiscalía, juzgado o número de causa, si se conocen.",
  "Existencia de una audiencia, citación o medida próxima.",
];

export const Urgencias = () => (
  <section id="urgencias" className="bg-tinta py-16 text-papel lg:py-24">
    <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
      <div>
        <span className="eyebrow text-bronce-soft">Situaciones que requieren atención</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
          ¿Hay una persona detenida o una medida próxima?
        </h2>
        <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-papel/75 sm:text-base">
          Cuando existe una detención, una citación, un allanamiento o una audiencia cercana, es
          importante conocer rápidamente dónde se encuentra la causa y qué decisiones deben
          evaluarse.
        </p>
        <a
          href={waLink(
            "Hola, necesito consultar por una situación urgente. Nombre de la persona involucrada, dependencia o localidad y fecha aproximada:"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnWa} mt-8 w-full sm:w-auto`}
        >
          <WhatsAppIcon className="h-5 w-5" /> Consultar una situación urgente
        </a>
      </div>

      <div className="border border-papel/15 bg-papel/[0.04] p-6 sm:p-8">
        <h3 className="font-display text-lg text-papel">
          Información útil para el primer contacto
        </h3>
        <ul className="mt-5 divide-y divide-papel/10">
          {datos.map((d, i) => (
            <li key={d} className="flex gap-4 py-3.5 text-sm leading-relaxed text-papel/80">
              <span className="font-display text-base text-bronce-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
