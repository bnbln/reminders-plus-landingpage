'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LOCALE_COOKIE, localeInfo, locales, type Locale } from '@/i18n/config';

interface LanguagePickerProps {
    locale: Locale;
    label: string;
}

// Remembered for a year, so later visits skip the browser-language guess.
function rememberLocale(code: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguagePicker({ locale, label }: LanguagePickerProps) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const listId = useId();
    const pathname = usePathname() ?? '/';
    // Same page in another language: swap the first path segment.
    const rest = pathname.replace(/^\/[^/]+/, '');

    useEffect(() => {
        if (!open) return;
        listRef.current?.querySelector<HTMLAnchorElement>('[aria-current="true"]')?.focus();

        const onPointerDown = (event: PointerEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
        };
        document.addEventListener('pointerdown', onPointerDown);
        return () => document.removeEventListener('pointerdown', onPointerDown);
    }, [open]);

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Escape' && open) {
            setOpen(false);
            buttonRef.current?.focus();
            return;
        }
        if (!open || (event.key !== 'ArrowDown' && event.key !== 'ArrowUp')) return;
        const links = Array.from(listRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? []);
        const index = links.indexOf(document.activeElement as HTMLAnchorElement);
        const next = event.key === 'ArrowDown' ? index + 1 : index - 1;
        links[(next + links.length) % links.length]?.focus();
        event.preventDefault();
    };

    return (
        <div
            ref={rootRef}
            className="relative"
            onKeyDown={onKeyDown}
            onBlur={(event) => {
                // Close only when focus moves to something else, e.g. Tab out of
                // the menu. Safari does not focus a link on tap, so pressing a
                // language blurs with no relatedTarget; closing then hid the list
                // before the tap landed. Clicks outside are handled above.
                const next = event.relatedTarget as Node | null;
                if (next && !rootRef.current?.contains(next)) setOpen(false);
            }}
        >
            <button
                ref={buttonRef}
                type="button"
                aria-expanded={open}
                aria-controls={listId}
                onClick={() => setOpen((value) => !value)}
                className="h-9 flex items-center gap-1.5 rounded-full px-2.5 text-label-secondary hover:text-label hover:bg-fill transition-colors cursor-pointer"
            >
                <svg className="w-[18px] h-[18px]" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 0 1 3.5 9 14 14 0 0 1-3.5 9 14 14 0 0 1-3.5-9A14 14 0 0 1 12 3z" />
                </svg>
                <span className="sr-only">{label}: {localeInfo[locale].name}, </span>
                <span className="text-[13px] font-semibold uppercase tracking-wide">{locale}</span>
            </button>

            <div
                id={listId}
                hidden={!open}
                className="absolute end-0 top-full mt-2 w-60 panel !rounded-[18px] shadow-2xl overflow-hidden"
            >
                <p className="section-label px-4 pt-3 pb-1">{label}</p>
                <ul ref={listRef} className="max-h-[min(65vh,26rem)] overflow-y-auto pb-1.5">
                    {locales.map((code) => {
                        const current = code === locale;
                        return (
                            <li key={code}>
                                <a
                                    href={`/${code}${rest}`}
                                    hrefLang={localeInfo[code].htmlLang}
                                    lang={localeInfo[code].htmlLang}
                                    aria-current={current ? 'true' : undefined}
                                    onClick={() => rememberLocale(code)}
                                    className={`flex items-center justify-between gap-3 px-4 py-2 text-[15px] hover:bg-fill focus-visible:bg-fill outline-none ${current ? 'font-semibold text-accent' : 'text-label'}`}
                                >
                                    {localeInfo[code].name}
                                    {current && (
                                        <svg className="w-4 h-4 shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                    )}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
