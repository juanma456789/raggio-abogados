import { MapPin } from "lucide-react";
import { waLink } from "@/config/site";

const zonas = [
  "Ciudad Autónoma de Buenos Aires",
  "Zona Norte de la Provincia de Buenos Aires",
  "Mercedes",
  "Necochea",
];

export const Cobertura = () => (
  <section id="cobertura" className="bg-secondary py-16 lg:py-24">
    <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
      <div>
        <span className="eyebrow text-bronce">Cobertura</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
          Dónde interviene el estudio
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-pizarra sm:text-base">
          La cobertura prioritaria comprende Ciudad Autónoma de Buenos Aires, Zona Norte de la
          Provincia de Buenos Aires, Mercedes y Necochea. La posibilidad concreta de actuación se
          evalúa según la jurisdicción y las características de cada asunto.
        </p>
        <a
          href={waLink(
            "Hola, mi situación tramita en otra jurisdicción. Quisiera consultar si pueden intervenir."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block border-b border-bronce/50 pb-1 text-sm text-tinta transition-colors hover:border-bronce hover:text-bronce"
        >
          ¿Tu situación tramita en otra jurisdicción? Consultanos igualmente.
        </a>
      </div>

      <ul className="grid gap-px self-start border border-piedra bg-piedra">
        {zonas.map((z) => (
          <li key={z} className="flex items-center gap-3 bg-papel px-6 py-5">
            <MapPin className="h-4 w-4 shrink-0 text-bronce" aria-hidden="true" />
            <span className="font-display text-lg text-tinta">{z}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
