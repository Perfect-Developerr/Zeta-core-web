"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import { Monitor, Smartphone, Tablet } from "lucide-react"

const screenshots = [
    {
        src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
        alt: "Character Customization",
        caption: "The most robust character editor."
    },
    {
        src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        alt: "Open World",
        caption: "A massive city to explore."
    },
    {
        src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop",
        alt: "Racing Events",
        caption: "Adrenaline fueled street racing."
    },
    {
        src: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop",
        alt: "Night Life",
        caption: "Clubs, casinos, and underground parties."
    },
    {
        src: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2765&auto=format&fit=crop",
        alt: "Tactical Gameplay",
        caption: "Advanced police and criminal systems."
    }
]

export function ScreenshotsShowcase() {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"])

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-10 z-10 max-w-md">
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">
                        Capture the <span className="text-primary">Moment</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Every frame is a masterpiece. Experience visuals that push the boundaries of what's possible in a browser-based roleplay engine.
                    </p>
                </div>

                <motion.div style={{ x }} className="flex gap-10 pl-[40vw]">
                    {screenshots.map((shot, i) => (
                        <div key={i} className="group relative h-[60vh] w-[80vh] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${shot.src})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{shot.alt}</h3>
                                <p className="text-gray-300">{shot.caption}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
