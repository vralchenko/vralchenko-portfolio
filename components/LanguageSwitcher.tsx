"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import Flag from "react-world-flags"

export function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const languages = [
        { code: "en", flag: "GB", label: "English" },
        { code: "de", flag: "DE", label: "Deutsch" },
        { code: "es", flag: "ES", label: "Español" },
        { code: "fr", flag: "FR", label: "Français" },
        { code: "ru", flag: "RU", label: "Русский" },
        { code: "uk", flag: "UA", label: "Українська" },
    ]

    const handleSwitch = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale })
    }

    return (
        <div className="flex gap-1 items-center">
            {languages.map((lang) => (
                <Button
                    key={lang.code}
                    variant={locale === lang.code ? "secondary" : "ghost"}
                    size="icon"
                    onClick={() => handleSwitch(lang.code)}
                    title={lang.label}
                    className="w-8 h-8 rounded-full p-0"
                >
                    <Flag code={lang.flag} className="w-4 h-4 object-cover rounded-sm" />
                    <span className="sr-only">{lang.label}</span>
                </Button>
            ))}
        </div>
    )
}
