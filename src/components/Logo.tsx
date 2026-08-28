import isotipo from "@/assets/logo-isotipo.png";

type Props = {
  /** "ink" para fondos claros, "paper" para fondos oscuros. */
  variant?: "ink" | "paper";
  /** Altura del lockup en px. */
  size?: number;
  className?: string;
};

/**
 * Lockup oficial de Raggio Abogados reconstruido:
 * isotipo (PNG original, sin deformar) + separador + nombre en Cormorant.
 */
export const Logo = ({ variant = "ink", size = 40, className = "" }: Props) => {
  const paper = variant === "paper";

  return (
    <span
      className={`inline-flex select-none items-center ${className}`}
      style={{ height: size }}
      aria-label="Raggio Abogados"
      role="img"
    >
      <img
        src={isotipo}
        alt=""
        aria-hidden="true"
        style={{ height: size * 0.92 }}
        className={`w-auto object-contain ${paper ? "brightness-0 invert" : ""}`}
      />
      <span
        aria-hidden="true"
        style={{
          height: size * 0.8,
          marginLeft: size * 0.3,
          marginRight: size * 0.34,
        }}
        className={`w-px ${paper ? "bg-papel/40" : "bg-tinta/25"}`}
      />
      <span className={`flex flex-col justify-center ${paper ? "text-papel" : "text-tinta"}`}>
        <span
          className="font-logo font-medium leading-none"
          style={{ fontSize: size * 0.5, letterSpacing: size * 0.06 }}
        >
          RAGGIO
        </span>
        <span
          className="font-logo leading-none"
          style={{
            fontSize: size * 0.27,
            letterSpacing: size * 0.085,
            marginTop: size * 0.16,
          }}
        >
          ABOGADOS
        </span>
      </span>
    </span>
  );
};
