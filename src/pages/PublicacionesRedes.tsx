import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Copy } from "lucide-react";
import { Header } from "@/components/Header";
import { EtiquetaBorrador } from "@/components/publicaciones/Borrador";
import { formatearFecha, urlPublicacion } from "@/lib/publicaciones-core.js";
import { publicaciones, site } from "@/lib/publicaciones";

/**
 * Página interna (no indexada ni enlazada) con los textos para redes de cada publicación,
 * listos para copiar. Sirve para revisar y publicar en LinkedIn, Instagram y Facebook.
 */

const Copiar = ({ texto, etiqueta = "Copiar" }: { texto: string; etiqueta?: string }) => {
  const [ok, setOk] = useState(false);
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      setOk(true);
      setTimeout(() => setOk(false), 1800);
    } catch {
      window.prompt("Copiá el texto:", texto);
    }
  };
  return (
    <button
      type="button"
      onClick={copiar}
      className="inline-flex items-center gap-1.5 rounded-[6px] border border-piedra bg-papel px-3 py-1.5 text-xs font-medium text-tinta transition-colors hover:border-bronce"
    >
      {ok ? <Check className="h-3.5 w-3.5 text-whatsapp" /> : <Copy className="h-3.5 w-3.5" />}
      {ok ? "Copiado" : etiqueta}
    </button>
  );
};

const Bloque = ({ titulo, texto, extra }: { titulo: string; texto: string; extra?: string }) => {
  const completo = extra ? `${texto}\n\n${extra}` : texto;
  return (
    <div className="rounded-[8px] border border-piedra bg-white p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-pizarra">{titulo}</h3>
        <Copiar texto={completo} />
      </div>
      <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-tinta">{completo}</p>
      <p className="mt-3 text-xs text-pizarra">{completo.length} caracteres</p>
    </div>
  );
};

const PublicacionesRedes = () => {
  useEffect(() => {
    document.title = "Textos para redes | Raggio Abogados";
    let m = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!m) {
      m = document.createElement("meta");
      m.name = "robots";
      document.head.appendChild(m);
    }
    m.content = "noindex, nofollow";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header variant="publicaciones" />
      <main className="container py-10 lg:py-14">
        <span className="eyebrow text-bronce">Uso interno</span>
        <h1 className="mt-4 font-display text-3xl text-tinta sm:text-4xl">Textos para redes</h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-pizarra">
          Cada publicación trae sus textos para LinkedIn, Instagram y Facebook. Antes de publicar,
          revisá la lista de datos a verificar. Los textos de LinkedIn y Facebook se copian con el
          enlace al artículo incluido. Esta página no aparece en buscadores ni en el menú.
        </p>

        <div className="mt-10 space-y-14">
          {publicaciones.map((p) => {
            const url = urlPublicacion(site, p);
            const r = p.redes;
            return (
              <section key={p.slug} className="border-t border-piedra pt-8">
                <div className="flex flex-wrap items-center gap-3 text-xs text-pizarra">
                  <span className="eyebrow text-bronce">{p.categoria}</span>
                  <span>{formatearFecha(p.fecha)}</span>
                  {p.estado === "borrador" && <EtiquetaBorrador />}
                </div>
                <h2 className="mt-3 font-display text-2xl text-tinta">
                  <Link to={`/publicaciones/${p.slug}`} className="hover:text-bronce">
                    {p.titulo}
                  </Link>
                </h2>

                {p.verificar.length > 0 && (
                  <div className="mt-5 max-w-3xl rounded-[8px] border border-bronce/40 bg-arena p-5">
                    <p className="text-sm font-semibold text-tinta">
                      {p.estado === "publicado"
                        ? "Publicada con revisión jurídica pendiente: confirmar con los abogados"
                        : "Para verificar antes de publicar"}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-tinta">
                      {p.verificar.map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {!r ? (
                  <p className="mt-5 text-sm text-pizarra">Esta publicación todavía no tiene textos para redes.</p>
                ) : (
                  <div className="mt-6 grid gap-5 lg:grid-cols-2">
                    {r.linkedin && <Bloque titulo="LinkedIn" texto={r.linkedin} extra={url} />}
                    {r.facebook && <Bloque titulo="Facebook" texto={r.facebook} extra={url} />}
                    {(r.instagram.placas.length > 0 || r.instagram.texto) && (
                      <div className="rounded-[8px] border border-piedra bg-white p-5 lg:col-span-2">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-pizarra">
                            Instagram · carrusel
                          </h3>
                          {r.instagram.texto && <Copiar texto={r.instagram.texto} etiqueta="Copiar texto" />}
                        </div>
                        {r.instagram.placas.length > 0 && (
                          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {r.instagram.placas.map((placa, i) => (
                              <li
                                key={i}
                                className="flex aspect-[4/5] flex-col justify-between rounded-[6px] bg-tinta p-4 text-papel"
                              >
                                <span className="text-[11px] font-semibold tracking-[0.18em] text-bronce-soft">
                                  {i + 1}/{r.instagram.placas.length}
                                </span>
                                <span className="whitespace-pre-line font-display text-[15px] leading-snug">
                                  {placa}
                                </span>
                              </li>
                            ))}
                          </ol>
                        )}
                        {r.instagram.texto && (
                          <p className="mt-5 whitespace-pre-line border-t border-piedra pt-4 text-[15px] leading-relaxed text-tinta">
                            {r.instagram.texto}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default PublicacionesRedes;
