import { NextResponse } from "next/server";
import { Resend } from "resend";

const DEFAULT_CONTACT_EMAIL = "suzynoumbissi@gmail.com";

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, whatsapp, service, message, whatsappContact } = body;

    if (!name || !email || !whatsapp || !service || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;

    /** Web3Forms : utiliser NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY + envoi depuis le navigateur (voir ContactPageClient). */

    if (resendKey) {
      const fromEmail =
        process.env.RESEND_FROM_EMAIL || "J & J Consulting <onboarding@resend.dev>";
      const toEmail = process.env.CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL;
      const resend = new Resend(resendKey);
      const safe = {
        name: escapeHtml(String(name)),
        email: escapeHtml(String(email)),
        company: escapeHtml(String(company || "—")),
        whatsapp: escapeHtml(String(whatsapp)),
        service: escapeHtml(String(service)),
        message: escapeHtml(String(message)).replaceAll("\n", "<br>"),
      };
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo: String(email),
        subject: `[J & J Consulting] Contact — ${service}`,
        html: `
          <h2>Nouvelle demande de contact</h2>
          <p><strong>Nom :</strong> ${safe.name}</p>
          <p><strong>Email :</strong> ${safe.email}</p>
          <p><strong>Entreprise :</strong> ${safe.company}</p>
          <p><strong>WhatsApp :</strong> ${safe.whatsapp}</p>
          <p><strong>Axe / service :</strong> ${safe.service}</p>
          <p><strong>Contact WhatsApp souhaité :</strong> ${whatsappContact ? "Oui" : "Non"}</p>
          <h3>Message :</h3>
          <p>${safe.message}</p>
        `,
      });

      if (error) {
        console.error("Erreur Resend:", error);
        return NextResponse.json({ error: "Échec de l'envoi" }, { status: 500 });
      }
      return NextResponse.json({ success: true });
    }

    console.warn(
      "Contact : ajoutez NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (formulaire) ou RESEND_API_KEY dans .env.local"
    );
    return NextResponse.json(
      {
        error:
          "Mails non configurés : ajoutez NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (Web3Forms, côté navigateur) ou RESEND_API_KEY.",
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
