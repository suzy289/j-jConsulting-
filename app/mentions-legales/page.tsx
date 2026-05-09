import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { getLocaleFromCookies } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookies();
  return {
    title: t(locale, "meta.legal.title"),
    description: t(locale, "meta.legal.desc"),
  };
}

export default async function MentionsLegalesPage() {
  const locale = await getLocaleFromCookies();
  return (
    <>
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <Image
            src="/logo.png"
            alt="J & J Consulting SARL"
            width={140}
            height={48}
            className="h-5 w-auto mb-6"
            style={{ width: "auto", height: "auto" }}
          />
          <h1 className="font-serif text-4xl font-semibold">{t(locale, "legal.title")}</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-16 prose prose-gray">
          <h2>{t(locale, "legal.section.publisher")}</h2>
          <p>
            <strong>J & J Consulting SARL</strong><br />
            {t(locale, "legal.publisher.address").replace("{v}", SITE.address)}<br />
            {t(locale, "legal.publisher.phones").replace("{v}", SITE.phones.join(" / "))}<br />
            {t(locale, "legal.publisher.email").replace("{v}", SITE.email)}
          </p>

          <h2>{t(locale, "legal.section.ids")}</h2>
          <p>
            {t(locale, "legal.ids.niu").replace("{v}", SITE.niu)}<br />
            {t(locale, "legal.ids.rccm").replace("{v}", SITE.rccm)}
          </p>

          <h2>{t(locale, "legal.section.hosting")}</h2>
          <p>{t(locale, "legal.hosting.p")}</p>

          <h2>{t(locale, "legal.section.ip")}</h2>
          <p>{t(locale, "legal.ip.p")}</p>

          <h2>{t(locale, "legal.section.privacy")}</h2>
          <p>{t(locale, "legal.privacy.p")}</p>

          <h2>{t(locale, "legal.section.credits")}</h2>
          <p>{t(locale, "legal.credits.p").replace("{name}", SITE.name)}</p>
        </div>
      </section>
    </>
  );
}
