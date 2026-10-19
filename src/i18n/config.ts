/**
 * Languages of the website. Same set and order as the app's
 * `CFBundleLocalizations` in bnbln/reminders-plus app.json; the texts live in
 * ./dictionaries and reuse the app's own wording where the app has it.
 */
export const locales = [
    'de', 'en', 'es', 'fr', 'pt', 'hi', 'zh', 'ja', 'it', 'sv', 'da', 'fi', 'pl',
    'nl', 'tr', 'cs', 'hu', 'ro', 'el', 'id', 'vi', 'ko', 'uk', 'ru', 'ar',
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Cookie that remembers a language picked in the language menu.
export const LOCALE_COOKIE = 'NEXT_LOCALE';

export const localeInfo: Record<Locale, { name: string; htmlLang: string; badge: string }> = {
    // name: the language's own name. badge: locale of Apple's App Store badge.
    de: { name: 'Deutsch', htmlLang: 'de', badge: 'de-de' },
    en: { name: 'English', htmlLang: 'en', badge: 'en-us' },
    es: { name: 'Español', htmlLang: 'es', badge: 'es-es' },
    fr: { name: 'Français', htmlLang: 'fr', badge: 'fr-fr' },
    pt: { name: 'Português', htmlLang: 'pt', badge: 'pt-br' },
    hi: { name: 'हिन्दी', htmlLang: 'hi', badge: 'hi-in' },
    zh: { name: '简体中文', htmlLang: 'zh-Hans', badge: 'zh-cn' },
    ja: { name: '日本語', htmlLang: 'ja', badge: 'ja-jp' },
    it: { name: 'Italiano', htmlLang: 'it', badge: 'it-it' },
    sv: { name: 'Svenska', htmlLang: 'sv', badge: 'sv-se' },
    da: { name: 'Dansk', htmlLang: 'da', badge: 'da-dk' },
    fi: { name: 'Suomi', htmlLang: 'fi', badge: 'fi-fi' },
    pl: { name: 'Polski', htmlLang: 'pl', badge: 'pl-pl' },
    nl: { name: 'Nederlands', htmlLang: 'nl', badge: 'nl-nl' },
    tr: { name: 'Türkçe', htmlLang: 'tr', badge: 'tr-tr' },
    cs: { name: 'Čeština', htmlLang: 'cs', badge: 'cs-cz' },
    hu: { name: 'Magyar', htmlLang: 'hu', badge: 'hu-hu' },
    ro: { name: 'Română', htmlLang: 'ro', badge: 'ro-ro' },
    el: { name: 'Ελληνικά', htmlLang: 'el', badge: 'el-gr' },
    id: { name: 'Bahasa Indonesia', htmlLang: 'id', badge: 'id-id' },
    vi: { name: 'Tiếng Việt', htmlLang: 'vi', badge: 'vi-vn' },
    ko: { name: '한국어', htmlLang: 'ko', badge: 'ko-kr' },
    uk: { name: 'Українська', htmlLang: 'uk', badge: 'uk-ua' },
    ru: { name: 'Русский', htmlLang: 'ru', badge: 'ru-ru' },
    ar: { name: 'العربية', htmlLang: 'ar', badge: 'ar-sa' },
};

export const rtlLocales: readonly Locale[] = ['ar'];

export function isLocale(value: string | undefined | null): value is Locale {
    return !!value && (locales as readonly string[]).includes(value);
}

/** Picks the best supported language from an Accept-Language header. */
export function matchLocale(acceptLanguage: string | null): Locale {
    if (!acceptLanguage) return defaultLocale;

    const ranked = acceptLanguage
        .split(',')
        .map((part, index) => {
            const [tag, ...params] = part.trim().split(';');
            const q = params.find((p) => p.trim().startsWith('q='));
            return { tag: tag.toLowerCase(), q: q ? Number(q.trim().slice(2)) || 0 : 1, index };
        })
        .filter((entry) => entry.tag && entry.q > 0)
        .sort((a, b) => b.q - a.q || a.index - b.index);

    for (const { tag } of ranked) {
        const base = tag.split('-')[0];
        if (isLocale(base)) return base;
    }
    return defaultLocale;
}
