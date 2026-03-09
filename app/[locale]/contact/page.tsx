"use client"

import Link from "next/link"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, FileText } from "lucide-react"
import { sendEmail } from "../_actions"
import { useState, useRef } from "react"
import { toast } from "sonner"
import { useTranslations, useLocale } from "next-intl"
import { QRCodeSVG } from "qrcode.react"

const BASE_URL = "https://vralchenko-portfolio.vercel.app"

const docs = {
    de: {
        cv: "/ViktorRalchenko_CV_SeniorDotNetEntwickler_DE.pdf",
        coverLetter: "/ViktorRalchenko_Bewerbungsschreiben_SeniorDotNetEntwickler_DE.pdf",
    },
    en: {
        cv: "/ViktorRalchenko_CV_SeniorDotNetDeveloper.pdf",
        coverLetter: "/ViktorRalchenko_CoverLetter_SeniorDotNetDeveloper.pdf",
    },
} as const

export default function ContactPage() {
    const t = useTranslations('Contact')
    const locale = useLocale()
    const [isSending, setIsSending] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)
    const currentDocs = locale === "de" ? docs.de : docs.en

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSending(true)

        const formData = new FormData(event.currentTarget)
        const result = await sendEmail(formData)

        if (result.success) {
            toast.success(t('form.success'))
            formRef.current?.reset()
        } else {
            toast.error(t('form.error'))
        }

        setIsSending(false)
    }

    return (
        <main className="flex flex-col flex-grow">
            <div className="px-4 pb-4 md:px-8 md:pb-8 max-w-4xl mx-auto w-full">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

                    <Link href="mailto:vralchenko@gmail.com">
                        <Card className="hover:bg-accent transition-colors h-full">
                            <CardContent className="p-2 flex items-center justify-center gap-2">
                                <div className="bg-secondary p-1 rounded-lg">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-sm">
                                    vralchenko@gmail.com
                                </span>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="https://linkedin.com/in/victoralchenko" target="_blank">
                        <Card className="hover:bg-accent transition-colors h-full flex items-center justify-center p-2">
                            <Linkedin className="w-8 h-8" />
                        </Card>
                    </Link>
                </div>

                <h2 className="text-xl font-bold mb-4">{t('documents')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {([
                        { label: t('cv'), path: currentDocs.cv },
                        { label: t('coverLetter'), path: currentDocs.coverLetter },
                    ] as const).map(({ label, path }) => (
                        <a key={path} href={path} download className="block">
                            <Card className="hover:bg-accent transition-colors">
                                <CardContent className="p-4 flex flex-col items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <FileText className="w-5 h-5" />
                                        <span className="font-medium">{label}</span>
                                    </div>
                                    <div className="bg-white p-2 rounded-lg">
                                        <QRCodeSVG value={`${BASE_URL}${path}`} size={160} />
                                    </div>
                                    <span className="text-xs text-muted-foreground">{t('scanToDownload')}</span>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>

                <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
                <p className="text-muted-foreground mb-6">
                    {t('subtitle')}
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">{t('form.name')}</Label>
                        <Input id="name" name="name" placeholder={t('form.namePlaceholder')} required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">{t('form.email')}</Label>
                        <Input id="email" name="email" type="email" placeholder={t('form.emailPlaceholder')} required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">{t('form.message')}</Label>
                        <Textarea id="message" name="message" placeholder={t('form.messagePlaceholder')} className="min-h-[150px]" required />
                    </div>

                    <div className="flex items-center gap-4">
                        <Button type="submit" variant="secondary" className="w-full" disabled={isSending}>
                            {isSending ? t('form.sending') : t('form.submit')}
                        </Button>
                    </div>
                </form>
            </div>

        </main>
    )
}