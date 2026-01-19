"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ServerStatus } from "@/components/ui/server-status"

const links = [
    { href: "/", label: "Home" },
    { href: "/gameplay", label: "Gameplay" },
    { href: "/changelog", label: "Updates" },
    { href: "/rules", label: "Rules" },
    { href: "/community", label: "Community" },
]

export function Navbar() {
    const pathname = usePathname()

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-8 backdrop-blur-md bg-black/50 border-b border-white/5"
        >
            <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                ZETA <span className="text-primary">CORE</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-white",
                            pathname === link.href ? "text-white" : "text-muted-foreground"
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <div className="hidden lg:block">
                    <ServerStatus />
                </div>

                <Link href="/whitelist">
                    <Button size="sm" className="hidden sm:flex bg-primary hover:bg-primary/90">Apply Now</Button>
                </Link>
            </div>
        </motion.header>
    )
}
