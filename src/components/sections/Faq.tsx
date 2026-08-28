import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { btnWaMd, waLink } from "@/config/site";

export const faqs = [
  {
    q: "¿Qué conviene tener para la primera consulta?",
    a: "La documentación que hayas recibido, los datos del expediente o de la dependencia, las fechas relevantes y una descripción breve de lo ocurrido. Si no contás con todo, igualmente podés escribirnos.",
  },
  {
    q: "¿Pueden indicarme qué puede ocurrir con mi caso?",
    a: "Recién después de conocer los hechos, la jurisdicción y el estado del proceso es posible explicar escenarios posibles y alternativas. No anticipamos resultados ni plazos.",
  },
  {
    q: "¿Trabajan con familiares de una persona detenida o investigada?",
    a: "Sí. En muchas situaciones el primer contacto lo realiza un familiar que necesita entender qué ocurrió y qué decisiones deben evaluarse.",
  },
  {
    q: "¿La consulta es confidencial?",
    a: "Sí. La información que compartís está amparada por el deber de reserva y el secreto profesional del abogado.",
  },
  {
    q: "¿Cómo se informan los honorarios?",
    a: "Los honorarios se informan con claridad antes de iniciar la intervención, según el tipo de asunto, su estado y el alcance del trabajo profesional acordado.",
  },
  {
    q: "¿Atienden situaciones fuera del horario habitual?",
    a: "Las consultas recibidas fuera del horario habitual se revisan y se responden lo antes posible.",
  },
  {
    q: "¿Dónde interviene el estudio?",
    a: "La cobertura prioritaria comprende CABA, Zona Norte de la Provincia de Buenos Aires, Mercedes y Necochea. Contamos con profesionales habilitados para intervenir en todas las jurisdicciones de la Argentina.",
  },
];

export const Faq = () => (
  <section id="faq" className="bg-papel py-16 lg:py-24">
    <div className="container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
      <div>
        <span className="eyebrow text-bronce">Preguntas frecuentes</span>
        <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
          Lo que más nos consultan
        </h2>
        <a
          href={waLink("Hola, tengo una consulta que no aparece en las preguntas frecuentes:")}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnWaMd} mt-7 w-full sm:w-auto`}
        >
          <WhatsAppIcon className="h-4 w-4" /> Consultar por WhatsApp
        </a>
      </div>

      <Accordion type="single" collapsible className="w-full border-t border-piedra">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="border-piedra">
            <AccordionTrigger className="py-5 text-left font-display text-lg text-tinta hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="max-w-2xl text-[15px] leading-relaxed text-pizarra">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
