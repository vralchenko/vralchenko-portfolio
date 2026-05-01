import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { Navbar } from "@/components/Navbar"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Footer } from "@/components/Footer"
import { Toaster } from "sonner"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ["latin"] })

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

const SITE_URL = "https://vralchenko-portfolio.pages.dev";
const OG_TITLE = "Viktor Ralchenko — Senior .NET Developer & AI Portfolio";
const OG_DESCRIPTION =
    "11 AI-powered products shipped in 6 months — C#, .NET, React, TypeScript, Node.js, Python, Kotlin, Dart. LLM integrations, AI agents, serverless architecture. 20+ years Senior .NET Developer experience.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    openGraph: {
        type: "website",
        url: SITE_URL,
        title: OG_TITLE,
        description: OG_DESCRIPTION,
        siteName: "Viktor Ralchenko Portfolio",
        images: [
            {
                url: "/og-photo.png",
                width: 1222,
                height: 1186,
                alt: "Viktor Ralchenko — Senior .NET Developer & AI Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: OG_TITLE,
        description: OG_DESCRIPTION,
        images: ["/og-photo.png"],
    },
}

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.className} min-h-dvh flex flex-col`}>
                <ThemeProvider>
                    <NextIntlClientProvider messages={messages}>
                        <Navbar />
                        {children}
                        <Footer />
                        <Toaster position="bottom-center" />
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}