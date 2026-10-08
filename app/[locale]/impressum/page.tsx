import { Card, CardContent } from "@/components/ui/card"
import { getTranslations, setRequestLocale } from "next-intl/server"

const COMPANY = {
    name: "Ralchenko Software",
    owner: "Viktor Ralchenko",
    street: "Bubentalstrasse 8",
    city: "8304 Wallisellen",
    country: "Schweiz / Switzerland",
    uid: "CHE-339.158.493",
    email: "vralchenko@gmail.com",
}

const products = [
    { key: "deutschLernen", url: "https://play.google.com/store/apps/details?id=com.germantutor" },
    { key: "jobich", url: "https://jobich.ch/" },
    { key: "hirion", url: "https://hirion.ch/" },
] as const;

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('Impressum');

    return (
        <main className="flex flex-col flex-grow">
            <div className="px-4 pb-4 md:px-8 md:pb-8 max-w-4xl mx-auto w-full space-y-4">
                <Card>
                    <CardContent className="p-6 space-y-3">
                        <h1 className="text-2xl font-bold tracking-tight">{COMPANY.name}</h1>
                        <p className="text-muted-foreground">{t('about')}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6 space-y-3">
                        <h2 className="text-xl font-semibold">{t('productsTitle')}</h2>
                        <ul className="space-y-2">
                            {products.map(({ key, url }) => (
                                <li key={key}>
                                    <a href={url} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                                        {t(`products.${key}.name`)}
                                    </a>
                                    <span className="text-muted-foreground"> — {t(`products.${key}.desc`)}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6 space-y-3">
                        <h2 className="text-xl font-semibold">{t('title')}</h2>
                        <dl className="grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-x-4 gap-y-1 text-sm">
                            <dt className="text-muted-foreground">{t('company')}</dt>
                            <dd>{COMPANY.name}</dd>
                            <dt className="text-muted-foreground">{t('legalForm')}</dt>
                            <dd>{t('legalFormValue')}</dd>
                            <dt className="text-muted-foreground">{t('owner')}</dt>
                            <dd>{COMPANY.owner}</dd>
                            <dt className="text-muted-foreground">{t('address')}</dt>
                            <dd>{COMPANY.street}, {COMPANY.city}, {COMPANY.country}</dd>
                            <dt className="text-muted-foreground">{t('uid')}</dt>
                            <dd>{COMPANY.uid}</dd>
                            <dt className="text-muted-foreground">{t('email')}</dt>
                            <dd><a href={`mailto:${COMPANY.email}`} className="hover:underline">{COMPANY.email}</a></dd>
                        </dl>
                        <h3 className="font-semibold pt-2">{t('disclaimerTitle')}</h3>
                        <p className="text-sm text-muted-foreground">{t('disclaimer')}</p>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
