import { useEffect } from "react";
import seo from "@/config/seo.json";

type RouteKey = keyof typeof seo.routes;

type Props = { route: RouteKey; jsonLd?: unknown };

const setMeta = (attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
};

/**
 * Sincroniza el <head> durante la navegación del lado del cliente.
 * La metainformación que reciben los buscadores se entrega en el HTML inicial
 * de cada ruta (ver scripts/prerender.mjs); esto solo mantiene el estado del navegador.
 */
export const Seo = ({ route, jsonLd }: Props) => {
  useEffect(() => {
    const r = seo.routes[route];
    document.title = r.title;
    setMeta("name", "description", r.description);
    setMeta("name", "robots", seo.site.robots);
    setLink("canonical", r.canonical);
    setMeta("property", "og:site_name", seo.site.name);
    setMeta("property", "og:title", r.title);
    setMeta("property", "og:description", r.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:locale", seo.site.locale);
    setMeta("property", "og:url", r.og.url);
    setMeta("property", "og:image", r.og.image);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:image:alt", r.og.imageAlt);

    if (!jsonLd) return;
    let script = document.getElementById("ld-route") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-route";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [route, jsonLd]);

  return null;
};
