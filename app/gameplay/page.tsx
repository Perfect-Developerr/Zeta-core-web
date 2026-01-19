"use client"

import { motion } from "framer-motion"
import { Play, Maximize2, Crosshair, Users } from "lucide-react"

export default function GameplayPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-20">
            <section className="container py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-black uppercase tracking-tighter mb-6">
                        Gameplay <span className="text-primary">Systems</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover the mechanics that power the Zeta Core experience. From economy to combat, everything is built for immersion.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "Dynamic Economy", icon: Maximize2, description: "Player-driven markets and evolving financial systems." },
                        { title: "Combat 2.0", icon: Crosshair, description: "Rewritten ballistics and damage models for realistic engagements." },
                        { title: "Factions", icon: Users, description: "Create organizations, claim territory, and fight for control." }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <feature.icon className="h-10 w-10 text-primary mb-4" />
                            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}
