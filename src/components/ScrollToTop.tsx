import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Restablece el scroll al tope al cambiar de página (no afecta anclas #). */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};
