import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { isLocale, localeInfo, locales, rtlLocales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_URL } from "@/lib/app-info";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).meta;

  return {
    // Makes canonical, hreflang and Open Graph URLs absolute.
    metadataBase: new URL(SITE_URL),
    title: t.title,
    description: t.description,
    openGraph: {
      title: "Reminders+",
      description: t.description,
      locale: localeInfo[lang].htmlLang,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={localeInfo[lang].htmlLang} dir={rtlLocales.includes(lang) ? "rtl" : "ltr"}>
      <body className="antialiased">
        <a href="#main" className="skip-link">
          {getDictionary(lang).a11y.skipToContent}
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
