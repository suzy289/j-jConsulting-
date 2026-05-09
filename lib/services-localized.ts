import type { Locale } from "@/lib/i18n";
import type { Service } from "@/lib/services";
import { services as servicesFr } from "@/lib/services";

type ServiceText = Pick<Service, "title" | "subtitle" | "description" | "items">;

const SERVICES_EN: Record<string, ServiceText> = {
  "creation-entreprise": {
    title: "Business creation",
    subtitle: "Support for business creation",
    description:
      "Feasibility study, choice of legal and tax structure, drafting articles of association, registration and support through all administrative steps.",
    items: [
      "Project feasibility study",
      "Advice on legal and tax forms",
      "Drafting articles of association and registration",
    ],
  },
  "assistance-comptable": {
    title: "Accounting support",
    subtitle: "Full bookkeeping and monitoring",
    description:
      "Bookkeeping, day-to-day transaction tracking, preparation of financial statements and implementation of management tools.",
    items: [
      "Bookkeeping and day-to-day operations",
      "Balance sheets and income statements",
      "Cost accounting and dashboards",
    ],
  },
  "fiscalite-social": {
    title: "Tax & payroll",
    subtitle: "Tax and social compliance support",
    description:
      "Tax and social filings, tax optimization and securing your relationship with the authorities.",
    items: [
      "Tax returns (VAT, corporate tax, etc.)",
      "Payroll and social contributions",
      "Tax optimization and audit support",
    ],
  },
  "analyse-financiere": {
    title: "Financial analysis",
    subtitle: "In-depth financial analysis",
    description:
      "Assessment of performance, profitability and financial structure to inform your strategic decisions.",
    items: [
      "Analysis of financial performance",
      "Profitability and debt capacity review",
      "Financial structure assessment",
    ],
  },
  "business-plan": {
    title: "Business plan",
    subtitle: "Business plan development",
    description:
      "A complete business plan: strategy, market study, financial projections and cash flow plan.",
    items: [
      "Strategic objectives and market study",
      "Sales action plan",
      "Financial forecasts and cash flow plan",
    ],
  },
  "controle-gestion": {
    title: "Management control",
    subtitle: "Management control",
    description:
      "Implementation of steering tools to track budgets, costs and margins, and improve profitability.",
    items: [
      "KPIs and budget monitoring",
      "Cost of sales and margin analysis",
      "Break-even thresholds",
    ],
  },
  "systemes-gestion": {
    title: "Management systems",
    subtitle: "Deployment of management systems",
    description:
      "Needs analysis, selection and deployment of management software suited to your activity (e.g. Sage Saari).",
    items: [
      "IT needs analysis",
      "Software selection and installation",
      "Setup and user training",
    ],
  },
  "conseil-strategique": {
    title: "Strategic advisory",
    subtitle: "Management and strategy consulting",
    description:
      "Administrative and financial management advice, strategic decisions and fundraising support.",
    items: [
      "Administrative and financial management consulting",
      "Growth and financing strategies",
      "Regulatory monitoring and legal guidance",
    ],
  },
  formations: {
    title: "Professional training",
    subtitle: "Professional training",
    description:
      "Training on accounting, tax and social topics, financial management and management tools.",
    items: [
      "Accounting, tax and social training",
      "Financial management and management control",
      "Management tools and accounting software",
    ],
  },
  audit: {
    title: "Internal & external audit",
    subtitle: "Tailored support",
    description:
      "One-off or specific engagements: internal audits, targeted problem-solving and performance monitoring.",
    items: [
      "Day-to-day business support",
      "Internal audits and recommendations",
      "Custom engagements based on your needs",
    ],
  },
};

export function getServicesForLocale(locale: Locale): Service[] {
  if (locale === "fr") return servicesFr;
  return servicesFr.map((s) => {
    const en = SERVICES_EN[s.slug];
    if (!en) return s;
    return { ...s, ...en };
  });
}
