"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Shield, Zap, Users, MonitorSmartphone, Lock, Globe } from "lucide-react"
import { useRef } from "react"

const features = [
    {
        title: "Cinematic Experience",
        description: "Immersive storytelling with studio-quality animations and sound design.",
        icon: MonitorSmartphone,
        color: "from-blue-500 to-violet-500"
    },
    {
        title: "High Performance",
        description: "Optimized core ensuring smooth gameplay even in high-density areas.",
        icon: Zap,
        color: "from-amber-400 to-orange-500"
    },
    {
        title: "Advanced Security",
        description: "Enterprise-grade anti-cheat and data protection for your account.",
        icon: Shield,
        color: "from-emerald-400 to-cyan-500"
    },
    {
        title: "Global Community",
        description: "Join thousands of players from around the world in a connected universe.",
        icon: Globe,
        color: "from-pink-500 to-rose-500"
    },
    {
        title: "Roleplay Focused",
        description: "Tools designed specifically to enhance character development and interaction.",
        icon: Users,
        color: "from-indigo-400 to-purple-500"
    },
    {
        title: "Exclusive Content",
        description: "Unique vehicles, clothing, and systems you won't find anywhere else.",
        icon: Lock,
        color: "from-fuchsia-500 to-purple-600"
    }
]

function FeatureCard({ feature, index }: { feature: any, index: number }) {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseXPos = event.clientX - rect.left
        const mouseYPos = event.clientY - rect.top

        const xPct = mouseXPos / width - 0.5
        const yPct = mouseYPos / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    function handleMouseLeave() {
        x.set(0)
        y.set(0)
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="perspective-1000"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="group relative h-full rounded-2xl border border-white/5 bg-white/5 p-8 transition-colors hover:bg-white/10 backdrop-blur-sm"
            >
                <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                        <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                </div>

                {/* Glow effect */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 blur-xl transition-opacity group-hover:opacity-20 -z-10`} />
            </motion.div>
        </motion.div>
    )
}

export function FeaturesGrid() {
    return (
        <section className="py-24 sm:py-32 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-black tracking-tighter text-white sm:text-5xl"
                    >
                        Why Choose Zeta Core
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-lg text-muted-foreground"
                    >
                        Discover the features that define the new standard of roleplay.
                    </motion.p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, i) => (
                        <FeatureCard key={feature.title} feature={feature} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
