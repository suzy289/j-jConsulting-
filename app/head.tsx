import { getLocaleFromCookies } from "@/lib/i18n-server";

export default async function Head() {
  const locale = await getLocaleFromCookies();
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:locale" content={locale === "en" ? "en_US" : "fr_FR"} />
      {locale === "en" && <meta property="og:locale:alternate" content="fr_FR" />}
      {locale === "fr" && <meta property="og:locale:alternate" content="en_US" />}
    </>
  );
}

