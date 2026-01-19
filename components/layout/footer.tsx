import { Github, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Zeta Core. All rights reserved.
                </p>

                <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="/data-deletion" className="hover:text-white transition-colors">Data Deletion</Link>
                    <Link href="/rules" className="hover:text-white transition-colors">Rules</Link>
                    <Link href="/team" className="hover:text-white transition-colors">Staff</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-white transition-colors">Contact</Link>
                </nav>

                <div className="flex gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                        <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                        <Youtube className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
