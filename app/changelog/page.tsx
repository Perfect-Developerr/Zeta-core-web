"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, GitMerge, Settings, Star, Zap } from "lucide-react"

// Mock Data
const updates = [
    {
        version: "v2.1.0",
        date: "January 18, 2026",
        title: "New Economy & Dealerships",
        type: "Major Update",
        changes: [
            { type: "new", text: "Added Premium Dealership in Vinewood." },
            { type: "fix", text: "Fixed inventory duplication glitch." },
            { type: "improvement", text: "Rebalanced salaries for EMS and Police." },
            { type: "new", text: "Introduced advanced fishing system." },
        ]
    },
    {
        version: "v2.0.5",
        date: "January 10, 2026",
        title: "Performance & Optimizations",
        type: "Patch",
        changes: [
            { type: "fix", text: "Resolved texture loss in Sandy Shores." },
            { type: "improvement", text: "Reduced client-side script usage by 20%." },
        ]
    },
    {
        version: "v2.0.0",
        date: "December 25, 2025",
        title: "Zeta Core Reborn",
        type: "Major Update",
        changes: [
            { type: "new", text: "Complete wipe and database reset." },
            { type: "new", text: "New Housing System with custom interiors." },
            { type: "new", text: "Implemented multi-character support." },
        ]
    }
]

export default function ChangelogPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">Updates</span>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                        Patch <span className="text-muted-foreground">Notes</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Stay up to date with the latest changes, features, and fixes arriving in Zeta Core.
                    </p>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                    {updates.map((update, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            {/* Icon/Dot on Timeline */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                {update.type === "Major Update" ? (
                                    <Star className="w-5 h-5 text-primary" />
                                ) : (
                                    <GitMerge className="w-5 h-5 text-muted-foreground" />
                                )}
                            </div>

                            {/* Card Content */}
                            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-secondary/20 border-white/5 backdrop-blur-sm p-0">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant={update.type === "Major Update" ? "default" : "secondary"}>
                                            {update.type}
                                        </Badge>
                                        <div className="flex items-center text-xs text-muted-foreground">
                                            <CalendarDays className="mr-1 h-3 w-3" />
                                            {update.date}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl text-white">{update.title} <span className="text-primary text-sm font-mono ml-2">{update.version}</span></CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {update.changes.map((change, cIndex) => (
                                            <li key={cIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="mt-1">
                                                    {change.type === 'new' && <Badge variant="outline" className="text-[10px] h-4 px-1 bg-green-500/10 text-green-500 border-green-500/20">NEW</Badge>}
                                                    {change.type === 'fix' && <Badge variant="outline" className="text-[10px] h-4 px-1 bg-red-500/10 text-red-500 border-red-500/20">FIX</Badge>}
                                                    {change.type === 'improvement' && <Badge variant="outline" className="text-[10px] h-4 px-1 bg-blue-500/10 text-blue-500 border-blue-500/20">IMP</Badge>}
                                                </span>
                                                <span>{change.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
