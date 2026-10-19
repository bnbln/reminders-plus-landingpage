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
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="max-w-5xl mx-auto px-6">
                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <h4 className="section-label !text-white/50 mb-4">Product</h4>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-white/80 hover:text-white text-[15px] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="section-label !text-white/50 mb-4">Legal</h4>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-white/80 hover:text-white text-[15px] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <div>
                        <h4 className="section-label !text-white/50 mb-4">Social</h4>
                        <ul className="space-y-2">
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
                        <h4 className="section-label !text-white/50 mb-4">Get Started</h4>
                        <Link
                            href={APP_STORE_URL}
                            className="btn-primary text-[15px]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download
                        </Link>
                    </div>
                </div>

                {/* Large Logo */}
                <div className="border-t border-white/10 pt-12">
                    <div className="w-full overflow-hidden px-4">
                        <span
                            className="font-extrabold tracking-tighter text-white/20 block text-center whitespace-nowrap"
                            style={{ fontSize: 'clamp(2rem, 15vw, 10rem)' }}
                        >
                            Reminders+
                        </span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 text-white/50 text-sm">
                    © {new Date().getFullYear()} Reminders+. All rights reserved.
                    <div className="mt-2 text-white/35 text-xs">
                        Version {APP_VERSION} · iPhone & iPad · iOS {APP_MIN_IOS} or later
                    </div>
                </div>
            </div>
        </footer>
    );
}
