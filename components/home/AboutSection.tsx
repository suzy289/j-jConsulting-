"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SITE, WHATSAPP_LINK } from "@/lib/constants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { getAboutCopy } from "@/lib/about";

const HERO_BG = "/images/accounting.webp";

const fadeUp = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export function AboutSection() {
  const { t, locale } = useI18n();
  const aboutCopy = getAboutCopy(locale);
  const waConsult = `${WHATSAPP_LINK}?text=${encodeURIComponent(t("home.about.waConsult"))}`;

  const aboutSubtitle = t("home.about.subtitle").replace("{name}", SITE.name);
  const aboutP1 = t("home.about.p1").replaceAll("{name}", SITE.name);

  return (
    <div className="relative w-full overflow-x-hidden text-gray-900">
      {/* Fond image commun (transparence + dégradés) — même logique visuelle partout */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="about-hero-bg-pan absolute -left-[15%] -right-[15%] -top-[10%] bottom-[-10%] min-h-[110%]">
          <Image
            src={HERO_BG}
            alt=""
            fill
            priority
            className="object-cover opacity-[0.22]"
            sizes="100vw"
            role="presentation"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/78 to-amber-50/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/55 to-white/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_85%_20%,rgba(201,168,76,0.14),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-6 pt-20 lg:pb-8 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Colonne gauche — panneau vitré */}
          <motion.div {...fadeUp} className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-2xl border border-white/50 bg-white/30 shadow-2xl backdrop-blur-xl"
              aria-hidden
            />
            <div className="relative p-8 md:p-10">
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className="mb-4 inline-block"
              >
                <span className="rounded-full bg-[#C9A84C]/95 px-4 py-2 text-sm font-bold text-black shadow-lg backdrop-blur-sm">
                  {t("home.about.badge")}
                </span>
              </motion.div>

              <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                <span>{t("home.about.title.a")} </span>
                <span className="text-[#9E7B2E]">{t("home.about.title.b")}</span>
                <span className="relative inline-flex items-center pl-2">
                  <span className="inline-block whitespace-nowrap">{t("home.about.title.c")}</span>
                </span>
              </h2>

              <p className="mb-4 text-xl font-medium text-gray-800/90 md:text-2xl">
                {aboutSubtitle}
              </p>

              <p className="mb-4 text-lg leading-relaxed text-gray-700/95">
                {aboutP1}
              </p>
              <p className="mb-10 text-lg leading-relaxed text-gray-700/95">
                {t("home.about.p2")}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={waConsult}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jj-btn-slide jj-btn-slide-gold-solid inline-flex items-center justify-center rounded-xl bg-[#C9A84C] px-8 py-4 text-base font-semibold shadow-lg"
                >
                  {t("home.about.cta.wa")}
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0" aria-hidden />
                </a>
                <Link
                  href="/#services"
                  className="jj-btn-slide jj-btn-slide-dark-outline-light inline-flex items-center justify-center rounded-xl bg-black/90 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                >
                  {t("home.about.cta.services")}
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Colonne droite — même image en fond dans le cadre + panoramique (style hero TE) */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="relative">
            <div className="relative min-h-[648px] md:min-h-[760px]">
              <div
                className="absolute inset-x-0 top-0 h-[min(420px,58vw)] min-h-[380px] w-full overflow-hidden rounded-3xl shadow-2xl md:h-[520px]"
                style={{ perspective: "1000px" }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-3xl group">
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <div className="about-hero-bg-pan absolute -left-[18%] -right-[18%] -top-[12%] bottom-[-12%] min-h-[115%]">
                      <Image
                        src={HERO_BG}
                        alt={t("home.about.heroImageAlt")}
                        fill
                        className="object-cover object-center opacity-45 md:opacity-50"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/90 via-black/45 to-white/25"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-4 rounded-2xl border border-white/35 bg-gradient-to-br from-[#C9A84C]/15 via-transparent to-transparent backdrop-blur-[2px]"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 -translate-x-full group-hover:translate-x-full"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-[#C9A84C]/30 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-6">
                <motion.div
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.2 }}
                  className="rounded-2xl border-2 border-white/55 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:p-8"
                >
                  <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="inline-block rounded-full border border-gray-900/90 bg-black/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                          {t("home.about.card.badge")}
                        </span>
                      </div>
                      <p className="text-base font-medium text-[#9E7B2E]">
                        {t("home.about.card.subtitle")}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6 grid grid-cols-2 gap-4 border-t-2 border-gray-200/90 pt-6 md:gap-6">
                    <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl border-2 border-white/60 bg-white/50 p-2 shadow-inner backdrop-blur-md md:h-80">
                      <Image
                        src="/images/WhatsApp_Image_2026-04-21_at_19.41.59__1_-removebg-preview.png"
                        alt={aboutCopy.founderAlt}
                        fill
                        className="object-contain object-center opacity-95"
                        sizes="(max-width: 768px) 45vw, 400px"
                      />
                    </div>
                    <div className="group/limit relative flex h-64 flex-col justify-center overflow-hidden rounded-xl border border-white/10 bg-black/85 p-4 backdrop-blur-sm md:h-80">
                      <div
                        className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#C9A84C]/30 blur-2xl transition-all duration-500 group-hover/limit:bg-[#C9A84C]/45"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute -bottom-5 -left-5 h-16 w-16 rounded-full bg-[#C9A84C]/25 blur-xl"
                        aria-hidden
                      />
                      <div className="relative z-10">
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                          {t("home.about.card.expK")}
                        </p>
                        <div className="flex items-baseline gap-1">
                          <p className="text-2xl font-black tracking-tight text-white md:text-3xl">10+</p>
                          <span className="text-sm font-bold text-[#C9A84C]">{t("home.about.card.expUnit")}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="h-1 w-8 rounded-full bg-gradient-to-r from-[#C9A84C] to-amber-300" />
                          <p className="text-[10px] font-medium text-gray-500">{t("home.about.card.expFoot")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/a-propos"
                    className="jj-btn-slide jj-btn-slide-gold-to-amber mt-2 inline-flex w-full items-center justify-center rounded-xl bg-[#C9A84C] px-6 py-3 font-semibold shadow-lg"
                  >
                    {t("home.about.cta.more")}
                    <ArrowRight className="ml-2 h-5 w-5 shrink-0" aria-hidden />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center lg:mt-14">
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#9E7B2E] underline-offset-4 transition-colors hover:text-gray-900 hover:underline"
          >
            {t("home.about.link.more")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
