import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceHubPage } from "@/components/services/ServiceHubPage";
import { getLocaleFromCookies } from "@/lib/i18n-server";
import { type ServiceHubSlug, getHubPayload, isServiceHubSlug } from "@/lib/service-hubs-data";

type Props = {
  params: Promise<{ hub: string }>;
};

export function generateStaticParams() {
  return [
    { hub: "domaines-intervention" },
    { hub: "conseil" },
    { hub: "accompagnement-operationnel" },
    { hub: "assistance-operationnelle" },
    { hub: "formations" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hub: raw } = await params;
  if (!isServiceHubSlug(raw)) {
    return { title: "Services | J & J Consulting SARL" };
  }
  const locale = await getLocaleFromCookies();
  const hub = getHubPayload(raw as ServiceHubSlug, locale);
  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
  };
}

export default async function ServiceHubDetailPage({ params }: Props) {
  const { hub: raw } = await params;
  if (!isServiceHubSlug(raw)) {
    notFound();
  }
  const slug = raw as ServiceHubSlug;
  const locale = await getLocaleFromCookies();
  return <ServiceHubPage slug={slug} locale={locale} />;
}
