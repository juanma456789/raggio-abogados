import { abogados } from "@/config/site";

const atributos = [
  "Criterio estratégico.",
  "Explicaciones claras.",
  "Atención directa de los abogados.",
  "Seriedad y reserva profesional.",
];

export const Estudio = () => (
  <section id="estudio" className="bg-tinta-deep py-16 text-papel lg:py-24">
    <div className="container grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
      <div>
        <span className="eyebrow text-bronce-soft">Raggio Abogados</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
          Criterio, claridad e involucramiento directo
        </h2>
        <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-papel/75 sm:text-base">
          <p>
            Raggio Abogados es un estudio jurídico integrado por Gonzalo Raggio y Agustina Braga
            Zufiaurre, con foco principal en Derecho Penal y una proyección hacia el Derecho Penal
            Económico y las problemáticas jurídicas vinculadas con empresas.
          </p>
          <p>
            Frente a una situación penal, la respuesta profesional no puede ser automática. Es
            necesario comprender los hechos, analizar el contexto judicial, explicar las
            alternativas y definir un curso de acción adecuado.
          </p>
          <p>
            La atención directa de sus abogados forma parte central de la propuesta. Cada cliente
            debe saber quién trabaja en su asunto, comprender las decisiones relevantes y contar con
            comunicación profesional durante el proceso.
          </p>
        </div>

        <ul className="mt-10 grid gap-px border border-papel/15 bg-papel/15 sm:grid-cols-2">
          {atributos.map((a) => (
            <li key={a} className="bg-tinta-deep p-5 font-display text-lg leading-snug text-papel">
              {a}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6 self-start border-l border-papel/15 pl-8">
        {abogados.map((a) => (
          <div key={a.nombre}>
            <span className="font-display text-4xl text-bronce-soft">{a.iniciales}</span>
            <p className="mt-2 font-display text-xl leading-snug text-papel">{a.nombre}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-papel/60">{a.cargo}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
