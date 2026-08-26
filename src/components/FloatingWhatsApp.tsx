import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waDefault } from "@/config/site";

export const FloatingWhatsApp = () => (
  <a
    href={waDefault}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escribir por WhatsApp al estudio"
    className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-lift transition-transform hover:scale-105 md:bottom-8 md:right-8 md:px-5"
  >
    <WhatsAppIcon className="h-6 w-6" />
    <span className="hidden sm:inline">Consulta por WhatsApp</span>
    <span className="sm:hidden">WhatsApp</span>
  </a>
);
