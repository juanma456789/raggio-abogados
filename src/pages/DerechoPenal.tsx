import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Seo } from "@/components/Seo";
import { HeroPenal } from "@/components/penal/HeroPenal";
import { Recomendaciones } from "@/components/penal/Recomendaciones";
import { Casos } from "@/components/penal/Casos";
import { Trabajo } from "@/components/sections/Trabajo";
import { Estudio } from "@/components/sections/Estudio";
import { Cobertura } from "@/components/sections/Cobertura";
import { Faq } from "@/components/sections/Faq";
import { Contacto } from "@/components/sections/Contacto";

const DerechoPenal = () => (
  <div className="min-h-screen bg-background">
    <Seo route="derechoPenal" />
    <Header variant="penal" />
    <main>
      <HeroPenal />
      <Recomendaciones />
      <Casos />
      <Trabajo imagenBajoTitulo />
      <Estudio />
      <Cobertura />
      <Faq />
      <Contacto
        tituloForm="Dejanos tu consulta y te contactamos por WhatsApp"
        bajadaForm="Completá estos datos y nos comunicaremos al número indicado."
      />
    </main>
    <Footer variant="penal" />
    <FloatingWhatsApp />
  </div>
);

export default DerechoPenal;
