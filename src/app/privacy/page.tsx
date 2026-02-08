import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy — Reminders+',
    description: 'Privacy Policy for Reminders+ iOS app and website',
};

// Custom components for styled markdown rendering
const components = {
    h1: ({ children }: { children?: React.ReactNode }) => (
        <h1 className="text-4xl font-semibold mb-8">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="text-2xl font-semibold mb-4 mt-10">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="text-xl font-medium mb-2 mt-6">{children}</h3>
    ),
    p: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }: { children?: React.ReactNode }) => (
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">{children}</ul>
    ),
    li: ({ children }: { children?: React.ReactNode }) => (
        <li className="text-gray-700">{children}</li>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
        if (href?.startsWith('/')) {
            return <Link href={href} className="text-[#0070E1] hover:underline">{children}</Link>;
        }
        return <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#0070E1] hover:underline">{children}</a>;
    },
    hr: () => <hr className="my-8 border-gray-200" />,
};

export default async function PrivacyPolicy() {
    const filePath = path.join(process.cwd(), 'content', 'privacy.md');
    const content = await fs.readFile(filePath, 'utf8');

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#F7F7F7] pt-24">
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <div className="space-y-2">
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
