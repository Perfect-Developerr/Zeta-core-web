"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "./hero-background"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <HeroBackground />

            <div className="container relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6"
                >
                    <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary border border-primary/20 rounded-full bg-primary/10 backdrop-blur-sm">
                        Next Gen Roleplay
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 uppercase"
                >
                    Zeta <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Core</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10"
                >
                    Experience the most immersive roleplay server ever created.
                    Advanced mechanics, cinematic storytelling, and a thriving community.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" className="h-12 px-8 text-md group">
                        <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                        Download Wrapper
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-md group border-primary/20 hover:bg-primary/10">
                        Gameplay Trailer
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1 h-1 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}
