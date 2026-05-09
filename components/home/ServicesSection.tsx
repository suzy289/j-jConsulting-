"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { getServicesForLocale } from "@/lib/services-localized";

const CARD_W = 320;
const GAP = 24;

/** Barre supérieure + fond icône (alternance type Transfer Exchange, tons cabinet) */
const cardGradients: readonly { bar: string; icon: string }[] = [
  { bar: "from-[#C9A84C] to-[#9E7B2E]", icon: "from-[#C9A84C] to-[#9E7B2E]" },
  { bar: "from-zinc-800 to-black", icon: "from-zinc-800 to-black" },
  { bar: "from-amber-500 to-orange-600", icon: "from-amber-500 to-orange-600" },
  { bar: "from-blue-600 to-blue-800", icon: "from-blue-600 to-blue-800" },
  { bar: "from-emerald-600 to-teal-700", icon: "from-emerald-600 to-teal-700" },
  { bar: "from-violet-600 to-purple-800", icon: "from-violet-600 to-purple-800" },
  { bar: "from-rose-600 to-rose-800", icon: "from-rose-600 to-rose-800" },
  { bar: "from-cyan-600 to-teal-700", icon: "from-cyan-600 to-teal-700" },
  { bar: "from-indigo-600 to-indigo-900", icon: "from-indigo-600 to-indigo-900" },
  { bar: "from-[#B8860B] to-[#6B4E0A]", icon: "from-[#B8860B] to-[#6B4E0A]" },
];

function truncateChip(text: string, max = 36) {
  const t = text.trim();
  return t.length <= max ? t : `${t.slice(0, max - 1)}…`;
}

export function ServicesSection() {
  const { t, locale } = useI18n();
  const services = useMemo(() => getServicesForLocale(locale), [locale]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const step = CARD_W + GAP;

  const updateActiveFromScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = services.length - 1;
    const i = Math.round(el.scrollLeft / step);
    setActive(Math.min(max, Math.max(0, i)));
  }, [step, services.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateActiveFromScroll();
    el.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveFromScroll);
  }, [updateActiveFromScroll]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const goTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * step, behavior: "smooth" });
  };

  const total = services.length;

  return (
    <div id="services" className="relative w-full overflow-hidden bg-white py-20 lg:py-24">
      {/* Fonds décoratifs (inspiré Transfer Exchange — palette or / neutre) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-50 to-white" />
        <div className="absolute -top-16 -right-24 h-[420px] w-[420px] bg-gradient-to-br from-[#C9A84C]/18 via-[#C9A84C]/6 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-[360px] w-[360px] bg-gradient-to-tl from-[#C9A84C]/12 via-[#C9A84C]/5 to-transparent blur-2xl" />
        <div
          className="absolute left-1/4 top-0 h-[280px] w-[360px] rotate-6 bg-[#C9A84C]/20 opacity-40"
          style={{
            clipPath: "polygon(0% 0%, 80% 10%, 100% 60%, 15% 100%)",
          }}
        />
        <div
          className="absolute bottom-10 right-0 h-[300px] w-[420px] -rotate-6 bg-gradient-to-br from-[#C9A84C]/28 to-transparent opacity-30"
          style={{
            clipPath: "polygon(10% 0%, 100% 10%, 85% 100%, 0% 90%)",
          }}
        />
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C9A84C]/18 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(120deg, rgba(201, 168, 76, 0.14), rgba(201, 168, 76, 0.14) 2px, transparent 2px, transparent 16px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bloc intro sombre */}
        <div className="relative mb-14 overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-10 shadow-2xl sm:p-12 lg:mb-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,76,0.22),transparent_52%)] opacity-80" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,168,76,0.14),transparent_50%)] opacity-70" />
          <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-70" />
          <div className="relative z-10 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/45 bg-gradient-to-r from-[#C9A84C]/25 to-[#C9A84C]/10 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#C9A84C]/15 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#C9A84C]" />
              {t("home.services.badge")}
            </span>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300">
              {t("home.services.intro")}
            </p>
          </div>
        </div>

        {/* Carrousel services */}
        <div className="relative -mx-4 px-4">
          <button
            type="button"
            aria-label={t("home.services.prev")}
            onClick={() => scrollByDir(-1)}
            className="jj-btn-slide jj-btn-slide-nav-disk group absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl md:flex"
          >
            <ChevronLeft className="h-6 w-6 text-[#0A0A0A] transition-transform transition-colors group-hover:scale-110 group-hover:text-white" />
          </button>
          <button
            type="button"
            aria-label={t("home.services.next")}
            onClick={() => scrollByDir(1)}
            className="jj-btn-slide jj-btn-slide-nav-disk group absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl md:flex"
          >
            <ChevronRight className="h-6 w-6 text-[#0A0A0A] transition-transform transition-colors group-hover:scale-110 group-hover:text-white" />
          </button>

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pt-4 [scrollbar-width:none] md:px-14 [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              const g = cardGradients[i % cardGradients.length]!;
              const wa = `${WHATSAPP_LINK}?text=${encodeURIComponent(
                t("home.services.waMsg").replace("{service}", service.title)
              )}`;

              return (
                <div
                  key={service.slug}
                  data-service-card
                  className="group w-[min(320px,calc(100vw-3rem))] shrink-0 snap-center sm:w-[320px]"

                >
                  <div className="relative flex h-[420px] flex-col overflow-hidden rounded-[2rem] border-2 border-gray-100 bg-white shadow-lg transition-all duration-500 hover:border-[#C9A84C]/45 hover:shadow-2xl">
                    <div
                      className="pointer-events-none absolute -right-2 -top-2 z-[1] select-none font-black leading-none text-gray-200/90"
                      style={{ fontSize: "clamp(5.5rem, 16vw, 10rem)" }}
                      aria-hidden
                    >
                      {String(service.id).padStart(2, "0")}
                    </div>
                    {/* Barre + en-tête + CTA fixes ; défilement vertical constant uniquement sur les puces (pause au survol) */}
                    <div className="relative z-[2] flex min-h-0 flex-1 flex-col overflow-hidden">
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-10 bg-gradient-to-b from-white via-white/95 to-transparent"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-12 bg-gradient-to-t from-white via-white/95 to-transparent"
                        aria-hidden
                      />
                      <div className={`h-2 w-full shrink-0 bg-gradient-to-br ${g.bar}`} />
                      <div className="relative flex min-h-0 flex-1 flex-col p-8">
                        <div className="relative mb-4 shrink-0">
                          <div className="absolute inset-0 scale-150 rounded-2xl bg-[#C9A84C]/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                          <div
                            className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${g.icon} shadow-lg transition-all duration-300 group-hover:rotate-3 group-hover:scale-110`}
                          >
                            <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                          </div>
                        </div>
                        <h3 className="mb-2 shrink-0 font-serif text-2xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#9E7B2E]">
                          {service.title}
                        </h3>
                        <p className="mb-3 line-clamp-2 shrink-0 text-sm leading-relaxed text-gray-500">
                          {service.subtitle}
                        </p>
                        <div className="mb-3 h-px shrink-0 bg-gradient-to-r from-gray-200 via-gray-300 to-transparent" />
                        <div className="min-h-0 flex-1 overflow-hidden">
                          <div className="service-chips-marquee flex flex-col gap-2 group-hover:[animation-play-state:paused]">
                            {[0, 1].map((dup) => (
                              <div
                                key={`${service.slug}-chips-${dup}`}
                                className="flex shrink-0 flex-col gap-2"
                              >
                                {service.items.map((item, j) => (
                                  <span
                                    key={`${service.slug}-${dup}-it-${j}`}
                                    className="w-full rounded-full bg-gray-100 px-3 py-1.5 text-center text-xs font-medium leading-snug text-gray-700 shadow-sm ring-1 ring-gray-200/80"
                                  >
                                    {truncateChip(item, 44)}
                                  </span>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                        <a
                          href={wa}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="jj-btn-slide jj-btn-slide-dark-to-gold mt-4 flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0A0A0A] px-4 py-3 text-sm font-semibold"
                        >
                          <MessageCircle className="h-4 w-4 shrink-0" />
                          {t("home.services.cta.wa")}
                        </a>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#C9A84C]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {services.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={t("home.services.goTo").replace("{n}", String(i + 1))}
                aria-current={i === active}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "h-3 w-10 bg-[#C9A84C]"
                    : "h-3 w-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <p className="text-sm font-medium text-gray-500">
              <span className="font-bold text-[#C9A84C]">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="mx-2">/</span>
              <span>{String(total).padStart(2, "0")}</span>
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/nos-services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#9E7B2E] underline-offset-4 transition-colors hover:text-[#C9A84C] hover:underline"
          >
            {t("home.services.link.all")}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
