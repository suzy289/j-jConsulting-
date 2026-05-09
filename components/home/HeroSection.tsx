"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { useI18n } from "@/components/i18n/I18nProvider";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const step = target / 50;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function HeroSection() {
  const { t } = useI18n();
  const heroStats = [
    { value: 5 as const, suffix: "", label: t("home.hero.stat1"), accent: false },
    { value: 5 as const, suffix: "", label: t("home.hero.stat2"), accent: false },
    { value: 100 as const, suffix: "%", label: t("home.hero.stat3"), accent: true },
    { value: "∞" as const, suffix: "", label: t("home.hero.stat4"), accent: false },
  ] as const;

  return (
    <section className="relative flex min-h-screen max-w-full flex-col overflow-x-hidden overflow-y-visible rounded-b-[1.5rem] bg-[#0A0A0A] pb-[min(12vh,100px)] text-white md:rounded-b-[2.25rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_85%_8%,rgba(34,197,94,0.12),transparent_38%),linear-gradient(130deg,#0A0A0A_8%,#111827_52%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[min(1100px,min(82vw,calc(100vw-1.75rem)))] min-w-[min(520px,calc(100vw-1.25rem))] max-w-[calc(100vw-1.25rem)] hero-floor-scene lg:block">
        <div className="absolute inset-0 flex items-end justify-end pb-[8%] -translate-y-[min(40vh,448px)] lg:-translate-y-[min(56vh,608px)] xl:-translate-y-[min(64vh,704px)]">
          <div className="hero-floor-plane hero-floor-mirror relative h-[min(58vh,560px)] w-full max-h-[72vh] transform-gpu">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/[0.12] bg-zinc-950/70 shadow-[0_32px_90px_-16px_rgba(0,0,0,0.75),inset_0_1px_0_0_rgba(255,255,255,0.07)] ring-1 ring-white/[0.06]">
              <div className="absolute inset-0">
                <div className="absolute inset-0 animate-hero-bg-crossfade-a">
                  <Image
                    src="/images/accounting.webp"
                    alt=""
                    fill
                    priority
                    className="hero-media-drift hero-bg-photo-filter object-cover object-[center_35%]"
                    sizes="(min-width: 1024px) min(1100px,82vw), 0px"
                    aria-hidden
                  />
                </div>
                <div className="absolute inset-0 animate-hero-bg-crossfade-b">
                  <Image
                    src="/images/accueil.jpg"
                    alt=""
                    fill
                    className="hero-media-drift-offset hero-bg-photo-filter object-cover object-[center_35%]"
                    sizes="(min-width: 1024px) min(1100px,82vw), 0px"
                    aria-hidden
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-6 top-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent sm:inset-x-8" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/[0.93] via-[#0A0A0A]/42 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_25%,rgba(59,130,246,0.12),transparent_45%)]" />
              <div className="pointer-events-none absolute inset-0 hero-media-shine opacity-40" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-24 pt-32 lg:px-16">
        <div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:items-stretch lg:gap-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6 text-xs font-semibold uppercase tracking-[3px] text-[#C9A84C] md:text-sm"
            >
              {t("home.hero.kicker")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {t("home.hero.title.a")}{" "}
              <span className="text-[#C9A84C]">{t("home.hero.title.b")}</span>{" "}
              {t("home.hero.title.c")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
            >
              {t("home.hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="jj-btn-slide jj-btn-slide-hero-filled inline-flex items-center justify-center px-8 py-4 text-center text-xs font-semibold uppercase tracking-widest shadow-lg"
              >
                {t("home.hero.cta.meeting")}
              </Link>
              <Link
                href="/nos-services"
                className="jj-btn-slide jj-btn-slide-hero-outline inline-flex items-center justify-center border border-white bg-transparent px-8 py-4 text-center text-xs font-semibold uppercase tracking-widest shadow-lg"
              >
                {t("home.hero.cta.services")}
              </Link>
            </motion.div>
          </div>

          <div className="relative hidden min-h-[min(52vh,28rem)] lg:flex lg:flex-col lg:justify-end lg:items-end lg:gap-5 lg:pb-4 lg:pr-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="hero-float w-full max-w-[280px] rounded-xl border border-white/25 bg-white/[0.08] px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-sm"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/75 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
                {t("home.hero.float1.k")}
              </p>
              <p className="mt-1 text-sm font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                {t("home.hero.float1.v")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              className="hero-float-delayed w-full max-w-[260px] rounded-xl border border-[#C9A84C]/65 bg-white/[0.08] px-4 py-3 shadow-lg shadow-black/25 backdrop-blur-sm ring-1 ring-[#C9A84C]/30"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/75 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
                {t("home.hero.float2.k")}
              </p>
              <p className="mt-1 text-sm font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                {t("home.hero.float2.v")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Chiffres clés — bas du hero, style grille éditoriale */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="mt-14 w-full border-t border-white/[0.12] pt-10 lg:mt-16 lg:pt-12"
        >
          <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C9A84C]/90">
            {t("home.hero.stats.kicker")}
          </p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-4 lg:gap-0">
            {heroStats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.09}
                className={`relative text-center sm:text-left rounded-xl px-2 py-3 transition-colors hover:bg-white/[0.06] ${
                  i < heroStats.length - 1
                    ? "lg:border-r lg:border-white/[0.14] lg:pr-8"
                    : ""
                }`}
              >
                <div
                  className={`font-serif text-4xl font-semibold tabular-nums tracking-tight md:text-5xl lg:text-6xl ${
                    stat.accent ? "text-[#C9A84C]" : "text-white"
                  }`}
                >
                  {typeof stat.value === "number" ? (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  ) : (
                    <>
                      {stat.value}
                      {stat.suffix}
                    </>
                  )}
                </div>
                <p className="mt-3 max-w-[16rem] text-sm leading-snug text-white/55 md:text-base mx-auto sm:mx-0">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[5] overflow-hidden border-t border-[#C9A84C]/55 bg-[#C9A84C]/10 py-4">
        <div className="animate-marquee whitespace-nowrap text-sm font-medium tracking-widest text-white/60">
          {t("home.hero.marquee")} · {t("home.hero.marquee")} ·
        </div>
      </div>
    </section>
  );
}
