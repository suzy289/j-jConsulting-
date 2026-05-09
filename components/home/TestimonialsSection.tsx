"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, UserRound } from "lucide-react";
import { testimonialsByLocale } from "@/lib/testimonials";
import { useI18n } from "@/components/i18n/I18nProvider";

export function TestimonialsSection() {
  const { t, locale } = useI18n();
  const testimonials = testimonialsByLocale[locale];
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="home-section-testimonials relative overflow-hidden rounded-br-[2.5rem] rounded-tl-[1.75rem] bg-white py-20 md:rounded-br-[3.25rem] md:rounded-tl-[2.25rem] lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4"
        >
          {t("home.testimonials.kicker")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A0A0A] mb-16"
        >
          {t("home.testimonials.title")}
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-lg bg-white p-8 md:p-10 pr-10 border border-gray-100 shadow-sm"
            >
              <span className="absolute right-0 top-0 block h-1/2 w-1.5 rounded-tr-lg bg-[#C9A84C]" />
              <span className="absolute bottom-0 right-0 block h-1/2 w-1.5 rounded-br-lg bg-[#0A0A0A]" />

              <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between lg:gap-10">
                <div className="shrink-0 flex items-center justify-center">
                  <UserRound className="h-20 w-20 text-[#C9A84C]" aria-hidden />
                </div>

                <div className="flex-1">
                  <Quote className="w-10 h-10 text-[#C9A84C]/60" />
                  <p className="mb-8 mt-4 text-base md:text-lg lg:text-xl font-medium italic text-gray-700 leading-relaxed">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="mb-1 block text-lg font-semibold text-[#0A0A0A]">
                        {testimonials[current].author}
                      </span>
                      <span className="block text-sm text-gray-600">
                        {testimonials[current].role}, {testimonials[current].company}
                      </span>
                    </div>

                    <Image
                      src="/logo.png"
                      alt="Marque J & J Consulting"
                      width={110}
                      height={32}
                      className="opacity-80 w-auto h-6"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="jj-btn-slide jj-btn-slide-nav-disk group flex items-center justify-center rounded-full p-2 shadow-sm"
              aria-label={t("home.testimonials.prev")}
            >
              <ChevronLeft size={24} className="text-gray-700 transition-colors group-hover:text-white" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-[#C9A84C] w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="jj-btn-slide jj-btn-slide-nav-disk group flex items-center justify-center rounded-full p-2 shadow-sm"
              aria-label={t("home.testimonials.next")}
            >
              <ChevronRight size={24} className="text-gray-700 transition-colors group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
