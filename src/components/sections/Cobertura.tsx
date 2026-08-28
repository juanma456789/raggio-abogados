import { MapPin } from "lucide-react";

const zonas = [
  { t: "CABA", d: "Justicia Nacional y de la Ciudad Autónoma de Buenos Aires." },
  { t: "Zona Norte", d: "Departamentos judiciales del norte del Gran Buenos Aires." },
  { t: "Mercedes", d: "Intervención en el departamento judicial de Mercedes." },
  { t: "Necochea", d: "Intervención en el departamento judicial de Necochea." },
];

export const Cobertura = () => (
  <section id="cobertura" className="bg-secondary py-16 lg:py-24">
    <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        <span className="eyebrow text-bronce">Dónde intervenimos</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
          Cobertura territorial
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-pizarra sm:text-base">
          Intervenimos en la Ciudad Autónoma de Buenos Aires y en distintas jurisdicciones de la
          provincia de Buenos Aires. Si tu asunto tramita en otra jurisdicción, escribinos y te
          indicamos cómo podemos ayudarte.
        </p>
      </div>

      <ul className="grid gap-px overflow-hidden rounded-[8px] border border-tinta/15 bg-tinta/15 sm:grid-cols-2">
        {zonas.map((z) => (
          <li key={z.t} className="bg-papel p-6">
            <MapPin className="h-4 w-4 text-bronce" aria-hidden="true" />
            <h3 className="mt-3 font-display text-xl text-tinta">{z.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-pizarra">{z.d}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
