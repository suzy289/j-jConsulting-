import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { VisionImageCarousel } from "@/components/a-propos/VisionImageCarousel";
import { getLocaleFromCookies } from "@/lib/i18n-server";
import { getAboutCopy } from "@/lib/about";
import { t } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookies();
  return {
    title: t(locale, "meta.about.title"),
    description: t(locale, "meta.about.desc"),
  };
}

export default async function AProposPage() {
  const locale = await getLocaleFromCookies();
  const copy = getAboutCopy(locale);
  return (
    <>
      {/* Hero : fond dégradé multi-couches + mise en page éditoriale */}
      <section className="relative isolate min-h-[min(100svh,640px)] overflow-hidden pb-20 pt-24 text-[#0A0A0A] lg:min-h-[min(92vh,720px)] lg:pb-28 lg:pt-32">
        <div className="absolute inset-0 -z-20 bg-[#FBFAF7]" aria-hidden />
        <div
          className="absolute inset-0 -z-20 bg-[linear-gradient(125deg,#E3DDD3_0%,rgba(255,255,255,0.97)_38%,#FFFFFF_58%,#EFEAE2_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_100%_80%_at_0%_0%,rgba(201,168,76,0.32),transparent_55%),radial-gradient(ellipse_70%_60%_at_100%_110%,rgba(201,168,76,0.18),transparent_50%),radial-gradient(ellipse_50%_40%_at_70%_20%,rgba(10,10,10,0.04),transparent_60%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,transparent_28%,transparent_72%,rgba(247,244,239,0.85)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#FAFAF8] via-[#FAFAF8]/80 to-transparent"
          aria-hidden
        />

        <span
          className="pointer-events-none absolute -right-6 top-[18%] hidden select-none font-serif text-[clamp(5.5rem,16vw,12rem)] font-bold leading-none tracking-tight text-[#C9A84C]/[0.08] md:block lg:right-[6%] lg:top-[22%]"
          aria-hidden
        >
          J&J
        </span>

        <div className="relative mx-auto flex h-full min-h-[inherit] w-full max-w-7xl flex-col justify-center px-6 lg:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="about-hero-intro lg:col-span-7">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#9A7B3A]">
                {copy.breadcrumbAbout}
              </p>
              <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#C9A84C]/30" />
              <h1 className="max-w-xl font-serif text-[2rem] font-semibold leading-[1.15] tracking-tight text-[#0A0A0A] sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.12] xl:text-6xl">
                {copy.heroTitle.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-7 max-w-lg border-l-2 border-[#C9A84C]/50 pl-5 text-base leading-relaxed text-gray-600 md:text-lg">
                {copy.heroSubtitle}
              </p>
              <nav className="mt-10 flex flex-wrap items-center gap-x-2 text-sm text-gray-500" aria-label="Fil d'Ariane">
                <Link href="/" className="transition-colors hover:text-[#C9A84C]">
                  {copy.breadcrumbHome}
                </Link>
                <span className="text-gray-300" aria-hidden>
                  /
                </span>
                <span className="font-medium text-[#0A0A0A]">{copy.breadcrumbAbout}</span>
              </nav>
            </div>

            <div
              className="relative mx-auto hidden h-72 w-full max-w-sm lg:col-span-5 lg:mx-0 lg:block lg:h-80 lg:max-w-none"
              aria-hidden
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#C9A84C]/20 via-white/30 to-transparent ring-1 ring-[#C9A84C]/20" />
              <div className="absolute inset-[8%] overflow-hidden rounded-2xl border border-[#0A0A0A]/[0.06] bg-white/70 shadow-[0_25px_60px_-20px_rgba(10,10,10,0.12)] backdrop-blur-[2px]">
                <Image
                  src={encodeURI("/images/img animés.webp")}
                  alt=""
                  fill
                  className="object-cover object-[50%_18%] scale-[1.18]"
                  sizes="(max-width: 1024px) 0vw, 420px"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAFAF8] to-[#F2F0EB] py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_30%,rgba(201,168,76,0.07),transparent_50%)]"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] w-full min-h-[320px] sm:min-h-[380px] lg:min-h-0">
              <Image
                src="/images/WhatsApp_Image_2026-04-21_at_19.41.59__1_-removebg-preview.png"
                alt={copy.founderAlt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
                {copy.founderKicker}
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#0A0A0A] mb-6">
                {copy.founderName}
              </h2>
              <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
                {copy.bio.map((p, i) => (
                  <p key={i} className={i === 3 ? "font-medium text-[#0A0A0A]" : undefined}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0EDE8] via-white to-[#FAFAF8] py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_85%_15%,rgba(201,168,76,0.08),transparent_50%)]"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
                {copy.missionKicker}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A0A0A] mb-6">
                {copy.missionTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {copy.missionP1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {copy.missionP2}
              </p>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] rounded-2xl overflow-hidden min-h-[280px] relative">
              <video
                src="/images/VID-20221210-WA0043.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Vision */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFAF8] via-white to-[#F4F2ED] py-20 lg:py-28 text-[#0A0A0A]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_60%,rgba(201,168,76,0.06),transparent_48%)]"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <VisionImageCarousel />
            <div>
              <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
                {copy.visionKicker}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-[#0A0A0A]">
                {copy.visionTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {copy.visionP1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {copy.visionP2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs - design éditorial */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F4EF] via-white to-[#EDEAE3] py-20 lg:py-28 text-[#0A0A0A]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(201,168,76,0.1),transparent_42%)]"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
                {copy.valuesKicker}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                {copy.valuesTitle}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {copy.valuesIntro}
              </p>
              <div className="mt-10 hidden lg:block">
                <div className="w-24 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-0">
              {copy.values.map((value, i) => (
                <div
                  key={i}
                  className="group pt-10 pb-8 lg:pt-12 lg:pb-10 last:pb-0 border-b border-gray-200 last:border-0 flex gap-8 items-start hover:border-[#C9A84C]/40 transition-colors"
                >
                  <span className="font-serif text-4xl md:text-5xl font-bold text-[#C9A84C]/40 group-hover:text-[#C9A84C]/70 shrink-0 w-16 text-right tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-xl text-[#0A0A0A] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
