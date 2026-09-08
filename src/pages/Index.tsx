import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Seo } from "@/components/Seo";
import { HeroHome } from "@/components/home/HeroHome";
import { Presentacion } from "@/components/home/Presentacion";
import { AreasDerecho } from "@/components/home/AreasDerecho";
import { Areas } from "@/components/home/Areas";
import { Empresas } from "@/components/home/Empresas";
import { Trabajo, pasosGenerales } from "@/components/sections/Trabajo";
import {
  Cobertura,
  textoCoberturaGeneral,
  zonasGenerales,
} from "@/components/sections/Cobertura";
import { Contacto, motivosGenerales } from "@/components/sections/Contacto";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Seo route="home" />
    <Header variant="home" />
    <main>
      <HeroHome />
      <Presentacion />
      <AreasDerecho />
      <Areas />
      <Empresas />
<Trabajo
        titulo="Una forma de trabajar clara y ordenada"
        pasos={pasosGenerales}
        tono="arena"
        imagenBajoTitulo
      />
      <Cobertura texto={textoCoberturaGeneral} zonas={zonasGenerales} />
      <Contacto
        titulo="Contanos brevemente qué necesitás"
        texto="Compartinos una breve descripción de tu consulta. La analizamos y te indicamos cómo podemos ayudarte."
        waMensaje="Hola, quisiera iniciar una consulta con Raggio Abogados. Mi consulta es la siguiente:"
        motivos={motivosGenerales}
        tituloForm="Dejanos tu consulta y enviala por WhatsApp"
        bajadaForm="Completá estos datos y se abrirá WhatsApp con tu consulta lista para enviar."
        confirmacion="Se abrió WhatsApp con tu consulta. Solo tenés que enviar el mensaje para que llegue al estudio."
      />
    </main>
    <Footer variant="home" />
    <FloatingWhatsApp />
  </div>
);

export default Index;
