import type { Metadata } from "next";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollRevealOnView } from "@/components/ui/ScrollRevealOnView";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { getLocaleFromCookies } from "@/lib/i18n-server";
import "./globals.css";

/** Supprime les attributs injectés par l’extension Cursor (évite les erreurs d’hydratation). */
const STRIP_CURSOR_ATTR_SCRIPT = `(function(){function s(n){if(!n||n.nodeType!==1)return;try{var e=n;if(e.hasAttribute&&e.hasAttribute("data-cursor-element-id"))e.removeAttribute("data-cursor-element-id");e.querySelectorAll&&e.querySelectorAll("[data-cursor-element-id]").forEach(function(x){x.removeAttribute("data-cursor-element-id")})}catch(t){}}function b(){s(document.documentElement);document.body&&s(document.body)}b();document.addEventListener("DOMContentLoaded",b);try{new MutationObserver(function(r){r.forEach(function(m){if(m.type==="attributes"&&m.attributeName==="data-cursor-element-id"&&m.target&&m.target.removeAttribute)m.target.removeAttribute("data-cursor-element-id");m.addedNodes&&m.addedNodes.forEach(function(n){s(n)})})}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:["data-cursor-element-id"]})}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jjconsulting.cm"),
  title: "J & J Consulting SARL | Cabinet d'Audit, Comptabilité & Conseil Fiscal — Yaoundé",
  description:
    "J & J Consulting SARL est votre cabinet d'audit, comptabilité, conseil fiscal et finance à Yaoundé, Cameroun. Fondé par Darlain Dongmo. Devis gratuit. 10+ ans d'expérience.",
  keywords: "cabinet comptable Yaoundé, audit Cameroun, conseil fiscal, J&J Consulting",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "J & J Consulting SARL | Audit & Conseil Fiscal Yaoundé",
    type: "website",
    images: ["/logo.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleFromCookies();
  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="jj-site antialiased" suppressHydrationWarning>
        <Script id="jj-strip-cursor-attrs" strategy="beforeInteractive">
          {STRIP_CURSOR_ATTR_SCRIPT}
        </Script>
        <I18nProvider>
          <Navbar />
          <main className="min-w-0 overflow-x-hidden">
            <div id="app-content" className="min-w-0" suppressHydrationWarning>
              {children}
            </div>
          </main>
          <Footer />
          <WhatsAppButton />
          <ScrollRevealOnView />
        </I18nProvider>
      </body>
    </html>
  );
}
