import { APP_LANGUAGE_COUNT } from '@/lib/app-info';

const features = [
    {
        title: 'Widgets',
        text: 'Your streak and today\'s tasks on the Home Screen and Lock Screen. Check tasks off without opening the app.',
        icon: (
            <>
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </>
        ),
    },
    {
        title: 'AI Assist',
        text: 'Create, find and move tasks in plain language. Runs on Apple Intelligence, right on your device.',
        plus: true,
        icon: (
            <>
                <path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z" />
                <path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z" />
            </>
        ),
    },
    {
        title: 'iCloud Sync',
        text: 'Keep tasks and projects in sync across your iPhone and iPad through your own iCloud account.',
        plus: true,
        icon: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
    },
    {
        title: 'Import from Apple',
        text: 'Bring in reminders from Apple Reminders and events from Apple Calendar as tasks.',
        icon: (
            <>
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
            </>
        ),
    },
    {
        title: 'Make it yours',
        text: 'Light and dark mode, accent colors, and an app icon that takes on your color.',
        icon: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
            </>
        ),
    },
    {
        title: `${APP_LANGUAGE_COUNT} languages`,
        text: 'Use Reminders+ in English, German, Spanish, French, Japanese, Chinese, Arabic and many more.',
        icon: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 3.5 9 14 14 0 0 1-3.5 9 14 14 0 0 1-3.5-9A14 14 0 0 1 12 3z" />
            </>
        ),
    },
];

export default function MoreFeatures() {
    return (
        <section className="py-20 px-6" id="more-features">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-sans mb-4">
                        Everything you need,<br />
                        nothing you don&apos;t.
                    </h2>
                    <p className="text-gray-600">
                        Free to use. Upgrade to Plus for AI Assist, more than 4 projects and iCloud Sync.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <div key={feature.title} className="card">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-11 h-11 rounded-xl bg-[#0070E1]/10 text-[#0070E1] flex items-center justify-center">
                                    <svg className="w-6 h-6" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {feature.icon}
                                    </svg>
                                </div>
                                {feature.plus && (
                                    <span className="text-xs font-medium text-[#0070E1] bg-[#0070E1]/10 rounded-full px-3 py-1">
                                        Plus
                                    </span>
                                )}
                            </div>
                            <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
