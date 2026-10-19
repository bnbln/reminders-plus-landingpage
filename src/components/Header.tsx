'use client';

import Link from 'next/link';
import Image from 'next/image';
import LanguagePicker from '@/components/LanguagePicker';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';
import { APP_STORE_URL } from '@/lib/app-info';

interface HeaderProps {
    locale: Locale;
    dict: Dictionary;
}

export default function Header({ locale, dict }: HeaderProps) {
    const t = dict.nav;
    const navLinks = [
        { label: t.features, href: `/${locale}#features` },
        { label: t.plus, href: `/${locale}#plus` },
        { label: t.faq, href: `/${locale}#faq` },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl backdrop-saturate-[1.8] border-b border-separator">
            <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
                <Link href={`/${locale}`} className="flex items-center gap-2.5">
                    <Image
                        src="/icon.png"
                        alt={t.logoAlt}
                        width={28}
                        height={28}
                        className="rounded-[7px]"
                    />
                    <span dir="ltr" className="font-bold text-[17px] tracking-tight">Reminders+</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[15px] font-medium text-label-secondary hover:text-label transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-1.5">
                    <LanguagePicker locale={locale} label={dict.language.label} />
                    <Link
                        href={APP_STORE_URL}
                        className="btn-primary text-[15px] !py-2 !px-4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t.download}
                    </Link>
                </div>
            </nav>
        </header>
    );
}
