import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Seo } from "@/components/Seo";
import { Contacto } from "@/components/sections/Contacto";
import { AvisoBorradores, EtiquetaBorrador } from "@/components/publicaciones/Borrador";
import seo from "@/config/seo.json";
import { formatearFecha, ldListado } from "@/lib/publicaciones-core.js";
import { publicaciones, site } from "@/lib/publicaciones";

const jsonLd = ldListado(publicaciones, site, seo.routes.publicaciones);

const Publicaciones = () => (
  <div className="min-h-screen bg-background">
    <Seo route="publicaciones" jsonLd={jsonLd} />
    <Header variant="publicaciones" />
    <main>
      <section className="border-b border-piedra bg-papel">
        <div className="container py-12 lg:py-20">
          <span className="eyebrow text-bronce">Publicaciones</span>
          <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
          <h1 className="mt-6 max-w-3xl font-display text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.015em] text-tinta sm:text-5xl">
            Información clara sobre situaciones penales
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-pizarra sm:text-base">
            Explicamos qué significan las situaciones más frecuentes de un proceso penal y qué
            conviene tener en cuenta en cada una. Son contenidos de carácter general: cada caso
            depende de los hechos, la jurisdicción y el estado del proceso.
          </p>
          <AvisoBorradores className="mt-8" />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container">
          {publicaciones.length === 0 ? (
            <p className="max-w-xl text-[15px] leading-relaxed text-pizarra">
              Muy pronto vamos a compartir aquí las primeras publicaciones.
            </p>
          ) : (
            <ul className="divide-y divide-piedra border-y border-piedra">
              {publicaciones.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/publicaciones/${p.slug}`}
                    className={`group grid gap-3 py-8 transition-colors lg:gap-10 lg:py-10 ${
                      p.imagen
                        ? "md:grid-cols-[16rem_1fr] md:items-start md:gap-x-8 lg:grid-cols-[13rem_1fr_18rem_auto]"
                        : "lg:grid-cols-[13rem_1fr_auto] lg:items-baseline"
                    }`}
                  >
                    {p.imagen && (
                      <img
                        src={p.imagen}
                        alt=""
                        width={1600}
                        height={900}
                        loading="lazy"
                        className="aspect-[16/9] w-full rounded-[8px] object-cover md:row-span-2 lg:order-3 lg:row-span-1"
                      />
                    )}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-pizarra lg:flex-col lg:items-start">
                      <span className="eyebrow text-bronce">{p.categoria}</span>
                      <time dateTime={p.fecha}>{formatearFecha(p.fecha)}</time>
                      {p.estado === "borrador" && <EtiquetaBorrador />}
                    </div>
                    <div>
                      <h2 className="font-display text-2xl leading-snug text-tinta transition-colors group-hover:text-bronce sm:text-[1.7rem]">
                        {p.titulo}
                      </h2>
                      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-pizarra">
                        {p.resumen}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-tinta lg:order-4">
                      Leer
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Contacto
        titulo="¿Tu situación no aparece en estas publicaciones?"
        texto="Contanos brevemente qué ocurrió. Analizamos el caso y te indicamos cómo continuar."
        waMensaje="Hola, estuve leyendo las publicaciones de Raggio Abogados y quisiera hacer una consulta:"
      />
    </main>
    <Footer variant="publicaciones" />
    <FloatingWhatsApp />
  </div>
);

export default Publicaciones;
