import { FileText, ShieldAlert, Scale, UserCheck, Building2, Briefcase } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { btnWa, waLink } from "@/config/site";

const situaciones = [
  { icon: FileText, t: "Recibiste una citación o conociste la existencia de una denuncia." },
  { icon: ShieldAlert, t: "Vos o un familiar se encuentran involucrados en una detención." },
  { icon: Scale, t: "Necesitás defensa en una investigación o causa penal." },
  { icon: UserCheck, t: "Fuiste víctima y querés evaluar cómo intervenir." },
  { icon: Building2, t: "Existe un conflicto con consecuencias patrimoniales o empresariales." },
  { icon: Briefcase, t: "Una causa puede afectar tu actividad profesional o reputación." },
];

export const Situaciones = () => (
  <section id="situaciones" className="bg-papel py-16 lg:py-24">
    <div className="container">
      <div className="max-w-2xl">
        <span className="eyebrow text-bronce">Derecho Penal</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
          Asistencia jurídica para distintas situaciones penales
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-pizarra sm:text-base">
          Cada situación requiere comprender los hechos, conocer el estado del proceso y evaluar las
          alternativas disponibles antes de definir cómo actuar.
        </p>
      </div>

      <ul className="mt-12 grid gap-px border border-piedra bg-piedra sm:grid-cols-2 lg:grid-cols-3">
        {situaciones.map((s) => (
          <li
            key={s.t}
            className="group bg-papel p-6 transition-colors hover:bg-secondary/70 lg:p-8"
          >
            <s.icon className="h-5 w-5 text-bronce" aria-hidden="true" />
            <p className="mt-4 font-display text-lg leading-snug text-tinta">{s.t}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-start gap-5 border-t border-piedra pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-[15px] leading-relaxed text-pizarra">
          Si tu situación no aparece en esta lista, igualmente podés contarnos brevemente qué
          ocurrió.
        </p>
        <a
          href={waLink("Hola, quisiera contarles brevemente mi situación:")}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnWa} w-full sm:w-auto`}
        >
          <WhatsAppIcon className="h-5 w-5" /> Consultar por WhatsApp
        </a>
      </div>
    </div>
  </section>
);
