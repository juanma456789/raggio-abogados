import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waDefault } from "@/config/site";

export const FloatingWhatsApp = () => (
  <a
    href={waDefault}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escribir por WhatsApp al estudio"
    className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-[8px] bg-whatsapp px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-whatsapp-foreground shadow-[0_10px_28px_-10px_hsl(150_65%_16%/0.65)] transition-all duration-200 hover:-translate-y-px hover:bg-whatsapp-hover md:bottom-8 md:right-8 md:px-5"
  >
    <WhatsAppIcon className="h-5 w-5" />
    <span>WhatsApp</span>
  </a>
);
