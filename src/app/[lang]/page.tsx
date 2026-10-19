import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureIcons from '@/components/FeatureIcons';
import FeatureCards from '@/components/FeatureCards';
import MoreFeatures from '@/components/MoreFeatures';
import PlusSection from '@/components/PlusSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { localeInfo, locales, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { fill } from '@/i18n/format';

export async function generateMetadata({ params }: PageProps<'/[lang]'>): Promise<Metadata> {
    const { lang } = await params;
    return {
        alternates: {
            canonical: `/${lang}`,
            languages: {
                ...Object.fromEntries(locales.map((code) => [localeInfo[code].htmlLang, `/${code}`])),
                'x-default': '/',
            },
        },
    };
}

export default async function Home({ params }: PageProps<'/[lang]'>) {
    const locale = (await params).lang as Locale;
    const dict = getDictionary(locale);
    const faq = {
        ...dict.faq,
        items: dict.faq.items.map((item) => ({ question: item.question, answer: fill(item.answer) })),
    };

    return (
        <main className="min-h-screen">
            <Header locale={locale} dict={dict} />
            <Hero t={dict.hero} />
            <FeatureIcons t={dict.featureIcons} />
            <FeatureCards t={dict.featureCards} locale={locale} />
            <MoreFeatures t={dict.moreFeatures} />
            <PlusSection t={dict.plus} />
            <Testimonials t={dict.testimonials} />
            <FAQ t={faq} />
            <CTASection t={dict.cta} locale={locale} />
            <Footer locale={locale} dict={dict} />
        </main>
    );
}
