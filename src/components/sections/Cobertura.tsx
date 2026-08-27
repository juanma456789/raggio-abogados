import { MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waLink } from "@/config/site";

const zonas = [
  {
    t: "CABA",
    items: [
      "Justicia Nacional en lo Criminal y Correccional",
      "Justicia Penal, Contravencional y de Faltas de la CABA",
      "Comisarías y alcaidías de la Ciudad",
    ],
  },
  {
    t: "Zona Norte",
    items: [
      "Departamento Judicial San Isidro",
      "Departamento Judicial San Martín",
      "Vicente López, San Isidro, Tigre, Pilar",
    ],
  },
  {
    t: "Mercedes",
    items: [
      "Departamento Judicial Mercedes",
      "Fiscalías y juzgados de garantías de la Provincia de Buenos Aires",
    ],
  },
  {
    t: "Necochea",
    items: [
      "Departamento Judicial Necochea",
      "Fiscalías y juzgados de garantías de la Provincia de Buenos Aires",
    ],
  },
];

export const Cobertura = () => (
  <section id="cobertura" className="bg-secondary py-14 lg:py-20">
    <div className="container">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-petroleo">
          Cobertura
        </span>
        <h2 className="mt-3 font-display text-2xl leading-snug text-tinta sm:text-3xl">
          Dónde intervenimos
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-pizarra sm:text-base">
          La cobertura prioritaria comprende CABA, Zona Norte, Mercedes y Necochea. La actuación se
          confirma según la jurisdicción y el asunto.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {zonas.map((z) => (
          <div key={z.t} className="rounded-lg border border-piedra bg-papel p-6 shadow-soft">
            <h3 className="flex items-center gap-2 font-display text-lg text-tinta">
              <MapPin className="h-5 w-5 text-petroleo" aria-hidden="true" /> {z.t}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-pizarra">
              {z.items.map((i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-petroleo" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-pizarra">
        ¿Su caso tramita en otra jurisdicción?{" "}
        <a
          href={waLink("Hola, mi causa tramita fuera de la cobertura prioritaria. ¿Pueden intervenir?")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-petroleo underline underline-offset-4"
        >
          <WhatsAppIcon className="h-4 w-4" /> Consúltenos igual
        </a>
      </p>
    </div>
  </section>
);
