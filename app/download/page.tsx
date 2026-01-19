"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Monitor, Smartphone } from "lucide-react"

export default function DownloadPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center z-10 p-8"
            >
                <h1 className="text-6xl font-black mb-8">Start Your <span className="text-primary">Legacy</span></h1>
                <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
                    Join thousands of players in the most advanced roleplay universe.
                    Select your platform below.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button size="lg" className="h-20 px-10 text-lg flex flex-col gap-1 items-start">
                        <div className="flex items-center gap-2 font-bold">
                            <Monitor className="h-5 w-5" /> PC Client
                        </div>
                        <span className="text-xs font-normal opacity-80">Windows 10/11 (Launch Options)</span>
                    </Button>

                    <Button size="lg" variant="secondary" className="h-20 px-10 text-lg flex flex-col gap-1 items-start">
                        <div className="flex items-center gap-2 font-bold">
                            <Smartphone className="h-5 w-5" /> Mobile Companion
                        </div>
                        <span className="text-xs font-normal opacity-80">Android & iOS (App Store)</span>
                    </Button>
                </div>

                <p className="mt-8 text-sm text-muted-foreground">
                    Version 2.0.4 | Last Updated: Today
                </p>
            </motion.div>
        </div>
    )
}
