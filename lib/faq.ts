export interface FAQItem {
  question: string;
  answer: string;
}

export type LocalizedFAQ = Record<"fr" | "en", FAQItem[]>;

export const faqItemsByLocale: LocalizedFAQ = {
  fr: [
  {
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer:
      "J & J Consulting SARL accompagne tous les types de structures : TPE, PME, startups, ONG, associations, entrepreneurs individuels et grandes entreprises, dans tous les secteurs d'activité au Cameroun.",
  },
  {
    question: "Proposez-vous une première consultation gratuite ?",
    answer:
      "Oui. Nous offrons un premier échange de diagnostic sans frais pour comprendre vos besoins et vous orienter vers la solution la plus adaptée à votre situation.",
  },
  {
    question: "Comment sont fixés vos honoraires ?",
    answer:
      "Nos honoraires sont fixés sur devis, en toute transparence, selon la nature et la complexité de la mission. Aucun frais caché. Tout est convenu par écrit avant le début de la mission.",
  },
  {
    question: "Assurez-vous la confidentialité de nos données financières ?",
    answer:
      "La confidentialité est l'une de nos valeurs fondamentales. Toutes vos données sont traitées avec la plus stricte discrétion et protégées conformément aux règles déontologiques de la profession.",
  },
  {
    question: "Intervenez-vous uniquement à Yaoundé ?",
    answer:
      "Non. Bien que basés à Yaoundé, nous intervenons sur l'ensemble du territoire camerounais et acceptons des missions à distance pour les clients hors de la capitale.",
  },
  {
    question: "Pouvez-vous former mon équipe comptable ?",
    answer:
      "Absolument. Nous proposons des formations professionnelles sur mesure en comptabilité, fiscalité, Sage Saari, contrôle de gestion et gestion financière.",
  },
  {
    question: "Quels logiciels maîtrisez-vous ?",
    answer:
      "Sage Saari principalement, ainsi que les outils bureautiques avancés (Excel, Word, PowerPoint) et les plateformes de télé-déclaration DGI/CNPS du Cameroun.",
  },
  {
    question: "Puis-je vous contacter en urgence ?",
    answer:
      "Oui. Pour toute urgence (redressement fiscal, contrôle inopiné, clôture urgente), contactez-nous directement sur WhatsApp pour une réponse immédiate.",
  },
],
  en: [
    {
      question: "What types of businesses do you support?",
      answer:
        "J & J Consulting SARL supports all types of structures: micro-businesses, SMEs, startups, NGOs, associations, individual entrepreneurs and large companies across all sectors in Cameroon.",
    },
    {
      question: "Do you offer a free first consultation?",
      answer:
        "Yes. We offer an initial diagnostic exchange at no cost to understand your needs and guide you toward the most suitable solution.",
    },
    {
      question: "How are your fees determined?",
      answer:
        "Our fees are quoted transparently based on the nature and complexity of the engagement. No hidden fees. Everything is agreed in writing before the work begins.",
    },
    {
      question: "Do you ensure confidentiality of our financial data?",
      answer:
        "Confidentiality is one of our core values. Your data is handled with strict discretion and protected in accordance with professional ethics.",
    },
    {
      question: "Do you work only in Yaoundé?",
      answer:
        "No. Although based in Yaoundé, we operate across Cameroon and can deliver remote engagements for clients outside the capital.",
    },
    {
      question: "Can you train my accounting team?",
      answer:
        "Absolutely. We offer tailored professional training in accounting, tax, Sage Saari, management control and financial management.",
    },
    {
      question: "Which software do you use?",
      answer:
        "Primarily Sage Saari, as well as advanced office tools (Excel, Word, PowerPoint) and Cameroon’s DGI/CNPS e-filing platforms.",
    },
    {
      question: "Can I reach you in an emergency?",
      answer:
        "Yes. For any emergency (tax adjustment, unexpected audit, urgent closing), contact us directly on WhatsApp for a quick response.",
    },
  ],
};

export const faqItems: FAQItem[] = faqItemsByLocale.fr;

