'use client';

import { useId, useState } from 'react';
import type { Dictionary } from '@/i18n/types';

interface FAQProps {
    // Answers arrive with their {placeholders} already filled in.
    t: Dictionary['faq'];
}

export default function FAQ({ t }: FAQProps) {
    const faqItems = t.items;
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const baseId = useId();

    return (
        <section className="py-20 px-5" id="faq" aria-labelledby="faq-title">
            <div className="max-w-3xl mx-auto">
                <h2 id="faq-title" className="large-title text-4xl md:text-6xl text-center mb-4">
                    {t.titleLine1}<br />
                    {t.titleLine2}
                </h2>
                <p className="text-lg text-label-secondary text-center mb-12">
                    {t.subtitle}
                </p>

                {/* One grouped list, like a settings section in the app */}
                <div className="panel overflow-hidden">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;
                        const buttonId = `${baseId}-question-${index}`;
                        const panelId = `${baseId}-answer-${index}`;
                        return (
                            <div key={index}>
                                {index > 0 && <div aria-hidden="true" className="h-px bg-separator mx-5" />}
                                <h3>
                                    <button
                                        id={buttonId}
                                        className="w-full text-start flex items-center justify-between gap-4 px-5 py-4 cursor-pointer"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                    >
                                        <span className="text-[17px] font-semibold">{item.question}</span>
                                        <svg
                                            className={`w-4 h-4 shrink-0 text-label-tertiary transition-transform rtl:-scale-x-100 ${isOpen ? 'rotate-90' : ''}`}
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </button>
                                </h3>
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    hidden={!isOpen}
                                    className="px-5 pb-5 -mt-1 text-[15px] leading-relaxed text-label-secondary"
                                >
                                    {item.answer}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
