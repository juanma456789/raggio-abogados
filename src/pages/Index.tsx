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
import { site } from "@/config/site";

const descripcion =
  "Estudio jurídico para personas, familias y empresas. Derecho de Familia, Laboral, Civil y Comercial, Penal y asesoramiento empresarial en CABA y Buenos Aires.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.nombre,
  description: descripcion,
  areaServed: ["Ciudad Autónoma de Buenos Aires", "Provincia de Buenos Aires"],
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressCountry: "AR",
  },
};

const Index = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Raggio Abogados | Estudio jurídico en CABA y Buenos Aires"
      description={descripcion}
      path="/"
      jsonLd={jsonLd}
    />
    <Header variant="home" />
    <main>
      <HeroHome />
      <Presentacion />
      <AreasDerecho />
      <Areas />
      <Empresas />
      <Trabajo titulo="Una forma de trabajar clara y ordenada" pasos={pasosGenerales} tono="arena" />
      <Cobertura texto={textoCoberturaGeneral} zonas={zonasGenerales} />
      <Contacto
        titulo="Contanos brevemente qué necesitás"
        texto="Compartinos una breve descripción de tu consulta. La analizamos y te indicamos cómo podemos ayudarte."
        waMensaje="Hola, quisiera iniciar una consulta con Raggio Abogados. Mi consulta es la siguiente:"
        motivos={motivosGenerales}
        tituloForm="Dejanos tu consulta y te contactamos por WhatsApp"
        bajadaForm="Completá estos datos y nos comunicaremos por WhatsApp al número indicado."
        confirmacion="Recibimos tu consulta. Nos comunicaremos por WhatsApp al número que indicaste."
      />
    </main>
    <Footer variant="home" />
    <FloatingWhatsApp />
  </div>
);

export default Index;
