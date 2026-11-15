import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { site } from "@/config/site";

// Texto pendiente de revisión por los abogados del estudio antes de publicarse.
const ACTUALIZADO = "15 de noviembre de 2026";

const proseCls = [
  "prose prose-lg max-w-none",
  "prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-[-0.01em] prose-headings:text-tinta",
  "prose-h2:mt-12 prose-h2:text-[1.5rem] prose-h2:leading-snug",
  "prose-p:text-[16px] prose-p:leading-[1.75] prose-p:text-pizarra",
  "prose-li:text-[16px] prose-li:leading-[1.7] prose-li:text-pizarra prose-li:marker:text-bronce",
  "prose-strong:font-semibold prose-strong:text-tinta",
  "prose-a:text-tinta prose-a:decoration-bronce/60 prose-a:underline-offset-4 hover:prose-a:text-bronce",
].join(" ");

const Privacidad = () => (
  <div className="min-h-screen bg-background">
    <Seo route="privacidad" />
    <Header variant="publicaciones" />
    <main>
      <header className="border-b border-piedra bg-papel">
        <div className="container py-10 lg:py-16">
          <span className="eyebrow text-bronce">Información legal</span>
          <span className="mt-4 block h-px w-16 rule-bronce" aria-hidden="true" />
          <h1 className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.015em] text-tinta sm:text-[2.75rem]">
            Política de privacidad
          </h1>
          <p className="mt-6 text-sm text-pizarra">Última actualización: {ACTUALIZADO}</p>
        </div>
      </header>

      <div className="container py-12 lg:py-16">
        <div className={`${proseCls} max-w-[44rem]`}>
          <p>
            En {site.nombre} tratamos con reserva la información que nos confían quienes nos
            consultan. Esta política explica qué datos personales recibimos a través de este sitio,
            para qué los usamos y cómo podés ejercer tus derechos sobre ellos, de acuerdo con la Ley
            25.326 de Protección de los Datos Personales.
          </p>

          <h2>Responsable de los datos</h2>
          <p>
            El responsable del tratamiento es {site.nombre}. Para cualquier consulta sobre tus datos
            podés escribirnos a <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>Qué datos recibimos</h2>
          <p>
            Solo recibimos los datos que vos decidís enviarnos. Cuando completás el formulario de
            contacto, el sitio arma un mensaje con tu nombre y apellido, tu teléfono, el motivo de la
            consulta y el texto que escribas, y lo abre en WhatsApp para que vos lo envíes. El sitio
            no guarda esa información: nos llega recién cuando enviás el mensaje. Lo mismo ocurre si
            nos escribís directamente por WhatsApp o por correo electrónico.
          </p>
          <p>
            Como una consulta jurídica puede incluir información delicada, te sugerimos que en el
            primer mensaje cuentes solo lo necesario para que podamos entender la situación. Los
            detalles y la documentación pueden quedar para la conversación con el abogado que tome
            tu consulta.
          </p>

          <h2>Para qué los usamos</h2>
          <p>
            Usamos tus datos para responder tu consulta y, si decidís avanzar, para brindarte el
            asesoramiento o la representación que corresponda. No los usamos para enviar publicidad,
            no los vendemos ni los cedemos a terceros, salvo que una ley o una orden judicial lo
            exija. Todo lo que nos cuentes queda alcanzado por el secreto profesional que rige el
            ejercicio de la abogacía.
          </p>

          <h2>Servicios de terceros</h2>
          <p>
            Para comunicarnos y para que este sitio funcione utilizamos servicios de otras empresas,
            que tratan la información según sus propias políticas:
          </p>
          <ul>
            <li>
              <strong>WhatsApp</strong> (Meta), para las conversaciones que inicies por ese medio.
            </li>
            <li>
              <strong>Google Workspace</strong>, para el correo electrónico del estudio.
            </li>
            <li>
              <strong>Cloudflare</strong>, que aloja el sitio y puede registrar datos técnicos de la
              visita, como la dirección IP, con fines de seguridad.
            </li>
            <li>
              <strong>Google Fonts</strong>, que provee las tipografías del sitio. Al cargarlas, tu
              navegador se conecta con servidores de Google.
            </li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Este sitio no utiliza cookies propias ni herramientas de análisis o de publicidad que
            sigan tu navegación. Si en el futuro incorporamos alguna, vamos a actualizar esta
            política y, cuando corresponda, a pedirte tu consentimiento antes de activarla.
          </p>

          <h2>Cuánto tiempo conservamos los datos</h2>
          <p>
            Conservamos los datos de una consulta durante el tiempo necesario para responderla. Si se
            inicia una relación profesional, los conservamos mientras dure y durante los plazos que
            exijan las obligaciones legales y profesionales del estudio.
          </p>

          <h2>Cómo cuidamos la información</h2>
          <p>
            Tomamos medidas razonables para proteger los datos que recibimos frente a accesos no
            autorizados, pérdidas o usos indebidos, y solo acceden a ellos los integrantes del
            estudio que necesitan hacerlo para atender tu consulta.
          </p>

          <h2>Tus derechos</h2>
          <p>
            Podés pedirnos en cualquier momento acceder a los datos que tengamos sobre vos,
            rectificarlos, actualizarlos o suprimirlos. Para hacerlo, escribinos a{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> indicando tu nombre y qué necesitás.
            Respondemos los pedidos de acceso dentro de los diez días corridos y los de
            rectificación, actualización o supresión dentro de los cinco días hábiles, como establece
            la ley.
          </p>
          <p>
            El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a
            ellos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite
            un interés legítimo al efecto, conforme lo establecido en el artículo 14, inciso 3, de
            la Ley 25.326. La Agencia de Acceso a la Información Pública, en su carácter de órgano
            de control de la Ley 25.326, tiene la atribución de atender las denuncias y reclamos
            que interpongan quienes resulten afectados en sus derechos por incumplimiento de las
            normas vigentes en materia de protección de datos personales.
          </p>

          <h2>Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política cuando cambie el sitio o la normativa. La fecha de la
            última actualización figura al comienzo de esta página.
          </p>
        </div>
      </div>
    </main>
    <Footer variant="publicaciones" />
  </div>
);

export default Privacidad;
