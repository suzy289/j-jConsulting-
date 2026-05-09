"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItemsByLocale } from "@/lib/faq";
import { useI18n } from "@/components/i18n/I18nProvider";

export function FAQSection() {
  const { t, locale } = useI18n();
  const faqItems = faqItemsByLocale[locale];
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section className="home-section-faq relative overflow-hidden rounded-b-[1.75rem] rounded-t-[1.25rem] bg-white py-20 md:rounded-bl-[2.5rem] lg:py-24">
      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4 text-center"
        >
          {t("home.faq.kicker")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-semibold text-[#0A0A0A] mb-16 text-center"
        >
          {t("home.faq.title")}
        </motion.h2>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#0A0A0A] pr-4">
                  {item.question}
                </span>
                {openId === i ? (
                  <Minus size={20} className="text-[#C9A84C] shrink-0" />
                ) : (
                  <Plus size={20} className="text-[#C9A84C] shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openId === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
