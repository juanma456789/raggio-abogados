import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { btnWa, waLink } from "@/config/site";

const ejes = [
  {
    t: "Contratos y relaciones comerciales",
    d: "Redacción, revisión y análisis de contratos y acuerdos vinculados con la actividad de la empresa.",
  },
  {
    t: "Relaciones laborales",
    d: "Asesoramiento frente a contrataciones, desvinculaciones, reclamos individuales y conflictos colectivos.",
  },
  {
    t: "Asuntos societarios y comerciales",
    d: "Orientación en asuntos societarios, conflictos comerciales, concursos y quiebras.",
  },
  {
    t: "Prevención y gestión de conflictos",
    d: "Análisis de contingencias y acompañamiento ante reclamos que puedan afectar la actividad, el patrimonio o la reputación de la organización.",
  },
];

export const Empresas = () => (
  <section id="empresas" className="bg-papel py-16 lg:py-24">
    <div className="container">
<div>
        <div className="max-w-2xl">
          <span className="eyebrow text-bronce">Empresas</span>
          <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
          <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
            Asesoramiento legal para empresas y organizaciones
          </h2>
        </div>
        <p className="mt-6 text-[15px] leading-relaxed text-pizarra sm:text-base">
          Acompañamos a empresas, comercios y organizaciones en sus necesidades legales habituales,
          en la prevención de conflictos y en la definición de estrategias frente a asuntos
          laborales, contractuales, societarios, comerciales y penales.
        </p>
      </div>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-[8px] border border-tinta/15 bg-tinta/15 sm:grid-cols-2">
        {ejes.map((e) => (
          <li key={e.t} className="bg-secondary/50 p-6 lg:p-8">
            <h3 className="font-display text-xl font-semibold leading-snug text-tinta">{e.t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-pizarra">{e.d}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <a
          href={waLink(
            "Hola, quisiera consultar por asesoramiento legal para mi empresa u organización."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnWa} w-full px-8 py-5 sm:w-auto`}
        >
          <WhatsAppIcon className="h-5 w-5" /> Consultar por WhatsApp
        </a>
      </div>
    </div>
  </section>
);
