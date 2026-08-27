import { Lock, Users, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waLink } from "@/config/site";
import { logoMarkInk } from "@/assets/logo-mark-ink";

const trust = [
  { icon: Lock, label: "Confidencialidad profesional" },
  { icon: Users, label: "Atención directa del estudio" },
  { icon: MapPin, label: "CABA y provincia de Buenos Aires" },
];

export const Hero = () => (
  <section id="inicio" className="relative overflow-hidden bg-papel">
    <img
      src={logoMarkInk}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute right-[-7rem] top-1/2 hidden -translate-y-1/2 select-none opacity-[0.05] md:block w-[460px]"
    />
    <div className="container relative max-w-3xl py-16 lg:py-28">
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-petroleo">
        Estudio jurídico con foco en Derecho Penal
      </span>

      <h1 className="mt-6 font-display text-4xl leading-[1.16] text-tinta sm:text-5xl lg:text-[3.4rem]">
        Criterio jurídico para actuar frente a una situación penal
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-pizarra sm:text-lg">
        Asistimos a personas, familias y organizaciones que necesitan comprender una causa penal,
        evaluar alternativas y definir los próximos pasos. Atención directa en CABA y provincia de
        Buenos Aires.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={waLink(
            "Hola, quisiera realizar una consulta con Raggio Abogados. Mi situación es la siguiente:"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-base font-semibold text-whatsapp-foreground shadow-soft transition-transform hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="h-5 w-5" /> Hablar por WhatsApp
        </a>
        <a
          href="#contacto"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-tinta/20 bg-transparent px-6 py-4 text-base font-semibold text-tinta transition-colors hover:border-petroleo hover:text-petroleo"
        >
          Dejar una consulta
        </a>
      </div>

      <p className="mt-6 max-w-lg text-sm leading-relaxed text-pizarra/80">
        Contanos brevemente qué ocurrió y en qué jurisdicción se encuentra la situación. Analizaremos
        la información inicial para orientarte sobre el próximo paso.
      </p>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-pizarra">
        {trust.map((t) => (
          <li key={t.label} className="flex items-center gap-2">
            <t.icon className="h-4 w-4 shrink-0 text-petroleo" aria-hidden="true" />
            {t.label}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
