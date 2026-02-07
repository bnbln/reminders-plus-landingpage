'use client';

import { useState } from 'react';

const faqItems = [
    {
        question: "What is Reminders+?",
        answer: "Reminders+ is a modern task and routine app designed to help you build consistency. Instead of overwhelming to-do lists, it focuses on one simple principle: complete at least one task every day and keep your streak alive."
    },
    {
        question: "How does the streak system work?",
        answer: "Every day you complete at least one task, your streak increases by one. Miss a day, and it resets to zero. This simple mechanism motivates you to stay productive and build lasting habits through consistent daily progress."
    },
    {
        question: "Is my data private?",
        answer: "Absolutely. Reminders+ uses 100% local storage — your data stays on your device and is never uploaded to any server. No account required, maximum privacy."
    },
    {
        question: "What platforms is it available on?",
        answer: "Reminders+ is currently available on iOS. We're working on bringing it to more platforms soon."
    },
    {
        question: "Is Reminders+ free?",
        answer: "Yes, Reminders+ is free to download and use. We believe everyone should have access to a simple, effective productivity tool."
    },
    {
        question: "Does it support multiple languages?",
        answer: "Yes! Reminders+ includes multilingual support to help users worldwide build better habits in their preferred language."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 px-6" id="faq">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-center mb-4">
                    Got questions?<br />
                    Here's the answers.
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
