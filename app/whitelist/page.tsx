"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, ChevronRight, Loader2, AlertCircle } from "lucide-react"

export default function WhitelistPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState("")

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError("")

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData.entries())

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (!response.ok) throw new Error('Failed to submit application')

            setIsSuccess(true)
            window.scrollTo(0, 0)
        } catch (err) {
            setError("Something went wrong. Please try again later.")
        } finally {
            setIsLoading(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center px-6">
                <div className="max-w-md text-center">
                    <div className="mx-auto w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Application Sent!</h1>
                    <p className="text-muted-foreground mb-8">
                        Your whitelist application has been successfully submitted to our staff team.
                        Please allow up to 24 hours for a response in our Discord server.
                    </p>
                    <Button asChild className="w-full">
                        <a href="/">Return Home</a>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-20 px-6">
            <div className="container mx-auto max-w-2xl">
                <div className="mb-10">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">Join the City</span>
                    <h1 className="text-4xl font-black tracking-tight mb-4">Whitelist Application</h1>
                    <p className="text-muted-foreground">
                        Please fill out this form honestly. High-quality answers improve your chances of acceptance.
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-3">
                        <AlertCircle className="w-5 h-5" />
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-12">

                    {/* OOC Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2">1. OOC Information</h2>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="discordId">Discord ID (Number)</Label>
                                <Input id="discordId" name="discordId" placeholder="e.g. 289472..." required />
                                <p className="text-xs text-muted-foreground">Enable Developer Mode in Discord to copy this.</p>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="age">Age</Label>
                                <Input id="age" name="age" type="number" placeholder="18" required min="13" />
                            </div>
                        </div>
                    </section>

                    {/* IC Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2">2. Character Details</h2>

                        <div className="space-y-2">
                            <Label htmlFor="charName">Character Name</Label>
                            <Input id="charName" name="charName" placeholder="First Last" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="backstory">Character Backstory</Label>
                            <Textarea
                                id="backstory"
                                name="backstory"
                                placeholder="Where are they from? What are their goals? (Min. 50 words)"
                                className="min-h-[150px]"
                                required
                            />
                        </div>
                    </section>

                    {/* Rules Check */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2">3. Roleplay Knowledge</h2>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="definitionMG">Define Metagaming (MG) in your own words</Label>
                                <Textarea id="definitionMG" name="definitionMG" placeholder="Using outside info..." required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="definitionPG">Define Powergaming (PG)</Label>
                                <Textarea id="definitionPG" name="definitionPG" placeholder="Forcing RP..." required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="definitionVDM">What is VDM? Give an example.</Label>
                                <Textarea id="definitionVDM" name="definitionVDM" required />
                            </div>
                        </div>
                    </section>

                    <Button type="submit" size="lg" className="w-full text-lg h-12" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            <>
                                Submit Application
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </>
                        )}
                    </Button>
                </form>
            </div>
        </main>
    )
}
