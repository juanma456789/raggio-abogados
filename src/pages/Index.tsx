import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Seo } from "@/components/Seo";
import { HeroHome } from "@/components/home/HeroHome";
import { Presentacion } from "@/components/home/Presentacion";
import { Areas } from "@/components/home/Areas";
import { Trabajo } from "@/components/sections/Trabajo";
import { Cobertura } from "@/components/sections/Cobertura";
import { Contacto } from "@/components/sections/Contacto";
import { site } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.nombre,
  description:
    "Estudio jurídico con foco en Derecho Penal. Asesoramiento y representación en CABA y provincia de Buenos Aires.",
  areaServed: [
    "Ciudad Autónoma de Buenos Aires",
    "Zona Norte del Gran Buenos Aires",
    "Mercedes",
    "Necochea",
  ],
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
      description="Estudio jurídico con foco en Derecho Penal. Asesoramiento directo, análisis del caso y representación en CABA y provincia de Buenos Aires."
      path="/"
      jsonLd={jsonLd}
    />
    <Header variant="home" />
    <main>
      <HeroHome />
      <Presentacion />
      <Areas />
      <Trabajo />
      <Cobertura />
      <Contacto texto="Contanos brevemente qué necesitás y en qué jurisdicción se encuentra el asunto. Analizamos la situación y te indicamos cómo podemos intervenir." />
    </main>
    <Footer variant="home" />
    <FloatingWhatsApp />
  </div>
);

export default Index;
