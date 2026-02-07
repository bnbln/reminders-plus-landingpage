'use client';

export default function FeatureCards() {
    return (
        <section className="py-20 px-6" id="features">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">
                        Simple habits,<br />
                        powerful results.
                    </h2>
                    <p className="text-gray-600">
                        Build consistency with small daily wins. No overwhelming to-do lists.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Streak Card */}
                    <div className="card card-blue relative overflow-hidden">
                        <div className="mb-8">
                            <span className="text-sm font-medium text-gray-700">Daily Streaks</span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                            <div className="text-4xl mb-2">🔥</div>
                            <div className="text-3xl font-bold text-[#0070E1]">12</div>
                            <div className="text-sm text-gray-500 mt-1">days streak</div>
                        </div>
                        <p className="mt-6 text-sm text-gray-700">
                            Complete at least one task daily and watch your streak grow.
                        </p>
                    </div>

                    {/* Clean Interface Card */}
                    <div className="card card-green relative overflow-hidden">
                        <div className="mb-8">
                            <span className="text-sm font-medium text-gray-700">Clean Design</span>
                        </div>
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50">
                                    <div className="w-4 h-4 rounded-full bg-[#0070E1] flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-xs line-through text-gray-400">Done</span>
                                </div>
                                <div className="flex items-center gap-2 p-2 rounded-lg">
                                    <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                                    <span className="text-xs">In progress</span>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-gray-700">
                            Modern interface designed for focus and clarity. No clutter.
                        </p>
                    </div>

                    {/* Privacy Card */}
                    <div className="card card-purple relative overflow-hidden">
                        <div className="mb-8">
                            <span className="text-sm font-medium text-gray-700">Your Data, Your Device</span>
                        </div>
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-[#0070E1] rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm">100% local storage</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-[#0070E1] rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm">No account required</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-[#0070E1] rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm">Fast & lightweight</span>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-gray-700">
                            Maximum privacy. Your data never leaves your device.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
