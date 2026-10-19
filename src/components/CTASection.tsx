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
                                        alt="Reminders+ Streaks"
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
                                    alt="Reminders+ App Icon"
                                    width={80}
                                    height={80}
                                    className="rounded-[18px] shadow-lg"
                                />
                                <div>
                                    <span className="text-2xl font-bold tracking-tight block">Reminders+</span>
                                    <p className="text-label-secondary">Tasks &amp; Habits</p>
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
                                    src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/white/en-us?releaseDate=1770163200"
                                    alt="Download on the App Store"
                                    style={{ width: '200px', height: '67px', verticalAlign: 'middle', objectFit: 'contain' }}
                                />
                            </a>

                            <p className="text-label-secondary text-sm mt-4 text-center md:text-left">
                                Free download • No account required
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
