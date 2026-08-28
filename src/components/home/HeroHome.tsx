import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { abogados, btnWa, waLink } from "@/config/site";
import { media } from "@/assets/media";

export const HeroHome = () => (
  <section id="inicio" className="border-b border-piedra bg-papel">
    <div className="container grid items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-20">
      <div className="animate-fade-in-up">
        <span className="eyebrow text-bronce">Raggio Abogados</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />

        <h1 className="mt-6 font-display text-[2.1rem] leading-[1.16] text-tinta sm:text-5xl lg:text-[3.4rem]">
          Asesoramiento jurídico para actuar con claridad y estrategia
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-pizarra sm:text-base">
          Acompañamos a personas, familias y organizaciones que necesitan analizar una situación
          jurídica, comprender sus alternativas y definir cómo avanzar.
        </p>

        <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
          <a
            href={waLink(
              "Hola, quisiera hacer una consulta con Raggio Abogados. Mi situación es la siguiente:"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnWa} w-full px-8 py-5 sm:w-auto`}
          >
            <WhatsAppIcon className="h-5 w-5" /> Consultar por WhatsApp
          </a>

          <Link
            to="/derecho-penal"
            className="group inline-flex items-center gap-2 border-b border-bronce/40 pb-1 text-sm text-pizarra transition-colors hover:border-bronce hover:text-tinta"
          >
            Conocer nuestra intervención en Derecho Penal
            <ArrowRight
              className="h-4 w-4 text-bronce transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-piedra pt-6">
          {abogados.map((a) => (
            <li key={a.nombre} className="leading-tight">
              <span className="block font-display text-base text-tinta">{a.nombre}</span>
              <span className="text-xs uppercase tracking-[0.16em] text-pizarra">{a.cargo}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative order-last">
        <span
          className="absolute -left-3 -top-3 hidden h-24 w-24 border-l border-t border-bronce/40 lg:block"
          aria-hidden="true"
        />
        <img
          src={media.oficinaProfesionales}
          alt="Dos profesionales revisando documentación en una oficina luminosa"
          className="relative h-[300px] w-full rounded-[8px] object-cover object-center sm:h-[420px] lg:h-[560px]"
        />
      </div>
    </div>
  </section>
);
