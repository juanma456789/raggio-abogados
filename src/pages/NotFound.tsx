import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Header variant="publicaciones" />
    <main className="container flex flex-1 flex-col items-start justify-center py-20">
      <span className="eyebrow text-bronce">Error 404</span>
      <h1 className="mt-4 font-display text-3xl text-tinta sm:text-4xl">No encontramos esta página</h1>
      <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-pizarra">
        Puede que la dirección esté mal escrita o que la página ya no exista.
      </p>
      <Link to="/" className="mt-8 border-b border-bronce/50 pb-1 text-sm text-tinta hover:text-bronce">
        Volver al inicio
      </Link>
    </main>
    <Footer variant="publicaciones" />
  </div>
);

export default NotFound;
