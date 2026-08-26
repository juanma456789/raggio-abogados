import { MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waLink } from "@/config/site";

const zonas = [
  {
    t: "Ciudad Autónoma de Buenos Aires",
    items: [
      "Justicia Nacional en lo Criminal y Correccional",
      "Justicia Penal, Contravencional y de Faltas de la CABA",
      "Comisarías y alcaidías de la Ciudad",
      "Barrios: Palermo, Belgrano, Recoleta, Caballito, Flores, Villa Urquiza, Microcentro",
    ],
  },
  {
    t: "Zona Norte del Gran Buenos Aires",
    items: [
      "Departamento Judicial San Isidro",
      "Departamento Judicial San Martín",
      "Vicente López, Olivos, Martínez, San Fernando, Tigre, Pilar",
      "Fiscalías y juzgados de garantías de la Provincia de Buenos Aires",
    ],
  },
];

export const Cobertura = () => (
  <section id="cobertura" className="bg-secondary py-14 lg:py-20">
    <div className="container">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Zona de actuación
        </span>
        <h2 className="mt-3 font-display text-2xl leading-snug text-primary sm:text-3xl">
          Dónde intervenimos
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {zonas.map((z) => (
          <div key={z.t} className="rounded-lg border border-border bg-background p-6 shadow-soft">
            <h3 className="flex items-center gap-2 font-display text-lg text-primary">
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" /> {z.t}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-700">
              {z.items.map((i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-ink-700">
        ¿Su caso tramita en otra jurisdicción?{" "}
        <a
          href={waLink("Hola, mi causa tramita fuera de CABA y Zona Norte. ¿Pueden intervenir?")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-accent underline underline-offset-4"
        >
          <WhatsAppIcon className="h-4 w-4" /> Consúltenos igual
        </a>
      </p>
    </div>
  </section>
);
