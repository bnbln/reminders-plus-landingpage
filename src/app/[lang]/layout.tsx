import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { isLocale, localeInfo, locales, rtlLocales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
