import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export function Footer() {
    const t = useTranslations('Impressum')

    return (
        <footer className="py-4 text-center w-full shrink-0 space-y-2">
            <p className="text-sm text-muted-foreground">
                © 2026 Ralchenko Software · <Link href="/impressum" className="hover:text-foreground transition-colors">{t('footerLink')}</Link>
            </p>
            <div className="flex justify-center gap-4">
                <a href="mailto:vralchenko@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">vralchenko@gmail.com</a>
                <a href="https://www.linkedin.com/in/victoralchenko/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                <a href="https://vralchenko-portfolio.pages.dev/en" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
            </div>
        </footer>
    )
}
