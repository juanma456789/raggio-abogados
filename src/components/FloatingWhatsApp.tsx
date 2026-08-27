import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waDefault } from "@/config/site";

export const FloatingWhatsApp = () => (
  <a
    href={waDefault}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escribir por WhatsApp al estudio"
    className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-sm bg-whatsapp px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-whatsapp-foreground shadow-lift transition-colors hover:bg-whatsapp-hover md:bottom-8 md:right-8 md:px-5"
  >
    <WhatsAppIcon className="h-5 w-5" />
    <span className="hidden sm:inline">Hablar por WhatsApp</span>
    <span className="sm:hidden">WhatsApp</span>
  </a>
);
