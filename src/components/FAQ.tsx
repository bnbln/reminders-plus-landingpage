'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    faqItems: FAQItem[];
}

export default function FAQ({ faqItems }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 px-6" id="faq">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-sans text-center mb-4">
                    Got questions?<br />
                    Here&apos;s the answers.
                </h2>
                <p className="text-gray-600 text-center mb-12">
                    Everything you need to know about Reminders+.
                </p>

                <div className="space-y-3">
                    {faqItems.map((item, index) => (
                        <div key={index} className="faq-item">
                            <button
                                className="faq-question w-full text-left"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span>{item.question}</span>
                                <svg
                                    className={`w-5 h-5 transition-transform text-[#0070E1] ${openIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="faq-answer">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
