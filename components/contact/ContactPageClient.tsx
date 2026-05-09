"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  Building2,
  MessageSquareText,
  Send,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { SITE, WHATSAPP_LINK, CALENDLY_URL } from "@/lib/constants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { getServicesForLocale } from "@/lib/services-localized";

export function ContactPageClient() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { t, locale } = useI18n();
  const serviceOptions = useMemo(() => getServicesForLocale(locale), [locale]);
  const calendlyHref = CALENDLY_URL || "#formulaire-contact";
  const calendlyOpensNewTab = Boolean(CALENDLY_URL);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fd = Object.fromEntries(formData) as Record<string, string>;
    const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
      /** Web3Forms : l’envoi doit partir du navigateur (le serveur Next reçoit souvent du HTML au lieu de JSON). */
      if (web3Key) {
        const textBody = [
          `Message :`,
          fd.message ?? "",
          ``,
          `WhatsApp : ${fd.whatsapp ?? ""}`,
          `Entreprise : ${fd.company || "—"}`,
          `Axe / service : ${fd.service ?? ""}`,
          `Souhaite un contact WhatsApp : ${fd.whatsappContact === "on" ? "Oui" : "Non"}`,
        ].join("\n");

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `[J & J Consulting] Contact — ${fd.service ?? ""}`,
            name: fd.name ?? "",
            email: fd.email ?? "",
            message: textBody,
            botcheck: false,
          }),
        });
        const raw = await res.text();
        let data: { success?: boolean; message?: string } = {};
        try {
          data = JSON.parse(raw) as { success?: boolean; message?: string };
        } catch {
          console.error("Web3Forms (réponse non JSON):", res.status, raw.slice(0, 400));
          setStatus("error");
          return;
        }
        if (!res.ok || !data.success) {
          console.error("Web3Forms:", data);
          setStatus("error");
          return;
        }
        setStatus("success");
        form.reset();
        return;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fd),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#070707] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_68%)]"
          style={{
            backgroundImage:
              "radial-gradient(700px 380px at 20% 25%, rgba(201,168,76,0.34), transparent 60%), radial-gradient(540px 320px at 80% 30%, rgba(255,255,255,0.10), transparent 65%), radial-gradient(720px 420px at 60% 85%, rgba(201,168,76,0.16), transparent 62%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#C9A84C]/20 blur-3xl transition-transform duration-700 group-hover:scale-110" aria-hidden />
        <div className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:-translate-x-4" aria-hidden />
        <div className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C9A84C]/10 blur-3xl" aria-hidden />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 md:py-24 lg:py-28 w-full">
          <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_40px_90px_-55px_rgba(0,0,0,0.95)] backdrop-blur-[2px] transition duration-500 hover:border-[#C9A84C]/35 hover:bg-white/[0.05] sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                backgroundImage:
                  "radial-gradient(600px 240px at 20% 10%, rgba(201,168,76,0.24), transparent 60%), radial-gradient(500px 220px at 90% 20%, rgba(255,255,255,0.10), transparent 65%)",
              }}
              aria-hidden
            />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <Image
                  src="/logo.png"
                  alt="J & J Consulting SARL"
                  width={140}
                  height={48}
                  className="h-5 w-auto mb-6 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ width: "auto", height: "auto" }}
                />

                <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#C9A84C]/35 bg-[#C9A84C]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E4C97A] transition-colors group-hover:border-[#C9A84C]/55 group-hover:bg-[#C9A84C]/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C] shadow-[0_0_0_3px_rgba(201,168,76,0.18)]" />
                  {t("contact.hero.kicker")}
                </div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                  {t("contact.hero.title")}
                </h1>
                <p className="mt-5 text-sm md:text-base text-white/75 max-w-xl">
                  {t("contact.hero.subtitle")}
                </p>
              </div>

              <div className="relative flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jj-btn-slide jj-btn-slide-contact-glass inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-xs font-semibold tracking-widest uppercase"
                >
                  {t("contact.hero.ctaWhatsapp")}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="jj-btn-slide jj-btn-slide-contact-goldglass inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold tracking-widest uppercase"
                >
                  {t("contact.hero.ctaEmail")}
                </a>
              </div>
            </div>

            <div className="relative mt-7 grid gap-2 sm:grid-cols-3 sm:items-stretch">
              <div className="group/stat relative flex min-h-[4rem] overflow-hidden rounded-xl border border-white/10 bg-black/20 px-3.5 py-2.5 transition duration-300 hover:border-[#C9A84C]/30 hover:bg-black/25 sm:min-h-[4.25rem] sm:px-4 sm:py-3">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, rgba(201,168,76,0.16), transparent 35%, rgba(255,255,255,0.06))",
                  }}
                  aria-hidden
                />
                <div className="relative flex w-full items-baseline justify-between gap-3">
                  <p className="text-[10px] tracking-[0.16em] uppercase text-white/60">
                    {t("contact.hero.statResponse")}
                  </p>
                  <p className="font-serif text-base text-white/90 sm:text-[1.05rem]">{t("contact.hero.responseValue")}</p>
                </div>
              </div>

              <a
                href={calendlyHref}
                target={calendlyOpensNewTab ? "_blank" : undefined}
                rel={calendlyOpensNewTab ? "noopener noreferrer" : undefined}
                aria-label={
                  calendlyOpensNewTab ? t("contact.hero.calendlyAria") : t("contact.hero.calendlyFallbackAria")
                }
                className="group/rdv relative flex min-h-[4rem] items-center justify-center gap-1.5 overflow-hidden rounded-xl border border-[#C9A84C]/40 bg-[#C9A84C] px-3 py-2.5 text-center text-sm font-semibold text-[#0A0A0A] shadow-[0_8px_28px_-10px_rgba(201,168,76,0.5)] transition duration-300 hover:border-[#C9A84C] hover:bg-[#d4b35c] hover:shadow-[0_14px_36px_-12px_rgba(201,168,76,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A84C] sm:min-h-[4.25rem] sm:gap-2 sm:px-4 sm:text-[0.9375rem]"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/rdv:opacity-100"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, rgba(255,255,255,0.35), transparent 40%, rgba(255,255,255,0.1))",
                  }}
                  aria-hidden
                />
                <Calendar className="relative h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
                <span className="relative whitespace-nowrap">{t("contact.hero.ctaCalendly")}</span>
                <ArrowRight className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-hover/rdv:translate-x-0.5 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
              </a>

              <div className="group/stat relative flex min-h-[4rem] overflow-hidden rounded-xl border border-white/10 bg-black/20 px-3.5 py-2.5 transition duration-300 hover:border-[#C9A84C]/30 hover:bg-black/25 sm:min-h-[4.25rem] sm:px-4 sm:py-3">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, rgba(201,168,76,0.16), transparent 35%, rgba(255,255,255,0.06))",
                  }}
                  aria-hidden
                />
                <div className="relative flex w-full items-baseline justify-between gap-3">
                  <p className="text-[10px] tracking-[0.16em] uppercase text-white/60">
                    {t("contact.hero.statQuote")}
                  </p>
                  <p className="font-serif text-base text-white/90 sm:text-[1.05rem]">{t("contact.hero.quoteValue")}</p>
                </div>
              </div>
            </div>

            <p className="relative mt-4 max-w-2xl text-center text-xs leading-relaxed text-white/55 sm:mx-auto sm:text-sm">
              {t("contact.hero.dualCta")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="relative">
              <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rotate-12 rounded-[2rem] border border-[#C9A84C]/25 bg-[#C9A84C]/10" aria-hidden />
              <div className="pointer-events-none absolute -right-10 top-14 h-24 w-24 -rotate-12 rounded-[1.75rem] bg-[#0A0A0A]/5" aria-hidden />
              <div className="pointer-events-none absolute left-10 bottom-[-18px] h-10 w-28 rotate-[8deg] rounded-full border border-[#0A0A0A]/10 bg-white" aria-hidden />

              <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A] mb-6">
                {t("contact.section.infoTitle")}
              </h2>

              <div className="grid gap-4">
                {[
                  {
                    icon: MapPin,
                    k: t("contact.label.address"),
                    v: SITE.location,
                  },
                  {
                    icon: Phone,
                    k: t("contact.label.phones"),
                    v: (
                      <div className="space-y-1">
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:text-[#C9A84C]"
                        >
                          {SITE.phones[0]}
                        </a>
                        <a href="tel:+237678456781" className="block hover:text-[#C9A84C]">
                          {SITE.phones[1]}
                        </a>
                      </div>
                    ),
                  },
                  {
                    icon: Mail,
                    k: t("contact.label.email"),
                    v: (
                      <a href={`mailto:${SITE.email}`} className="hover:text-[#C9A84C]">
                        {SITE.email}
                      </a>
                    ),
                  },
                  {
                    icon: Clock,
                    k: t("contact.label.hours"),
                    v: (
                      <p>
                        {t("contact.hours.week")}
                        <br />
                        {t("contact.hours.sat")}
                      </p>
                    ),
                  },
                ].map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.k}
                      className="group relative overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white p-5 shadow-[0_18px_45px_-28px_rgba(10,10,10,0.25)] transition duration-300 hover:-translate-y-1 hover:border-[#C9A84C]/35"
                    >
                      <div
                        className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rotate-12 rounded-[1.75rem] bg-[#C9A84C]/10 opacity-0 blur-[1px] transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                      <div className="flex items-start gap-4">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-[1.25rem] bg-[#0A0A0A] text-white shadow-sm">
                          <span className="pointer-events-none absolute inset-0 rounded-[1.25rem] bg-[#C9A84C]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <Icon className="relative h-5 w-5 text-[#C9A84C]" aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-500">
                            {card.k}
                          </p>
                          <div className="mt-1 text-sm font-medium text-gray-800/90">
                            {card.v}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="jj-btn-slide jj-btn-slide-whatsapp mt-6 inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 font-semibold"
              >
                <Send className="h-4 w-4" aria-hidden />
                {t("contact.cta.whatsappFooter")}
              </a>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -left-8 top-16 h-24 w-24 rotate-12 rounded-[1.75rem] bg-[#C9A84C]/10" aria-hidden />
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 -rotate-6 rounded-[2rem] border border-[#0A0A0A]/10 bg-[#0A0A0A]/[0.02]" aria-hidden />

              <div className="relative overflow-hidden rounded-[2.25rem] border border-gray-200 bg-white shadow-[0_30px_70px_-40px_rgba(10,10,10,0.35)]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      "radial-gradient(620px 240px at 20% 0%, rgba(201,168,76,0.22), transparent 60%), radial-gradient(540px 220px at 90% 20%, rgba(0,0,0,0.05), transparent 70%)",
                  }}
                  aria-hidden
                />
                <div className="relative p-6 md:p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A]">
                        {t("contact.section.formTitle")}
                      </h2>
                      <p className="mt-2 text-sm text-gray-600">
                        {t("contact.hero.subtitle")}
                      </p>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-[1.25rem] bg-[#0A0A0A]">
                        <User className="h-5 w-5 text-[#C9A84C]" aria-hidden />
                      </span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-[1.25rem] bg-[#0A0A0A]">
                        <Phone className="h-5 w-5 text-[#C9A84C]" aria-hidden />
                      </span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-[1.25rem] bg-[#0A0A0A]">
                        <MessageSquareText className="h-5 w-5 text-[#C9A84C]" aria-hidden />
                      </span>
                    </div>
                  </div>

                  <form id="formulaire-contact" onSubmit={handleSubmit} className="scroll-mt-28">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="md:col-span-1">
                        <label htmlFor="name" className="mb-2 block text-xs font-semibold tracking-[0.18em] uppercase text-gray-600">
                          {t("contact.form.name")}
                        </label>
                        <div className="relative">
                          <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full rounded-[1.25rem] border border-gray-200 bg-white px-11 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#C9A84C]/55 focus:ring-2 focus:ring-[#C9A84C]/20"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-1">
                        <label htmlFor="company" className="mb-2 block text-xs font-semibold tracking-[0.18em] uppercase text-gray-600">
                          {t("contact.form.company")}
                        </label>
                        <div className="relative">
                          <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            className="w-full rounded-[1.25rem] border border-gray-200 bg-white px-11 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#C9A84C]/55 focus:ring-2 focus:ring-[#C9A84C]/20"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-1">
                        <label htmlFor="email" className="mb-2 block text-xs font-semibold tracking-[0.18em] uppercase text-gray-600">
                          {t("contact.form.email")}
                        </label>
                        <div className="relative">
                          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full rounded-[1.25rem] border border-gray-200 bg-white px-11 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#C9A84C]/55 focus:ring-2 focus:ring-[#C9A84C]/20"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-1">
                        <label htmlFor="whatsapp" className="mb-2 block text-xs font-semibold tracking-[0.18em] uppercase text-gray-600">
                          {t("contact.form.whatsapp")}
                        </label>
                        <div className="relative">
                          <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden />
                          <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            required
                            className="w-full rounded-[1.25rem] border border-gray-200 bg-white px-11 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#C9A84C]/55 focus:ring-2 focus:ring-[#C9A84C]/20"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="service" className="mb-2 block text-xs font-semibold tracking-[0.18em] uppercase text-gray-600">
                          {t("contact.form.service")}
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          className="w-full rounded-[1.25rem] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#C9A84C]/55 focus:ring-2 focus:ring-[#C9A84C]/20"
                        >
                          <option value="">{t("contact.form.servicePlaceholder")}</option>
                          {serviceOptions.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="message" className="mb-2 block text-xs font-semibold tracking-[0.18em] uppercase text-gray-600">
                          {t("contact.form.message")}
                        </label>
                        <div className="relative">
                          <MessageSquareText className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-gray-400" aria-hidden />
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full resize-none rounded-[1.25rem] border border-gray-200 bg-white px-11 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#C9A84C]/55 focus:ring-2 focus:ring-[#C9A84C]/20"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                          type="checkbox"
                          id="whatsappContact"
                          name="whatsappContact"
                          className="h-4 w-4 rounded border-gray-300 text-[#C9A84C] focus:ring-[#C9A84C]"
                        />
                        {t("contact.form.whatsappCheckbox")}
                      </label>

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="jj-btn-slide jj-btn-slide-dark-to-gold inline-flex items-center justify-center gap-2 rounded-[1.25rem] bg-[#0A0A0A] px-7 py-3 text-sm font-semibold tracking-widest uppercase disabled:opacity-50 md:w-auto"
                      >
                        <Send className="h-4 w-4" aria-hidden />
                        {status === "loading" ? t("contact.form.sending") : t("contact.form.submit")}
                      </button>
                    </div>

                    {status === "success" && (
                      <p className="mt-4 rounded-[1.25rem] border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                        {t("contact.form.success")}
                      </p>
                    )}
                    {status === "error" && (
                      <p className="mt-4 rounded-[1.25rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {t("contact.form.error")}
                      </p>
                    )}
                  </form>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#C9A84C] via-[#0A0A0A] to-[#C9A84C]" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A] mb-6">
            {t("contact.map.title")}
          </h2>
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127405.52725645406!2d11.5021!3d3.848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a5d6e2d13%3A0x3f3d3e3e3e3e3e3e!2sYaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2scm!4v1710580800000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("contact.map.iframeTitle")}
              className="min-h-[400px]"
            />
          </div>
          <p className="text-gray-600 text-sm mt-4">
            <a
              href="https://www.google.com/maps/place/Umdeny/@3.8483995,11.5191104,17z/data=!3m1!4b1!4m6!3m5!1s0x108bcf8042c67015:0x4359cb0dad0b408c!8m2!3d3.8483995!4d11.5216853!16s%2Fg%2F11j7k5d5tq?entry=ttu&g_ep=EgoyMDI2MDQxOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] hover:underline"
            >
              {t("contact.map.directions")}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
