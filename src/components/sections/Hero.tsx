import { ShieldCheck, Clock, Lock, Scale } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site, waLink } from "@/config/site";
import heroImg from "@/assets/hero-tribunales.jpg";

const trust = [
  { icon: Clock, label: "Respuesta en minutos, las 24 horas" },
  { icon: Lock, label: "Consulta estrictamente confidencial" },
  { icon: Scale, label: "Actuación en CABA y Zona Norte" },
  { icon: ShieldCheck, label: `Matrícula ${site.matricula}` },
];

export const Hero = () => (
  <section id="inicio" className="relative overflow-hidden bg-sand">
    <div className="container grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
      <div className="animate-fade-in-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-bronze-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-bronze-700">
          <span className="h-2 w-2 rounded-full bg-whatsapp" />
          Guardia penal 24 horas
        </span>

        <h1 className="mt-5 font-display text-3xl leading-[1.15] text-primary sm:text-4xl lg:text-[2.9rem]">
          ¿Detención, citación a indagatoria o pedido de excarcelación?
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg">
          Somos un estudio de <strong className="font-semibold text-primary">abogados penalistas
          en Buenos Aires</strong>. Intervenimos de inmediato en comisarías, fiscalías y juzgados de
          CABA y Zona Norte para proteger su libertad y sus derechos. Escríbanos y en minutos sabrá
          cuál es el próximo paso.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={waLink(
              "Hola, necesito hablar con un abogado penalista con urgencia. Mi situación es la siguiente:"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-base font-semibold text-whatsapp-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5" /> Hablar ahora por WhatsApp
          </a>
          <a
            href="#urgencias"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/20 bg-background px-6 py-4 text-base font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Hay una persona detenida
          </a>
        </div>

        <ul className="mt-9 grid gap-3 sm:grid-cols-2">
          {trust.map((t) => (
            <li key={t.label} className="flex items-start gap-2.5 text-sm text-ink-700">
              <t.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {t.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-lg shadow-lift">
          <img
            src={heroImg}
            alt="Fachada de tribunales con columnas neoclásicas en Buenos Aires"
            width={1280}
            height={1600}
            className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
          />
        </div>
        <div className="mt-4 rounded-lg border border-border bg-background p-5 shadow-soft lg:absolute lg:-bottom-8 lg:-left-8 lg:mt-0 lg:max-w-[19rem]">
          <p className="font-display text-base text-primary">Primera consulta sin cargo</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Evaluamos su caso, le explicamos el procedimiento y le damos un presupuesto claro antes
            de asumir la defensa.
          </p>
        </div>
      </div>
    </div>
  </section>
);
