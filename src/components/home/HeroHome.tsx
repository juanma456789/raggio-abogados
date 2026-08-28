import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { abogados, btnWa, waLink } from "@/config/site";
import { media } from "@/assets/media";

export const HeroHome = () => (
  <section id="inicio" className="border-b border-piedra bg-papel">
    <div className="container grid items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-20">
      <div className="animate-fade-in-up">
        <span className="eyebrow text-bronce">Estudio jurídico</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />

        <h1 className="mt-6 font-display text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.015em] text-tinta sm:text-5xl lg:text-[3.3rem]">
          Asesoramiento jurídico para actuar con claridad y estrategia
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-pizarra sm:text-base">
          Te acompañamos ante situaciones jurídicas para comprender tus alternativas, definir una
          estrategia y avanzar con claridad.
        </p>

        <div className="mt-8">
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
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-piedra pt-6">
          {abogados.map((a) => (
            <li key={a.nombre} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-bronce/40 bg-secondary/60 font-display text-sm font-semibold tracking-[0.06em] text-bronce">
                {a.iniciales}
              </span>
              <span className="leading-tight">
                <span className="block font-display text-base font-medium text-tinta">
                  {a.nombre}
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-pizarra">{a.cargo}</span>
              </span>
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
          src={media.oficinaAmplia}
          alt="Oficina amplia y luminosa del estudio, con vista a la ciudad"
          width={1800}
          height={1013}
          className="relative h-[280px] w-full rounded-[8px] object-cover object-center sm:h-[400px] lg:h-[540px]"
        />
      </div>
    </div>
  </section>
);
