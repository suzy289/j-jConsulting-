export const SITE = {
  name: "J & J Consulting SARL",
  tagline: "Votre partenaire en Audit, Comptabilité & Conseil Fiscal",
  location: "Quartier Yaoundé / Quartier Fouda, Yaoundé, Cameroun",
  email: "suzynoumbissi@gmail.com",
  whatsapp: "237694944616",
  phones: ["(+237) 6 94 94 46 16", "(+237) 6 78 45 67 81"],
  address: "Quartier Yaoundé / Quartier Fouda, Yaoundé, Cameroun",
  niu: "M022416451146F",
  rccm: "RC/YAO/2024/B/474",
} as const;

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsapp}`;
export const WHATSAPP_MESSAGE = "Bonjour, je souhaite des informations sur vos services. Merci.";

/** Page de réservation Calendly (ex. https://calendly.com/votre-compte/entretien). À définir dans .env.local : NEXT_PUBLIC_CALENDLY_URL */
export const CALENDLY_URL =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_CALENDLY_URL
    ? process.env.NEXT_PUBLIC_CALENDLY_URL.trim()
    : "";
