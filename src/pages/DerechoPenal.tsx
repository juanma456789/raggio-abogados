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
import { Faq, faqs } from "@/components/sections/Faq";
import { Contacto } from "@/components/sections/Contacto";
import { site } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      name: `${site.nombre} · Derecho Penal`,
      description:
        "Abogados penalistas en CABA y provincia de Buenos Aires. Defensa en causas penales, citaciones, detenciones, querellas y penal económico.",
      areaServed: ["Ciudad Autónoma de Buenos Aires", "Provincia de Buenos Aires"],
      email: site.email,
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
};

const DerechoPenal = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Abogados penalistas en CABA y Buenos Aires | Raggio Abogados"
      description="Defensa penal, citaciones, detenciones, querellas y penal económico. Asesoramiento directo por WhatsApp en CABA y provincia de Buenos Aires."
      path="/derecho-penal"
      jsonLd={jsonLd}
    />
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
