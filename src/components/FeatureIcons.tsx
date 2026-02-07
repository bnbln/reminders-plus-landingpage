'use client';

const features = [
    {
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#0070E1" strokeWidth="2" />
                <text x="24" y="30" textAnchor="middle" fontSize="20">🔥</text>
            </svg>
        ),
        title: "Daily streak system",
        glow: "glow-blue"
    },
    {
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#0070E1" strokeWidth="2" />
                <path d="M16 24L22 30L32 18" stroke="#0070E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Tasks & routines in one place",
        glow: "glow-green"
    },
    {
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#0070E1" strokeWidth="2" />
                <path d="M24 16V24L30 28" stroke="#0070E1" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: "100% private, local storage",
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
