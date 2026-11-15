import { useEffect } from "react";
import seo from "@/config/seo.json";
import type { Meta } from "@/lib/publicaciones-core";

type RouteKey = keyof typeof seo.routes;

type Props = { route: RouteKey; jsonLd?: unknown; meta?: never } | { meta: Meta; jsonLd?: unknown; route?: never };

const setMeta = (attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const removeMeta = (attr: "name" | "property", key: string) =>
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
};

const metaDeRuta = (key: RouteKey): Meta => {
  const r = seo.routes[key];
  return {
    title: r.title,
    description: r.description,
    canonical: r.canonical,
    robots: seo.site.robots,
    og: { type: "website", url: r.og.url, image: r.og.image, imageAlt: r.og.imageAlt },
  };
};

/**
 * Sincroniza el <head> durante la navegación del lado del cliente.
 * La metainformación que reciben los buscadores se entrega en el HTML inicial
 * de cada ruta (ver scripts/prerender.mjs); esto solo mantiene el estado del navegador.
 */
export const Seo = (props: Props) => {
  const m = props.meta ?? metaDeRuta(props.route);
  const { jsonLd } = props;
  const key = JSON.stringify(m);

  useEffect(() => {
    document.title = m.title;
    setMeta("name", "description", m.description);
    setMeta("name", "robots", m.robots);
    setLink("canonical", m.canonical);
    setMeta("property", "og:site_name", seo.site.name);
    setMeta("property", "og:title", m.title);
    setMeta("property", "og:description", m.description);
    setMeta("property", "og:type", m.og.type);
    setMeta("property", "og:locale", seo.site.locale);
    setMeta("property", "og:url", m.og.url);
    setMeta("property", "og:image", m.og.image);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:image:alt", m.og.imageAlt);
    if (m.article) {
      setMeta("property", "article:published_time", m.article.published);
      setMeta("property", "article:modified_time", m.article.modified);
      setMeta("property", "article:section", m.article.section);
    } else {
      removeMeta("property", "article:published_time");
      removeMeta("property", "article:modified_time");
      removeMeta("property", "article:section");
    }

    // Sin jsonLd se conserva el que vino en el HTML inicial (home y Derecho Penal).
    if (!jsonLd) return;
    let script = document.getElementById("ld-route") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-route";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, jsonLd]);

  return null;
};
