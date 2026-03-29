import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match all pathnames except for
    // - API routes
    // - Static files (e.g. /_next, /favicon.ico)
    // - Metadata files (e.g. /robots.txt, /sitemap.xml)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
