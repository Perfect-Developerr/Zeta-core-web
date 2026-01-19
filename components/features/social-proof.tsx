"use client"

import { motion } from "framer-motion"
import { Users, Server, Clock } from "lucide-react"

const stats = [
    { label: "Active Players", value: "12,500+", icon: Users },
    { label: "Uptime", value: "99.9%", icon: Server },
    { label: "Hours Played", value: "2M+", icon: Clock },
]

export function SocialProof() {
    return (
        <section className="py-24 relative overflow-hidden bg-white/5 border-y border-white/5">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center justify-center p-6"
                        >
                            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <stat.icon className="h-8 w-8" />
                            </div>
                            <div className="text-4xl font-black tracking-tight text-white mb-2">{stat.value}</div>
                            <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold text-white mb-8">Trusted by Top Creators</h3>
                    <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                        {/* Placeholders for partner logos */}
                        <div className="h-12 w-32 bg-white/10 rounded"></div>
                        <div className="h-12 w-32 bg-white/10 rounded"></div>
                        <div className="h-12 w-32 bg-white/10 rounded"></div>
                        <div className="h-12 w-32 bg-white/10 rounded"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
