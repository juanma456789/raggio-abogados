import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Seo } from "@/components/Seo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { EtiquetaBorrador } from "@/components/publicaciones/Borrador";
import { btnWa, btnWaMd, site as contacto, waLink } from "@/config/site";
import { formatearFecha, ldPublicacion, metaPublicacion } from "@/lib/publicaciones-core.js";
import { buscarPublicacion, imagenPorDefecto, relacionadas, site } from "@/lib/publicaciones";
import NotFound from "./NotFound";

const proseCls = [
  "prose prose-lg max-w-none",
  "prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-[-0.01em] prose-headings:text-tinta",
  "prose-h2:mt-12 prose-h2:scroll-mt-32 prose-h2:text-[1.7rem] prose-h2:leading-snug",
  "prose-h3:text-xl",
  "prose-p:text-[17px] prose-p:leading-[1.75] prose-p:text-pizarra",
  "prose-li:text-[17px] prose-li:leading-[1.7] prose-li:text-pizarra prose-li:marker:text-bronce",
  "prose-strong:font-semibold prose-strong:text-tinta",
  "prose-a:text-tinta prose-a:decoration-bronce/60 prose-a:underline-offset-4 hover:prose-a:text-bronce",
  "prose-blockquote:border-l-bronce prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-tinta",
].join(" ");

const Publicacion = () => {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const p = buscarPublicacion(slug);
  if (!p) return <NotFound />;

  const meta = metaPublicacion(p, site, imagenPorDefecto);
  const jsonLd = ldPublicacion(p, site, imagenPorDefecto);
  const wa = waLink(
    `Hola, estoy consultando desde la publicación sobre ${p.temaWhatsApp.toLowerCase()}. Mi situación es la siguiente:`
  );
  const otras = relacionadas(p);

  return (
    <div className="min-h-screen bg-background">
      <Seo meta={meta} jsonLd={jsonLd} />
      <Header variant="publicaciones" />
      <main>
        <article>
          <header className="border-b border-piedra bg-papel">
            <div className="container py-10 lg:py-16">
              <nav aria-label="Ruta de navegación" className="text-sm text-pizarra">
                <Link to="/publicaciones" className="inline-flex items-center gap-2 hover:text-tinta">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Publicaciones
                </Link>
              </nav>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="eyebrow text-bronce">{p.categoria}</span>
                {p.estado === "borrador" && <EtiquetaBorrador />}
              </div>
              <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />

              <h1 className="mt-6 max-w-4xl font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.015em] text-tinta sm:text-[2.75rem] lg:text-[3.1rem]">
                {p.titulo}
              </h1>
              <p className="mt-6 max-w-3xl border-l-2 border-bronce pl-5 font-display text-lg font-medium leading-snug text-tinta sm:text-xl">
                {p.resumen}
              </p>
              <p className="mt-6 text-sm text-pizarra">
                <time dateTime={p.fecha}>{formatearFecha(p.fecha)}</time>
                {p.actualizado && (
                  <>
                    {" · "}Actualizado el{" "}
                    <time dateTime={p.actualizado}>{formatearFecha(p.actualizado)}</time>
                  </>
                )}
                {" · "}
                {p.minutosLectura} min de lectura · {contacto.nombre}
              </p>
            </div>
          </header>

          {p.imagen && (
            <div className="container pt-10 lg:pt-14">
              <img
                src={p.imagen}
                alt={p.imagenAlt ?? ""}
                width={1600}
                height={900}
                fetchPriority="high"
                className="aspect-[16/9] w-full rounded-[8px] object-cover lg:aspect-[21/9]"
              />
            </div>
          )}

          <div className="container grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 lg:py-16">
            <div className="max-w-[44rem]">
              <div
                className={proseCls}
                dangerouslySetInnerHTML={{ __html: p.html }}
                onClick={(e) => {
                  // Los enlaces internos del texto navegan sin recargar la página.
                  const a = (e.target as HTMLElement).closest("a");
                  const href = a?.getAttribute("href");
                  if (!href?.startsWith("/") || a.target || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
                  e.preventDefault();
                  navigate(href);
                }}
              />

              <section
                id="contacto"
                className="mt-14 scroll-mt-28 rounded-[8px] bg-tinta p-7 text-papel sm:p-10"
              >
                <h2 className="font-display text-2xl leading-snug sm:text-[1.7rem]">
                  ¿Necesitás evaluar tu caso?
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-papel/75 sm:text-base">
                  Cada situación depende de los hechos, la jurisdicción y el estado del proceso. Si
                  necesitás evaluar un caso concreto, podés escribirnos por WhatsApp y contarnos
                  brevemente qué ocurrió.
                </p>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnWa} mt-7 w-full sm:w-auto`}
                >
                  <WhatsAppIcon className="h-5 w-5" /> Consultar este tema por WhatsApp
                </a>
              </section>

              <p className="mt-8 text-xs leading-relaxed text-pizarra">
                La información publicada es de carácter general y no constituye asesoramiento
                jurídico para un caso particular. Cada asunto requiere analizar sus circunstancias y
                documentación.
              </p>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-8">
                {p.indice.length > 1 && (
                  <nav aria-label="En esta publicación">
                    <p className="eyebrow text-bronce">En esta publicación</p>
                    <ol className="mt-4 space-y-3 border-l border-piedra text-sm">
                      {p.indice.map((h) => (
                        <li key={h.id}>
                          <a
                            href={`#${h.id}`}
                            className="-ml-px block border-l border-transparent pl-4 leading-snug text-pizarra transition-colors hover:border-bronce hover:text-tinta"
                          >
                            {h.texto}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
                <div className="rounded-[8px] border border-piedra bg-papel p-6">
                  <p className="font-display text-lg leading-snug text-tinta">
                    ¿Tenés una situación parecida?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-pizarra">
                    Contanos brevemente qué ocurrió y te indicamos cómo continuar.
                  </p>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnWaMd} mt-5 w-full`}
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Consultar
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {otras.length > 0 && (
          <section className="border-t border-piedra bg-arena py-12 lg:py-16">
            <div className="container">
              <h2 className="font-display text-2xl text-tinta sm:text-3xl">Otras publicaciones</h2>
              <ul className="mt-8 grid gap-5 md:grid-cols-3">
                {otras.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to={`/publicaciones/${o.slug}`}
                      className="group flex h-full flex-col rounded-[8px] border border-piedra bg-papel p-6 transition-shadow hover:shadow-soft"
                    >
                      <span className="eyebrow text-bronce">{o.categoria}</span>
                      <span className="mt-3 font-display text-xl leading-snug text-tinta group-hover:text-bronce">
                        {o.titulo}
                      </span>
                      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-tinta">
                        Leer <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer variant="publicaciones" />
      <FloatingWhatsApp />
    </div>
  );
};

export default Publicacion;
