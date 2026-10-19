import { NextResponse, type NextRequest } from 'next/server';
import { LOCALE_COOKIE, isLocale, matchLocale } from '@/i18n/config';

// Sends paths without a language prefix (/, /privacy, ...) to the visitor's
// language: the one they picked in the language menu, else the browser's.
export function proxy(request: NextRequest) {
    const { pathname, search } = request.nextUrl;
    const first = pathname.split('/')[1];
    if (isLocale(first)) return NextResponse.next();

    const saved = request.cookies.get(LOCALE_COOKIE)?.value;
    const locale = isLocale(saved) ? saved : matchLocale(request.headers.get('accept-language'));

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    url.search = search;
    return NextResponse.redirect(url);
}

export const config = {
    // Everything except Next.js internals and files with an extension.
    matcher: ['/((?!_next|_vercel|api|.*\\..*).*)'],
};
