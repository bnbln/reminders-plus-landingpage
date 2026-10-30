import type { MetadataRoute } from 'next';
import { localeInfo, locales } from '@/i18n/config';
import { SITE_URL } from '@/lib/app-info';

// Every language version of a page, so search engines can match them up.
const localized = (path: string): MetadataRoute.Sitemap => {
    const languages = Object.fromEntries(
        locales.map((code) => [localeInfo[code].htmlLang, `${SITE_URL}/${code}${path}`]),
    );
    return locales.map((code) => ({
        url: `${SITE_URL}/${code}${path}`,
        alternates: { languages },
    }));
};

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        ...localized(''),
        ...localized('/contact'),
        // Legal texts are only published in English.
        ...['/privacy', '/terms', '/impressum'].map((path) => ({ url: `${SITE_URL}/en${path}` })),
    ];
}
