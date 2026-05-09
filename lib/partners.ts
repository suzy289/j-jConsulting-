export interface Partner {
  id: string;
  name: string;
  shortName?: string;
  logo?: string;
  services?: string;
}

export const partners: Partner[] = [
  {
    id: "bestaco",
    name: "Best Technical According Corporation",
    shortName: "Bestaco",
    logo: "/partners/bestaco.png",
    services:
      "Prestation de service – Bâtiment – commerce générale – froid – climatisation – restauration – etc…",
  },
  {
    id: "synopsis-erp",
    name: "SYNOPSIS ERP",
    logo: "/partners/synopsis-erp.png",
    services: "Enterprise Resource Planning — Logiciels de gestion",
  },
  {
    id: "aan-optique",
    name: "AAN Optique — Cabinet d'Optique Médical",
    shortName: "AAN Optique",
    logo: "/partners/aan-optique.png",
    services: "Cabinet d'optique médical",
  },
  {
    id: "hallac-gertoogal",
    name: "HALLAC GERTOOGAL",
    logo: "/partners/hallac-gertoogal.png",
    services: "La qualité, notre différence — Volaille & agroalimentaire",
  },
  {
    id: "sorele-cosmetics",
    name: "SORELE COSMETICS",
    logo: "/partners/sorele-cosmetics.png",
    services: "Cosmétiques",
  },
  {
    id: "fusion5d",
    name: "Fusion5D",
    logo: "/partners/fusion5d.png",
  },
  {
    id: "grace-de-dieu",
    name: "ETS GRACE DE DIEU",
    shortName: "ETS GRACE DE DIEU",
    logo: "/partners/grace-de-dieu.png",
    services: "Mère et Fils — Commerce Général et Prestation de services",
  },
  {
    id: "aglot",
    name: "AFRICA GLOBAL TRANSIT SARL",
    shortName: "AGLOT",
    logo: "/partners/aglot.png",
    services: "Transit & Logistique — Tél. : (237) 343 34 59 — R.C. : N°RC/Dla/2006/B640",
  },
  {
    id: "west-brothers",
    name: "West & Brothers Holding",
    logo: "/partners/saleka.png",
  },
  {
    id: "saleka",
    name: "SaLeKa",
    logo: "/partners/west-brothers.png",
  },
  {
    id: "ecda",
    name: "ECDA",
    logo: "/partners/ecda.png",
  },
  {
    id: "sig",
    name: "SIG",
    logo: "/partners/sig.png",
  },
  {
    id: "ks-indocorp",
    name: "KS indocorp Cameroun SARL",
    shortName: "KS indocorp",
    logo: "/partners/ks-indocorp.png",
    services:
      "Nfandena — 5e arrondissement, rue 1595, BP 7155 — Yaoundé, Cameroun",
  },
  {
    id: "fx-engineering",
    name: "ETS FX ENGINEERING",
    shortName: "FX Engineering",
    logo: "/partners/fx-engineering.png",
    services: "Siège social — Yaoundé, BP 11 502 — Yaoundé, Cameroun",
  },
  {
    id: "jms",
    name: "JOVITE MULTIMEDIA SARL",
    shortName: "JMS",
    logo: "/partners/jms.png",
    services:
      "Offre technique et financière pour le raccordement de SISERCO SARL (Obala) — Yaoundé, quartier Fouda",
  },
  {
    id: "sts-masters-solutions",
    name: "STS Masters Solutions",
    shortName: "STS Masters Solutions",
    logo: "/partners/sts-masters-solutions.png",
    services:
      "Matériels agricole et informatique, fourniture de bureau — Yaoundé, Ngousso",
  },
  {
    id: "news-tech",
    name: "News Tech Global Services",
    shortName: "News Tech",
    logo: "/partners/news-tech.png",
    services:
      "Électrification, énergie solaire, télécom, étude bureautique, formation, prestations de services — Tsinga, Yaoundé",
  },
];
