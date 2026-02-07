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
                                href="https://apps.apple.com/us/app/reminders/id6758573672"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors w-full md:w-auto"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs opacity-80">Download on the</div>
                                    <div className="text-lg font-semibold -mt-0.5">App Store</div>
                                </div>
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
