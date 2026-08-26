import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site, waLink } from "@/config/site";
import { toast } from "@/hooks/use-toast";

const situaciones = [
  "Persona detenida (urgente)",
  "Citación a indagatoria",
  "Excarcelación / prisión preventiva",
  "Denuncia como víctima",
  "Estafa o delito informático",
  "Accidente de tránsito",
  "Otra situación",
];

export const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [situacion, setSituacion] = useState(situaciones[0]);
  const [detalle, setDetalle] = useState("");

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !detalle.trim()) {
      toast({
        title: "Faltan datos",
        description: "Indíquenos su nombre y una breve descripción de la situación.",
      });
      return;
    }
    const mensaje = [
      `Hola, soy ${nombre.trim()}.`,
      `Motivo: ${situacion}.`,
      telefono.trim() ? `Teléfono de contacto: ${telefono.trim()}.` : "",
      `Situación: ${detalle.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(mensaje), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="bg-ink-gradient py-14 text-primary-foreground lg:py-20">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze-300">
            Contacto
          </span>
          <h2 className="mt-3 font-display text-2xl leading-snug sm:text-3xl">
            Cuéntenos su caso. Le respondemos hoy mismo
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
            La vía más rápida es WhatsApp: escribe, le responde un abogado y coordinamos una consulta
            sin cargo, presencial o por videollamada.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                href={waLink("Hola, quiero hacer una consulta penal.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-bronze-300"
              >
                <WhatsAppIcon className="h-5 w-5 text-bronze-300" /> {site.whatsappVisible} · WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.telefono.replace(/\s|-/g, "")}`}
                className="flex items-center gap-3 hover:text-bronze-300"
              >
                <Phone className="h-5 w-5 text-bronze-300" /> {site.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-bronze-300">
                <Mail className="h-5 w-5 text-bronze-300" /> {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-primary-foreground/80">
              <MapPin className="h-5 w-5 text-bronze-300" /> {site.direccion}
            </li>
            <li className="flex items-center gap-3 text-primary-foreground/80">
              <Clock className="h-5 w-5 text-bronze-300" /> {site.horario}
            </li>
          </ul>
        </div>

        <form
          onSubmit={enviar}
          className="rounded-lg bg-background p-6 text-foreground shadow-lift sm:p-8"
        >
          <h3 className="font-display text-lg text-primary">Consulta rápida</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Al enviar se abre WhatsApp con el mensaje ya escrito.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="nombre" className="text-sm font-medium text-primary">
                Nombre y apellido
              </label>
              <input
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Juan Pérez"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="text-sm font-medium text-primary">
                Teléfono (opcional)
              </label>
              <input
                id="telefono"
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="11 0000-0000"
              />
            </div>
            <div>
              <label htmlFor="situacion" className="text-sm font-medium text-primary">
                Motivo de la consulta
              </label>
              <select
                id="situacion"
                value={situacion}
                onChange={(e) => setSituacion(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              >
                {situaciones.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="detalle" className="text-sm font-medium text-primary">
                Breve descripción
              </label>
              <textarea
                id="detalle"
                rows={4}
                value={detalle}
                onChange={(e) => setDetalle(e.target.value)}
                className="mt-1.5 w-full resize-none rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Qué pasó, cuándo y en qué jurisdicción."
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-base font-semibold text-whatsapp-foreground transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5" /> Enviar por WhatsApp
          </button>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Sus datos se usan únicamente para responder la consulta y están amparados por el secreto
            profesional.
          </p>
        </form>
      </div>
    </section>
  );
};
