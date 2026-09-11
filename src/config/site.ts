// Datos de contacto PROVISORIOS — reemplazar por los definitivos.
export const site = {
  nombre: "Raggio Abogados",
  claim:
    "Asesoramiento legal para personas, familias y empresas · CABA y provincia de Buenos Aires",
  jurisdicciones: ["CABA", "Provincia de Buenos Aires"],
  // Número de WhatsApp en formato internacional (sin + ni espacios). Admite texto prellenado (?text=).
  whatsapp: "5491154767056",
  email: "contacto@raggioabogados.com",
  horario: "Consultas por WhatsApp y correo electrónico",
  instagram: "https://www.instagram.com/raggio_abogados/",
  googleBusiness: "https://share.google/gTVUTpN8yqs1aeAI2",
};

export const abogados = [
  { nombre: "Dr. Adolfo Gonzalo Raggio", cargo: "ABOGADO", iniciales: "GR" },
  { nombre: "Dra. Agustina Braga Zufiaurre", cargo: "ABOGADA", iniciales: "BZ" },
];

export function waLink(mensaje: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

export const waDefault = waLink("");

// Botón WhatsApp: redondeo 8 px, sombra suave, hover oscurecido y elevado 1 px.
const btnBase =
  "inline-flex items-center justify-center gap-2.5 rounded-[8px] bg-whatsapp font-semibold uppercase tracking-[0.08em] text-whatsapp-foreground shadow-[0_4px_14px_-6px_hsl(150_65%_16%/0.55)] transition-all duration-200 hover:-translate-y-px hover:bg-whatsapp-hover hover:shadow-[0_8px_20px_-8px_hsl(150_65%_16%/0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp";

// Llamado principal (hero, contacto).
export const btnWa = `${btnBase} px-7 py-4 text-sm`;
// Llamado intermedio.
export const btnWaMd = `${btnBase} px-6 py-3.5 text-[13px]`;
// Compacto (navegación).
export const btnWaSm = `${btnBase} px-4 py-2.5 text-[11px] tracking-[0.1em]`;

// Botón institucional (azul oscuro) — para navegación interna, nunca verde.
export const btnInst =
  "inline-flex items-center justify-center gap-2.5 rounded-[8px] bg-tinta px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-papel shadow-[0_4px_14px_-6px_hsl(213_42%_17%/0.5)] transition-all duration-200 hover:-translate-y-px hover:bg-tinta-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronce";

// Enlace secundario discreto.
export const linkSecundario =
  "inline-flex items-center gap-2 border-b border-bronce/50 pb-1 text-sm text-tinta transition-colors hover:border-bronce hover:text-bronce focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronce";
