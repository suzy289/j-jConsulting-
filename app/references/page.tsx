import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { partners } from "@/lib/partners";
import { getLocaleFromCookies } from "@/lib/i18n-server";
import { getReferencesCopy } from "@/lib/references";
import { t } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookies();
  return {
    title: t(locale, "meta.references.title"),
    description: t(locale, "meta.references.desc"),
  };
}

export default async function ReferencesPage() {
  const locale = await getLocaleFromCookies();
  const copy = getReferencesCopy(locale);
  const partnerRows = [0, 1, 2].map((row) => partners.filter((_, index) => index % 3 === row));
  const interventionColumns = [
    [
      {
        type: "video" as const,
        src: "/images/video.mp4",
        alt: "Session de travail et conférence",
      },
      {
        type: "image" as const,
        src: "/images/IMG-20250201-WA0082.jpg",
        alt: "Intervenant en formation professionnelle",
      },
      {
        type: "image" as const,
        src: "/images/IMG-20250201-WA0030.jpg",
        alt: "Équipe en atelier de travail",
      },
    ],
    [
      {
        type: "video" as const,
        src: "/images/VID-20221210-WA0058.mp4",
        alt: "Présentation devant un groupe",
      },
      {
        type: "image" as const,
        src: "/images/IMG-20250201-WA0023.jpg",
        alt: "Rencontre professionnelle entre collaborateurs",
      },
      {
        type: "image" as const,
        src: "/images/IMG-20221211-WA0095.jpg",
        alt: "Certification remise en fin de session",
      },
    ],
    [
      {
        type: "video" as const,
        src: "/images/vid.mp4",
        alt: "Animation de séance et échanges",
      },
      {
        type: "image" as const,
        src: encodeURI("/images/WhatsApp Image 2026-04-22 at 14.32.03.jpeg"),
        alt: "Photo de groupe en fin de formation",
      },
      {
        type: "image" as const,
        src: "/images/IMG-20221211-WA0088.jpg",
        alt: "Photo d'équipe et remise d'attestation",
      },
    ],
  ];
  const interventionColumnsExtra = [
    [
      {
        type: "video" as const,
        src: encodeURI("/images/WhatsApp Video 2026-04-22 at 14.23.43.mp4"),
        alt: "Séance de formation et échanges professionnels",
      },
      {
        type: "image" as const,
        src: "/images/IMG-20221210-WA0031.jpg",
        alt: "Formation en entreprise — travail en salle",
      },
    ],
    [
      {
        type: "video" as const,
        src: "/images/VID-20221210-WA0060.mp4",
        alt: "Animation de séance et échanges",
      },
      {
        type: "image" as const,
        src: "/images/IMG-20250201-WA0030.jpg",
        alt: "Photo de groupe — fin de session",
      },
    ],
    [
      {
        type: "video" as const,
        src: "/images/VID-20221210-WA0043.mp4",
        alt: "Intervention et présentation",
      },
    ],
  ];
  const rotatingTestimonials = copy.rotatingTestimonials;
  const testimonialBorderColors = ["#C9A84C", "#EF4444", "#25D366"];

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-[#0A0A0A] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/cpnfiance.webp)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="reference-stars-layer" aria-hidden />
        <div className="reference-stars-layer reference-stars-layer-fast" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-24 w-full">
          <div
            className="pointer-events-none absolute -bottom-14 -left-10 z-10 h-32 w-64 rounded-t-full border-[3px] border-white border-b-0 bg-white"
            aria-hidden
          />
          <div className="max-w-2xl relative z-20">
            <Image
              src="/logo.png"
              alt="J & J Consulting SARL"
              width={140}
              height={48}
              className="h-5 w-auto mb-6"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
              {copy.heroKicker}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              {copy.heroTitle}
            </h1>
            <p className="text-white/80 max-w-2xl">
              {copy.heroSubtitle}
            </p>
          </div>

          <div className="absolute right-2 top-40 z-10 w-[210px] sm:right-4 sm:top-44 sm:w-[260px] lg:right-10 lg:top-52 lg:w-[360px] ref-hero-figure-spin">
            <div className="ref-hero-figure-hover">
              <Image
                src="/images/ref.png"
                alt={copy.heroFigureAlt}
                width={520}
                height={332}
                className="h-auto w-full object-contain opacity-95"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A]">
              {copy.partnersTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-gray-600">
              {copy.partnersSubtitle}
            </p>
          </div>
          <div className="space-y-6">
            {partnerRows.map((row, rowIndex) => {
              const animationClass =
                rowIndex === 0
                  ? "animate-marquee"
                  : rowIndex === 1
                    ? "animate-marquee-reverse"
                    : "animate-marquee-slow";

              const duplicatedRow = [...row, ...row];

              return (
                <div
                  key={`partner-row-${rowIndex}`}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-[#F8F8F8] py-4"
                >
                  <div className={`flex w-max gap-4 ${animationClass}`}>
                    {duplicatedRow.map((p, i) => (
                      <div
                        key={`${p.id}-${i}`}
                        className="group relative flex w-[280px] shrink-0 flex-col items-center rounded-lg border border-gray-200 bg-white p-6 cursor-default"
                      >
                        {p.logo ? (
                          <>
                            <div className="relative mb-4 flex h-20 w-40 items-center justify-center">
                              <Image
                                src={p.logo}
                                alt={p.name}
                                width={160}
                                height={80}
                                className="max-h-20 w-auto object-contain"
                                style={{ width: "auto", height: "auto" }}
                                loading={rowIndex === 0 && i < 3 ? "eager" : undefined}
                              />
                            </div>
                            <h3 className="text-center font-semibold text-[#0A0A0A]">
                              {p.shortName || p.name}
                            </h3>
                            {p.services && (
                              <p className="mt-2 line-clamp-2 text-center text-sm leading-relaxed text-gray-600">
                                {p.services}
                              </p>
                            )}
                          </>
                        ) : (
                          <p className="text-center font-medium text-gray-700">{p.name}</p>
                        )}
                        {(p.name || p.services) && (
                          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg bg-black/50 p-4 text-center opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
                            <p className="mb-2 text-sm font-semibold text-white drop-shadow-md">
                              {p.name}
                            </p>
                            {p.services && (
                              <p className="text-xs leading-relaxed text-white/95 drop-shadow-md">
                                {p.services}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="jj-btn-slide jj-btn-slide-dark-goldedge inline-flex w-fit items-center gap-2 rounded-full bg-[#0A0A0A] px-5 py-2.5 text-sm font-semibold"
            >
              <span className="text-base leading-none">↗</span>
              <span>{copy.becomePartner}</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A]">
              {copy.clientsTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-gray-600">
              {copy.clientsSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((cardIndex) => {
              const slides = [
                rotatingTestimonials[cardIndex * 3],
                rotatingTestimonials[cardIndex * 3 + 1],
                rotatingTestimonials[cardIndex * 3 + 2],
              ];

              return (
                <div
                  key={`testimonial-book-${cardIndex}`}
                  className="testimonial-book relative min-h-[230px] overflow-hidden rounded-lg bg-white"
                >
                  {slides.map((t, slideIndex) => (
                    <div
                      key={`${t.id}-slide-${slideIndex}`}
                      className="testimonial-page"
                      style={{
                        animationDelay: `${slideIndex * 4.2}s`,
                        borderLeft: `8px solid ${testimonialBorderColors[slideIndex]}`,
                      }}
                    >
                      <p className="mb-6 leading-relaxed text-gray-700">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div>
                        <p className="font-semibold text-[#0A0A0A]">{t.author}</p>
                        <p className="text-sm text-gray-600">
                          {t.role}, {t.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A]">
              {copy.interventionsTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-gray-600">
              {copy.interventionsSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {interventionColumns.map((column, columnIndex) => {
              const animationClass =
                columnIndex === 0
                  ? "intervention-track-x"
                  : columnIndex === 1
                    ? "intervention-track-x-reverse"
                    : "intervention-track-y";

              const isVertical = columnIndex === 2;
              const mediaLoop = [...column, ...column];

              return (
                <div
                  key={`intervention-column-${columnIndex}`}
                  className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 bg-[#F5F5F5]"
                >
                  <div
                    className={`intervention-track ${animationClass} ${
                      isVertical ? "flex-col" : "flex-row"
                    }`}
                  >
                    {mediaLoop.map((media, mediaIndex) => (
                      <div
                        key={`${media.src}-${mediaIndex}`}
                        className={`relative shrink-0 ${isVertical ? "h-full w-full" : "h-full w-full"}`}
                      >
                        {media.type === "video" ? (
                          <video
                            src={media.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-cover"
                            aria-label={media.alt}
                          />
                        ) : (
                          <Image
                            src={media.src}
                            alt={media.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {interventionColumnsExtra.map((column, columnIndex) => {
              const animationClass =
                columnIndex === 0
                  ? "intervention-track-x"
                  : columnIndex === 1
                    ? "intervention-track-x-reverse"
                    : "intervention-track-y";

              const isVertical = columnIndex === 2;
              const mediaLoop = [...column, ...column];

              return (
                <div
                  key={`intervention2-column-${columnIndex}`}
                  className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 bg-[#F5F5F5]"
                >
                  <div
                    className={`intervention-track ${animationClass} ${
                      isVertical ? "flex-col" : "flex-row"
                    }`}
                  >
                    {mediaLoop.map((media, mediaIndex) => (
                      <div
                        key={`${media.src}-${mediaIndex}`}
                        className={`relative shrink-0 ${isVertical ? "h-full w-full" : "h-full w-full"}`}
                      >
                        {media.type === "video" ? (
                          <video
                            src={media.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-cover"
                            aria-label={media.alt}
                          />
                        ) : (
                          <Image
                            src={media.src}
                            alt={media.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
