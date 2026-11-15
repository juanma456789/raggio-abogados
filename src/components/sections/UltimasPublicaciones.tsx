import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { linkSecundario } from "@/config/site";
import { publicaciones } from "@/lib/publicaciones";

/** Las publicaciones más recientes, para la home. No se muestra si todavía no hay ninguna. */
export const UltimasPublicaciones = ({ cantidad = 3 }: { cantidad?: number }) => {
  const ultimas = publicaciones.slice(0, cantidad);
  if (ultimas.length === 0) return null;

  return (
    <section id="publicaciones" className="bg-papel py-16 lg:py-24">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow text-bronce">Publicaciones</span>
            <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
            <h2 className="mt-6 font-display text-3xl leading-tight text-tinta sm:text-4xl">
              Información útil para entender tu situación
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-pizarra sm:text-base">
              Explicamos con claridad qué significan las situaciones más frecuentes de un proceso
              penal y qué conviene tener en cuenta en cada una.
            </p>
          </div>
          <Link to="/publicaciones" className={`${linkSecundario} shrink-0 self-start md:self-end`}>
            Ver todas las publicaciones <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {ultimas.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/publicaciones/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-piedra bg-white shadow-soft transition-shadow hover:shadow-lift"
              >
                {p.imagen && (
                  <img
                    src={p.imagen}
                    alt=""
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="eyebrow text-bronce">{p.categoria}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-tinta transition-colors group-hover:text-bronce">
                    {p.titulo}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-pizarra">
                    {p.resumen}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-tinta">
                    Leer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
