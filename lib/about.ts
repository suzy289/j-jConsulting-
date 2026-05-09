import type { Locale } from "@/lib/i18n";

export type AboutValue = { title: string; desc: string };

export type AboutCopy = {
  heroTitle: string;
  heroSubtitle: string;
  breadcrumbHome: string;
  breadcrumbAbout: string;
  founderKicker: string;
  founderName: string;
  founderAlt: string;
  bio: string[];
  missionKicker: string;
  missionTitle: string;
  missionP1: string;
  missionP2: string;
  visionKicker: string;
  visionTitle: string;
  visionP1: string;
  visionP2: string;
  valuesKicker: string;
  valuesTitle: string;
  valuesIntro: string;
  values: AboutValue[];
};

const FR: AboutCopy = {
  heroTitle: "L'histoire d'un homme,\nla naissance d'un cabinet.",
  heroSubtitle:
    "Un parcours forgé par la rigueur comptable, l'expérience terrain et une vision claire: offrir un accompagnement fiable aux entreprises.",
  breadcrumbHome: "Accueil",
  breadcrumbAbout: "À Propos",
  founderKicker: "Fondateur et Gérant",
  founderName: "Dongmo Djeutebing Darlain Brondon",
  founderAlt: "Dongmo Djeutebing Darlain Brondon — Gérant de J & J Consulting SARL",
  bio: [
    "Expert en audit, comptabilité et contrôle de gestion, Dongmo Djeutebing Darlain Brondon compte plus de dix ans d'expérience dans la finance d'entreprise et l'accompagnement stratégique des organisations. Titulaire d'un Master en Audit et Comptabilité de Gestion (ISMAT), il a consolidé une vision transversale des enjeux financiers en évoluant au sein de cabinets d'expertise-comptable et de structures industrielles.",
    "Ses domaines d'intervention couvrent l'audit et le commissariat aux comptes (analyse de conformité, fiabilisation de l'information financière, maîtrise des risques), le contrôle de gestion (optimisation des coûts, pilotage de la performance, outils d'aide à la décision) ainsi que l'ingénierie fiscale et comptable au service des PME et PMI.",
    "Après des fonctions de Coordonnateur des Opérations au cabinet COGEP LTD puis de Contrôleur de Gestion chez BETA PRINT SARL, il exerce comme consultant indépendant avant de fonder J & J Consulting SARL, afin de mettre son savoir-faire directement au service des entreprises.",
    "Sous sa direction, J & J Consulting SARL s'impose comme un partenaire de confiance pour les organisations en quête d'excellence opérationnelle : le cabinet est structuré autour de l'audit, de la comptabilité, de la fiscalité et de la finance, avec une approche sur mesure alliant rigueur déontologique et solutions adaptées aux contextes locaux.",
    "Son engagement professionnel : transformer la complexité comptable, fiscale et administrative en levier de croissance durable pour les clients du cabinet.",
  ],
  missionKicker: "Notre Mission",
  missionTitle: "Accompagner, conseiller et sécuriser",
  missionP1:
    "J & J Consulting SARL a pour mission d'accompagner les entreprises et organisations dans la gestion efficace de leurs obligations comptables, fiscales et financières. Nous apportons des solutions fiables, transparentes et conformes à la réglementation en vigueur.",
  missionP2:
    "Notre objectif : vous libérer de la complexité administrative pour que vous puissiez vous concentrer sur le cœur de votre activité.",
  visionKicker: "Notre Vision",
  visionTitle: "Devenir un cabinet de référence",
  visionP1:
    "Nous aspirons à devenir un cabinet de référence en audit, comptabilité et conseil fiscal au Cameroun et en Afrique. Reconnu pour son expertise, son intégrité et la qualité irréprochable de ses services.",
  visionP2: "Une ambition portée par l'excellence opérationnelle et la confiance mutuelle avec nos clients.",
  valuesKicker: "Nos Valeurs",
  valuesTitle: "Les 6 piliers de notre engagement",
  valuesIntro:
    "Chaque mission est guidée par des principes fondamentaux qui définissent notre manière de travailler et d'accompagner nos clients.",
  values: [
    {
      title: "Intégrité",
      desc: "Nous agissons avec honnêteté et éthique dans chacune de nos missions. La confiance de nos clients est notre capital le plus précieux.",
    },
    {
      title: "Excellence",
      desc: "Nous visons la qualité maximale dans chaque prestation. La rigueur et le souci du détail sont au centre de notre approche.",
    },
    {
      title: "Transparence",
      desc: "Des rapports clairs, des échanges francs. Nous favorisons une communication ouverte avec tous nos partenaires.",
    },
    {
      title: "Confidentialité",
      desc: "Vos données et votre patrimoine informationnel sont protégés. Le secret professionnel guide chacune de nos actions.",
    },
    {
      title: "Proximité",
      desc: "Un accompagnement humain et personnalisé. Nous sommes à l'écoute pour comprendre vos enjeux et y répondre.",
    },
    {
      title: "Innovation",
      desc: "Nous nous adaptons aux évolutions réglementaires et technologiques pour vous offrir des solutions toujours à jour.",
    },
  ],
};

const EN: AboutCopy = {
  heroTitle: "The story of a man,\nthe birth of a firm.",
  heroSubtitle:
    "A journey shaped by accounting rigor, hands-on experience, and a clear vision: delivering reliable support to businesses.",
  breadcrumbHome: "Home",
  breadcrumbAbout: "About",
  founderKicker: "Founder & Managing Director",
  founderName: "Dongmo Djeutebing Darlain Brondon",
  founderAlt: "Dongmo Djeutebing Darlain Brondon — Managing Director of J & J Consulting SARL",
  bio: [
    "An expert in audit, accounting and management control, Dongmo Djeutebing Darlain Brondon brings more than ten years of experience in corporate finance and strategic support to organizations. He holds a master’s degree in Audit and Management Accounting (ISMAT) and has developed a cross-cutting view of financial issues through roles in professional services firms and industrial companies.",
    "His areas of practice span audit and statutory audit work (compliance reviews, strengthening financial reporting, risk management), management control (cost optimization, performance management, decision-support tools), and tax and accounting advisory for SMEs.",
    "After serving as Operations Coordinator at COGEP LTD and as Management Controller at BETA PRINT SARL, he practiced as an independent consultant before founding J & J Consulting SARL to deliver his expertise directly to businesses.",
    "Under his leadership, J & J Consulting SARL operates as a trusted partner for organizations seeking operational excellence: the firm focuses on audit, accounting, tax and finance, combining professional rigor with tailored solutions aligned with local regulatory and business contexts.",
    "His professional commitment is to turn accounting, tax and administrative complexity into a sustainable driver of growth for the firm’s clients.",
  ],
  missionKicker: "Our mission",
  missionTitle: "Support, advise, and secure",
  missionP1:
    "J & J Consulting SARL’s mission is to support companies and organizations in effectively managing their accounting, tax and financial obligations. We provide reliable, transparent solutions compliant with current regulations.",
  missionP2:
    "Our goal: free you from administrative complexity so you can focus on your core business.",
  visionKicker: "Our vision",
  visionTitle: "Become a reference firm",
  visionP1:
    "We aspire to become a reference firm in audit, accounting and tax advisory in Cameroon and across Africa—recognized for expertise, integrity and consistently high-quality service.",
  visionP2: "An ambition driven by operational excellence and mutual trust with our clients.",
  valuesKicker: "Our values",
  valuesTitle: "The 6 pillars of our commitment",
  valuesIntro:
    "Each engagement is guided by core principles that define how we work and how we support our clients.",
  values: [
    {
      title: "Integrity",
      desc: "We act with honesty and ethics in every engagement. Client trust is our most valuable asset.",
    },
    {
      title: "Excellence",
      desc: "We aim for top quality in every service. Rigor and attention to detail are central to our approach.",
    },
    {
      title: "Transparency",
      desc: "Clear reporting and open conversations. We foster transparent communication with all stakeholders.",
    },
    {
      title: "Confidentiality",
      desc: "Your data and information assets are protected. Professional secrecy guides every action we take.",
    },
    {
      title: "Proximity",
      desc: "Human, personalized support. We listen carefully to understand your challenges and respond effectively.",
    },
    {
      title: "Innovation",
      desc: "We adapt to regulatory and technological changes to provide solutions that stay up to date.",
    },
  ],
};

export function getAboutCopy(locale: Locale): AboutCopy {
  return locale === "en" ? EN : FR;
}

