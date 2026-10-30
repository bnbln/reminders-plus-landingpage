import Image from 'next/image';
import StreakFlame from '@/components/StreakFlame';
import { tint } from '@/lib/tint';
import { APP_STORE_URL } from '@/lib/app-info';
import type { Dictionary } from '@/i18n/types';

export default function Hero({ t, a11y }: { t: Dictionary['hero']; a11y: Dictionary['a11y'] }) {
    return (
        <section className="pt-32 pb-16 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div aria-hidden="true" className="absolute top-10 left-1/2 -translate-x-[70%] w-[36rem] h-[36rem] accent-wash pointer-events-none" />
            <div aria-hidden="true" className="absolute top-72 left-1/2 -translate-x-[10%] w-[28rem] h-[28rem] flame-wash pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Streak Badge */}
                <div
                    className="hero-rise inline-flex items-center gap-2 tile rounded-full ps-2 pe-4 py-1.5 mb-8"
                >
                    <span className="badge-icon w-7 h-7" style={tint('var(--flame-outer)')}>
                        <StreakFlame className="w-3.5 h-4" />
                    </span>
                    <span className="text-sm font-semibold">{t.badge}</span>
                </div>

                {/* Headline */}
                <h1
                    className="hero-rise large-title text-[44px] md:text-[80px] mb-6"
                    style={{ animationDelay: '0.1s' }}
                >
                    {t.titleLine1}<br />
                    {t.titleLine2}
                </h1>

                {/* Subheadline */}
                <p
                    className="hero-rise text-lg md:text-xl text-label-secondary mb-8 max-w-lg mx-auto"
                    style={{ animationDelay: '0.2s' }}
                >
                    {t.subtitle}
                </p>

                {/* CTA Button */}
                <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-rise btn-primary text-[17px] !px-7 !py-3.5"
                    style={{ animationDelay: '0.3s' }}
                >
                    {t.cta}
                    <span className="sr-only"> {a11y.onAppStore} {a11y.newTab}</span>
                </a>

                <p
                    className="hero-fade mt-4 text-sm text-label-secondary"
                    style={{ animationDelay: '0.4s' }}
                >
                    {t.note}
                </p>

                {/* Phone Mockups Container */}
                <div
                    className="hero-scale mt-16 relative"
                    style={{ animationDelay: '0.3s' }}
                >
                    <div className="flex justify-center items-end gap-4">
                        {/* Left Phone - Tasks Screen */}
                        <div
                            className="hero-phone w-48 md:w-64 shadow-2xl rounded-[2.25rem] overflow-hidden bg-white ring-1 ring-black/5 rotate-6"
                            style={{ animationDelay: '0.35s' }}
                        >
                            <div className="aspect-[9/19] relative">
                                <Image
                                    src="/screens/IMG_3086.PNG"
                                    alt={t.tasksScreenAlt}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 256px, 192px"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right Phone - Streaks Screen */}
                        <div
                            className="hero-phone w-48 md:w-64 shadow-2xl rounded-[2.25rem] overflow-hidden bg-white ring-1 ring-black/5 -rotate-6"
                            style={{ animationDelay: '0.4s' }}
                        >
                            <div className="aspect-[9/19] relative">
                                <Image
                                    src="/screens/Bildschirmfoto 2026-03-06 um 22.18.15.png"
                                    alt={t.streaksScreenAlt}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 256px, 192px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
