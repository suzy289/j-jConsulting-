import type { Locale } from "@/lib/i18n";

export type ReferenceTestimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type ReferenceCopy = {
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  heroFigureAlt: string;
  partnersTitle: string;
  partnersSubtitle: string;
  becomePartner: string;
  clientsTitle: string;
  clientsSubtitle: string;
  interventionsTitle: string;
  interventionsSubtitle: string;
  rotatingTestimonials: ReferenceTestimonial[];
};

const FR: ReferenceCopy = {
  heroKicker: "Références",
  heroTitle: "Ils nous font confiance",
  heroSubtitle: "Des entreprises de toutes tailles qui ont choisi J & J Consulting comme partenaire financier.",
  heroFigureAlt: "Illustration d'un groupe de personnes",
  partnersTitle: "Nos partenaires",
  partnersSubtitle:
    "Un réseau d'entreprises et d'institutions qui nous accordent leur confiance pour structurer, sécuriser et améliorer leur gestion financière.",
  becomePartner: "Devenir partenaire",
  clientsTitle: "Témoignages clients",
  clientsSubtitle:
    "Découvrez les retours d'expérience de dirigeants et responsables qui ont constaté une amélioration concrète de leur pilotage financier avec notre accompagnement.",
  interventionsTitle: "Nos interventions",
  interventionsSubtitle:
    "Une sélection de missions illustrant notre capacité à intervenir avec rigueur, discrétion et efficacité auprès d'organisations de secteurs variés.",
  rotatingTestimonials: [
    {
      id: "r1",
      quote:
        "L'équipe a repris notre comptabilité mensuelle avec méthode et nous a aidés à réduire les écarts de trésorerie en moins d'un trimestre.",
      author: "Directrice Administrative",
      role: "DAF",
      company: "Groupe de Distribution",
    },
    {
      id: "r2",
      quote:
        "Leur audit interne nous a permis d'identifier des risques opérationnels critiques et de mettre en place des contrôles simples mais efficaces.",
      author: "Responsable Financier",
      role: "Responsable Financier",
      company: "PME Industrielle",
    },
    {
      id: "r3",
      quote:
        "Nous avons gagné en visibilité sur nos coûts et nos marges grâce à leurs tableaux de bord. Les décisions sont désormais prises plus rapidement.",
      author: "Directeur Général",
      role: "DG",
      company: "Entreprise de Services",
    },
    {
      id: "r4",
      quote:
        "Leur accompagnement fiscal nous a aidés à sécuriser nos déclarations et à éviter des pénalités qui pesaient sur notre croissance.",
      author: "Fondatrice",
      role: "CEO",
      company: "Startup Tech",
    },
    {
      id: "r5",
      quote:
        "Ils ont structuré notre processus budgétaire annuel et instauré un suivi mensuel clair pour chaque département.",
      author: "Secrétaire Générale",
      role: "Secrétaire Générale",
      company: "Organisation Professionnelle",
    },
    {
      id: "r6",
      quote:
        "Le cabinet nous apporte une vraie proximité: réponses rapides, conseils pratiques et actions concrètes adaptées à notre réalité terrain.",
      author: "Gérant",
      role: "Gérant",
      company: "PME Partenaire",
    },
    {
      id: "r7",
      quote:
        "Nous avons amélioré notre conformité comptable tout en réduisant les délais de clôture grâce à leur méthode de travail.",
      author: "Comptable Senior",
      role: "Cheffe Comptable",
      company: "Société Commerciale",
    },
    {
      id: "r8",
      quote:
        "Le diagnostic financier initial a été déterminant: il a clarifié nos priorités d'investissement et sécurisé notre plan de développement.",
      author: "Président",
      role: "Président",
      company: "Cabinet Médical",
    },
    {
      id: "r9",
      quote:
        "Leur accompagnement au contrôle de gestion a professionnalisé notre pilotage et renforcé la confiance de nos partenaires financiers.",
      author: "Directeur des Opérations",
      role: "COO",
      company: "Entreprise Multisites",
    },
  ],
};

const EN: ReferenceCopy = {
  heroKicker: "References",
  heroTitle: "They trust us",
  heroSubtitle: "Companies of all sizes that chose J & J Consulting as their financial partner.",
  heroFigureAlt: "Illustration of a group of people",
  partnersTitle: "Our partners",
  partnersSubtitle:
    "A network of companies and institutions that trust us to structure, secure, and improve their financial management.",
  becomePartner: "Become a partner",
  clientsTitle: "Client testimonials",
  clientsSubtitle:
    "Discover feedback from executives and managers who achieved a tangible improvement in financial steering with our support.",
  interventionsTitle: "Our engagements",
  interventionsSubtitle:
    "A selection of missions illustrating our ability to intervene with rigor, discretion, and efficiency across various sectors.",
  rotatingTestimonials: [
    {
      id: "r1",
      quote:
        "The team took over our monthly bookkeeping methodically and helped reduce cash-flow gaps in less than a quarter.",
      author: "Administrative Director",
      role: "CFO",
      company: "Distribution group",
    },
    {
      id: "r2",
      quote:
        "Their internal audit helped us identify critical operational risks and implement simple yet effective controls.",
      author: "Finance Manager",
      role: "Finance Manager",
      company: "Industrial SME",
    },
    {
      id: "r3",
      quote:
        "We gained visibility into our costs and margins thanks to their dashboards. Decisions are now made faster.",
      author: "Managing Director",
      role: "CEO",
      company: "Services company",
    },
    {
      id: "r4",
      quote:
        "Their tax support helped us secure our filings and avoid penalties that were weighing on our growth.",
      author: "Founder",
      role: "CEO",
      company: "Tech startup",
    },
    {
      id: "r5",
      quote:
        "They structured our annual budgeting process and set up clear monthly monitoring for each department.",
      author: "Secretary General",
      role: "Secretary General",
      company: "Professional organization",
    },
    {
      id: "r6",
      quote:
        "The firm provides real proximity: fast responses, practical advice, and concrete actions tailored to our reality.",
      author: "Owner",
      role: "Owner",
      company: "Partner SME",
    },
    {
      id: "r7",
      quote:
        "We improved our accounting compliance while reducing closing timelines thanks to their working method.",
      author: "Senior accountant",
      role: "Chief accountant",
      company: "Commercial company",
    },
    {
      id: "r8",
      quote:
        "The initial financial diagnosis was decisive: it clarified our investment priorities and secured our development plan.",
      author: "President",
      role: "President",
      company: "Medical practice",
    },
    {
      id: "r9",
      quote:
        "Their support in management control professionalized our steering and strengthened trust from our financial partners.",
      author: "Operations Director",
      role: "COO",
      company: "Multi-site company",
    },
  ],
};

export function getReferencesCopy(locale: Locale): ReferenceCopy {
  return locale === "en" ? EN : FR;
}

