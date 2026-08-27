// Datos de contacto PROVISORIOS — reemplazar por los definitivos.
export const site = {
  nombre: "Raggio Abogados",
  claim:
    "Estudio jurídico con foco en Derecho Penal · CABA, Zona Norte, Mercedes y Necochea",
  jurisdicciones: ["CABA", "Zona Norte", "Mercedes", "Necochea"],
  // Formato internacional sin signos: 54 9 11 ...
  whatsapp: "5491100000000",
  whatsappVisible: "+54 9 11 0000-0000",
  telefono: "+54 11 0000-0000",
  email: "contacto@raggioabogados.com.ar",
  matricula: "T° 000 F° 000 C.P.A.C.F.",
  direccion: "Av. Ejemplo 1234, piso 5, CABA",
  horario: "Consultas por WhatsApp y correo electrónico",
};

export const abogados = [
  { nombre: "Dr. Gonzalo Raggio", cargo: "Abogado", iniciales: "GR" },
  { nombre: "Dra. Agustina Braga Zufiaurre", cargo: "Abogada", iniciales: "AB" },
];

export function waLink(mensaje: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const waDefault = waLink(
  "Hola, quisiera realizar una consulta con Raggio Abogados. ¿Podrían indicarme cómo continuar?"
);

// Clases compartidas del botón principal (verde WhatsApp profundo).
export const btnWa =
  "inline-flex items-center justify-center gap-2.5 rounded-sm bg-whatsapp px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-whatsapp-foreground transition-colors hover:bg-whatsapp-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp";
