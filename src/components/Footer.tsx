'use client';

import Link from 'next/link';

const footerLinks = {
    product: [
        { label: 'Home', href: '/' },
        { label: 'Features', href: '#features' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Download', href: 'https://apps.apple.com/us/app/reminders/id6758573672' },
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
        <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
            <div className="max-w-5xl mx-auto px-6">
                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <h4 className="font-medium mb-4">Product</h4>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4">Legal</h4>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <div>
                        <h4 className="font-medium mb-4">Social</h4>
                        <ul className="space-y-2">
                            {footerLinks.social.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors" target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <div>
                        <h4 className="font-medium mb-4">Get Started</h4>
                        <Link
                            href="https://apps.apple.com/us/app/reminders/id6758573672"
                            className="inline-block bg-[#0070E1] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#005BB5] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download
                        </Link>
                    </div>
                </div>

                {/* Large Logo */}
                <div className="border-t border-gray-800 pt-12">
                    <div className="text-center">
                        <span className="text-7xl md:text-9xl font-semibold tracking-tight opacity-50 block">
                            Reminders+
                        </span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 text-gray-500 text-sm">
                    © {new Date().getFullYear()} Reminders+. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
