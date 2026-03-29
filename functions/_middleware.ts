const LOCALES = ["en", "de", "es", "fr", "ru", "uk"];
const DEFAULT_LOCALE = "en";

export const onRequest: PagesFunction = async (context) => {
    const url = new URL(context.request.url);
    const { pathname } = url;

    // Skip static assets and API routes
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return context.next();
    }

    // Check if path already has a locale prefix
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && LOCALES.includes(segments[0])) {
        return context.next();
    }

    // Detect locale from Accept-Language header
    const acceptLang = context.request.headers.get("accept-language") || "";
    const preferred = acceptLang
        .split(",")
        .map((lang) => lang.split(";")[0].trim().substring(0, 2).toLowerCase())
        .find((lang) => LOCALES.includes(lang));

    const locale = preferred || DEFAULT_LOCALE;
    url.pathname = `/${locale}${pathname}`;

    return Response.redirect(url.toString(), 302);
};
