"use client";

import Image from "next/image";

const VISION_IMAGES = [
  encodeURI("/images/WhatsApp Image 2026-04-22 at 14.32.01.jpeg"),
  "/images/IMG-20221211-WA0079.jpg",
  "/images/IMG-20221211-WA0072.jpg",
  "/images/IMG-20221211-WA0076.jpg",
  "/images/IMG-20221211-WA0064.jpg",
  encodeURI("/images/WhatsApp Image 2026-04-22 at 14.28.13.jpeg"),
] as const;

/** Durée d’un cycle (boucle sans couture). Plus bas = plus rapide. */
const MARQUEE_DURATION_S = 16;

export function VisionImageCarousel() {
  const loop = [...VISION_IMAGES, ...VISION_IMAGES];

  return (
    <div
      className="@container relative aspect-[4/3] min-h-[280px] w-full overflow-hidden rounded-2xl bg-gray-100 [container-type:inline-size]"
    >
      <div
        className="flex h-full w-max animate-vision-images-marquee"
        style={{ animationDuration: `${MARQUEE_DURATION_S}s` }}
      >
        {loop.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-full w-[50cqw] shrink-0"
          >
            <Image
              src={src}
              alt="J & J Consulting — équipe et moments professionnels"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
              priority={i < 2}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
