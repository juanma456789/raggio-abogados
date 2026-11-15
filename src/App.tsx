import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Consentimiento } from "@/components/consentimiento/Consentimiento";
import Index from "./pages/Index";
import DerechoPenal from "./pages/DerechoPenal";
import Publicaciones from "./pages/Publicaciones";
import Publicacion from "./pages/Publicacion";
import PublicacionesRedes from "./pages/PublicacionesRedes";
import Privacidad from "./pages/Privacidad";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Consentimiento />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/derecho-penal" element={<DerechoPenal />} />
          <Route path="/publicaciones" element={<Publicaciones />} />
          <Route path="/publicaciones/redes" element={<PublicacionesRedes />} />
          <Route path="/publicaciones/:slug" element={<Publicacion />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
