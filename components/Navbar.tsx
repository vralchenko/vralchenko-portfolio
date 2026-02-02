"use client"

import { Link, usePathname } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { useTranslations } from "next-intl"

export function Navbar() {
    const pathname = usePathname()
    const t = useTranslations('Navbar')

    return (
        <nav className="flex justify-center items-center py-6 gap-4 flex-wrap">
            <div className="flex gap-2">
                <Link href="/">
                    <Button variant={pathname === "/" ? "secondary" : "ghost"}>
                        {t('home')}
                    </Button>
                </Link>
                <Link href="/projects">
                    <Button variant={pathname === "/projects" ? "secondary" : "ghost"}>
                        {t('projects')}
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button variant={pathname === "/contact" ? "secondary" : "ghost"}>
                        {t('contact')}
                    </Button>
                </Link>
            </div>
            <LanguageSwitcher />
        </nav>
    )
}