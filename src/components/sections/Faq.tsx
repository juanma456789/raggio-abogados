import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waLink } from "@/config/site";

export const faqs = [
  {
    q: "¿Qué conviene tener para la primera consulta?",
    a: "Documentación recibida, datos del expediente o dependencia, fechas relevantes y una descripción breve. Si no contás con todo, igualmente podés consultar.",
  },
  {
    q: "¿Pueden decirme qué va a ocurrir?",
    a: "La orientación depende de los hechos, la jurisdicción y el estado del proceso. Es necesario revisar la situación concreta antes de evaluarla.",
  },
  {
    q: "¿Trabajan con familiares?",
    a: "Sí. Muchas veces el primer contacto lo realiza un familiar que necesita conocer la situación y los pasos posibles.",
  },
  {
    q: "¿Dónde intervienen?",
    a: "La cobertura prioritaria comprende CABA, Zona Norte, Mercedes y Necochea. La actuación se confirma según la jurisdicción y el asunto.",
  },
];

export const Faq = () => (
  <section id="faq" className="bg-papel py-14 lg:py-20">
    <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-petroleo">
          Preguntas frecuentes
        </span>
        <h2 className="mt-3 font-display text-2xl leading-snug text-tinta sm:text-3xl">
          Lo que más nos consultan
        </h2>
        <a
          href={waLink("Hola, tengo una duda que no está en las preguntas frecuentes:")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-petroleo/30 bg-papel px-5 py-3.5 text-sm font-semibold text-petroleo transition-colors hover:bg-piedra/50"
        >
          <WhatsAppIcon className="h-4 w-4" /> Hacer otra pregunta
        </a>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-display text-base text-tinta">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-pizarra">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
