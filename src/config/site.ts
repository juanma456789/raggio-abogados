// Datos de contacto PROVISORIOS — reemplazar por los definitivos.
export const site = {
  nombre: "Raggio Abogados",
  claim: "Estudio jurídico con foco en Derecho Penal · CABA, Zona Norte, Mercedes y Necochea",
  jurisdicciones: ["CABA", "Zona Norte", "Mercedes", "Necochea"],
  // Formato internacional sin signos: 54 9 11 ...
  whatsapp: "5491100000000",
  whatsappVisible: "+54 9 11 0000-0000",
  telefono: "+54 11 0000-0000",
  email: "contacto@raggioabogados.com.ar",
  matricula: "T° 000 F° 000 C.P.A.C.F.",
  direccion: "Av. Ejemplo 1234, piso 5, CABA",
  horario: "Capacidad de respuesta ágil, todos los días",
};

export function waLink(mensaje: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const waDefault = waLink(
  "Hola, quisiera realizar una consulta con Raggio Abogados. ¿Podrían indicarme cómo continuar?"
);
