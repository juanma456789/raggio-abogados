// Datos de contacto PROVISORIOS — reemplazar por los definitivos.
export const site = {
  nombre: "Raggio Abogados",
  claim:
    "Estudio jurídico con foco en Derecho Penal · CABA, Zona Norte, Mercedes y Necochea",
  jurisdicciones: ["CABA", "Zona Norte", "Mercedes", "Necochea"],
  // Único lugar donde se define el número. Formato internacional sin signos.
  whatsapp: "5491100000000",
  email: "contacto@raggioabogados.com.ar",
  horario: "Consultas por WhatsApp y correo electrónico",
};

export const abogados = [
  { nombre: "Dr. Gonzalo Raggio", cargo: "Abogado", iniciales: "GR" },
  { nombre: "Dra. Agustina Braga Zufiaurre", cargo: "Abogada", iniciales: "BZ" },
];

export function waLink(mensaje: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const waDefault = waLink(
  "Hola, quisiera realizar una consulta con Raggio Abogados. ¿Podrían indicarme cómo continuar?"
);

// Botón WhatsApp: redondeo 8 px, sombra suave, hover oscurecido y elevado 1 px.
const btnBase =
  "inline-flex items-center justify-center gap-2.5 rounded-[8px] bg-whatsapp font-semibold uppercase tracking-[0.08em] text-whatsapp-foreground shadow-[0_4px_14px_-6px_hsl(150_65%_16%/0.55)] transition-all duration-200 hover:-translate-y-px hover:bg-whatsapp-hover hover:shadow-[0_8px_20px_-8px_hsl(150_65%_16%/0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp";

// Llamado principal (hero, contacto).
export const btnWa = `${btnBase} px-7 py-4 text-sm`;
// Llamado intermedio.
export const btnWaMd = `${btnBase} px-6 py-3.5 text-[13px]`;
// Compacto (navegación).
export const btnWaSm = `${btnBase} px-4 py-2.5 text-[11px] tracking-[0.1em]`;

// Enlace secundario discreto.
export const linkSecundario =
  "inline-flex items-center gap-2 border-b border-bronce/50 pb-1 text-sm text-tinta transition-colors hover:border-bronce hover:text-bronce focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronce";
