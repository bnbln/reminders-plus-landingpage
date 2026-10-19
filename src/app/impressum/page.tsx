import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

export const metadata = {
    title: 'Impressum — Reminders+',
    description: 'Legal Notice (Impressum) for Reminders+ iOS app and website',
};

// Custom components for styled markdown rendering
const components = {
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
        <ul className="list-disc pl-6 space-y-2 text-label mb-4">{children}</ul>
    ),
    li: ({ children }: { children?: React.ReactNode }) => (
        <li className="text-label">{children}</li>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className="font-semibold text-label">{children}</strong>
    ),
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
        if (href?.startsWith('/')) {
            return <Link href={href} className="text-accent underline underline-offset-2 hover:no-underline">{children}</Link>;
        }
        return <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:no-underline">{children}<span className="sr-only"> (opens in a new tab)</span></a>;
    },
    hr: () => <hr className="my-8 border-separator" />,
};

export default async function Impressum() {
    const filePath = path.join(process.cwd(), 'content', 'impressum.md');
    const content = await fs.readFile(filePath, 'utf8');

    return (
        <>
            <Header />
            <main id="main" className="min-h-screen pt-24">
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <div className="panel p-6 md:p-12 space-y-2">
                        <ReactMarkdown components={components}>
                            {content}
                        </ReactMarkdown>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
