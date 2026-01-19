"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Twitter, Youtube, MessageCircle } from "lucide-react"

export default function CommunityPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 px-8">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h1 className="text-5xl font-bold mb-6">Join the <span className="text-primary">Conversation</span></h1>
                    <p className="text-xl text-muted-foreground mb-16">
                        Our community is the heart of Zeta Core. Connect with other players, share your stories, and get the latest updates directly from the developers.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-8 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] transition-colors cursor-pointer group">
                            <div className="flex items-center justify-between mb-4">
                                <MessageCircle className="h-8 w-8" />
                                <span className="text-sm font-bold bg-black/20 px-3 py-1 rounded-full">15,420 Online</span>
                            </div>
                            <h2 className="text-2xl font-bold text-left mb-2">Discord Server</h2>
                            <p className="text-left text-white/80">Support, events, and voice chat.</p>
                        </div>

                        <div className="p-8 rounded-xl bg-[#1DA1F2] hover:bg-[#1A91DA] transition-colors cursor-pointer">
                            <div className="flex items-center justify-between mb-4">
                                <Twitter className="h-8 w-8" />
                                <span className="text-sm font-bold bg-black/20 px-3 py-1 rounded-full">@ZetaCore</span>
                            </div>
                            <h2 className="text-2xl font-bold text-left mb-2">Twitter / X</h2>
                            <p className="text-left text-white/80">Server status and announcements.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
