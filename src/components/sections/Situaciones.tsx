import {
  Handcuffs,
  FileText,
  KeyRound,
  Wallet,
  Laptop,
  HeartPulse,
  Car,
  Pill,
  Building2,
  ShieldAlert,
  Gavel,
  UserRoundSearch,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waLink } from "@/config/site";

const casos = [
  {
    icon: Handcuffs,
    t: "Detenciones y flagrancia",
    d: "Aprehensiones en la vía pública, allanamientos y audiencias de flagrancia en CABA y Provincia.",
  },
  {
    icon: FileText,
    t: "Citación a indagatoria",
    d: "Preparación de la declaración, análisis del expediente y estrategia antes de presentarse.",
  },
  {
    icon: KeyRound,
    t: "Excarcelación y prisión preventiva",
    d: "Pedidos de libertad, exención de prisión, morigeraciones y prisión domiciliaria.",
  },
  {
    icon: Wallet,
    t: "Robo, hurto y tentativas",
    d: "Delitos contra la propiedad, con o sin armas, y encubrimiento.",
  },
  {
    icon: Laptop,
    t: "Estafas y delitos informáticos",
    d: "Fraudes bancarios, phishing, estafas con transferencias, grooming y usurpación de identidad.",
  },
  {
    icon: HeartPulse,
    t: "Lesiones, amenazas y riñas",
    d: "Denuncias por lesiones, amenazas, coacción y hechos entre vecinos o convivientes.",
  },
  {
    icon: ShieldAlert,
    t: "Violencia familiar y de género",
    d: "Defensa frente a denuncias, medidas cautelares y restricciones de acercamiento.",
  },
  {
    icon: Car,
    t: "Accidentes de tránsito",
    d: "Homicidio y lesiones culposas, alcoholemia y conducción imprudente.",
  },
  {
    icon: Pill,
    t: "Ley de drogas 23.737",
    d: "Tenencia, tenencia con fines de comercialización y causas por estupefacientes.",
  },
  {
    icon: Building2,
    t: "Delitos económicos y tributarios",
    d: "Administración fraudulenta, quiebras, lavado de activos y régimen penal tributario.",
  },
  {
    icon: UserRoundSearch,
    t: "Víctimas y querellas",
    d: "Denuncias penales, constitución como particular damnificado y seguimiento de la causa.",
  },
  {
    icon: Gavel,
    t: "Juicios y recursos",
    d: "Debates orales, apelaciones, casación y ejecución de la pena.",
  },
];

export const Situaciones = () => (
  <section id="situaciones" className="bg-background py-14 lg:py-20">
    <div className="container">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Casos que atendemos
        </span>
        <h2 className="mt-3 font-display text-2xl leading-snug text-primary sm:text-3xl">
          Situaciones penales en las que intervenimos todos los días
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700 sm:text-base">
          Trabajamos exclusivamente en derecho penal, tanto en la defensa de personas imputadas como
          en la representación de víctimas. Si su caso no figura en la lista, consúltenos igual.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {casos.map((c) => (
          <li
            key={c.t}
            className="group rounded-lg border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
          >
            <c.icon className="h-6 w-6 text-accent" aria-hidden="true" />
            <h3 className="mt-3.5 font-display text-base text-primary">{c.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-start gap-4 rounded-lg border border-accent/25 bg-bronze-100/60 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-700 sm:text-base">
          <strong className="font-semibold text-primary">¿No sabe en qué situación está?</strong>{" "}
          Cuéntenos el hecho en dos líneas y le decimos qué corresponde hacer.
        </p>
        <a
          href={waLink("Hola, quiero consultar por un caso penal. Le cuento qué pasó:")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-whatsapp px-5 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-soft transition-transform hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="h-4 w-4" /> Consultar por WhatsApp
        </a>
      </div>
    </div>
  </section>
);
