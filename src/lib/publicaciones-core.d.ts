export type Estado = "borrador" | "publicado";

export type Redes = {
  linkedin: string | null;
  facebook: string | null;
  instagram: { placas: string[]; texto: string | null };
};

export type Publicacion = {
  slug: string;
  archivo: string;
  titulo: string;
  tituloSeo: string | null;
  descripcion: string;
  resumen: string;
  fecha: string;
  actualizado: string | null;
  categoria: string;
  estado: Estado;
  imagen: string | null;
  imagenAlt: string | null;
  temaWhatsApp: string;
  verificar: string[];
  redes: Redes | null;
  html: string;
  indice: { id: string; texto: string }[];
  minutosLectura: number;
};

export type Site = { origin: string; name: string; locale: string; robots: string };
export type ImagenOg = { image: string; imageAlt: string };
export type RouteSeo = { title: string; description: string };

export type Meta = {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  og: { type: string; url: string; image: string; imageAlt: string };
  article?: { published: string; modified: string; section: string };
};

export const ESTADOS: Estado[];
export function parsePublicacion(raw: string, archivo: string): Publicacion;
export function ordenar(pubs: Publicacion[]): Publicacion[];
export function visibles(pubs: Publicacion[], mostrarBorradores: boolean): Publicacion[];
export function formatearFecha(iso: string): string;
export function urlListado(site: Site): string;
export function urlPublicacion(site: Site, p: Publicacion): string;
export function metaPublicacion(p: Publicacion, site: Site, imagenPorDefecto: ImagenOg): Meta;
export function ldPublicacion(p: Publicacion, site: Site, imagenPorDefecto: ImagenOg): unknown;
export function ldListado(pubs: Publicacion[], site: Site, route: RouteSeo): unknown;
