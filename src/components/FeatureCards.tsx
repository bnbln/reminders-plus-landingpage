import StreakFlame from '@/components/StreakFlame';
import { tint } from '@/lib/tint';

// Last 14 days of activity, drawn like the chart on the app's Streaks screen.
const activity = [2, 0, 1, 3, 1, 2, 4, 2, 3, 1, 2, 5, 3, 4];
const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'];

const tasks = [
    { emoji: '🏃', title: 'Morning run', meta: 'Routine · Daily', done: true },
    { emoji: '📚', title: 'Read 20 pages', meta: 'Today · Personal', done: false },
    { emoji: '🛒', title: 'Groceries', meta: 'Today · Home', done: false },
];

const privacy = [
    { label: 'Stored on your device', color: 'var(--accent)', path: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2' },
    { label: 'No account required', color: 'var(--green)', path: 'M20 6 9 17l-5-5' },
    { label: 'No tracking, no ads', color: 'var(--indigo)', path: 'M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z' },
];

function Check({ className }: { className?: string }) {
    return (
        <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

export default function FeatureCards() {
    const max = Math.max(...activity);

    return (
        <section className="py-20 px-5" id="features">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="large-title text-4xl md:text-6xl mb-4">
                        Simple habits,<br />
                        powerful results.
                    </h2>
                    <p className="text-lg text-label-secondary">
                        Build consistency with small daily wins. No overwhelming to-do lists.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Streak */}
                    <div className="panel p-6 flex flex-col">
                        <span className="section-label">Daily streaks</span>
                        <div className="flex items-center justify-center gap-4 py-8">
                            <span className="badge-icon w-16 h-16" style={tint('var(--flame-outer)')}>
                                <StreakFlame className="w-7 h-9" />
                            </span>
                            <div>
                                <div className="text-6xl font-black tabular-nums leading-none tracking-tight">12</div>
                                <div className="text-sm font-bold text-label-secondary mt-1">day streak</div>
                            </div>
                        </div>
                        <div className="rounded-[20px] bg-ios-bg p-4">
                            <div className="text-sm font-bold mb-3">Activity</div>
                            <div className="flex items-end justify-between h-16 gap-1">
                                {activity.map((value, index) => (
                                    <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                                        <div
                                            className="w-full max-w-[8px] rounded-full"
                                            style={{
                                                height: `${Math.max(8, (value / max) * 100)}%`,
                                                background: index === activity.length - 1 ? 'var(--red)' : value ? 'var(--flame-outer)' : 'var(--fill)',
                                                opacity: index === activity.length - 1 || value === 0 ? 1 : 0.35 + (value / max) * 0.65,
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-2">
                                {dayLabels.map((label, index) => (
                                    <span key={index} className="flex-1 text-center text-[9px] text-label-secondary">{label}</span>
                                ))}
                            </div>
                        </div>
                        <p className="mt-6 text-[15px] text-label-secondary">
                            Complete at least one task daily and watch your streak grow.
                        </p>
                    </div>

                    {/* Tasks */}
                    <div className="panel p-6 flex flex-col">
                        <span className="section-label">Today</span>
                        <div className="space-y-2 mt-4">
                            {tasks.map((task) => (
                                <div key={task.title} className="flex items-center gap-3 rounded-2xl bg-ios-bg px-3 py-2.5">
                                    <span className="w-9 h-9 rounded-xl bg-card flex items-center justify-center text-lg shrink-0">
                                        {task.emoji}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <div className={`text-[15px] font-semibold truncate ${task.done ? 'line-through text-label-secondary' : ''}`}>
                                            {task.title}
                                        </div>
                                        <div className="text-xs text-label-secondary">{task.meta}</div>
                                    </div>
                                    {task.done ? (
                                        <span className="w-6 h-6 rounded-full bg-ios-green text-white flex items-center justify-center shrink-0">
                                            <Check className="w-3.5 h-3.5" />
                                        </span>
                                    ) : (
                                        <span className="w-6 h-6 rounded-full border-2 border-label-tertiary shrink-0" />
                                    )}
                                </div>
                            ))}
                            <div className="flex items-center rounded-2xl overflow-hidden">
                                <div className="bg-ios-green text-white w-14 self-stretch flex items-center justify-center">
                                    <Check className="w-5 h-5" />
                                </div>
                                <div className="flex-1 flex items-center gap-3 bg-ios-bg px-3 py-2.5">
                                    <span className="text-lg">👉</span>
                                    <div>
                                        <div className="text-[15px] font-semibold">Swipe right</div>
                                        <div className="text-xs text-label-secondary">to complete the task</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-[15px] text-label-secondary">
                            Swipe, drag and drop. Tasks and routines in one calm list.
                        </p>
                    </div>

                    {/* Privacy */}
                    <div className="panel p-6 flex flex-col">
                        <span className="section-label">Your data</span>
                        <div className="mt-4 rounded-[20px] bg-ios-bg overflow-hidden">
                            {privacy.map((row, index) => (
                                <div key={row.label}>
                                    {index > 0 && <div className="h-px bg-separator ml-[52px]" />}
                                    <div className="flex items-center gap-3 px-4 py-3.5">
                                        <span className="icon-tile w-7 h-7" style={tint(row.color)}>
                                            <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                                                <path d={row.path} />
                                            </svg>
                                        </span>
                                        <span className="text-[15px] font-medium">{row.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-[15px] text-label-secondary">
                            Your tasks stay on your device. Optional iCloud sync runs through your own Apple account.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
