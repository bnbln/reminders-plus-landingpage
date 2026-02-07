'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="pt-32 pb-16 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-20 left-1/4 w-96 h-96 glow-blue opacity-100 pointer-events-none" />
            <div className="absolute top-40 right-1/4 w-80 h-80 glow-light-blue opacity-90 pointer-events-none" />
            <div className="absolute top-60 left-1/2 w-64 h-64 glow-purple opacity-80 pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Streak Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-8 shadow-sm"
                >
                    <span className="text-lg">🔥</span>
                    <span className="text-sm font-medium">Start your streak today</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-serif leading-tight mb-6"
                >
                    One task a day.<br />
                    Endless results.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-lg text-gray-600 mb-8 max-w-lg mx-auto"
                >
                    Build lasting habits with daily streaks. Organize tasks and routines in one beautiful app.
                </motion.p>

                {/* CTA Button */}
                <motion.a
                    href="https://apps.apple.com/us/app/reminders/id6758573672"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="inline-block bg-[#0070E1] text-white text-lg px-8 py-4 rounded-full font-medium hover:bg-[#005BB5] transition-colors"
                >
                    Download Free
                </motion.a>

                {/* Phone Mockups Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.65, delay: 0.3, ease: "easeInOut" }}
                    className="mt-16 relative"
                >
                    <div className="flex justify-center items-end gap-4">
                        {/* Left Phone - Tasks Screen */}
                        <motion.div
                            initial={{ opacity: 0, y: 70, rotate: 0 }}
                            animate={{ opacity: 1, y: 0, rotate: 6 }}
                            transition={{ duration: 0.65, delay: 0.35, ease: "easeInOut" }}
                            className="w-48 md:w-64 shadow-2xl rounded-3xl overflow-hidden bg-white"
                        >
                            <div className="aspect-[9/19] relative">
                                <Image
                                    src="/screens/dark-00004.png"
                                    alt="Reminders+ Tasks Screen"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Right Phone - Streaks Screen */}
                        <motion.div
                            initial={{ opacity: 0, y: 70, rotate: 0 }}
                            animate={{ opacity: 1, y: 0, rotate: -6 }}
                            transition={{ duration: 0.65, delay: 0.4, ease: "easeInOut" }}
                            className="w-48 md:w-64 shadow-2xl rounded-3xl overflow-hidden bg-white"
                        >
                            <div className="aspect-[9/19] relative">
                                <Image
                                    src="/screens/light-00001.png"
                                    alt="Reminders+ Streaks Screen"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
