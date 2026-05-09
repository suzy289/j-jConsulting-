import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";
import { type Locale } from "@/lib/i18n";
import type { HubIllustrationId, ServiceHubSlug } from "@/lib/service-hubs-data";
import { getHubPayload } from "@/lib/service-hubs-data";
import { getServicesForLocale } from "@/lib/services-localized";
import { t } from "@/lib/i18n";
import {
  IllustrationDomains,
  IllustrationOperations,
  IllustrationSteering,
  IllustrationStrategy,
  IllustrationTraining,
} from "@/components/services/hub-illustrations";

type Props = {
  slug: ServiceHubSlug;
  locale: Locale;
};

function IllustrationPick({ id, className }: { id: HubIllustrationId; className?: string }) {
  switch (id) {
    case "domains":
      return <IllustrationDomains className={className} />;
    case "strategy":
      return <IllustrationStrategy className={className} />;
    case "steering":
      return <IllustrationSteering className={className} />;
    case "operations":
      return <IllustrationOperations className={className} />;
    case "training":
      return <IllustrationTraining className={className} />;
    default:
      return null;
  }
}

function PhotoSlot({
  locale,
  tone,
  ratioClass,
  msgKey,
}: {
  locale: Locale;
  tone: "light" | "dark";
  ratioClass: string;
  msgKey: "hub.placeholder.photo" | "hub.placeholder.wide" | "hub.placeholder.square";
}) {
  return (
    <div
      className={`flex flex-col justify-end overflow-hidden rounded-2xl border-2 border-dashed p-4 ${ratioClass} ${
        tone === "light"
          ? "border-[#C9A84C]/35 bg-white/80 shadow-inner"
          : "border-white/25 bg-white/5"
      }`}
    >
      <p
        className={`text-center text-[11px] leading-snug sm:text-xs ${
          tone === "light" ? "text-gray-500" : "text-white/55"
        }`}
      >
        {t(locale, msgKey)}
      </p>
    </div>
  );
}

/** Petits accents géométriques en coin de carte — sans réserver de « colonne image » */
function AlternatingCardCornerDecor({ index }: { index: number }) {
  const v = index % 3;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl" aria-hidden>
      {v === 0 ? (
        <>
          <div className="absolute -right-6 -top-6 size-28 rounded-full bg-[#C9A84C]/10" />
          <div className="absolute right-10 top-6 size-2 rounded-full bg-[#C9A84C]/35" />
        </>
      ) : v === 1 ? (
        <>
          <div className="absolute -left-4 top-1/2 size-24 -translate-y-1/2 rounded-full border border-[#C9A84C]/15 bg-[#C9A84C]/[0.05]" />
          <div className="absolute right-8 top-8 h-16 w-1 rounded-full bg-[#C9A84C]/20" />
        </>
      ) : (
        <>
          <div className="absolute -bottom-4 right-12 size-20 rotate-12 rounded-xl border border-[#C9A84C]/14" />
          <div className="absolute right-6 top-10 size-3 rounded-full bg-[#C9A84C]/30" />
        </>
      )}
    </div>
  );
}

/** Titre magazine : soulignement animé uniquement sur la 1re partie (ex. « Conseil stratégique ») */
function MagazineHubTitle({ title, locale }: { title: string; locale: Locale }) {
  let head: string | null = null;
  let tail: string | null = null;
  if (locale === "fr") {
    const i = title.indexOf(" et ");
    if (i > 0) {
      head = title.slice(0, i);
      tail = title.slice(i);
    }
  } else {
    const m = title.match(/^(.*?)(\s+advisory)$/i);
    if (m) {
      head = m[1];
      tail = m[2];
    }
  }

  if (head && tail) {
    return (
      <span className="inline">
        <span className="relative inline-block pb-3 align-baseline">
          {head}
          <span
            className="jj-magazine-rolack-underline absolute left-1/2 top-full mt-2 -translate-x-1/2"
            aria-hidden
          />
        </span>
        {tail}
      </span>
    );
  }

  return (
    <span className="relative inline-block pb-3 align-baseline">
      {title}
      <span className="jj-magazine-rolack-underline absolute left-1/2 top-full mt-2 -translate-x-1/2" aria-hidden />
    </span>
  );
}

function Breadcrumb({
  locale,
  title,
}: {
  locale: Locale;
  title: string;
}) {
  return (
    <nav className="mb-8 text-xs text-gray-500 lg:mb-10" aria-label="Fil d'Ariane">
      <Link href="/" className="transition-colors hover:text-[#C9A84C]">
        {t(locale, "nav.home")}
      </Link>
      <span className="mx-2">/</span>
      <Link href="/nos-services" className="transition-colors hover:text-[#C9A84C]">
        {t(locale, "nav.services")}
      </Link>
      <span className="mx-2">/</span>
      <span className="font-medium text-[#0A0A0A]">{title}</span>
    </nav>
  );
}

function SectionBlocks({
  locale,
  sections,
}: {
  locale: Locale;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
}) {
  return (
    <>
      {sections.map((section, si) => (
        <div key={si}>
          <h2 className="font-serif text-xl font-semibold text-[#0A0A0A] md:text-2xl">{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-[15px] leading-relaxed text-gray-600 md:text-base">
              {p}
            </p>
          ))}
          {section.bullets?.length ? (
            <ul className="mt-5 list-none space-y-3 pl-0">
              {section.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] text-gray-700 md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </>
  );
}

function RelatedStrip({
  locale,
  relateToTitle,
  relatedSlugs,
}: {
  locale: Locale;
  relateToTitle: Record<string, string>;
  relatedSlugs: string[];
}) {
  return (
    <div className="rounded-2xl border border-[#C9A84C]/25 bg-[#FAFAF8] p-8 lg:p-12">
      <h3 className="text-lg font-semibold text-[#0A0A0A] lg:text-2xl">
        {locale === "fr" ? "Fiches détaillées associées" : "Detailed service listings"}
      </h3>
      <p className="mt-3 text-base text-gray-600 lg:text-[17px]">
        {locale === "fr"
          ? "Accédez aux fiches précises depuis la vue « Nos services »."
          : "Open each granular card from the main services overview."}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {relatedSlugs.map((sSlug) => {
          const title = relateToTitle[sSlug];
          if (!title) return null;
          return (
            <Link
              key={sSlug}
              href={`/nos-services#${sSlug}`}
              className="inline-flex rounded-full border border-[#C9A84C]/40 bg-white px-4 py-1.5 text-sm text-[#0A0A0A] shadow-sm transition hover:border-[#C9A84C]/70 hover:bg-[#FFFCF7]"
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function HubCtaStrip({ locale, waHref }: { locale: Locale; waHref: string }) {
  return (
    <section className="bg-[#F5F5F5] py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-16">
        <div className="rounded-2xl border border-[#C9A84C]/30 bg-[#0A0A0A] px-6 py-10 text-white lg:px-12">
          <h2 className="font-serif text-2xl font-semibold lg:text-3xl">
            {locale === "fr"
              ? "Discutons de votre contexte précis."
              : "Let’s contextualise next steps."}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 lg:text-base">
            {locale === "fr"
              ? "Un échange permet de qualifier la profondeur d’intervention, le calendrier et la composition d’équipe la plus pertinente."
              : "A short discovery call clarifies scope, pacing and staffing."}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="jj-btn-slide jj-btn-slide-whatsapp inline-flex rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold"
            >
              {t(locale, "contact.hero.ctaWhatsapp")}
            </a>
            <Link
              href="/contact"
              className="jj-btn-slide jj-btn-slide-white-to-gold inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0A0A0A]"
            >
              {locale === "fr" ? "Formulaire détaillé" : "Contact form"}
            </Link>
            <Link href="/nos-services" className="text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              {t(locale, "nav.services")} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Ancien nom conservé pour compatibilité (bundles / merges) : fiches liées + bandeau CTA */
function RelatedAndCta({
  locale,
  hubTitle: _hubTitle,
  relateToTitle,
  relatedSlugs,
  waHref,
}: {
  locale: Locale;
  hubTitle: string;
  relateToTitle: Record<string, string>;
  relatedSlugs: string[];
  waHref: string;
}) {
  void _hubTitle;
  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pb-4 pt-2 lg:px-16">
        <RelatedStrip locale={locale} relateToTitle={relateToTitle} relatedSlugs={relatedSlugs} />
      </div>
      <HubCtaStrip locale={locale} waHref={waHref} />
    </>
  );
}

export function ServiceHubPage({ slug, locale }: Props) {
  const hub = getHubPayload(slug, locale);
  const servicesList = getServicesForLocale(locale);
  const relateToTitle = Object.fromEntries(servicesList.map((s) => [s.slug, s.title]));

  const waLine =
    locale === "fr"
      ? `Bonjour, souhaitez-vous préciser vos besoins autour du périmètre « ${hub.title} » ?`
      : `Hello — we would like scoped support on « ${hub.title} ».`;

  const waHref = `${WHATSAPP_LINK}?text=${encodeURIComponent(waLine)}`;

  const layout = hub.layoutVariant;
  const illId = hub.illustrationId;

  if (layout === "splitHero") {
    return (
      <>
        <section className="relative overflow-hidden bg-[#FBFAF7] pb-14 pt-[7.75rem] text-[#0A0A0A] lg:pb-20 lg:pt-[9rem]">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(201,168,76,0.12),transparent_55%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-16">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <Breadcrumb locale={locale} title={hub.title} />
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#C9A84C]">
                  {hub.kicker}
                </p>
                <h1 className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight md:text-5xl">
                  {hub.title}
                </h1>
                <p className="mt-8 text-lg leading-relaxed text-gray-600">{hub.lead}</p>
              </div>
              <div className="w-full lg:self-center">
                <div className="overflow-hidden rounded-[1.5rem] shadow-[0_18px_48px_-20px_rgba(10,10,10,0.16)] ring-1 ring-[#C9A84C]/20">
                  <div className="relative aspect-video w-full min-h-[140px] bg-neutral-900 sm:min-h-[160px]">
                    <video
                      className="absolute inset-0 z-0 h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={t(locale, "hub.domaines.heroLoopVideoAria")}
                    >
                      <source src="/images/video.mp4" type="video/mp4" />
                    </video>
                    <div
                      className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/15 via-transparent to-black/25"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              <div className="space-y-12 lg:col-span-7">
                <SectionBlocks locale={locale} sections={hub.sections} />
              </div>
              <aside className="lg:col-span-5">
                <div className="sticky top-28">
                  <div className="overflow-hidden rounded-2xl shadow-[0_12px_40px_-20px_rgba(10,10,10,0.12)] ring-1 ring-[#C9A84C]/20">
                    <div className="relative aspect-square w-full min-h-[200px]">
                      <Image
                        src="/images/WhatsApp%20Image%202026-04-22%20at%2014.32.03.jpeg"
                        alt={t(locale, "hub.domaines.asideImageAlt")}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <div className="mx-auto mt-14 max-w-4xl">
              <RelatedStrip locale={locale} relateToTitle={relateToTitle} relatedSlugs={hub.relatedServiceSlugs} />
            </div>
          </div>
        </section>
        <HubCtaStrip locale={locale} waHref={waHref} />
      </>
    );
  }

  if (layout === "magazine") {
    return (
      <>
        <section className="relative isolate overflow-hidden bg-[#0A0A0A] pb-20 pt-[7.5rem] text-white lg:pb-28 lg:pt-[9rem]">
          <div
            className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#C9A84C]/12 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-16">
            <nav className="mb-8 text-xs text-white/55" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-[#C9A84C]">
                {t(locale, "nav.home")}
              </Link>
              <span className="mx-2">/</span>
              <Link href="/nos-services" className="hover:text-[#C9A84C]">
                {t(locale, "nav.services")}
              </Link>
              <span className="mx-2">/</span>
              <span className="font-medium text-white">{hub.title}</span>
            </nav>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#C9A84C]">{hub.kicker}</p>
                <h1 className="font-serif text-4xl font-semibold leading-[1.1] md:text-[2.65rem]">
                  <MagazineHubTitle title={hub.title} locale={locale} />
                </h1>
                <p className="mt-8 text-lg leading-relaxed text-white/78">{hub.lead}</p>
              </div>
              <div className="relative">
                <IllustrationPick id={illId} className="relative z-10 w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#C9A84C]/20 bg-[#FAFAF8] py-14 lg:py-20">
          <div className="mx-auto mb-12 max-w-7xl px-6 sm:px-8 lg:px-16">
            <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-[0_14px_40px_-18px_rgba(10,10,10,0.12)] ring-1 ring-[#C9A84C]/20 lg:max-w-6xl">
              <div className="relative aspect-video w-full min-h-[120px] sm:min-h-[140px]">
                <video
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={t(locale, "hub.magazine.wideVideoAria")}
                >
                  <source src="/images/vid.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-5xl space-y-14 px-6 sm:px-8 lg:max-w-6xl lg:space-y-16 lg:px-16">
            {hub.sections.map((section, si) => (
              <article
                key={si}
                className="border-l-4 border-[#C9A84C] bg-white/90 py-3 pl-8 pr-6 shadow-sm backdrop-blur-sm md:py-4 md:pl-10 md:pr-8 lg:pr-10"
              >
                <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A]">{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="mt-5 text-[15px] leading-relaxed text-gray-600 md:text-base">
                    {p}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="mt-6 list-none space-y-3">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-gray-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
          <div className="mx-auto mt-14 max-w-6xl px-6 sm:px-8 lg:max-w-7xl lg:px-16">
            <RelatedStrip locale={locale} relateToTitle={relateToTitle} relatedSlugs={hub.relatedServiceSlugs} />
          </div>
        </section>
        <HubCtaStrip locale={locale} waHref={waHref} />
      </>
    );
  }

  if (layout === "focusCards") {
    return (
      <>
        <section className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FAFAF8] to-white pb-12 pt-[7.75rem] lg:pb-16 lg:pt-[9rem]">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-16">
            <div className="min-w-0 flex-1">
              <Breadcrumb locale={locale} title={hub.title} />
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#C9A84C]">{hub.kicker}</p>
              <h1 className="jj-focus-cards-hero-title font-serif text-4xl leading-[1.12] md:text-5xl lg:text-[3.15rem] lg:leading-[1.06]">
                {hub.title}
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-[#4a453d]">{hub.lead}</p>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-md shrink-0 lg:mx-0">
              <Image
                src="/images/Pilotage-dentreprise-removebg-preview.png"
                alt={t(locale, "hub.focusCards.pilotageDiagramAlt")}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 90vw, 400px"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-16">
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              {hub.sections.map((section, i) => (
                <div
                  key={section.heading}
                  className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-[#FFFCF7] p-8 shadow-sm transition hover:border-[#C9A84C]/45 hover:shadow-md"
                >
                  <span className="font-serif text-5xl font-bold leading-none text-[#C9A84C]/25 transition group-hover:text-[#C9A84C]/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-serif text-xl font-semibold text-[#0A0A0A]">{section.heading}</h2>
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi} className="mt-4 text-[15px] leading-relaxed text-gray-600">
                      {p}
                    </p>
                  ))}
                  {section.bullets?.length ? (
                    <ul className="mt-5 space-y-2 text-sm text-gray-700">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="text-[#C9A84C]">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="mt-14">
              <RelatedStrip locale={locale} relateToTitle={relateToTitle} relatedSlugs={hub.relatedServiceSlugs} />
            </div>
          </div>
        </section>
        <HubCtaStrip locale={locale} waHref={waHref} />
      </>
    );
  }

  if (layout === "alternating") {
    return (
      <>
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FBFAF7] to-[#F2EDE6] pb-16 pt-[7.75rem] lg:pb-20 lg:pt-[9rem]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="absolute -left-32 top-24 size-[380px] rounded-full border border-[#C9A84C]/10 bg-[#C9A84C]/[0.04]" />
            <div className="absolute -right-20 top-0 size-[280px] rounded-full bg-gradient-to-bl from-[#C9A84C]/14 to-transparent blur-3xl" />
            <div className="absolute bottom-16 left-[15%] size-24 rotate-6 rounded-2xl border-2 border-[#C9A84C]/12" />
            <div className="absolute right-[8%] top-[42%] size-16 rounded-full bg-[#C9A84C]/10" />
          </div>
          <div className="relative z-[1] mx-auto max-w-4xl px-6 sm:px-8 lg:max-w-6xl lg:px-16">
            <Breadcrumb locale={locale} title={hub.title} />
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#C9A84C]">{hub.kicker}</p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.12] md:text-5xl">
              <span className="jj-hub-alt-title-wrap">
                {hub.title}
                <span className="jj-hub-alt-underline-track" aria-hidden>
                  <span className="jj-hub-alt-underline-bar" />
                </span>
              </span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-gray-600 lg:text-xl lg:leading-relaxed">
              {hub.lead}
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F5F3EF] py-16 lg:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.45]"
            aria-hidden
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,168,76,0.1) 1px, transparent 0)`,
              backgroundSize: "26px 26px",
            }}
          />
          <div className="pointer-events-none absolute -right-24 top-1/4 size-96 rounded-full bg-[#C9A84C]/[0.06] blur-3xl" aria-hidden />
          <div className="relative z-[1] mx-auto max-w-5xl space-y-10 px-6 sm:px-8 lg:max-w-6xl lg:space-y-12 lg:px-16">
            {hub.sections.map((section, i) => (
              <article
                key={section.heading}
                className={`relative overflow-hidden rounded-2xl border border-[#C9A84C]/12 bg-white/90 p-8 shadow-sm ring-1 ring-white/70 backdrop-blur-sm md:p-10 lg:p-12 ${
                  i % 2 === 0 ? "border-l-[5px] border-l-[#C9A84C]/55" : "border-r-[5px] border-r-[#C9A84C]/45"
                }`}
              >
                <AlternatingCardCornerDecor index={i} />
                <div className="relative z-[1] min-w-0">
                  <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A] md:text-3xl lg:text-[1.85rem]">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi} className="mt-5 text-[15px] leading-relaxed text-gray-600 md:text-base lg:text-[17px] lg:leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {section.bullets?.length ? (
                    <ul className="mt-6 list-none space-y-3">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-gray-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
            <RelatedStrip locale={locale} relateToTitle={relateToTitle} relatedSlugs={hub.relatedServiceSlugs} />
          </div>
        </section>
        <HubCtaStrip locale={locale} waHref={waHref} />
      </>
    );
  }

  /* workshop — formations */
  return (
    <>
      <section className="relative rounded-b-[2.5rem] bg-gradient-to-b from-[#EDE8DF] via-[#F5F0E8] to-[#FAFAF8] pb-20 pt-[7.75rem] lg:rounded-b-[3.5rem] lg:pb-28 lg:pt-[9rem]">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:max-w-6xl lg:px-16">
          <Breadcrumb locale={locale} title={hub.title} />
          <p className="mb-4 mt-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#9A7B3A]">{hub.kicker}</p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.12] md:text-5xl lg:text-[3.25rem]">{hub.title}</h1>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-600 lg:text-xl lg:leading-relaxed">
            {hub.lead}
          </p>
        </div>
        <div className="mx-auto mt-14 w-full max-w-5xl px-6 sm:px-8 lg:mt-16 lg:max-w-6xl lg:px-16">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-[#C9A84C]/45 via-[#D4BC7A]/35 to-[#B8943E]/40 p-[3px] shadow-[0_28px_80px_-32px_rgba(10,10,10,0.35)]">
            <div className="overflow-hidden rounded-[1.55rem] bg-[#0A0A0A] ring-1 ring-black/30">
              <div className="relative aspect-video w-full min-h-[200px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px]">
                <video
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={t(locale, "hub.formations.workshopHeroVideoAria")}
                >
                  <source src="/images/VID-20221210-WA0043.mp4" type="video/mp4" />
                </video>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl space-y-10 px-6 sm:px-8 lg:max-w-6xl lg:space-y-12 lg:px-16">
          {hub.sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-r-2xl border-l-[6px] border-[#C9A84C] bg-[#FFFCF7] p-8 shadow-sm ring-1 ring-[#C9A84C]/10 md:p-10 lg:p-12"
            >
              <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A] md:text-3xl">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-5 text-[15px] leading-relaxed text-gray-600 md:text-base lg:text-[17px] lg:leading-relaxed">
                  {p}
                </p>
              ))}
              {section.bullets?.length ? (
                <ul className="mt-6 space-y-3">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-3 border-b border-[#C9A84C]/10 pb-3 last:border-0 last:pb-0">
                      <span className="font-semibold text-[#C9A84C]">•</span>
                      <span className="text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <div className="relative -mx-6 overflow-x-clip sm:-mx-8 lg:-mx-16">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white to-transparent sm:w-20" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white to-transparent sm:w-20" aria-hidden />
            <div
              className="flex w-max gap-5 py-3 pl-5 animate-formations-mission-marquee sm:gap-6 sm:pl-8"
              aria-hidden
            >
              {(
                [
                  {
                    src: "/images/WhatsApp%20Image%202026-04-22%20at%2014.32.01.jpeg",
                    altKey: "hub.formations.missionMarqueeAlt1" as const,
                  },
                  {
                    src: "/images/IMG-20221211-WA0089.jpg",
                    altKey: "hub.formations.missionMarqueeAlt2" as const,
                  },
                ] as const
              )
                .concat(
                  [
                    {
                      src: "/images/WhatsApp%20Image%202026-04-22%20at%2014.32.01.jpeg",
                      altKey: "hub.formations.missionMarqueeAlt1" as const,
                    },
                    {
                      src: "/images/IMG-20221211-WA0089.jpg",
                      altKey: "hub.formations.missionMarqueeAlt2" as const,
                    },
                  ] as const,
                )
                .map((item, i) => (
                  <div
                    key={`${item.altKey}-${i}`}
                    className="relative h-52 w-[min(78vw,300px)] shrink-0 overflow-hidden rounded-2xl shadow-lg ring-1 ring-[#C9A84C]/25 sm:h-56 sm:w-[22rem] md:h-60 md:w-[24rem]"
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 78vw, 384px"
                    />
                  </div>
                ))}
            </div>
          </div>
          <p className="sr-only">
            {t(locale, "hub.formations.missionMarqueeAlt1")} — {t(locale, "hub.formations.missionMarqueeAlt2")}
          </p>
        </div>
      </section>
      <RelatedAndCta
        locale={locale}
        hubTitle={hub.title}
        relateToTitle={relateToTitle}
        relatedSlugs={hub.relatedServiceSlugs}
        waHref={waHref}
      />
    </>
  );
}
