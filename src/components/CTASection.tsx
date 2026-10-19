'use client';

import Image from 'next/image';
import { APP_STORE_URL } from '@/lib/app-info';
import { localeInfo, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';

const badgeUrl = (badgeLocale: string) =>
    `https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/white/${badgeLocale}?releaseDate=1770163200`;

export default function CTASection({ t, locale }: { t: Dictionary['cta']; locale: Locale }) {
    const steps = [
        { number: 1, text: t.step1 },
        { number: 2, text: t.step2 },
        { number: 3, text: t.step3 },
    ];

    return (
        <section className="py-20 px-5" id="download">
            <div className="max-w-5xl mx-auto">
                <div className="panel overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Side - Phone Screenshot */}
                        <div className="relative bg-ios-bg p-8 flex items-center justify-center min-h-[500px] overflow-hidden">
                            <div className="absolute inset-0 accent-wash pointer-events-none" />
                            <div className="relative w-56 md:w-64 shadow-2xl rounded-[2.25rem] overflow-hidden ring-1 ring-black/5">
                                <div className="aspect-[9/19] relative">
                                    <Image
                                        src="/screens/IMG_3085.PNG"
                                        alt={t.screenAlt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Download CTA */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            {/* App Icon & Name */}
                            <div className="flex items-center gap-4 mb-8">
                                <Image
                                    src="/app-icon.png"
                                    alt={t.appIconAlt}
                                    width={80}
                                    height={80}
                                    className="rounded-[18px] shadow-lg"
                                />
                                <div>
                                    <span dir="ltr" className="text-2xl font-bold tracking-tight block">Reminders+</span>
                                    <p className="text-label-secondary">{t.appSubtitle}</p>
                                </div>
                            </div>

                            {/* Steps */}
                            <div className="space-y-4 mb-8">
                                {steps.map((step) => (
                                    <div key={step.number} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold">
                                            {step.number}
                                        </div>
                                        <span className="text-[17px] font-medium">{step.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Download Button */}
                            <a
                                href={`${APP_STORE_URL}?itscg=30200&itsct=apps_box_badge&mttnsubad=6758573672`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'inline-block' }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={badgeUrl(localeInfo[locale].badge)}
                                    alt={t.badgeAlt}
                                    // Apple's English badge if there is none for this language.
                                    onError={(event) => {
                                        const fallback = badgeUrl('en-us');
                                        if (event.currentTarget.src !== fallback) event.currentTarget.src = fallback;
                                    }}
                                    style={{ width: '200px', height: '67px', verticalAlign: 'middle', objectFit: 'contain' }}
                                />
                            </a>

                            <p className="text-label-secondary text-sm mt-4 text-center md:text-start">
                                {t.note}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
