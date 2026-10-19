import Link from 'next/link';
import { APP_STORE_URL } from '@/lib/app-info';
import type { Locale } from '@/i18n/config';
import { fill } from '@/i18n/format';
import type { Dictionary } from '@/i18n/types';

const links = (locale: Locale, dict: Dictionary) => ({
    product: [
        { label: dict.nav.home, href: `/${locale}` },
        { label: dict.nav.features, href: `/${locale}#features` },
        { label: dict.nav.plus, href: `/${locale}#plus` },
        { label: dict.nav.faq, href: `/${locale}#faq` },
        { label: dict.nav.download, href: APP_STORE_URL },
    ],
    legal: [
        { label: dict.footer.privacy, href: `/${locale}/privacy` },
        { label: dict.footer.terms, href: `/${locale}/terms` },
        { label: dict.footer.impressum, href: `/${locale}/impressum` },
        { label: dict.footer.contact, href: `/${locale}/contact` },
    ],
    social: [
        { label: 'X / Twitter', href: 'https://x.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
    ]
});

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
    const t = dict.footer;
    const footerLinks = links(locale, dict);

    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="max-w-5xl mx-auto px-6">
                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <h4 className="section-label !text-white/50 mb-4">{t.product}</h4>
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
                        <h4 className="section-label !text-white/50 mb-4">{t.legal}</h4>
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
                        <h4 className="section-label !text-white/50 mb-4">{t.getStarted}</h4>
                        <Link
                            href={APP_STORE_URL}
                            className="btn-primary text-[15px]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {dict.nav.download}
                        </Link>
                    </div>
                </div>

                {/* Large Logo */}
                <div className="border-t border-white/10 pt-12">
                    <div className="w-full overflow-hidden px-4">
                        <span
                            dir="ltr"
                            className="font-extrabold tracking-tighter text-white/20 block text-center whitespace-nowrap"
                            style={{ fontSize: 'clamp(2rem, 15vw, 10rem)' }}
                        >
                            Reminders+
                        </span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 text-white/50 text-sm">
                    © {new Date().getFullYear()} Reminders+. {t.rights}
                    <div className="mt-2 text-white/35 text-xs">
                        {fill(t.version)}
                    </div>
                </div>
            </div>
        </footer>
    );
}
