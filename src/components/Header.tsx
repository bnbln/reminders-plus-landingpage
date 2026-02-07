'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F7F7]/80 backdrop-blur-md">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/icon.png"
                        alt="Reminders+ Logo"
                        width={24}
                        height={24}
                        className="rounded-lg"
                    />
                    <span className="font-semibold text-lg">Reminders+</span>
                </Link>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium hover:text-[#0070E1] transition-colors">
                        Home
                    </Link>
                    <Link href="#features" className="text-sm font-medium hover:text-[#0070E1] transition-colors">
                        Features
                    </Link>
                    <Link href="#faq" className="text-sm font-medium hover:text-[#0070E1] transition-colors">
                        FAQ
                    </Link>
                </div>

                {/* Download Button */}
                <Link
                    href="https://apps.apple.com/us/app/reminders/id6758573672"
                    className="btn-primary text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download
                </Link>
            </nav>
        </header>
    );
}
