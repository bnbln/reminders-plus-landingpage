'use client';

import Link from 'next/link';
import { APP_MIN_IOS, APP_STORE_URL, APP_VERSION } from '@/lib/app-info';

const footerLinks = {
    product: [
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/#features' },
        { label: 'Plus', href: '/#plus' },
        { label: 'FAQ', href: '/#faq' },
        { label: 'Download', href: APP_STORE_URL },
    ],
    legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Use', href: '/terms' },
        { label: 'Impressum', href: '/impressum' },
        { label: 'Contact', href: '/contact' },
    ],
    social: [
        { label: 'X / Twitter', href: 'https://x.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
    ]
};

export default function Footer() {
    return (
        <footer className="on-dark bg-black text-white pt-16 pb-8">
            <div className="max-w-5xl mx-auto px-6">
                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <nav aria-label="Product">
                        <h2 className="section-label !text-white/60 mb-4">Product</h2>
                        <ul role="list" className="space-y-2">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-white/80 hover:text-white text-[15px] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav aria-label="Legal">
                        <h2 className="section-label !text-white/60 mb-4">Legal</h2>
                        <ul role="list" className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-white/80 hover:text-white text-[15px] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* <div>
                        <h2 className="section-label !text-white/60 mb-4">Social</h2>
                        <ul role="list" className="space-y-2">
                            {footerLinks.social.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-white/80 hover:text-white text-[15px] transition-colors" target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <div>
                        <h2 className="section-label !text-white/60 mb-4">Get Started</h2>
                        <Link
                            href={APP_STORE_URL}
                            className="btn-primary text-[15px]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download
                            <span className="sr-only"> Reminders+ on the App Store (opens in a new tab)</span>
                        </Link>
                    </div>
                </div>

                {/* Large Logo */}
                <div className="border-t border-white/10 pt-12">
                    <div className="w-full overflow-hidden px-4" aria-hidden="true">
                        <span
                            className="font-extrabold tracking-tighter text-white/20 block text-center whitespace-nowrap"
                            style={{ fontSize: 'clamp(2rem, 15vw, 10rem)' }}
                        >
                            Reminders+
                        </span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 text-white/60 text-sm">
                    © {new Date().getFullYear()} Reminders+. All rights reserved.
                    <div className="mt-2 text-white/60 text-xs">
                        Version {APP_VERSION} · iPhone & iPad · iOS {APP_MIN_IOS} or later
                    </div>
                    <div className="mt-1 text-white/60 text-xs">
                        Accessible website · built to WCAG 2.1 AA
                    </div>
                </div>
            </div>
        </footer>
    );
}
