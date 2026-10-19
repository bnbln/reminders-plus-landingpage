import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

// The text is only published in English; every language links here.
export const metadata = {
    alternates: { canonical: '/en/impressum' },
    title: 'Impressum — Reminders+',
    description: 'Legal Notice (Impressum) for Reminders+ iOS app and website',
};

// Custom components for styled markdown rendering
const components = (locale: Locale) => ({
    h1: ({ children }: { children?: React.ReactNode }) => (
        <h1 className="large-title text-4xl md:text-5xl mb-8">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-10">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="text-xl font-medium mb-2 mt-6">{children}</h3>
    ),
    p: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-label leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }: { children?: React.ReactNode }) => (
        <ul className="list-disc ps-6 space-y-2 text-label mb-4">{children}</ul>
    ),
    li: ({ children }: { children?: React.ReactNode }) => (
        <li className="text-label">{children}</li>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className="font-semibold text-label">{children}</strong>
    ),
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
        if (href?.startsWith('/')) {
            return <Link href={`/${locale}${href}`} className="text-accent hover:underline">{children}</Link>;
        }
        return <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{children}</a>;
    },
    hr: () => <hr className="my-8 border-separator" />,
});

export default async function Impressum({ params }: PageProps<'/[lang]/impressum'>) {
    const locale = (await params).lang as Locale;
    const dict = getDictionary(locale);
    const filePath = path.join(process.cwd(), 'content', 'impressum.md');
    const content = await fs.readFile(filePath, 'utf8');

    return (
        <>
            <Header locale={locale} dict={dict} />
            <main className="min-h-screen pt-24">
                <article className="max-w-4xl mx-auto px-6 py-16">
                    {dict.legal.originalOnly && (
                        <p lang={locale} className="tile px-5 py-3 mb-6 text-[15px] text-label-secondary">
                            {dict.legal.originalOnly}
                        </p>
                    )}
                    <div lang="en" className="panel p-6 md:p-12 space-y-2">
                        <ReactMarkdown components={components(locale)}>
                            {content}
                        </ReactMarkdown>
                    </div>
                </article>
            </main>
            <Footer locale={locale} dict={dict} />
        </>
    );
}
