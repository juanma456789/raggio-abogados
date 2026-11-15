import seo from "@/config/seo.json";
import { ordenar, parsePublicacion, visibles } from "./publicaciones-core.js";
import type { ImagenOg, Publicacion, Site } from "./publicaciones-core";

export type { Publicacion } from "./publicaciones-core";

declare const __MOSTRAR_BORRADORES__: boolean | undefined;

/** true en desarrollo y en las vistas previas de Cloudflare; false en producción. */
export const mostrarBorradores =
  typeof __MOSTRAR_BORRADORES__ === "undefined" ? true : __MOSTRAR_BORRADORES__;

const archivos = import.meta.glob("/src/content/publicaciones/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// En producción los borradores llegan vacíos (ver excluirBorradores en vite.config.ts).
const todas: Publicacion[] = ordenar(
  Object.entries(archivos)
    .filter(([, raw]) => raw.trim() !== "")
    .map(([ruta, raw]) => parsePublicacion(raw, ruta))
);

/** Publicaciones que se muestran en este build, de la más reciente a la más antigua. */
export const publicaciones: Publicacion[] = visibles(todas, mostrarBorradores);

export const buscarPublicacion = (slug: string) => publicaciones.find((p) => p.slug === slug);

/** Otras publicaciones para sugerir al final de un artículo (misma categoría primero). */
export function relacionadas(p: Publicacion, cantidad = 3) {
  const otras = publicaciones.filter((x) => x.slug !== p.slug);
  const misma = otras.filter((x) => x.categoria === p.categoria);
  const resto = otras.filter((x) => x.categoria !== p.categoria);
  return [...misma, ...resto].slice(0, cantidad);
}

export const site = seo.site as Site;
export const imagenPorDefecto: ImagenOg = {
  image: seo.routes.publicaciones.og.image,
  imageAlt: seo.routes.publicaciones.og.imageAlt,
};
