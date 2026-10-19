import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { APP_STORE_URL } from '@/lib/app-info';
import { localeInfo, locales, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

export async function generateMetadata({ params }: PageProps<'/[lang]/contact'>) {
    const { lang } = await params;
    const t = getDictionary(lang as Locale).contact;
    return {
        title: t.metaTitle,
        description: t.metaDescription,
        alternates: {
            canonical: `/${lang}/contact`,
            languages: Object.fromEntries(locales.map((code) => [localeInfo[code].htmlLang, `/${code}/contact`])),
        },
    };
}

export default async function Contact({ params }: PageProps<'/[lang]/contact'>) {
    const locale = (await params).lang as Locale;
    const dict = getDictionary(locale);
    const t = dict.contact;
    return (
        <>
            <Header locale={locale} dict={dict} />
            <main className="min-h-screen pt-24">
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <h1 className="large-title text-4xl md:text-5xl mb-2">{t.title}</h1>
                    <p className="text-label-secondary mb-12">{t.subtitle}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Support */}
                        <div className="panel p-7">
                            <div className="w-12 h-12 bg-accent/10 rounded-[14px] flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{t.supportTitle}</h2>
                            <p className="text-label-secondary mb-4">
                                {t.supportText}
                            </p>
                            <a
                                href="mailto:support@benediktschnupp.com"
                                className="text-accent hover:underline font-medium"
                            >
                                support@benediktschnupp.com
                            </a>
                        </div>

                        {/* Feedback */}
                        <div className="panel p-7">
                            <div className="w-12 h-12 bg-accent/10 rounded-[14px] flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{t.feedbackTitle}</h2>
                            <p className="text-label-secondary mb-4">
                                {t.feedbackText}
                            </p>
                            <a
                                href="mailto:feedback@benediktschnupp.com"
                                className="text-accent hover:underline font-medium"
                            >
                                feedback@benediktschnupp.com
                            </a>
                        </div>

                        {/* General Inquiries */}
                        <div className="panel p-7">
                            <div className="w-12 h-12 bg-accent/10 rounded-[14px] flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{t.generalTitle}</h2>
                            <p className="text-label-secondary mb-4">
                                {t.generalText}
                            </p>
                            <a
                                href="mailto:hello@benediktschnupp.com"
                                className="text-accent hover:underline font-medium"
                            >
                                hello@benediktschnupp.com
                            </a>
                        </div>

                        {/* App Store */}
                        <div className="panel p-7">
                            <div className="w-12 h-12 bg-accent/10 rounded-[14px] flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{t.rateTitle}</h2>
                            <p className="text-label-secondary mb-4">
                                {t.rateText}
                            </p>
                            <a
                                href={APP_STORE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:underline font-medium"
                            >
                                {t.rateLink} <span aria-hidden="true" className="inline-block rtl:-scale-x-100">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Response Time */}
                    <div className="mt-12 tile p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-label mb-1">{t.responseTitle}</h3>
                                <p className="text-label-secondary">
                                    {t.responseText}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="mt-12 pt-8 border-t border-separator">
                        <p className="text-label-secondary text-sm">
                            {t.legalText}: <Link href={`/${locale}/impressum`} className="text-accent hover:underline">{dict.footer.impressum}</Link> · <Link href={`/${locale}/privacy`} className="text-accent hover:underline">{dict.footer.privacy}</Link> · <Link href={`/${locale}/terms`} className="text-accent hover:underline">{dict.footer.terms}</Link>
                        </p>
                    </div>
                </article>
            </main>
            <Footer locale={locale} dict={dict} />
        </>
    );
}
