/**
 * App facts shown on the landing page. Keep in sync with the app repo
 * (bnbln/reminders-plus): `version` in app.json, `deploymentTarget` in the
 * expo-build-properties plugin and `CFBundleLocalizations`.
 */
export const APP_VERSION = '1.0.6';
export const APP_MIN_IOS = '16.4';
export const APP_LANGUAGE_COUNT = 25;
export const APP_STORE_URL = 'https://apps.apple.com/us/app/reminders/id6758573672';

/**
 * Public address of the site, for canonical, hreflang and sitemap URLs, which
 * must be absolute. Vercel sets VERCEL_PROJECT_PRODUCTION_URL to the production
 * domain at build time, so a custom domain is picked up automatically.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
    ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : 'https://reminders-plus.vercel.app');
