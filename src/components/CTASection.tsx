'use client';

import Image from 'next/image';

const steps = [
    { number: 1, text: "Download the app" },
    { number: 2, text: "Add your first task" },
    { number: 3, text: "Start your streak!" }
];

export default function CTASection() {
    return (
        <section className="py-20 px-6" id="download">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Side - Phone Screenshot */}
                        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center min-h-[500px]">
                            <div className="w-56 md:w-64 shadow-2xl rounded-3xl overflow-hidden">
                                <div className="aspect-[9/19] relative">
                                    <Image
                                        src="/screens/light-00004.png"
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
                                    className="rounded-3xl shadow-lg"
                                />
                                <div>
                                    <span className="text-2xl font-semibold block">Reminders+</span>
                                    <p className="text-gray-500">Tasks & Habits</p>
                                </div>
                            </div>

                            {/* Steps */}
                            <div className="space-y-4 mb-8">
                                {steps.map((step) => (
                                    <div key={step.number} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#0070E1]/10 text-[#0070E1] flex items-center justify-center text-sm font-semibold">
                                            {step.number}
                                        </div>
                                        <span className="text-gray-700">{step.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Download Button */}
                            <a
                                href="https://apps.apple.com/us/app/reminders-pro/id6758573672?itscg=30200&itsct=apps_box_badge&mttnsubad=6758573672"
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

                            <p className="text-gray-400 text-sm mt-4 text-center md:text-left">
                                Free download • No account required
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
