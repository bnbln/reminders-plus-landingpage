'use client';

const features = [
    {
        icon: (
            <svg className="w-12 h-12" aria-hidden="true" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#0070E1" strokeWidth="2" />
                <g transform="translate(12 12)" stroke="#0070E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </g>
            </svg>
        ),
        title: "Daily streak system",
        glow: "glow-blue"
    },
    {
        icon: (
            <svg className="w-12 h-12" aria-hidden="true" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#0070E1" strokeWidth="2" />
                <g transform="translate(12 12)" stroke="#0070E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                </g>
            </svg>
        ),
        title: "Tasks & routines in one place",
        glow: "glow-green"
    },
    {
        icon: (
            <svg className="w-12 h-12" aria-hidden="true" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#0070E1" strokeWidth="2" />
                <g transform="translate(12 12)" stroke="#0070E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </g>
            </svg>
        ),
        title: "Private by design, no account",
        glow: "glow-purple"
    }
];

export default function FeatureIcons() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className={`relative w-24 h-24 flex items-center justify-center mb-4`}>
                                <div className={`absolute inset-0 ${feature.glow} opacity-60 rounded-full`} />
                                <div className="relative z-10">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-sm font-medium">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
