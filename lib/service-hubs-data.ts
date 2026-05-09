import type { Locale } from "@/lib/i18n";

export type ServiceHubSlug =
  | "domaines-intervention"
  | "conseil"
  | "accompagnement-operationnel"
  | "assistance-operationnelle"
  | "formations";

export type HubLayoutVariant =
  | "splitHero"
  | "magazine"
  | "alternating"
  | "focusCards"
  | "workshop";

export type HubIllustrationId = "domains" | "strategy" | "steering" | "operations" | "training";

export type ServiceHubPayload = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  lead: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  /** Ancres `/nos-services#…` pertinentes pour ce périmètre */
  relatedServiceSlugs: string[];
  /** Gabarit visuel de la page */
  layoutVariant: HubLayoutVariant;
  illustrationId: HubIllustrationId;
};

const HUBS: Record<ServiceHubSlug, Record<Locale, ServiceHubPayload>> = {
  "domaines-intervention": {
    fr: {
      metaTitle:
        "Domaines d’intervention | J & J Consulting — Comptabilité, fiscalité et conseil",
      metaDescription:
        "Cabinet d’audit et de conseil à Yaoundé : création d’entreprise, comptabilité, fiscalité et social, pilotage financier, systèmes d’information, formations. Une vision synthétique de nos lignes métier.",
      kicker: "Périmètre du cabinet",
      title: "Nos domaines d’intervention",
      lead:
        "J & J Consulting SARL accompagne les dirigeants, structures privées et institutions dans la conformité réglementaire, la fiabilité de l’information et la prise de décision. Nos missions sont structurées pour couvrir le cycle complet de vie de votre activité — de la création à la consolidation de la performance — avec une exigence constante sur la confidentialité et la méthode.",
      sections: [
        {
          heading: "Une organisation en filières complémentaires",
          paragraphs: [
            "Pour rester lisible et efficient, nous regroupons nos compétences en cinq grands périmètres : le conseil à la décision (stratégie, montage financier et organisation), l’accompagnement « projet et pilotage » (business plans, prévisionnels, contrôle de gestion), l’assistance opérationnelle au quotidien (tenue et fiabilisation des comptes, déclarations, paie lorsque pertinent), ainsi que les formations ciblées sur les usages métiers, la fiscalité ou les outils.",
            "Chaque filière peut intervenir ponctuellement ou sur la durée, seule ou en lien avec nos autres équipes, selon vos enjeux (levée de fonds, redressement d’échéances, renforcement interne ou audit de processus). Les fiches détaillées disponibles depuis la page « Nos services » décrivent précisément les livrables, les délais et les modalités d’interaction avec votre équipe.",
          ],
        },
        {
          heading: "Publics que nous accompagnons",
          bullets: [
            "PME, PMI, sociétés en phase de création ou de forte croissance",
            "Associations, coopératives et structures à finalité socio-économique",
            "Filiales, projets industriels ou de services sous normes complexes (IS, IR, régimes spéciaux lorsque prescrit)",
            "Institutions nécessitant un appui ponctuel en audit ou en contrôle de gestion",
          ],
          paragraphs: [],
        },
        {
          heading: "Notre façon de travailler",
          paragraphs: [
            "Les missions démarrent par un diagnostic cadré — périmètre, risques majeurs et calendrier — puis par des engagements clairs sur la nature des productions, les interlocuteurs et les fréquences de reporting. Notre objectif reste pragmatique : vous laisser plus de temps pour développer votre activité, tout en gardant la maîtrise de vos chiffres clés.",
          ],
        },
      ],
      relatedServiceSlugs: [
        "creation-entreprise",
        "assistance-comptable",
        "fiscalite-social",
        "analyse-financiere",
        "business-plan",
        "controle-gestion",
        "systemes-gestion",
        "conseil-strategique",
        "formations",
        "audit",
      ],
      layoutVariant: "splitHero",
      illustrationId: "domains",
    },
    en: {
      metaTitle: "Practice areas | J & J Consulting — Accounting, tax and advisory",
      metaDescription:
        "Audit and advisory firm in Yaoundé: company formation, bookkeeping, tax and payroll, financial steering, ERP deployment, professional training.",
      kicker: "Scope of expertise",
      title: "Our areas of intervention",
      lead:
        "J & J Consulting SARL supports leaders, businesses and institutions in regulatory compliance, reliable reporting and confident decision‑making. We cover the organization’s full lifecycle—from start‑up structuring to sustained performance—with strict confidentiality and a disciplined methodology.",
      sections: [
        {
          heading: "Integrated service lines",
          paragraphs: [
            "We organise our offerings into advisory (strategy, structuring and fundraising support), operational project steering (business plans, forecasts and management accounting), operational assistance (daily accounting and filings, payroll where relevant), dedicated training pathways, and audits or diagnostics when required.",
            "Each stream can operate stand‑alone or combined, depending on your context: deadline recovery, strengthening internal capability, lender documentation or investor readiness.",
          ],
        },
        {
          heading: "Who we typically work with",
          bullets: [
            "SMEs and growth‑stage ventures",
            "Non‑profits with robust governance demands",
            "Corporate subsidiaries with multi‑layer reporting obligations",
            "Public‑sector programmes requiring specialised audit insight",
          ],
          paragraphs: [],
        },
        {
          heading: "How we collaborate",
          paragraphs: [
            "Every assignment begins with aligned scope statements, timelines and deliverables, followed by regular checkpoints so steering committees always read the same version of truth.",
          ],
        },
      ],
      relatedServiceSlugs: [
        "creation-entreprise",
        "assistance-comptable",
        "fiscalite-social",
        "analyse-financiere",
        "business-plan",
        "controle-gestion",
        "systemes-gestion",
        "conseil-strategique",
        "formations",
        "audit",
      ],
      layoutVariant: "splitHero",
      illustrationId: "domains",
    },
  },

  conseil: {
    fr: {
      metaTitle: "Conseil stratégique & organisation | J & J Consulting",
      metaDescription:
        "Conseil en gestion, organisation administrative et financière, stratégies de développement et montages de financement. Cabinet basé à Yaoundé.",
      kicker: "Vision & décision",
      title: "Conseil stratégique et organisationnel",
      lead:
        "Le conseil prend tout son sens lorsqu’il traduit vos objectifs en plans d’action réalistes, priorisés et mesurables. Nous intervenons aussi bien en soutien ponctuel (arbitrages sensibles, restructurations ciblées) qu’accompagnement dans la durée, pour garder vos décisions financières, juridiques (dans nos limites de compétences) et opérationnelles parfaitement alignées avec votre trajectoire de croissance ou de diversification.",
      sections: [
        {
          heading: "Ce que nous apportons",
          paragraphs: [
            "Une lecture structurante de vos enjeux : cartographie du risque, positionnement financier réel, clarification des tensions entre rentabilité, trésorerie et investissements. Nous intégrons systématiquement la temporalité réglementaire (échéances fiscales, obligations sociales) pour éviter que la stratégie ne se heurte aux contraintes du terrain.",
            "Un mode de conseil pragmatique, orienté exécution : tableaux synthétiques, feuilles de route partagées, points d’attention pour votre comité ou votre conseil d’administration lorsque vos statuts ou votre gouvernance le nécessitent.",
          ],
        },
        {
          heading: "Exemples d’applications concrètes",
          bullets: [
            "Redefinition du modèle économique d’activité après une phase de turbulence",
            "Préparation d’un dossier d’investisseur ou banquier (cohérence chiffrée + narrative projet)",
            "Structuration administrative et financière à l’issue d’un rapprochement sociétaire",
            "Mise à niveau de la gouvernance documentaire avant une levée de fonds locale ou sous-régionale",
          ],
          paragraphs: [],
        },
        {
          heading: "Articulation avec le reste du cabinet",
          paragraphs: [
            "Lorsque le conseil doit s’incarner dans des livrables comptables, fiscaux ou des tableaux de bord, nous activons nos filières « accompagnement opérationnel » et « assistance » sans rupture pour vous éviter une multiplication d’interfaces — un seul interlocutaire projet garde la cohérence globale.",
          ],
        },
      ],
      relatedServiceSlugs: ["conseil-strategique", "analyse-financiere", "business-plan", "audit"],
      layoutVariant: "magazine",
      illustrationId: "strategy",
    },
    en: {
      metaTitle: "Strategic advisory & organisation | J & J Consulting",
      metaDescription:
        "Executive advisory across finance and administration: development strategy, structuring and fundraising support.",
      kicker: "Strategy lane",
      title: "Strategic and organisational advisory",
      lead:
        "We translate leadership intent into workable roadmaps anchored in credible numbers—whether you face a carve‑out project, diversification bet or investor storyline. Confidentiality stays at the forefront, and engagements always pair ambition with realism on timing, compliance and stakeholder expectations.",
      sections: [
        {
          heading: "What partners should expect",
          paragraphs: [
            "Sharp diagnostics bridging commercial, financial and organisational lenses, articulated for board‑ready summaries where needed.",
            "Execution artefacts that hold under scrutiny—from scenario planning and sensitivity tables through governance artefacts your teams can iterate without us.",
          ],
        },
        {
          heading: "Typical mandates",
          bullets: [
            "Post‑growth reset of operating model profitability",
            "Investor dossier structuring with aligned financial annexes",
            "Administrative uplift after mergers or carve‑outs",
            "Pre‑fund‑raise governance strengthening",
          ],
          paragraphs: [],
        },
        {
          heading: "Cross‑team synergy",
          paragraphs: [
            "When mandates require accounting, payroll or KPI deployment, downstream colleagues join under a unified programme cadence.",
          ],
        },
      ],
      relatedServiceSlugs: ["conseil-strategique", "analyse-financiere", "business-plan", "audit"],
      layoutVariant: "magazine",
      illustrationId: "strategy",
    },
  },

  "accompagnement-operationnel": {
    fr: {
      metaTitle:
        "Accompagnement opérationnel — pilotage, business plans & prévisionnels | J & J Consulting",
      metaDescription:
        "Construire et suivre des plans financiers solides : business plans, analyses de sensibilité, contrôle de gestion, KPI. Cabinet à Yaoundé.",
      kicker: "Projets & performance",
      title: "Accompagnement opérationnel au pilotage",
      lead:
        "Ce périmètre couvre tout ce qui transforme vos ambitions en équations tenables : élaboration de business plans financés, construction de prévisionnels de trésorerie, mise en œuvre d’indicateurs de gestion lisibles pour les équipes métier comme pour les investisseurs. Nous combinons analyse financière, compréhension de votre secteur et sens des échéances pour que vos arbitrages reposent sur des hypothèses explicites, testées et documentées.",
      sections: [
        {
          heading: "Livrables que nous préparons régulièrement",
          bullets: [
            "Business plans multicritères (base, pessimiste & optimiste) avec plan de financement équilibré",
            "Tableaux de flux et tableaux synthétiques de rentabilité par segment lorsque vos données le permettent",
            "Cahiers d’hypothèses et documentation pour banques ou partenaires",
            "Socle KPI / contrôle de gestion adapté aux effectifs disponibles dans la structure cliente",
          ],
          paragraphs: [],
        },
        {
          heading: "Pourquoi faire appel au cabinet dans ce périmètre",
          paragraphs: [
            "Le pilotage financier gagnera toujours en qualité lorsqu’il s’articule avec des données comptables fiables ; nos équipes de tenue peuvent prendre la main sur ce socle lorsque vos process le nécessitent. À l’inverse, si vos enregistrements sont irréprochables, nous restons focalisés sur les couches de décision stratégiques et financières — sans duplication inutile de rôles internes.",
          ],
        },
      ],
      relatedServiceSlugs: ["business-plan", "analyse-financiere", "controle-gestion", "audit"],
      layoutVariant: "focusCards",
      illustrationId: "steering",
    },
    en: {
      metaTitle:
        "Operational steering — forecasts, KPIs & business plans | J & J Consulting",
      metaDescription:
        "Investment‑grade forecasting, KPI architecture and managerial accounting support for Cameroon‑based SMEs and institutions.",
      kicker: "Performance lane",
      title: "Operational steering support",
      lead:
        "We build defensible narratives for investors, bankers and executives alike—balancing ambition with granular assumptions, treasury discipline and repeatable reporting cadences. Every workbook we deliver is annotated so your teams can revise scenarios without regressing analytical integrity.",
      sections: [
        {
          heading: "Signature deliverables",
          bullets: [
            "Stress‑tested scenario planning with articulated funding envelopes",
            "Segment profitability lenses when granular data permits",
            "Assumption trackers for stakeholder transparency",
            "Lean KPI dashboards matched to organisational bandwidth",
          ],
          paragraphs: [],
        },
        {
          heading: "Why outsource this layer",
          paragraphs: [
            "Pairing managerial accounting with outsourced bookkeeping—or your in‑house CFO—maintains coherence because we share methodological DNA across engagements.",
          ],
        },
      ],
      relatedServiceSlugs: ["business-plan", "analyse-financiere", "controle-gestion", "audit"],
      layoutVariant: "focusCards",
      illustrationId: "steering",
    },
  },

  "assistance-operationnelle": {
    fr: {
      metaTitle:
        "Assistance opérationnelle — comptabilité, fiscalité & paie | J & J Consulting",
      metaDescription:
        "Tenue comptable conforme OHADA, déclarations fiscales et sociales, mise en conformité système d’information. Cabinet Yaoundé.",
      kicker: "Opérations & conformité",
      title: "Assistance opérationnelle au quotidien",
      lead:
        "Face à une intensité réglementaire croissante, la tenue impeccable des dossiers quotidiens n’est pas un détail mais un actif stratégique. Nous garantissons un socle conforme aux référentiels en vigueur (notamment méthodologie comptable OHADA là où pertinent), tout en gardant vos échéances fiscales et sociales sous contrôle. Nos équipes peuvent prendre tout ou partie de la fonction comptabilité-paie-declarations, avec des niveaux de service paramétrables selon le volume transactionnel.",
      sections: [
        {
          heading: "Champs où nous intervenons le plus souvent",
          bullets: [
            "Tenue de comptabilité générale et engagements associés jusqu’aux états périodiques",
            "Démarches CNPS lorsque vos effectifs créent cette obligation ou ce besoin d’audit social",
            "Préparation des déclarations fiscales recurrentes avec archivages probants",
            "Interfaçages logiciels (ex. environnement Sage) pour fiabiliser saisie & contrôles",
          ],
          paragraphs: [],
        },
        {
          heading: "Articulation prudentielle avec le conseil",
          paragraphs: [
            "Une information comptable structurée alimente directement les analyses financières des dirigeants. Nous créons cette passerelle systématique : tableau de synthèse périodique, points vigilance sur provisions, alertes anomalies et recommandations d’harmonisation de politiques internes lorsque vos risques nous y conduisent légitimement.",
          ],
        },
      ],
      relatedServiceSlugs: [
        "creation-entreprise",
        "assistance-comptable",
        "fiscalite-social",
        "systemes-gestion",
        "audit",
      ],
      layoutVariant: "alternating",
      illustrationId: "operations",
    },
    en: {
      metaTitle:
        "Operational assistance — bookkeeping, tax & payroll | J & J Consulting",
      metaDescription:
        "Day‑to‑day accounting, filings and tooling managed by licensed professionals headquartered in Yaoundé.",
      kicker: "Compliance lane",
      title: "Day‑to‑day operational assistance",
      lead:
        "Regulatory stamina now forms part of intangible asset value—we protect it through meticulous ledger hygiene, filings discipline and escalation protocols when deviations surface.",
      sections: [
        {
          heading: "Core safeguards",
          bullets: [
            "General ledger upkeep through periodic reporting packs when requested",
            "Social security routines where statutes apply",
            "Recurring tax workflows with reproducible attachments",
            "ERP alignment (e.g., Sage footprints) bridging field operations and finance HQ",
          ],
          paragraphs: [],
        },
        {
          heading: "Bridge to advisory",
          paragraphs: [
            "Operational precision feeds sharper strategic discussions because leadership dashboards ingest reconciled—not aspirational—data.",
          ],
        },
      ],
      relatedServiceSlugs: [
        "creation-entreprise",
        "assistance-comptable",
        "fiscalite-social",
        "systemes-gestion",
        "audit",
      ],
      layoutVariant: "alternating",
      illustrationId: "operations",
    },
  },

  formations: {
    fr: {
      metaTitle:
        "Formations professionnelles — compta, fiscalité, pilotage | J & J Consulting",
      metaDescription:
        "Parcours de formation sur mesure pour équipes financières, dirigeants et fonction support : comptabilité, fiscalité, contrôle interne léger.",
      kicker: "Montée en compétences",
      title: "Formations adaptées aux enjeux de votre équipe",
      lead:
        "La transmission constitue le prolongement naturel du conseil. Nous concevons des séances pragmatiques, par petits groupes, pour que vos équipes passent rapidement à l’usage opérationnel (logiciels standards, problématiques fiscales classiques ou avancées, lecture de KPI). Les contenus peuvent prendre la forme d’ateliers, de sessions présentielles ou distancielles, ou de programmes découpés lorsque vos effectifs ont des niveaux très hétérogènes.",
      sections: [
        {
          heading: "Principaux modules possibles",
          bullets: [
            "Lecture financière ou comptabilité « raisonnement » destinée aux métiers non financiers",
            "Ateliers réglementaires ciblés (délais, périmètres, pièges classiques lorsqu’actualisés juridiquement)",
            "Mise à niveau sur outils métier après déploiement de gestion ERP",
            "Sensibilisation à la lutte anticorruption financière léger pour comités projet",
          ],
          paragraphs: [],
        },
        {
          heading: "Modalités réalistes",
          paragraphs: [
            "Pour chaque session, nous produisons une feuille de route précisant pré‑requis, supports remis aux participants et objectifs observables au terme de la série. Ces formations complètent, sans les remplacer, les obligations légales spécifiques à certains secteurs.",
          ],
        },
      ],
      relatedServiceSlugs: ["formations", "systemes-gestion", "controle-gestion", "audit"],
      layoutVariant: "workshop",
      illustrationId: "training",
    },
    en: {
      metaTitle:
        "Professional training — accounting & compliance upskilling | J & J Consulting",
      metaDescription:
        "Tailored curricula for finance and non‑finance teams on bookkeeping discipline, filings literacy and KPI interpretation.",
      kicker: "Capability building",
      title: "Workforce‑ready finance training",
      lead:
        "Training that cannot be applied tomorrow is ineffective—our modules blend theory, coached exercises on real templates and facilitation notes your HR teams can revive later.",
      sections: [
        {
          heading: "Signature modules",
          bullets: [
            "Financial storytelling for executives outside finance control",
            "Regulatory refreshers calibrated to Cameroon operating realities",
            "Post‑deployment ERP onboarding paths",
            "Lightweight anticorruption/fraud awareness overlays",
          ],
          paragraphs: [],
        },
        {
          heading: "Programme hygiene",
          paragraphs: [
            "Every curriculum ships with prerequisites, artefacts and competency checks so ROI can be observed beyond attendance sheets.",
          ],
        },
      ],
      relatedServiceSlugs: ["formations", "systemes-gestion", "controle-gestion", "audit"],
      layoutVariant: "workshop",
      illustrationId: "training",
    },
  },
};

export function getHubPayload(slug: ServiceHubSlug, locale: Locale): ServiceHubPayload {
  return HUBS[slug][locale];
}

export const SERVICE_HUB_PATHS = [
  { slug: "domaines-intervention" as const, path: "/nos-services/domaines-intervention" },
  { slug: "conseil" as const, path: "/nos-services/conseil" },
  { slug: "accompagnement-operationnel" as const, path: "/nos-services/accompagnement-operationnel" },
  { slug: "assistance-operationnelle" as const, path: "/nos-services/assistance-operationnelle" },
  { slug: "formations" as const, path: "/nos-services/formations" },
] as const;

/** Libellés i18n (clés dans `MESSAGES`) alignés avec le menu « Nos services » */
export const SERVICE_HUB_NAV_LABEL_KEYS = [
  {
    path: SERVICE_HUB_PATHS[0].path,
    labelKey: "footer.serviceHub.domaines",
    subtitleKey: "nav.hubMobile.domaines.sub",
  },
  {
    path: SERVICE_HUB_PATHS[1].path,
    labelKey: "footer.serviceHub.conseil",
    subtitleKey: "nav.hubMobile.conseil.sub",
  },
  {
    path: SERVICE_HUB_PATHS[2].path,
    labelKey: "footer.serviceHub.accompagnementOp",
    subtitleKey: "nav.hubMobile.accompagnement.sub",
  },
  {
    path: SERVICE_HUB_PATHS[3].path,
    labelKey: "footer.serviceHub.assistanceOp",
    subtitleKey: "nav.hubMobile.assistance.sub",
  },
  {
    path: SERVICE_HUB_PATHS[4].path,
    labelKey: "footer.serviceHub.formations",
    subtitleKey: "nav.hubMobile.formations.sub",
  },
] as const;

export const SERVICE_HUB_SLUGS: readonly ServiceHubSlug[] = SERVICE_HUB_PATHS.map((h) => h.slug);

export function isServiceHubSlug(value: string): value is ServiceHubSlug {
  return (SERVICE_HUB_SLUGS as readonly string[]).includes(value);
}
