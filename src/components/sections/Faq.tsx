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
    q: "Detuvieron a un familiar, ¿qué hago primero?",
    a: "Escríbanos por WhatsApp con el nombre completo, el DNI y la dependencia policial donde está alojado. Con esos datos ubicamos la causa, tomamos contacto con la fiscalía interviniente y presentamos la defensa el mismo día. Es importante que la persona no declare sin abogado.",
  },
  {
    q: "Me citaron a declaración indagatoria, ¿tengo que ir?",
    a: "Sí, la citación es obligatoria, pero declarar no lo es: puede negarse a hacerlo sin que eso lo perjudique. Antes de la audiencia revisamos el expediente completo y definimos si conviene declarar, presentar un descargo por escrito o guardar silencio.",
  },
  {
    q: "¿Cuánto tarda un pedido de excarcelación?",
    a: "Depende del delito imputado, de los antecedentes y del juzgado. En causas de flagrancia la libertad puede resolverse en horas o pocos días; en procesos más complejos requiere una presentación fundada y, si es rechazada, una apelación. Le informamos plazos realistas desde el inicio.",
  },
  {
    q: "Soy víctima de un delito, ¿pueden ayudarme?",
    a: "Sí. Redactamos y presentamos la denuncia, lo constituimos como particular damnificado o querellante y hacemos el seguimiento activo de la investigación para que la causa no quede paralizada.",
  },
  {
    q: "¿Cómo son los honorarios?",
    a: "La primera consulta no tiene cargo. Después le entregamos un presupuesto por escrito según la complejidad y la etapa del proceso, con posibilidad de pago en cuotas. Nunca avanzamos sin que usted sepa cuánto va a pagar.",
  },
  {
    q: "¿La consulta es confidencial?",
    a: "Absolutamente. Todo lo que nos cuente está protegido por el secreto profesional, incluso si finalmente decide no contratar al estudio.",
  },
  {
    q: "¿Atienden fuera del horario de oficina?",
    a: "Sí. Mantenemos una guardia penal disponible las 24 horas, todos los días del año, porque las detenciones y los allanamientos no ocurren en horario de tribunales.",
  },
];

export const Faq = () => (
  <section id="faq" className="bg-background py-14 lg:py-20">
    <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Preguntas frecuentes
        </span>
        <h2 className="mt-3 font-display text-2xl leading-snug text-primary sm:text-3xl">
          Lo que más nos consultan
        </h2>
        <a
          href={waLink("Hola, tengo una duda que no está en las preguntas frecuentes:")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-accent/30 bg-bronze-100 px-5 py-3.5 text-sm font-semibold text-bronze-700 transition-colors hover:bg-bronze-100/70"
        >
          <WhatsAppIcon className="h-4 w-4" /> Hacer otra pregunta
        </a>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-display text-base text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-ink-700">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
