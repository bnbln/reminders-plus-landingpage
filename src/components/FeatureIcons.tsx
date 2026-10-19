'use client';

const features = [
    {
        icon: (
            <svg className="w-12 h-12" aria-hidden="true" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#0070E1" strokeWidth="2" />
                <path d="M24 13C24 13 31 19 31 26C31 30.4 27.9 34 24 34C20.1 34 17 30.4 17 26C17 22.5 19 20 20.5 18.5C20.5 21.5 22 23 23.5 23.5C23 19.5 24 16 24 13Z" stroke="#0070E1" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        ),
        title: "Daily streak system",
        glow: "glow-blue"
    },
    {
        icon: (
            <svg className="w-12 h-12" aria-hidden="true" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#0070E1" strokeWidth="2" />
                <path d="M16 24L22 30L32 18" stroke="#0070E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Tasks & routines in one place",
        glow: "glow-green"
    },
    {
        icon: (
            <svg className="w-12 h-12" aria-hidden="true" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#0070E1" strokeWidth="2" />
                <rect x="17" y="22" width="14" height="11" rx="2" stroke="#0070E1" strokeWidth="2" />
                <path d="M20 22V19C20 16.8 21.8 15 24 15C26.2 15 28 16.8 28 19V22" stroke="#0070E1" strokeWidth="2" strokeLinecap="round" />
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
