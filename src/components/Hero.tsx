'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import StreakFlame from '@/components/StreakFlame';
import { tint } from '@/lib/tint';
import { APP_STORE_URL } from '@/lib/app-info';
import type { Dictionary } from '@/i18n/types';

export default function Hero({ t }: { t: Dictionary['hero'] }) {
    return (
        <section className="pt-32 pb-16 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-10 left-1/2 -translate-x-[70%] w-[36rem] h-[36rem] accent-wash pointer-events-none" />
            <div className="absolute top-72 left-1/2 -translate-x-[10%] w-[28rem] h-[28rem] flame-wash pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Streak Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 tile rounded-full ps-2 pe-4 py-1.5 mb-8"
                >
                    <span className="badge-icon w-7 h-7" style={tint('var(--flame-outer)')}>
                        <StreakFlame className="w-3.5 h-4" />
                    </span>
                    <span className="text-sm font-semibold">{t.badge}</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="large-title text-[44px] md:text-[80px] mb-6"
                >
                    {t.titleLine1}<br />
                    {t.titleLine2}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-label-secondary mb-8 max-w-lg mx-auto"
                >
                    {t.subtitle}
                </motion.p>

                {/* CTA Button */}
                <motion.a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="btn-primary text-[17px] !px-7 !py-3.5"
                >
                    {t.cta}
                </motion.a>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-4 text-sm text-label-secondary"
                >
                    {t.note}
                </motion.p>

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
                            className="w-48 md:w-64 shadow-2xl rounded-[2.25rem] overflow-hidden bg-white ring-1 ring-black/5"
                        >
                            <div className="aspect-[9/19] relative">
                                <Image
                                    src="/screens/IMG_3086.PNG"
                                    alt={t.tasksScreenAlt}
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
                            className="w-48 md:w-64 shadow-2xl rounded-[2.25rem] overflow-hidden bg-white ring-1 ring-black/5"
                        >
                            <div className="aspect-[9/19] relative">
                                <Image
                                    src="/screens/Bildschirmfoto 2026-03-06 um 22.18.15.png"
                                    alt={t.streaksScreenAlt}
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
