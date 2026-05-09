"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useId, type ReactNode } from "react";
import { Calendar, Clock, UserRound } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";

/**
 * Médias : remplacez par vos fichiers (public/...).
 * Vidéo : renseignez CIRCLE_VIDEO (ex. "/v1.mp4").
 */
const CIRCLE_IMAGE = "/images/nos-services-header.png";
const CIRCLE_VIDEO: string | null = "/images/video.mp4";

/** Ruban orange incurvé sous le photo-cercle, texte blanc sur le tracé (comme « SEMINAR » sur le flyer). */
function OrangeRibbonArc({ label }: { label: string }) {
  const uid = useId().replace(/:/g, "");
  const pathId = `ribbon-tp-${uid}`;

  return (
    <div
      className="pointer-events-none absolute -bottom-[5%] left-1/2 z-[14] w-[min(104%,calc(100%+2.5rem))] -translate-x-1/2 sm:-bottom-[4%]"
      aria-hidden="true"
    >
      <svg
        className="w-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
        viewBox="0 0 520 72"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <path
            id={pathId}
            d="M 52 48 A 208 208 0 0 1 468 48"
            fill="none"
          />
        </defs>
        <path
          d="M 8 58 Q 260 6 512 58 L 512 72 Q 260 22 8 72 Z"
          fill="#C9A84C"
        />
        <text
          fill="#ffffff"
          className="font-bold uppercase"
          style={{
            fontSize: "14px",
            letterSpacing: "0.28em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
            {label}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export function ValuesSection() {
  const { t } = useI18n();
  const TEAM = [
    {
      name: t("home.values.team1.name"),
      role: t("home.values.team1.role"),
      org: t("home.values.team1.org"),
    },
    {
      name: t("home.values.team2.name"),
      role: t("home.values.team2.role"),
      org: t("home.values.team2.org"),
    },
  ] as const;

  const discussionPoints: ReactNode[] = [
    <>
      <span className="font-bold text-[#0A0A0A]">{t("home.values.point1.a")}</span>{" "}
      {t("home.values.point1.b")}{" "}
      <span className="font-semibold text-[#C9A84C]">{t("home.values.point1.c")}</span>.
    </>,
    <>
      <span className="font-bold text-[#0A0A0A]">{t("home.values.point2.a")}</span>{" "}
      {t("home.values.point2.b")}{" "}
      <span className="font-bold text-[#0A0A0A]">{t("home.values.point2.c")}</span>{" "}
      {t("home.values.point2.d")}
    </>,
    <>{t("home.values.point3")}</>,
  ];

  return (
    <section className="home-section-values relative isolate overflow-hidden rounded-b-[1.5rem] rounded-t-[1.75rem] bg-[#E6E6E6] pb-20 pt-6 md:rounded-bl-[2.75rem] md:rounded-br-[2rem] md:rounded-tl-[2.5rem] lg:pb-28 lg:pt-8">
      {/* Texture soyeuse légère */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23fff' stop-opacity='0.12'/%3E%3Cstop offset='100%25' stop-color='%23000' stop-opacity='0.03'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23g)' d='M0 80 Q40 60 80 80t80 0 80 0 80 0 80 0v80H0z'/%3E%3C/svg%3E")`,
          backgroundSize: "280px 280px",
        }}
      />

      {/* Demi-cercles décoratifs type flyer */}
      <div className="pointer-events-none absolute -right-32 top-4 h-[22rem] w-[22rem] rounded-full bg-[#C9A84C]/25 blur-[2px]" />
      <div className="pointer-events-none absolute -right-16 top-24 h-48 w-48 rounded-full border-[3px] border-[#C9A84C]/35" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-56 w-56 rounded-full bg-[#C9A84C]/20" />
      <div className="pointer-events-none absolute bottom-16 left-[8%] h-24 w-24 rounded-full border-2 border-[#C9A84C]/45" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex flex-col items-stretch gap-16 lg:flex-row lg:items-center lg:gap-10 xl:gap-16">
          {/* Colonne gauche — texte */}
          <motion.div
            className="w-full max-w-xl lg:w-[47%] lg:max-w-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#C9A84C]">
              {t("home.values.kicker")}
            </p>
            <h2 className="mb-8 max-w-[22ch] font-sans text-3xl font-extrabold leading-[1.15] tracking-tight text-[#C9A84C] md:text-4xl lg:text-[2.2rem] xl:text-[2.65rem]">
              {t("home.values.title")}
            </h2>

            <div className="mb-10">
              <p className="mb-4 text-base font-bold text-[#0A0A0A]">
                {t("home.values.framework")}
              </p>
              <ol className="list-decimal space-y-4 pl-5 text-[15px] leading-relaxed text-[#2B2B2B] marker:font-bold marker:text-[#0A0A0A]">
                {discussionPoints.map((item, i) => (
                  <li key={i} className="pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <a
                href="/references"
                className="jj-btn-slide jj-btn-slide-gold-solid mb-5 inline-flex rounded-full bg-[#C9A84C] px-6 py-2.5 text-sm font-bold tracking-wide shadow-sm"
              >
                {t("home.values.cta")}
              </a>
              <ul className="space-y-6">
                {TEAM.map((person) => (
                  <li key={person.name} className="flex gap-4">
                    <div
                      className="flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-full border-[3px] border-[#C9A84C] bg-gradient-to-br from-white to-[#F0EDE6] shadow-sm ring-2 ring-white"
                      aria-hidden
                    >
                      <UserRound className="h-9 w-9 text-[#0A0A0A]" strokeWidth={1.65} />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="font-bold text-[#0A0A0A]">{person.name}</p>
                      <p className="text-sm font-medium text-[#444]">
                        ({person.role})
                      </p>
                      <p className="text-sm text-[#666]">{person.org}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Colonne droite — cercles superposés */}
          <motion.div
            className="w-full flex-1 lg:min-h-[min(78vw,580px)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
          >
            <div className="relative mx-auto flex w-full max-w-[min(100%,540px)] justify-center overflow-visible pb-10 pt-2 lg:ml-auto lg:mr-[-10%] lg:max-w-[580px] xl:mr-[-5%]">
              <div className="relative aspect-square w-[min(90vw,490px)] shrink-0 lg:w-[min(94vw,530px)]">
                {/* Grand cercle photo + bordure grise épaisse */}
                <div className="relative z-[10] h-full w-full rounded-full border-[14px] border-[#C8C8C8] bg-[#C8C8C8] shadow-[0_28px_64px_-16px_rgba(0,0,0,0.22)]">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    {CIRCLE_VIDEO ? (
                      <video
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={CIRCLE_IMAGE}
                      >
                        <source src={CIRCLE_VIDEO} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={CIRCLE_IMAGE}
                        alt={t("home.values.circleAlt")}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 90vw, 530px"
                        priority={false}
                      />
                    )}
                  </div>
                </div>

                <OrangeRibbonArc label={t("home.values.ribbon")} />

                {/* Cercle sombre chevauchant image + ruban */}
                <div className="absolute bottom-[-2%] left-[-5%] z-[22] flex aspect-square w-[min(70vw,268px)] max-w-[288px] flex-col rounded-full border-[5px] border-white bg-[#0A0A0A] p-4 shadow-[0_28px_50px_-12px_rgba(0,0,0,0.45)] sm:left-[-3%] sm:w-[280px] lg:bottom-[2%] lg:left-[-10%]">
                  <div className="flex flex-1 flex-col justify-center px-1 pt-2">
                    <div className="grid grid-cols-2 gap-1 text-center text-white">
                      <div className="flex flex-col items-center gap-1.5 border-r border-white/12 pr-2">
                        <Calendar
                          className="h-7 w-7 text-white"
                          strokeWidth={1.35}
                        />
                        <span className="text-xs font-semibold leading-tight text-white">
                          {t("home.values.appt")}
                        </span>
                        <span className="text-[10px] leading-snug text-white/65">
                          {t("home.values.apptSub")}
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 pl-1">
                        <Clock
                          className="h-7 w-7 text-white"
                          strokeWidth={1.35}
                        />
                        <a
                          href="tel:+237620275758"
                          className="text-xs font-semibold leading-tight text-white underline-offset-2 hover:text-[#C9A84C] hover:underline"
                        >
                          +237 620 275 758
                        </a>
                        <span className="text-[10px] text-white/65">
                          {t("home.values.hours")}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl bg-white px-3 py-3 shadow-inner">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-[5.5rem] shrink-0">
                          <Image
                            src="/logo.png"
                            alt="J & J Consulting"
                            fill
                            className="object-contain object-left"
                            sizes="88px"
                          />
                        </div>
                        <div className="min-w-0 flex-1 space-y-1.5">
                          <div className="rounded-md bg-[#C9A84C] px-2 py-1.5 text-center text-[9px] font-extrabold uppercase leading-tight tracking-wider text-white">
                            {t("home.values.badgeTrust")}
                          </div>
                          <p className="text-center text-[10px] font-semibold text-[#0A0A0A]">
                            {t("home.values.badgeFirm")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
