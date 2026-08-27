import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { btnWa, site, waLink } from "@/config/site";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const motivos = [
  "Citación o denuncia",
  "Detención",
  "Defensa en una causa penal",
  "Víctima o querella",
  "Penal económico o empresa",
  "Otra situación",
];

const preferencias = ["WhatsApp", "Llamado telefónico", "Correo electrónico"];

const inputCls =
  "mt-1.5 w-full rounded-sm border border-input bg-papel px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-bronce focus:ring-1 focus:ring-bronce";
const labelCls = "text-xs font-medium uppercase tracking-[0.12em] text-pizarra";

export const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    jurisdiccion: "",
    motivo: motivos[0],
    mensaje: "",
    preferencia: preferencias[0],
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (enviando) return;
    setEnviando(true);
    const { error } = await supabase.functions.invoke("enviar-consulta", { body: form });
    setEnviando(false);
    if (error) {
      toast({
        title: "No pudimos enviar la consulta",
        description: "Podés intentar nuevamente o escribirnos por WhatsApp.",
        variant: "destructive",
      });
      return;
    }
    setEnviado(true);
  };

  return (
    <section id="contacto" className="bg-tinta py-16 text-papel lg:py-24">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <span className="eyebrow text-bronce-soft">Contacto</span>
          <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
          <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
            Contanos brevemente tu situación
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-papel/75 sm:text-base">
            Si necesitás asesoramiento frente a una situación penal, podés iniciar una conversación
            por WhatsApp. Indicá, si es posible, qué ocurrió, en qué jurisdicción se encuentra el
            asunto y si existe una medida o fecha próxima.
          </p>

          <a
            href={waLink(
              "Hola, quisiera iniciar una consulta con Raggio Abogados. Mi situación es la siguiente:"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnWa} mt-8 w-full px-8 py-5 sm:w-auto`}
          >
            <WhatsAppIcon className="h-5 w-5" /> Iniciar conversación por WhatsApp
          </a>

          <ul className="mt-10 space-y-4 border-t border-papel/15 pt-8 text-sm">
            <li>
              <a
                href={waLink("Hola, quiero hacer una consulta con Raggio Abogados.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-bronce-soft"
              >
                <WhatsAppIcon className="h-4 w-4 text-bronce-soft" /> {site.whatsappVisible}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.telefono.replace(/\s|-/g, "")}`}
                className="flex items-center gap-3 hover:text-bronce-soft"
              >
                <Phone className="h-4 w-4 text-bronce-soft" /> {site.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-bronce-soft">
                <Mail className="h-4 w-4 text-bronce-soft" /> {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-papel/75">
              <MapPin className="h-4 w-4 text-bronce-soft" /> {site.direccion}
            </li>
            <li className="flex items-center gap-3 text-papel/75">
              <Clock className="h-4 w-4 text-bronce-soft" /> {site.horario}
            </li>
          </ul>
        </div>

        <form onSubmit={enviar} className="bg-papel p-6 text-foreground shadow-lift sm:p-8">
          {enviado ? (
            <div className="flex flex-col items-center justify-center py-14 text-center">
              <CheckCircle2 className="h-10 w-10 text-bronce" aria-hidden="true" />
              <h3 className="mt-4 font-display text-2xl text-tinta">Recibimos tu consulta</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-pizarra">
                Tu mensaje fue enviado por correo electrónico al estudio. Vamos a revisar la
                información y responderte por el medio que indicaste.
              </p>
              <button
                type="button"
                onClick={() => setEnviado(false)}
                className="mt-7 border-b border-bronce/50 pb-1 text-sm text-tinta hover:text-bronce"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-display text-2xl text-tinta">
                Si preferís, dejanos tus datos
              </h3>
              <p className="mt-2 text-sm text-pizarra">
                El formulario envía la información por correo electrónico al estudio.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="nombre" className={labelCls}>
                    Nombre y apellido
                  </label>
                  <input
                    id="nombre"
                    required
                    value={form.nombre}
                    onChange={set("nombre")}
                    className={inputCls}
                    placeholder="Juan Pérez"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="telefono" className={labelCls}>
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={set("telefono")}
                      className={inputCls}
                      placeholder="11 0000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls}>
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      className={inputCls}
                      placeholder="nombre@correo.com"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="jurisdiccion" className={labelCls}>
                      Localidad o jurisdicción
                    </label>
                    <input
                      id="jurisdiccion"
                      value={form.jurisdiccion}
                      onChange={set("jurisdiccion")}
                      className={inputCls}
                      placeholder="CABA, San Isidro…"
                    />
                  </div>
                  <div>
                    <label htmlFor="motivo" className={labelCls}>
                      Motivo de la consulta
                    </label>
                    <select
                      id="motivo"
                      value={form.motivo}
                      onChange={set("motivo")}
                      className={inputCls}
                    >
                      {motivos.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="mensaje" className={labelCls}>
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={set("mensaje")}
                    className={`${inputCls} resize-none`}
                    placeholder="Contanos qué ocurrió y si existe una medida o fecha próxima."
                  />
                </div>
                <div>
                  <label htmlFor="preferencia" className={labelCls}>
                    Preferencia de contacto
                  </label>
                  <select
                    id="preferencia"
                    value={form.preferencia}
                    onChange={set("preferencia")}
                    className={inputCls}
                  >
                    {preferencias.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-sm bg-tinta px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-papel transition-colors hover:bg-tinta-deep disabled:opacity-70"
              >
                {enviando && <Loader2 className="h-4 w-4 animate-spin" />}
                {enviando ? "Enviando…" : "Enviar consulta"}
              </button>
              <p className="mt-3 text-xs leading-relaxed text-pizarra">
                Al enviar el formulario, aceptás que Raggio Abogados utilice los datos proporcionados
                exclusivamente para responder tu consulta.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
};
