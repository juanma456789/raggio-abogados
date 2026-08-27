import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const DESTINO = Deno.env.get("CONSULTAS_EMAIL_DESTINO") ?? "contacto@raggioabogados.com.ar";
const REMITENTE = Deno.env.get("CONSULTAS_EMAIL_REMITENTE") ?? "Raggio Abogados <onboarding@resend.dev>";

type Consulta = {
  nombre?: string;
  telefono?: string;
  email?: string;
  jurisdiccion?: string;
  motivo?: string;
  mensaje?: string;
  preferencia?: string;
};

const esc = (v = "") =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = (await req.json()) as Consulta;
    const nombre = (body.nombre ?? "").trim();
    const mensaje = (body.mensaje ?? "").trim();

    if (!nombre || !mensaje) {
      return new Response(JSON.stringify({ error: "Datos incompletos" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const filas: [string, string][] = [
      ["Nombre y apellido", nombre],
      ["Teléfono", body.telefono ?? ""],
      ["Correo electrónico", body.email ?? ""],
      ["Localidad o jurisdicción", body.jurisdiccion ?? ""],
      ["Motivo", body.motivo ?? ""],
      ["Preferencia de contacto", body.preferencia ?? ""],
      ["Mensaje", mensaje],
    ];

    // Registro de respaldo en la base de datos.
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );
    const { error: dbError } = await supabase.from("consultas").insert({
      nombre,
      telefono: body.telefono ?? null,
      email: body.email ?? null,
      jurisdiccion: body.jurisdiccion ?? null,
      motivo: body.motivo ?? null,
      preferencia: body.preferencia ?? null,
      mensaje,
    });
    if (dbError) console.error("Error guardando la consulta:", dbError.message);

    // Envío por correo electrónico.
    const apiKey = Deno.env.get("RESEND_API_KEY");
    let emailEnviado = false;
    if (apiKey) {
      const html = `<h2 style="font-family:Georgia,serif">Nueva consulta desde el sitio</h2>
<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
${filas
  .map(
    ([k, v]) =>
      `<tr><td style="padding:6px 12px 6px 0;color:#5A5F66;vertical-align:top"><strong>${k}</strong></td><td style="padding:6px 0">${esc(
        v
      ).replace(/\n/g, "<br>")}</td></tr>`
  )
  .join("")}
</table>`;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: REMITENTE,
          to: [DESTINO],
          reply_to: body.email || undefined,
          subject: `Consulta web · ${body.motivo ?? "Sin motivo"} · ${nombre}`,
          html,
        }),
      });
      emailEnviado = res.ok;
      if (!res.ok) console.error("Error enviando el email:", await res.text());
    } else {
      console.warn("RESEND_API_KEY no configurada: la consulta se guardó sin enviar email.");
    }

    return new Response(JSON.stringify({ ok: true, emailEnviado }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Error inesperado" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
