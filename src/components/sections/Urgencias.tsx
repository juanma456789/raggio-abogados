import { AlertTriangle } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waLink } from "@/config/site";

const pasos = [
  {
    n: "1",
    t: "No declare sin su abogado",
    d: "Tiene derecho a negarse a declarar. Nada de lo que diga sin defensa técnica lo va a beneficiar.",
  },
  {
    n: "2",
    t: "Anote los datos clave",
    d: "Comisaría o dependencia donde está alojada la persona, nombre completo, DNI, fiscalía interviniente y número de causa si lo conoce.",
  },
  {
    n: "3",
    t: "Escríbanos por WhatsApp",
    d: "Con esos datos ubicamos la causa, tomamos contacto con la fiscalía y presentamos la defensa en el día.",
  },
];

export const Urgencias = () => (
  <section id="urgencias" className="bg-ink-gradient py-14 text-primary-foreground lg:py-20">
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-destructive/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-bronze-300">
            <AlertTriangle className="h-3.5 w-3.5" /> Situación urgente
          </span>
          <h2 className="mt-5 font-display text-2xl leading-snug sm:text-3xl">
            Si hay una persona detenida, las primeras horas definen el resto de la causa
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
            En casos de flagrancia los plazos son muy cortos: la declaración, el pedido de libertad y
            la audiencia se resuelven en horas. Intervenir temprano permite discutir la detención,
            evitar una prisión preventiva y ordenar la prueba desde el inicio.
          </p>
          <a
            href={waLink(
              "URGENTE: hay una persona detenida. Datos: nombre, DNI, comisaría/dependencia y fiscalía (si los tengo)."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-base font-semibold text-whatsapp-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5" /> Atención inmediata por detención
          </a>
        </div>

        <ol className="grid gap-4 self-center">
          {pasos.map((p) => (
            <li
              key={p.n}
              className="flex gap-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.06] p-5"
            >
              <span className="font-display text-xl text-bronze-300">{p.n}</span>
              <div>
                <h3 className="font-display text-base">{p.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/75">{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
