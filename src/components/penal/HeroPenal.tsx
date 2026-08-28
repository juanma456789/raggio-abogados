import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { abogados, btnWa, waLink } from "@/config/site";
import heroInstitucional from "@/assets/hero-institucional.jpg";

export const HeroPenal = () => (
  <section id="inicio" className="border-b border-piedra bg-papel">
    <div className="container grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
      <div className="animate-fade-in-up">
        <span className="eyebrow text-bronce">Derecho Penal · CABA y provincia de Buenos Aires</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />

        <h1 className="mt-6 font-display text-[2.1rem] leading-[1.16] text-tinta sm:text-5xl lg:text-[3.5rem]">
          ¿Enfrentás una denuncia, una citación o una causa penal?
        </h1>

        <p className="mt-6 border-l-2 border-bronce pl-5 font-display text-xl leading-snug text-tinta sm:text-2xl">
          Recibí asesoramiento directo de los abogados que van a trabajar en tu caso.
        </p>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-pizarra sm:text-base">
          Asistimos a personas, familias y organizaciones. Si recibiste una citación, tomaste
          conocimiento de una denuncia, detuvieron a un familiar o necesitás intervenir como
          víctima, analizamos tu situación y te explicamos cómo avanzar.
        </p>

        <a
          href={waLink(
            "Hola, quisiera hablar con un abogado penalista de Raggio Abogados. Mi situación es la siguiente:"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnWa} mt-8 w-full px-8 py-5 sm:w-auto`}
        >
          <WhatsAppIcon className="h-5 w-5" /> Hablar con un abogado por WhatsApp
        </a>

        <ul className="mt-10 grid gap-4 border-t border-piedra pt-6 sm:grid-cols-2">
          {abogados.map((a) => (
            <li key={a.nombre} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-bronce/40 font-display text-sm text-bronce">
                {a.iniciales}
              </span>
              <span className="leading-tight">
                <span className="block font-display text-base text-tinta">{a.nombre}</span>
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
          src={heroInstitucional}
          alt="Fachada institucional de un edificio de tribunales"
          width={1024}
          height={1280}
          className="relative h-[300px] w-full rounded-[8px] object-cover object-center sm:h-[420px] lg:h-[620px]"
        />
      </div>
    </div>
  </section>
);
