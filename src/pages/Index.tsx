import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Urgencias } from "@/components/sections/Urgencias";
import { Situaciones } from "@/components/sections/Situaciones";
import { Proceso } from "@/components/sections/Proceso";
import { Estudio } from "@/components/sections/Estudio";
import { Cobertura } from "@/components/sections/Cobertura";
import { Faq, faqs } from "@/components/sections/Faq";
import { Contacto } from "@/components/sections/Contacto";
import { site } from "@/config/site";

const Index = () => {
  useEffect(() => {
    const id = "faq-jsonld";
    document.getElementById(id)?.remove();
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LegalService",
          name: site.nombre,
          description:
            "Estudio jurídico con foco en Derecho Penal. Defensa y representación en investigaciones y causas penales en CABA, Zona Norte, Mercedes y Necochea.",
          areaServed: [
            "Ciudad Autónoma de Buenos Aires",
            "Zona Norte del Gran Buenos Aires",
            "Mercedes",
            "Necochea",
          ],
          telephone: site.telefono,
          email: site.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.direccion,
            addressLocality: "Ciudad Autónoma de Buenos Aires",
            addressCountry: "AR",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Urgencias />
        <Situaciones />
        <Proceso />
        <Estudio />
        <Cobertura />
        <Faq />
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
