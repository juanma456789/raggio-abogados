import { media } from "@/assets/media";

type Props = {
  /** "ink" para fondos claros, "paper" para fondos oscuros. */
  variant?: "ink" | "paper";
  className?: string;
};

/**
 * Imagotipo oficial de Raggio Abogados (símbolo + nombre), usado tal cual.
 * La variante "paper" sólo cambia el color para fondos oscuros.
 */
export const Logo = ({ variant = "ink", className = "" }: Props) => (
  <img
    src={media.logoLockup}
    alt="Raggio Abogados"
    className={`w-auto object-contain ${
      variant === "paper" ? "brightness-0 invert" : ""
    } ${className}`}
  />
);
