"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_MESSAGE } from "@/lib/constants";
import { useI18n } from "@/components/i18n/I18nProvider";

export function WhatsAppButton() {
  const { t } = useI18n();
  const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="jj-btn-slide jj-btn-slide-whatsapp fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg animate-pulse transition-shadow duration-300 hover:animate-none hover:shadow-xl"
      aria-label={t("common.whatsappAria")}
    >
      <MessageCircle size={28} />
    </a>
  );
}
