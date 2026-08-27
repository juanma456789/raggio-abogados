import { AlertTriangle } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waLink } from "@/config/site";

const pasos = [
  {
    n: "1",
    t: "Ordená la información",
    d: "Comisaría o dependencia, nombre completo, DNI, fiscalía interviniente y número de causa si lo conoce. Sin esos datos igualmente podemos orientarlo.",
  },
  {
    n: "2",
    t: "No declare sin defensa técnica",
    d: "Puede negarse a declarar sin que eso lo perjudique. Nada de lo que diga sin abogado va a beneficiarlo; conviene resolver la estrategia primero.",
  },
  {
    n: "3",
    t: "Escríbanos por WhatsApp",
    d: "Con esos datos ubicamos la causa, tomamos contacto con la fiscalía y definimos los pasos a seguir en la misma jornada.",
  },
];

export const Urgencias = () => (
  <section id="urgencias" className="bg-tinta-gradient py-16 text-papel lg:py-24">
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-petroleo-soft/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-petroleo-soft">
            <AlertTriangle className="h-3.5 w-3.5" /> Situaciones urgentes
          </span>
          <h2 className="mt-5 font-display text-2xl leading-snug sm:text-3xl">
            Orientación inicial ante detenciones, allanamientos y citaciones
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-papel/75 sm:text-base">
            Una medida sensible puede generar incertidumbre. Lo primero es ordenar la información y
            definir los pasos con criterio, sin apuros ni decisiones tomadas bajo presión. Una
            conversación inicial ayuda a comprender la situación y actuar en consecuencia.
          </p>
          <a
            href={waLink(
              "Hola, necesito orientación urgente por una situación penal. Datos: nombre, DNI, comisaría/dependencia y fiscalía (si los tengo)."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-base font-semibold text-whatsapp-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5" /> Consultar por WhatsApp
          </a>
        </div>

        <ol className="grid gap-4 self-center">
          {pasos.map((p) => (
            <li
              key={p.n}
              className="flex gap-4 rounded-lg border border-papel/10 bg-papel/[0.06] p-5"
            >
              <span className="font-display text-xl text-petroleo-soft">{p.n}</span>
              <div>
                <h3 className="font-display text-base">{p.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-papel/70">{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
