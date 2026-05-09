import type { LucideIcon } from "lucide-react";
import {
  Building2,
  BookOpen,
  FileText,
  TrendingUp,
  Briefcase,
  BarChart3,
  Settings,
  Lightbulb,
  GraduationCap,
  Shield,
} from "lucide-react";

export interface Service {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 1,
    slug: "creation-entreprise",
    title: "Création d'entreprise",
    subtitle: "Assistance à la création d'entreprise",
    description:
      "Étude de faisabilité, choix de la forme juridique et fiscale, rédaction des statuts, immatriculation et accompagnement dans toutes les démarches administratives.",
    items: [
      "Conseils formes juridiques et fiscales",
      "Rédaction des statuts et immatriculation",
    ],
    icon: Building2,
  },
  {
    id: 2,
    slug: "assistance-comptable",
    title: "Assistance comptable",
    subtitle: "Tenue et suivi comptable complets",
    description:
      "Tenue comptable, suivi des opérations courantes, préparation des états financiers et mise en place d'outils de pilotage.",
    items: [
      "Tenue des operations comptable comptable",
      "Bilans et comptes de résultat",
      "Comptabilité analytique et tableaux de bord",
    ],
    icon: BookOpen,
  },
  {
    id: 3,
    slug: "fiscalite-social",
    title: "Fiscalite et cnps",
    subtitle: "Assistance fiscale et sociale",
    description:
      "Prise en charge des déclarations fiscales et sociales, optimisation fiscale et sécurisation de vos relations avec l'administration.",
    items: [
      "Déclarations fiscales (TVA, IS, etc.)",
      "Gestion de la paie et charges sociales",
      "Optimisation fiscale et accompagnement contrôles",
    ],
    icon: FileText,
  },
  {
    id: 4,
    slug: "analyse-financiere",
    title: "Analyse financière",
    subtitle: "Analyse financière approfondie",
    description:
      "Étude de la performance, de la rentabilité et de la structure financière pour éclairer vos décisions stratégiques.",
    items: [
      "Analyse des performances financières",
      "Évaluation rentabilité et capacité d'endettement",
      "Étude de la structure financière",
    ],
    icon: TrendingUp,
  },
  {
    id: 5,
    slug: "business-plan",
    title: "Business Plan",
    subtitle: "Élaboration de Business Plan",
    description:
      "Construction d'un Business Plan complet : stratégie, étude de marché, projections financières et plan de trésorerie.",
    items: [
      "Étude de faisabilité du projet",
      "Objectifs stratégiques et étude de marché",
      "Plan d'action commercial",
      "Prévisions financières et plan de trésorerie",
    ],
    icon: Briefcase,
  },
  {
    id: 6,
    slug: "controle-gestion",
    title: "Contrôle de gestion",
    subtitle: "Contrôle de gestion",
    description:
      "Mise en place d'outils de pilotage pour suivre vos budgets, coûts et marges, et améliorer la rentabilité.",
    items: [
      "Indicateurs de performance et suivi budgétaire",
      "Analyse des coûts de revient et marges",
      "Détermination des seuils de rentabilité",
    ],
    icon: BarChart3,
  },
  {
    id: 7,
    slug: "systemes-gestion",
    title: "Systèmes de gestion",
    subtitle: "Déploiement de systèmes de gestion",
    description:
      "Analyse des besoins, choix et déploiement de logiciels de gestion adaptés à votre activité (Sage Saari).",
    items: [
      "Analyse des besoins systeme d'information",
      "Choix et installation du logiciel",
      "Paramétrage et formation des utilisateurs",
    ],
    icon: Settings,
  },
  {
    id: 8,
    slug: "conseil-strategique",
    title: "Conseil stratégique",
    subtitle: "Conseil en gestion et stratégie",
    description:
      "Conseils en gestion administrative et financière, décisions stratégiques et recherche de financement.",
    items: [
      "Conseil en gestion administrative et financière",
      "Stratégies de développement et financement",
    ],
    icon: Lightbulb,
  },
  {
    id: 9,
    slug: "formations",
    title: "Formations professionnelles",
    subtitle: "Formations professionnelles",
    description:
      "Formations sur les aspects comptables, fiscaux, sociaux, la gestion financière et les outils de gestion.",
    items: [
      "Formations comptables, fiscales et sociales",
      "Gestion financière et contrôle de gestion",
      "Outils de gestion et logiciels comptables",
    ],
    icon: GraduationCap,
  },
  {
    id: 10,
    slug: "audit",
    title: "Audit interne & externe",
    subtitle: "Accompagnement sur mesure",
    description:
      "Prestations ponctuelles ou spécifiques : audits internes, résolution de problématiques ciblées et suivi de performance.",
    items: [
      "Assistance affaires courantes",
      "Audits internes et recommandations",
      "Prestations sur mesure selon vos besoins",
    ],
    icon: Shield,
  },
];
