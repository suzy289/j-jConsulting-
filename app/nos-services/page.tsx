import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";
import { getLocaleFromCookies } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";
import { getServicesForLocale } from "@/lib/services-localized";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookies();
  return {
    title: t(locale, "meta.services.title"),
    description: t(locale, "meta.services.desc"),
  };
}

export default async function NosServicesPage() {
  const locale = await getLocaleFromCookies();
  const services = getServicesForLocale(locale);
  return (
    <>
      <section className="relative overflow-hidden bg-[#F4F4F4] pt-36 md:pt-40 lg:pt-44 pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div className="flex items-center">
            <div className="w-full md:w-1/2 relative z-20 services-hero-copy-enter">
              <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
                {t(locale, "services.hero.kicker")}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0A0A0A] mb-6 leading-tight">
                {t(locale, "services.hero.title")}
              </h1>
              <p className="text-gray-600 text-base lg:text-lg max-w-xl mb-10">
                {t(locale, "services.hero.subtitle")}
              </p>
              <div className="mt-8 flex flex-col-reverse gap-6 lg:flex-row lg:items-center">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jj-btn-slide jj-btn-slide-dark-subtle inline-flex w-fit rounded-full bg-[#0A0A0A] px-7 py-3 font-medium leading-7"
                >
                  {t(locale, "services.hero.cta")}
                </a>
                <span className="flex flex-col">
                  <a
                    href="tel:+237620275758"
                    className="inline-block text-lg font-medium text-[#0A0A0A]"
                  >
                    {t(locale, "services.hero.call")}
                  </a>
                  <span className="inline-block text-gray-500">
                    {t(locale, "services.hero.callSub")}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 hidden md:block w-1/2 h-full min-h-[760px]">
          <div className="absolute right-[-25%] top-[-140px] w-[860px] h-[860px]">
            <div className="absolute inset-0 rounded-full bg-[#0A0A0A]" />

            {/* Pastilles jaunes sur la bordure: effet dedans/dehors */}
            <div className="absolute left-0 top-[42%] -translate-x-1/2 w-24 h-24 rounded-full bg-[#C9A84C] z-20 ring-8 ring-[#F4F4F4]" />
            <div className="absolute right-[14%] bottom-[10%] translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full bg-[#C9A84C] z-20 ring-8 ring-[#F4F4F4]" />
            <div className="absolute right-[32%] bottom-[20%] w-14 h-8 rounded-full border-t-2 border-b-2 border-[#C9A84C]/60 z-20" />
          </div>

          <div className="absolute right-[2%] top-[92px] z-10 h-[600px] w-[600px] overflow-hidden rounded-full">
            <div className="book-page-scene absolute inset-0">
              <div className="book-page-layer book-page-a">
                <Image
                  src="/CNPS.jpg"
                  alt={t(locale, "services.hero.alt1")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 600px"
                  priority
                />
                <div className="book-page-gloss" aria-hidden />
              </div>
              <div className="book-page-layer book-page-b">
                <Image
                  src="/dgi.png"
                  alt={t(locale, "services.hero.alt2")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 600px"
                />
                <div className="book-page-gloss" aria-hidden />
              </div>
              <div className="book-page-layer book-page-c">
                <Image
                  src="/ohada.jpg"
                  alt={t(locale, "services.hero.alt2")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 600px"
                />
                <div className="book-page-gloss" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5", label: t(locale, "services.stats.years") },
              { value: "100%", label: t(locale, "services.stats.satisfaction") },
              { value: "5", label: t(locale, "services.stats.expertise") },
              { value: "0", label: t(locale, "services.stats.fees") },
            ].map((stat, i) => (
              <div key={i}>
                <span className="font-serif text-4xl font-bold text-[#C9A84C]">
                  {stat.value}
                </span>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="domaines-intervention" className="py-20 lg:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
            {t(locale, "services.section.kicker")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A0A0A] mb-6">
            {t(locale, "services.section.title")}
          </h2>
          <p className="text-gray-600 max-w-3xl mb-16">
            {t(locale, "services.section.subtitle")}
          </p>

          <div className="space-y-8">
            {services.map((service) => {
              const Icon = service.icon;
              const whatsappMsg = t(locale, "services.waDetail").replace("{service}", service.title);
              const waLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappMsg)}`;

              const hubAnchorBefore =
                service.slug === "conseil-strategique"
                  ? "conseil"
                  : service.slug === "business-plan"
                    ? "accompagnement-operationnel"
                    : service.slug === "assistance-comptable"
                      ? "assistance-operationnelle"
                      : null;

              return (
                <Fragment key={service.slug}>
                  {hubAnchorBefore ? (
                    <div id={hubAnchorBefore} tabIndex={-1} className="scroll-mt-28" aria-hidden />
                  ) : null}
                  <div
                  id={service.slug}
                  className="bg-white rounded-lg border border-gray-200 p-8 lg:p-10 hover:border-[#C9A84C]/50 transition-colors scroll-mt-24"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex gap-4">
                      <Icon className="w-10 h-10 text-[#C9A84C] shrink-0" />
                      <div>
                        <span className="text-6xl font-serif font-bold text-gray-100">
                          {String(service.id).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-semibold text-[#0A0A0A] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#C9A84C] font-medium text-sm mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold hover:text-[#9E7B2E] transition-colors"
                      >
                        {t(locale, "services.card.more")}
                      </a>
                    </div>
                  </div>
                </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="rounded-2xl border border-[#C9A84C]/30 bg-[#0A0A0A] px-6 py-12 text-center text-white shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] sm:px-10 lg:px-14">
            <h2 className="mb-5 font-serif text-3xl font-semibold leading-tight md:text-4xl">
              {t(locale, "services.cta.title")}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/80">
              {t(locale, "services.cta.subtitle")}
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="jj-btn-slide jj-btn-slide-whatsapp inline-flex items-center justify-center rounded-lg bg-[#25D366] px-8 py-3 text-sm font-semibold"
            >
              {t(locale, "services.cta.button")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
