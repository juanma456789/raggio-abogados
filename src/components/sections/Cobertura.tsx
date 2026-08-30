import { MapPin } from "lucide-react";

export type Zona = { t: string; d: string };

const zonasPenal: Zona[] = [
  { t: "CABA", d: "Justicia Nacional y de la Ciudad Autónoma de Buenos Aires." },
  { t: "Zona Norte", d: "Departamentos judiciales del norte del Gran Buenos Aires." },
  { t: "Mercedes", d: "Intervención en el departamento judicial de Mercedes." },
  { t: "Necochea", d: "Intervención en el departamento judicial de Necochea." },
];

export const zonasGenerales: Zona[] = [
  { t: "CABA", d: "Asesoramiento e intervención en la Ciudad Autónoma de Buenos Aires." },
  {
    t: "Provincia de Buenos Aires",
    d: "Asesoramiento e intervención en los distintos departamentos judiciales de la provincia.",
  },
];

export const textoCoberturaGeneral =
  "Trabajamos en CABA y en la provincia de Buenos Aires. Para asuntos correspondientes a otras jurisdicciones, contamos con profesionales habilitados para intervenir en distintas jurisdicciones de la Argentina.";

type Props = { texto?: string; zonas?: Zona[] };

export const Cobertura = ({
  texto = "Trabajamos principalmente en CABA, Zona Norte, Mercedes y Necochea. Si tu situación corresponde a otra jurisdicción, contamos con profesionales habilitados para intervenir en todas las jurisdicciones de la Argentina.",
  zonas = zonasPenal,
}: Props) => (
  <section id="cobertura" className="bg-secondary py-16 lg:py-24">
    <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        <span className="eyebrow text-bronce">Dónde intervenimos</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
          Áreas de cobertura
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-pizarra sm:text-base">
          {texto}
        </p>
      </div>

      <ul className="grid gap-px overflow-hidden rounded-[8px] border border-tinta/15 bg-tinta/15 sm:grid-cols-2">
        {zonas.map((z) => (
          <li key={z.t} className="bg-papel p-6">
            <MapPin className="h-6 w-6 text-bronce" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-3 font-display text-xl text-tinta">{z.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-pizarra">{z.d}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
