import { mostrarBorradores, publicaciones } from "@/lib/publicaciones";

/** Aviso que aparece solo en vistas previas cuando hay borradores visibles. */
export const AvisoBorradores = ({ className = "" }: { className?: string }) => {
  const cantidad = publicaciones.filter((p) => p.estado === "borrador").length;
  if (!mostrarBorradores || cantidad === 0) return null;
  return (
    <p
      className={`max-w-2xl rounded-[8px] border border-bronce/40 bg-arena px-4 py-3 text-sm leading-relaxed text-tinta ${className}`}
    >
      <strong className="font-semibold">Vista previa.</strong> Se muestran {cantidad}{" "}
      {cantidad === 1 ? "borrador" : "borradores"} que todavía no están publicados. En el sitio
      oficial solo aparecen las publicaciones aprobadas.
    </p>
  );
};

export const EtiquetaBorrador = () => (
  <span className="rounded-[4px] border border-bronce/50 bg-arena px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-bronce">
    Borrador
  </span>
);
