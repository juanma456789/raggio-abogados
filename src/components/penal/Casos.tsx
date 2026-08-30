import {
  FileText,
  ShieldAlert,
  Scale,
  UserCheck,
  Landmark,
  Briefcase,
  Users,
  HelpCircle,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { btnWaMd, waLink } from "@/config/site";

const casos = [
  {
    icon: FileText,
    t: "Citaciones y declaraciones",
    d: "Citación a declarar, convocatoria a indagatoria o pedidos de información de una fiscalía.",
  },
  {
    icon: ShieldAlert,
    t: "Detenciones y medidas urgentes",
    d: "Detenciones, allanamientos, secuestros y pedidos vinculados a la libertad de una persona.",
  },
  {
    icon: Scale,
    t: "Defensa en causas penales",
    d: "Intervención durante la investigación, la etapa intermedia y el juicio.",
  },
  {
    icon: UserCheck,
    t: "Víctimas y querellas",
    d: "Denuncias, constitución como parte querellante y seguimiento activo del expediente.",
  },
  {
    icon: Landmark,
    t: "Delitos contra la propiedad",
    d: "Hurtos, robos, defraudaciones y estafas, tanto en la defensa como en la representación de damnificados.",
  },
  {
    icon: Briefcase,
    t: "Penal económico y empresarial",
    d: "Asuntos con impacto patrimonial, societario, profesional o reputacional.",
  },
  {
    icon: Users,
    t: "Violencia y conflictos familiares",
    d: "Situaciones con medidas cautelares, denuncias cruzadas o intervención de organismos de protección.",
  },
  {
    icon: HelpCircle,
    t: "Otras situaciones penales",
    d: "Si tu caso no encuadra en las anteriores, podemos analizarlo y orientarte igualmente.",
  },
];

export const Casos = () => (
  <section id="casos" className="bg-secondary py-16 lg:py-24">
    <div className="container">
      <div className="max-w-2xl">
        <span className="eyebrow text-bronce">Casos y áreas de intervención</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
          Situaciones en las que intervenimos
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-pizarra sm:text-base">
          Cada asunto se analiza según los hechos, la prueba disponible y la instancia procesal en la
          que se encuentra.
        </p>
      </div>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-[8px] border border-tinta/15 bg-tinta/15 sm:grid-cols-2 lg:grid-cols-4">
        {casos.map((c) => (
          <li key={c.t} className="bg-papel p-6 transition-colors hover:bg-papel/60">
            <c.icon className="h-6 w-6 text-bronce" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-3 font-display text-xl leading-snug text-tinta">{c.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-pizarra">{c.d}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <a
          href={waLink(
            "Hola, quisiera consultar por una situación penal. Les cuento brevemente de qué se trata:"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnWaMd} w-full sm:w-auto`}
        >
          <WhatsAppIcon className="h-4 w-4" /> Consultar por WhatsApp
        </a>
      </div>
    </div>
  </section>
);
