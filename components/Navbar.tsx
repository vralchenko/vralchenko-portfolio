"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="flex justify-center py-6">
            <div className="flex gap-2">
                <Link href="/" passHref>
                    <Button variant={pathname === "/" ? "secondary" : "ghost"}>
                        Home
                    </Button>
                </Link>
                <Link href="/projects" passHref>
                    <Button variant={pathname === "/projects" ? "secondary" : "ghost"}>
                        Projects
                    </Button>
                </Link>
                <Link href="/contact" passHref>
                    <Button variant={pathname === "/contact" ? "secondary" : "ghost"}>
                        Contact
                    </Button>
                </Link>
            </div>
        </nav>
    )
}