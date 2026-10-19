'use client';

import Image from 'next/image';
import { APP_STORE_URL } from '@/lib/app-info';

const steps = [
    { number: 1, text: "Download the app" },
    { number: 2, text: "Add your first task" },
    { number: 3, text: "Start your streak!" }
];

export default function CTASection() {
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
                                <h2 id="download-title" className="text-2xl font-bold tracking-tight">Reminders+</h2>
                                <p className="text-label-secondary">Tasks &amp; Habits</p>
                            </div>

                            {/* Steps */}
                            <ol role="list" className="space-y-4 mb-8" aria-label="Get started in three steps">
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
                                    src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/white/en-us?releaseDate=1770163200"
                                    alt="Download on the App Store (opens in a new tab)"
                                    style={{ width: '200px', height: '67px', verticalAlign: 'middle', objectFit: 'contain' }}
                                />
                            </a>

                            <p className="text-label-secondary text-sm mt-4 text-center md:text-left">
                                Free download <span aria-hidden="true">•</span> No account required
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
