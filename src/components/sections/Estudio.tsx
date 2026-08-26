import { Clock, Lock, MapPin, Users, BookOpen, Handshake } from "lucide-react";
import { site } from "@/config/site";

const motivos = [
  {
    icon: Clock,
    t: "Guardia real 24/7",
    d: "Detenciones, allanamientos y audiencias no esperan. Atendemos fines de semana y feriados.",
  },
  {
    icon: Lock,
    t: "Confidencialidad absoluta",
    d: "Todo lo que nos cuenta queda amparado por el secreto profesional, desde la primera consulta.",
  },
  {
    icon: MapPin,
    t: "Conocimiento local",
    d: "Actuación habitual en tribunales de CABA, San Isidro y San Martín: conocemos los criterios de cada juzgado.",
  },
  {
    icon: Users,
    t: "Trato directo",
    d: "Habla siempre con el abogado que lleva su caso, con explicaciones en lenguaje claro.",
  },
  {
    icon: BookOpen,
    t: "Dedicación exclusiva al penal",
    d: "No dispersamos la práctica: derecho penal y procesal penal, defensa y querella.",
  },
  {
    icon: Handshake,
    t: "Honorarios previsibles",
    d: "Presupuesto por escrito antes de empezar y posibilidad de pago en cuotas.",
  },
];

export const Estudio = () => (
  <section id="estudio" className="bg-background py-14 lg:py-20">
    <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          El estudio
        </span>
        <h2 className="mt-3 font-display text-2xl leading-snug text-primary sm:text-3xl">
          Por qué las familias nos eligen en el momento más difícil
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700 sm:text-base">
          {site.nombre} es un estudio dedicado a la defensa penal en la Ciudad Autónoma de Buenos
          Aires y la zona norte del Gran Buenos Aires. Trabajamos con criterio técnico, sin promesas
          imposibles y con información honesta sobre lo que puede esperarse de cada causa.
        </p>

        <dl className="mt-8 grid gap-4 rounded-lg border border-border bg-sand p-6 text-sm">
          <div>
            <dt className="text-muted-foreground">Matrícula profesional</dt>
            <dd className="font-medium text-primary">{site.matricula}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Estudio</dt>
            <dd className="font-medium text-primary">{site.direccion}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Disponibilidad</dt>
            <dd className="font-medium text-primary">{site.horario}</dd>
          </div>
        </dl>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2">
        {motivos.map((m) => (
          <li key={m.t} className="border-l-2 border-accent/40 pl-5">
            <m.icon className="h-5 w-5 text-accent" aria-hidden="true" />
            <h3 className="mt-3 font-display text-base text-primary">{m.t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
