"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, BookOpen, Skull, AlertOctagon } from "lucide-react"

export default function RulesPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">Regulations</span>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                        Server <span className="text-muted-foreground">Rules</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ignorance of the rules is not an excuse. Please read carefully to ensure the best roleplay experience for everyone.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* General Rules */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">1. General Community Rules</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1-1" className="border-white/10">
                                <AccordionTrigger className="hover:text-primary">1.1 Respect & Harassment</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    We have zero tolerance for toxicity. Racism, sexism, homophobia, or any form of harassment will result in an immediate permanent ban. Treat all players and staff with respect.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-1-2" className="border-white/10">
                                <AccordionTrigger className="hover:text-primary">1.2 Bugs & Exploits</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Exploiting in-game bugs for personal gain is strictly prohibited. If you find a bug, report it immediately. Duping items or money will lead to a wipe and ban.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* RP Basics */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpen className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">2. Roleplay Basics</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-2-1" className="border-white/10">
                                <AccordionTrigger className="hover:text-primary">2.1 Powergaming (PG)</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Forcing actions on others without giving them a chance to respond, or performing unrealistic actions (e.g., talking while dead, driving a car off a cliff and driving away).
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2-2" className="border-white/10">
                                <AccordionTrigger className="hover:text-primary">2.2 Metagaming (MG)</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Using information obtained outside of the game (Discord, Streams, OOC chat) to influence your in-game character's actions. Your character only knows what they have seen or heard in the city.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2-3" className="border-white/10">
                                <AccordionTrigger className="hover:text-primary">2.3 Deathmatch (DM / RDM / VDM)</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Killing or attacking another player without a valid roleplay reason is strictly forbidden.
                                    <br /><strong>VDM (Vehicle Deathmatch):</strong> Using your vehicle as a weapon is not allowed unless it is a life-or-death situation.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2-4" className="border-white/10">
                                <AccordionTrigger className="hover:text-primary">2.4 New Life Rule (NLR)</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    If you are incapacitated and respawn via EMS or timer, you forget the events leading up to your death. You cannot return to the scene of your death for 15 minutes.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* Illegal */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Skull className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">3. Illegal Activities</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3-1" className="border-white/10">
                                <AccordionTrigger className="hover:text-primary">3.1 Robberies</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    - Max 4 criminals for store robberies.
                                    <br />- Max 6 criminals for bank heists.
                                    <br />- You must value the life of hostages and police officers (FearRP).
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3-2" className="border-white/10">
                                <AccordionTrigger className="hover:text-primary">3.2 Gang Limits</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Gangs are limited to 15 members total. Gang wars must be initiated with valid RP reasons and approved by staff for large-scale conflicts.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* Safe Zones */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <AlertOctagon className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">4. Safe Zones</h2>
                        </div>
                        <div className="p-4 rounded-lg bg-secondary/30 border border-white/5 text-sm text-muted-foreground">
                            <p className="mb-2">The following areas are Green Zones. No crime, fighting, or stealing is allowed:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>Police Departments (LSPD, BCSO)</li>
                                <li>Hospitals & EMS Stations</li>
                                <li>Job Centers & City Hall</li>
                                <li>Clothing Stores & Barber Shops</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}
