import StreakFlame from '@/components/StreakFlame';
import { tint } from '@/lib/tint';

// Styled like the summary tiles on the app's Tasks and Streaks screens.
const features = [
    {
        title: 'Daily streaks',
        subtitle: 'One task a day keeps the fire burning',
        color: 'var(--flame-outer)',
        icon: <StreakFlame className="w-4 h-5" />,
    },
    {
        title: 'Tasks & routines',
        subtitle: 'Everything in one place',
        color: 'var(--green)',
        icon: (
            <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
            </svg>
        ),
    },
    {
        title: 'Private by design',
        subtitle: 'No account, no tracking',
        color: 'var(--indigo)',
        icon: (
            <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="11" width="16" height="10" rx="2.5" />
                <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
            </svg>
        ),
    },
];

export default function FeatureIcons() {
    return (
        <section className="pb-16 px-5" aria-labelledby="highlights-title">
            <h2 id="highlights-title" className="sr-only">Highlights</h2>
            <ul role="list" className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
                {features.map((feature) => (
                    <li key={feature.title} className="tile p-4 flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                        <div className="flex items-start justify-between shrink-0 md:w-full">
                            <span className="badge-icon w-10 h-10" style={tint(feature.color)}>
                                {feature.icon}
                            </span>
                            <svg className="hidden md:block w-4 h-4 text-label-tertiary mt-1" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[17px] font-bold leading-tight">{feature.title}</h3>
                            <p className="text-sm text-label-secondary mt-0.5">{feature.subtitle}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
