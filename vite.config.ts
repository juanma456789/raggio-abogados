import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { readFileSync } from "fs";
import { mostrarBorradores } from "./scripts/borradores.mjs";

/**
 * Cuando el build no muestra borradores (producción), sus archivos .md se reemplazan por un
 * texto vacío para que su contenido no viaje dentro del JavaScript publicado.
 */
const excluirBorradores = (mostrar: boolean): Plugin => ({
  name: "excluir-borradores",
  enforce: "pre",
  load(id) {
    if (mostrar || !/\/src\/content\/publicaciones\/[^/]+\.md\?raw$/.test(id)) return null;
    const raw = readFileSync(id.replace(/\?raw$/, ""), "utf8");
    const estado = /^---[\s\S]*?^estado:\s*["']?(\w+)/m.exec(raw)?.[1];
    return estado === "publicado" ? null : 'export default ""';
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const mostrar = mostrarBorradores(mode);
  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [excluirBorradores(mostrar), react()],
    define: {
      // Publicaciones en estado "borrador": visibles en desarrollo y vistas previas, nunca en producción.
      __MOSTRAR_BORRADORES__: JSON.stringify(mostrar),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
    },
  };
});
