import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site, waLink } from "@/config/site";

const motivos = [
  "Defensa",
  "Familiar",
  "Víctima o querella",
  "Penal económico o empresa",
  "Otra situación",
];

export const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [jurisdiccion, setJurisdiccion] = useState("");
  const [motivo, setMotivo] = useState(motivos[0]);
  const [detalle, setDetalle] = useState("");
  const [enviado, setEnviado] = useState(false);

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !detalle.trim()) return;
    const mensaje = [
      `Hola, soy ${nombre.trim()}.`,
      `Motivo: ${motivo}.`,
      jurisdiccion.trim() ? `Jurisdicción/localidad: ${jurisdiccion.trim()}.` : "",
      telefono.trim() ? `Teléfono de contacto: ${telefono.trim()}.` : "",
      `Situación: ${detalle.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(mensaje), "_blank", "noopener,noreferrer");
    setEnviado(true);
  };

  return (
    <section id="contacto" className="bg-tinta-gradient py-16 text-papel lg:py-24">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-petroleo-soft">
            Contacto
          </span>
          <h2 className="mt-3 font-display text-2xl leading-snug sm:text-3xl">
            Contanos brevemente tu situación
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-papel/75 sm:text-base">
            Si necesitás orientación frente a una situación penal, podés iniciar una conversación por
            WhatsApp. Indicá, si es posible, qué ocurrió, en qué jurisdicción se encuentra el asunto y
            si existe una medida o fecha próxima.
          </p>

          <a
            href={waLink(
              "Hola, quisiera realizar una consulta con Raggio Abogados. ¿Podrían indicarme cómo continuar?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-base font-semibold text-whatsapp-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5" /> Iniciar conversación por WhatsApp
          </a>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                href={waLink("Hola, quiero hacer una consulta con Raggio Abogados.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-petroleo-soft"
              >
                <WhatsAppIcon className="h-5 w-5 text-petroleo-soft" /> {site.whatsappVisible}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.telefono.replace(/\s|-/g, "")}`}
                className="flex items-center gap-3 hover:text-petroleo-soft"
              >
                <Phone className="h-5 w-5 text-petroleo-soft" /> {site.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-petroleo-soft">
                <Mail className="h-5 w-5 text-petroleo-soft" /> {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-papel/75">
              <MapPin className="h-5 w-5 text-petroleo-soft" /> {site.direccion}
            </li>
            <li className="flex items-center gap-3 text-papel/75">
              <Clock className="h-5 w-5 text-petroleo-soft" /> {site.horario}
            </li>
          </ul>
        </div>

        <form
          onSubmit={enviar}
          className="rounded-lg bg-papel p-6 text-foreground shadow-lift sm:p-8"
        >
          {enviado ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="h-10 w-10 text-petroleo" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-tinta">Recibimos tu consulta</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-pizarra">
                Se abrió WhatsApp con el mensaje ya cargado. El estudio revisará la información
                enviada y se comunicará a través del medio indicado.
              </p>
              <button
                type="button"
                onClick={() => {
                  setEnviado(false);
                  setNombre("");
                  setTelefono("");
                  setJurisdiccion("");
                  setDetalle("");
                }}
                className="mt-6 text-sm font-semibold text-petroleo underline underline-offset-4"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-display text-lg text-tinta">Si preferís, dejanos tus datos</h3>
              <p className="mt-1.5 text-sm text-pizarra">
                Al enviar se abre WhatsApp con el mensaje ya escrito.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="nombre" className="text-sm font-medium text-tinta">
                    Nombre y apellido
                  </label>
                  <input
                    id="nombre"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="mt-1.5 w-full rounded-md border border-input bg-papel px-3.5 py-2.5 text-sm outline-none focus:border-petroleo focus:ring-1 focus:ring-petroleo"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="telefono" className="text-sm font-medium text-tinta">
                      Teléfono (opcional)
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      className="mt-1.5 w-full rounded-md border border-input bg-papel px-3.5 py-2.5 text-sm outline-none focus:border-petroleo focus:ring-1 focus:ring-petroleo"
                      placeholder="11 0000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="jurisdiccion" className="text-sm font-medium text-tinta">
                      Localidad o jurisdicción
                    </label>
                    <input
                      id="jurisdiccion"
                      value={jurisdiccion}
                      onChange={(e) => setJurisdiccion(e.target.value)}
                      className="mt-1.5 w-full rounded-md border border-input bg-papel px-3.5 py-2.5 text-sm outline-none focus:border-petroleo focus:ring-1 focus:ring-petroleo"
                      placeholder="CABA, San Isidro…"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="motivo" className="text-sm font-medium text-tinta">
                    Motivo
                  </label>
                  <select
                    id="motivo"
                    value={motivo}
                    onChange={(e) => setMotivo(e.target.value)}
                    className="mt-1.5 w-full rounded-md border border-input bg-papel px-3.5 py-2.5 text-sm outline-none focus:border-petroleo focus:ring-1 focus:ring-petroleo"
                  >
                    {motivos.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="detalle" className="text-sm font-medium text-tinta">
                    Mensaje
                  </label>
                  <textarea
                    id="detalle"
                    required
                    rows={4}
                    value={detalle}
                    onChange={(e) => setDetalle(e.target.value)}
                    className="mt-1.5 w-full resize-none rounded-md border border-input bg-papel px-3.5 py-2.5 text-sm outline-none focus:border-petroleo focus:ring-1 focus:ring-petroleo"
                    placeholder="Contanos qué ocurrió y si existe una medida o fecha próxima."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-base font-semibold text-whatsapp-foreground transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" /> Enviar consulta
              </button>
              <p className="mt-3 text-xs leading-relaxed text-pizarra">
                Al enviar este formulario, aceptás que Raggio Abogados utilice los datos proporcionados
                para responder tu consulta.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
};
