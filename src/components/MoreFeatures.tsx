import { tint } from '@/lib/tint';
import { fill } from '@/i18n/format';
import type { Dictionary } from '@/i18n/types';

const features = (t: Dictionary['moreFeatures']) => [
    {
        title: t.widgetsTitle,
        color: 'var(--accent)',
        text: t.widgetsText,
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
        title: t.assistTitle,
        color: 'var(--green)',
        text: t.assistText,
        plus: true,
        icon: (
            <>
                <path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z" />
                <path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z" />
            </>
        ),
    },
    {
        title: t.syncTitle,
        color: '#F59E0B',
        text: t.syncText,
        plus: true,
        icon: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
    },
    {
        title: t.importTitle,
        color: 'var(--red)',
        text: t.importText,
        icon: (
            <>
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
            </>
        ),
    },
    {
        title: t.themeTitle,
        color: 'var(--indigo)',
        text: t.themeText,
        icon: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
            </>
        ),
    },
    {
        title: fill(t.languagesTitle),
        color: 'var(--teal)',
        text: t.languagesText,
        icon: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 3.5 9 14 14 0 0 1-3.5 9 14 14 0 0 1-3.5-9A14 14 0 0 1 12 3z" />
            </>
        ),
    },
];

export default function MoreFeatures({ t }: { t: Dictionary['moreFeatures'] }) {
    return (
        <section className="py-20 px-5" id="more-features">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="large-title text-4xl md:text-6xl mb-4">
                        {t.titleLine1}<br />
                        {t.titleLine2}
                    </h2>
                    <p className="text-lg text-label-secondary">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {features(t).map((feature) => (
                        <div key={feature.title} className="panel p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="icon-tile w-11 h-11 !rounded-[12px]" style={tint(feature.color)}>
                                    <svg className="w-6 h-6" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {feature.icon}
                                    </svg>
                                </div>
                                {feature.plus && (
                                    <span className="text-xs font-semibold text-accent bg-accent/10 rounded-full px-3 py-1">
                                        {t.plusBadge}
                                    </span>
                                )}
                            </div>
                            <h3 className="text-[19px] font-bold tracking-tight mb-1.5">{feature.title}</h3>
                            <p className="text-[15px] leading-snug text-label-secondary">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
