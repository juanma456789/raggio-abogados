import { Compass, BookOpen, Users, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";

const motivos = [
  {
    icon: Compass,
    t: "Criterio estratégico",
    d: "Analizamos el contexto antes de recomendar un curso de acción.",
  },
  {
    icon: BookOpen,
    t: "Explicaciones claras",
    d: "Traducimos el proceso y sus implicancias a un lenguaje comprensible.",
  },
  {
    icon: Users,
    t: "Atención directa",
    d: "Los abogados del estudio se involucran personalmente.",
  },
  {
    icon: ShieldCheck,
    t: "Seriedad y discreción",
    d: "Tratamos cada consulta con el cuidado que exige una situación sensible.",
  },
];

export const Estudio = () => (
  <section id="estudio" className="bg-papel py-14 lg:py-20">
    <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-petroleo">
          Por qué Raggio Abogados
        </span>
        <h2 className="mt-3 font-display text-2xl leading-snug text-tinta sm:text-3xl">
          Criterio, claridad e involucramiento directo
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-pizarra sm:text-base">
          Raggio Abogados es un estudio jurídico integrado por Gonzalo Raggio y Agustina Braga
          Zufiaurre, con foco principal en Derecho Penal y una mirada técnica y estratégica orientada
          a que cada cliente comprenda su situación y tome decisiones informadas.
        </p>

        <dl className="mt-8 grid gap-4 rounded-lg border border-piedra bg-papel p-6 text-sm">
          <div>
            <dt className="text-pizarra">Matrícula profesional</dt>
            <dd className="font-medium text-tinta">{site.matricula}</dd>
          </div>
          <div>
            <dt className="text-pizarra">Estudio</dt>
            <dd className="font-medium text-tinta">{site.direccion}</dd>
          </div>
          <div>
            <dt className="text-pizarra">Disponibilidad</dt>
            <dd className="font-medium text-tinta">{site.horario}</dd>
          </div>
        </dl>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2">
        {motivos.map((m) => (
          <li key={m.t} className="border-l-2 border-petroleo/40 pl-5">
            <m.icon className="h-5 w-5 text-petroleo" aria-hidden="true" />
            <h3 className="mt-3 font-display text-base text-tinta">{m.t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-pizarra">{m.d}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
