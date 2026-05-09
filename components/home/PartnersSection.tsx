"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { partners } from "@/lib/partners";
import { useI18n } from "@/components/i18n/I18nProvider";

const FEATURED_COUNT = 5;
const featured = partners.slice(0, FEATURED_COUNT);

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export function PartnersSection() {
  const { t } = useI18n();
  return (
    <section
      id="section-partenaires"
      className="home-section-partners relative w-full min-w-0 overflow-hidden rounded-t-[1.75rem] bg-[#06080d] py-20 text-white md:rounded-tl-[1.25rem] md:rounded-tr-[3rem] lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
      >
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-[#C9A84C]/30" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full border border-[#C9A84C]/20" />
      </div>

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pb-12 text-center"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C9A84C]">
            {t("home.partners.kicker")}
          </p>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-tight">
            {t("home.partners.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-normal text-white/70 md:text-lg">
            {t("home.partners.subtitle")}
          </p>
        </motion.div>

        <div className="mx-4 sm:mx-6 lg:mx-7">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {featured.map((partner, i) => {
              const title = partner.shortName || partner.name;
              const subtitle = partner.services
                ? partner.services.length > 72
                  ? `${partner.services.slice(0, 72)}…`
                  : partner.services
                : t("home.partners.fallback");

              return (
                <motion.div
                  key={partner.id}
                  {...fadeUp}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.12,
                  }}
                  className={`group col-span-1 overflow-hidden ${
                    i === 1 || i === 3 ? "mt-0 lg:mt-28" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-lg bg-white">
                    <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-[4/5]">
                      {partner.logo ? (
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                          className="object-contain p-8 transition-transform duration-[400ms] ease-out group-hover:scale-110"
                          loading={i < 2 ? "eager" : "lazy"}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center p-6 text-center">
                          <span className="text-sm font-semibold leading-snug text-gray-800">
                            {partner.name}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="font-sans text-xl font-bold leading-snug text-white sm:text-2xl md:text-[26px] md:leading-[2.25rem]">
                      {title}
                    </h3>
                    <span className="mt-1 block text-base font-normal leading-relaxed text-slate-400">
                      {subtitle}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex justify-center sm:mt-16"
        >
          <Link
            href="/references"
            className="jj-btn-slide jj-btn-slide-outline-gold-fill inline-flex items-center justify-center gap-2 rounded-xl bg-transparent px-8 py-3.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A84C]"
          >
            {t("home.partners.cta")}
            <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
