// Decide si el build muestra las publicaciones en estado "borrador".
// - En desarrollo (npm run dev): sí.
// - En Cloudflare Pages: solo en las vistas previas (ramas distintas de main). Producción nunca.
// - Forzar localmente: MOSTRAR_BORRADORES=1 npm run build
export function mostrarBorradores(mode = "production") {
  if (process.env.MOSTRAR_BORRADORES === "1") return true;
  if (process.env.MOSTRAR_BORRADORES === "0") return false;
  if (mode === "development") return true;
  const rama = process.env.CF_PAGES_BRANCH;
  return Boolean(rama) && rama !== "main";
}
