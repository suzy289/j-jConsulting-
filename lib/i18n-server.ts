import { cookies } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE, normalizeLocale, type Locale } from "@/lib/i18n";

/** Next.js 16+ : `cookies()` est asynchrone — toujours `await` ici. */
export async function getLocaleFromCookies(): Promise<Locale> {
  try {
    const c = await cookies();
    const raw = c.get(LOCALE_COOKIE)?.value;
    return normalizeLocale(raw);
  } catch {
    return DEFAULT_LOCALE;
  }
}

