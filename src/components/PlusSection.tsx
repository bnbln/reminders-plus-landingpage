import { APP_STORE_URL } from '@/lib/app-info';
import { tint } from '@/lib/tint';
import type { Dictionary } from '@/i18n/types';

// Mirrors the Plus card in the app's settings (components/settings/plus-hero-card.tsx).
const benefits = (t: Dictionary['plus']) => [
    { label: t.benefitAssist, color: '#34C759', path: 'M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9zM19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z' },
    { label: t.benefitProjects, color: '#3B82F6', path: 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
    { label: t.benefitSync, color: '#F59E0B', path: 'M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z' },
];

export default function PlusSection({ t }: { t: Dictionary['plus'] }) {
    return (
        <section className="py-20 px-5" id="plus">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <span className="section-label">{t.label}</span>
                    <h2 className="large-title text-4xl md:text-6xl mt-3 mb-4">
                        {t.titleLine1}<br />
                        {t.titleLine2}
                    </h2>
                    <p className="text-lg text-label-secondary max-w-md">
                        {t.text}
                    </p>
                </div>

                <div className="relative overflow-hidden rounded-[28px] p-6 md:p-7 text-white bg-gradient-to-br from-[#05070B] to-[#0B1424] shadow-2xl">
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'linear-gradient(225deg, color-mix(in srgb, var(--accent) 50%, transparent) 0%, transparent 60%)' }}
                    />
                    <div className="relative">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2.5">
                                <span className="icon-tile w-7 h-7" style={tint('var(--accent)')}>
                                    <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z" />
                                    </svg>
                                </span>
                                <span dir="ltr" className="text-[17px] font-bold">Reminders+</span>
                            </div>
                            <span className="text-[13px] font-semibold rounded-full bg-white/12 px-3 py-1">{t.plans}</span>
                        </div>

                        <h3 className="text-[28px] font-extrabold leading-tight tracking-tight mb-2">{t.cardTitle}</h3>
                        <p className="text-[15px] text-white/70 mb-6">{t.cardText}</p>

                        <div className="rounded-[20px] bg-white/[0.07] p-2 mb-6">
                            {benefits(t).map((benefit) => (
                                <div key={benefit.label} className="flex items-center gap-3 px-2 py-2.5">
                                    <span className="w-8 h-8 rounded-[10px] flex items-center justify-center" style={{ background: `color-mix(in srgb, ${benefit.color} 20%, transparent)`, color: benefit.color }}>
                                        <svg className="w-[18px] h-[18px]" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={benefit.path} />
                                        </svg>
                                    </span>
                                    <span className="text-[15px] font-semibold">{benefit.label}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href={APP_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-full bg-white text-[#0B0F17] font-bold py-3.5 hover:bg-white/90 transition-colors"
                        >
                            {t.cta}
                            <svg className="w-[18px] h-[18px] rtl:-scale-x-100" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
