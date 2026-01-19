"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter } from "lucide-react"

// Mock Data
const staff = [
    {
        name: "Alex 'Zero'",
        role: "Founder & Lead Dev",
        bio: "Building the future of roleplay since 2020. Loves optimization and coffee.",
        color: "bg-red-500/10 text-red-500 border-red-500/20",
        avatar: "https://github.com/shadcn.png" // Placeholder
    },
    {
        name: "Sarah 'Valkyrie'",
        role: "Community Manager",
        bio: "Ensuring everyone has a voice. Contact me for partnership inquiries.",
        color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
        avatar: "https://github.com/shadcn.png" // Placeholder
    },
    {
        name: "Mike 'Tank'",
        role: "Head Admin",
        bio: "Fair play is my priority. Keeping the streets clean of rule-breakers.",
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        avatar: "https://github.com/shadcn.png" // Placeholder
    },
    {
        name: "Elena 'Doc'",
        role: "Head of EMS",
        bio: "Reviving players and organizing medical RP scenarios.",
        color: "bg-green-500/10 text-green-500 border-green-500/20",
        avatar: "https://github.com/shadcn.png" // Placeholder
    },
]

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">The Team</span>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                        Meet the <span className="text-muted-foreground">Staff</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        The dedicated individuals working behind the scenes to make Zeta Core possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {staff.map((member, index) => (
                        <Card key={index} className="bg-secondary/20 border-white/5 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-colors group">
                            <div className="h-24 bg-gradient-to-br from-white/5 to-white/0 group-hover:from-primary/20 transition-all" />
                            <CardHeader className="-mt-12 relative flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full border-4 border-black overflow-hidden bg-muted">
                                    {/* Use a real Next/Image here ideally, standardimg tag for now */}
                                    <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
                                <Badge variant="outline" className={`mt-2 ${member.color}`}>
                                    {member.role}
                                </Badge>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-sm text-muted-foreground mb-6">
                                    {member.bio}
                                </p>
                                <div className="flex justify-center gap-3">
                                    <button className="p-2 rounded-full hover:bg-white/10 transition">
                                        <Github className="w-4 h-4 text-muted-foreground hover:text-white" />
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-white/10 transition">
                                        <Twitter className="w-4 h-4 text-muted-foreground hover:text-white" />
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
}
