import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waLink } from "@/config/site";

const situaciones = [
  {
    t: "Citación o conocimiento de una denuncia",
    d: "Recibiste una citación o tomaste conocimiento de una denuncia. Revisamos el expediente y definimos cómo presentarse.",
  },
  {
    t: "Detención propia o de un familiar",
    d: "Vos o un familiar fueron detenidos. Ubicamos la causa, contactamos la fiscalía y actuamos en el día.",
  },
  {
    t: "Defensa en una investigación o causa penal",
    d: "Necesitás defensa en una investigación o causa penal en curso, en cualquiera de sus etapas.",
  },
  {
    t: "Víctima: denuncia, querella o participación",
    d: "Fuiste víctima y querés evaluar una denuncia, querella o tu participación en el proceso.",
  },
  {
    t: "Impacto profesional, patrimonial o empresarial",
    d: "Una situación penal puede afectar tu actividad profesional, patrimonio, empresa o reputación.",
  },
];

export const Situaciones = () => (
  <section id="situaciones" className="bg-papel py-14 lg:py-20">
    <div className="container">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-petroleo">
          Situaciones en las que podemos intervenir
        </span>
        <h2 className="mt-3 font-display text-2xl leading-snug text-tinta sm:text-3xl">
          Cuando una situación penal exige comprender y actuar
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-pizarra sm:text-base">
          No todas las causas se encuentran en el mismo momento ni requieren la misma respuesta. El
          primer paso es conocer los hechos, identificar el estado del proceso y evaluar las
          alternativas disponibles.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {situaciones.map((c, i) => (
          <li
            key={c.t}
            className="group rounded-lg border border-piedra bg-card p-5 transition-all hover:-translate-y-1 hover:border-petroleo/40 hover:shadow-soft"
          >
            <span className="font-display text-2xl text-petroleo/60">0{i + 1}</span>
            <h3 className="mt-2 font-display text-base text-tinta">{c.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-pizarra">{c.d}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-start gap-4 rounded-lg border border-petroleo/25 bg-piedra/40 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-pizarra sm:text-base">
          <strong className="font-semibold text-tinta">
            Cada situación requiere un análisis particular.
          </strong>{" "}
          Una conversación inicial permite ordenar la información y definir cómo avanzar.
        </p>
        <a
          href={waLink("Hola, quiero consultar por una situación penal. Le cuento brevemente qué pasó:")}
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
