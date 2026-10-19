import { APP_LANGUAGE_COUNT, APP_MIN_IOS, APP_VERSION } from '@/lib/app-info';

const values: Record<string, string> = {
    languageCount: String(APP_LANGUAGE_COUNT),
    minIos: APP_MIN_IOS,
    version: APP_VERSION,
};

/** Fills {placeholders} in a dictionary string with the app facts. */
export function fill(text: string): string {
    return text.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
