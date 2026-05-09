"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { SITE, WHATSAPP_LINK } from "@/lib/constants";
import { useI18n } from "@/components/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const phoneDisplay = SITE.phones[0] ?? `+${SITE.whatsapp}`;
  const telHref = `tel:+${SITE.whatsapp}`;

  return (
    <footer className="relative z-10 bg-[#0A0A0A] text-white">
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-6 lg:px-16 lg:pt-8">
        {/* Encart centré : remonte pour chevaucher le bas de la page, le corps reste dans le footer */}
        <div className="relative z-20 mx-auto flex justify-center px-2 sm:px-0">
          <div className="mb-12 w-full max-w-xl -mt-16 rounded-2xl border border-[#C9A84C]/35 bg-gradient-to-b from-[#161a22] to-[#0d0f14] px-5 py-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:mb-14 sm:-mt-20 sm:max-w-2xl sm:px-8 sm:py-7 lg:max-w-4xl lg:-mt-24 lg:px-10 lg:py-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A84C]">
              {t("footer.contactCard.title")}
            </p>
            <h2 className="mt-2 font-serif text-xl font-semibold leading-snug text-white sm:text-2xl">
              {t("footer.contactCard.heading")}
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/75">
              {t("footer.contactCard.copy")}
            </p>
            <div className="mt-5 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="jj-btn-slide jj-btn-slide-whatsapp inline-flex flex-1 items-center justify-center rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold"
              >
                {t("contact.hero.ctaWhatsapp")}
              </a>
              <Link
                href="/contact"
                className="jj-btn-slide jj-btn-slide-white-to-gold inline-flex flex-1 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold"
              >
                {t("footer.contactCard.form")}
              </Link>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center gap-2 border-t border-white/10 pt-4 text-xs text-white/65 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={telHref}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#C9A84C]" aria-hidden />
                {phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex max-w-full items-center gap-1.5 break-words transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#C9A84C]" aria-hidden />
                <span className="line-clamp-1 sm:line-clamp-none">{SITE.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="-mt-6 lg:-mt-8">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="J & J Consulting SARL"
                width={96}
                height={32}
                className="h-3.5 w-auto"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="mt-1 text-xs font-semibold tracking-wider text-white uppercase">
                J & J Consulting SARL
              </p>
            </Link>
            <p className="mt-1 text-sm leading-relaxed text-white/90">
              {SITE.tagline}
            </p>
            <p className="mt-1 text-sm text-white/80">
              {SITE.location}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nos-services"
                  className="text-sm font-medium text-[#C9A84C] transition-colors hover:text-[#E4C97A]"
                >
                  {t("footer.servicesLanding")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 transition-colors hover:text-[#C9A84C]"
                >
                  {t("contact.section.formTitle")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase mb-4">
              {t("footer.firm")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/a-propos" className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="/references" className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors">
                  {t("nav.references")}
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors">
                  {t("footer.legal")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase mb-4">
              {t("nav.contact")}
            </h4>
            <p className="text-white/70 text-sm">{SITE.address}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="block text-white/70 hover:text-[#C9A84C] text-sm mt-2 transition-colors"
            >
              {SITE.email}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="jj-btn-slide jj-btn-slide-whatsapp inline-flex items-center gap-2 mt-4 bg-[#25D366] px-4 py-2 text-sm font-medium"
            >
              {t("contact.cta.whatsappFooter")}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-white/60 text-sm">
            © 2025 - 2026 {SITE.name}. {t("footer.rights")}
          </p>
          <p className="text-white/40 text-sm">
            {t("footer.madeIn")}
          </p>
        </div>
      </div>
    </footer>
  );
}
