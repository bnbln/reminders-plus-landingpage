'use client';

import Link from 'next/link';
import Image from 'next/image';
import { APP_STORE_URL } from '@/lib/app-info';

const navLinks = [
    { label: 'Features', href: '/#features' },
    { label: 'Plus', href: '/#plus' },
    { label: 'FAQ', href: '/#faq' },
];

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl backdrop-saturate-[1.8] border-b border-separator">
            <nav aria-label="Main" className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
                <Link href="/" aria-label="Reminders+ home" className="flex items-center gap-2.5">
                    <Image
                        src="/icon.png"
                        alt=""
                        width={28}
                        height={28}
                        className="rounded-[7px]"
                    />
                    <span className="font-bold text-[17px] tracking-tight">Reminders+</span>
                </Link>

                <ul role="list" className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-[15px] font-medium text-label-secondary hover:text-label transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    href={APP_STORE_URL}
                    className="btn-primary text-[15px] !py-2 !px-4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download
                    <span className="sr-only"> Reminders+ on the App Store (opens in a new tab)</span>
                </Link>
            </nav>
        </header>
    );
}
