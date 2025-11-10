"use client"

import Link from "next/link"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"
import { sendEmail } from "../_actions"
import { useState, useRef } from "react"
import { toast } from "sonner"

export default function ContactPage() {
    const [isSending, setIsSending] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSending(true)

        const formData = new FormData(event.currentTarget)
        const result = await sendEmail(formData)

        if (result.success) {
            toast.success("Message sent successfully! I will get back to you shortly.")
            formRef.current?.reset()
        } else {
            toast.error("Failed to send message. Please try again or use the email link.")
        }

        setIsSending(false)
    }

    return (
        <main className="px-4 pb-4 md:px-8 md:pb-8 max-w-4xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

                <Link href="mailto:vralchenko@gmail.com">
                    <Card className="hover:bg-accent transition-colors h-full">
                        <CardContent className="p-2 flex items-center gap-2">
                            <div className="bg-secondary p-1 rounded-lg">
                                <Mail className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-sm">
                                vralchenko@gmail.com
                            </span>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="https://github.com/vralchenko/ItemFlow" target="_blank" className="md:row-span-2">
                    <Card className="hover:bg-accent transition-colors h-full flex flex-col items-center justify-center text-center p-2">
                        <Github className="w-10 h-10 mb-1" />
                        <CardTitle className="text-md mb-1">ItemFlow Repository</CardTitle>
                    </Card>
                </Link>

                <Link href="https://linkedin.com/in/victoralchenko" target="_blank">
                    <Card className="hover:bg-accent transition-colors h-full flex items-center justify-center p-2">
                        <Linkedin className="w-8 h-8" />
                    </Card>
                </Link>
            </div>

            <h2 className="text-3xl font-bold mb-4">Contact with me</h2>
            <p className="text-muted-foreground mb-6">
                You can also get in touch with me through this form below.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Enter your message here" className="min-h-[150px]" required />
                </div>

                <div className="flex items-center gap-4">
                    <Button type="submit" variant="secondary" className="w-full" disabled={isSending}>
                        {isSending ? "Sending..." : "Send Message"}
                    </Button>
                </div>
            </form>

        </main>
    )
}