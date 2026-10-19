'use client';

import Image from 'next/image';
import { APP_STORE_URL } from '@/lib/app-info';
import { localeInfo, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';

const badgeUrl = (badgeLocale: string) =>
    `https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/white/${badgeLocale}?releaseDate=1770163200`;

export default function CTASection({ t, a11y, locale }: { t: Dictionary['cta']; a11y: Dictionary['a11y']; locale: Locale }) {
    const steps = [
        { number: 1, text: t.step1 },
        { number: 2, text: t.step2 },
        { number: 3, text: t.step3 },
    ];

    return (
        <section className="py-20 px-5" id="download" aria-labelledby="download-title">
            <div className="max-w-5xl mx-auto">
                <div className="panel overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Side - Brand artwork */}
                        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] bg-accent">
                            <Image
                                src="/brand/icon-orbit.webp"
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 512px, 100vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Right Side - Download CTA */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            {/* App Name */}
                            <div className="mb-8">
                                <h2 id="download-title" dir="ltr" className="text-2xl font-bold tracking-tight">Reminders+</h2>
                                <p className="text-label-secondary">{t.appSubtitle}</p>
                            </div>

                            {/* Steps */}
                            <ol role="list" className="space-y-4 mb-8" aria-label={a11y.steps}>
                                {steps.map((step) => (
                                    <li key={step.number} className="flex items-center gap-4">
                                        <div aria-hidden="true" className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold">
                                            {step.number}
                                        </div>
                                        <span className="text-[17px] font-medium">{step.text}</span>
                                    </li>
                                ))}
                            </ol>

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
                                    alt={`${t.badgeAlt} ${a11y.newTab}`}
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
