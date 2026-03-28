"use client"

import { QRCodeSVG } from "qrcode.react"

const LINKEDIN_URL = "https://linkedin.com/in/victoralchenko"

export default function LinkedInQR({ size = 120 }: { size?: number }) {
    return (
        <div className="bg-white p-2 rounded-lg">
            <QRCodeSVG value={LINKEDIN_URL} size={size} />
        </div>
    )
}
