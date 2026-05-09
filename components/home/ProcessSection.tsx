"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";

export function ProcessSection() {
  const { t } = useI18n();
  return (
    <section className="home-section-process relative overflow-hidden rounded-b-[1.75rem] rounded-t-[1.5rem] bg-[#F5F5F5] py-20 md:rounded-br-[3rem] md:rounded-tl-[2.5rem] lg:py-24 xl:py-28 2xl:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex items-center gap-8 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden md:flex md:w-1/2 gap-6 xl:gap-8"
          >
            <div className="absolute -left-5 top-5 h-14 w-6 rounded-full border-l-2 border-r-2 border-[#C9A84C]/70" />

            <div className="w-1/2">
              <div className="relative mb-8 h-[250px] lg:h-[300px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/IMG-20221211-WA0088.jpg"
                  alt={t("home.process.alt1")}
                  fill
                  className="object-cover animate-fade-bg-1"
                  sizes="(max-width: 1280px) 50vw, 290px"
                />
                <Image
                  src="/images/IMG-20221211-WA0079.jpg"
                  alt={t("home.process.alt2")}
                  fill
                  className="object-cover animate-fade-bg-2"
                  sizes="(max-width: 1280px) 50vw, 290px"
                />
              </div>
              <video
                className="h-[250px] lg:h-[300px] w-full rounded-xl object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/images/VID-20221210-WA0060.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="w-1/2">
              <div className="h-16 w-8 rounded-full border border-[#C9A84C]/60" />
              <div className="relative mt-7 mb-5 h-[360px] lg:h-[430px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/IMG-20221211-WA0089.jpg"
                  alt={t("home.process.alt3")}
                  fill
                  className="object-cover animate-fade-bg-1"
                  sizes="(max-width: 1280px) 50vw, 320px"
                />
                <Image
                  src="/images/IMG-20221211-WA0064.jpg"
                  alt={t("home.process.alt4")}
                  fill
                  className="object-cover animate-fade-bg-2"
                  sizes="(max-width: 1280px) 50vw, 320px"
                />
              </div>
              <div className="mx-auto h-7 w-32 rounded-full border-t-2 border-b-2 border-[#C9A84C]/60" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <p className="mb-5 text-[#C9A84C] text-xl font-medium">
              {t("home.process.kicker")}
            </p>
            <h2 className="mb-7 font-serif text-3xl md:text-4xl xl:text-5xl font-semibold text-[#0A0A0A] leading-tight">
              {t("home.process.title")}
            </h2>
            <p className="text-gray-600 lg:w-[95%] leading-relaxed">
              {t("home.process.p")}
            </p>

            <a
              href="#services"
              className="mt-10 inline-flex items-center gap-5 text-[#0A0A0A] font-medium tracking-wide"
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A84C] text-black">
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#C9A84C]/70" />
                <Play size={18} fill="currentColor" />
              </span>
              {t("home.process.cta")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
