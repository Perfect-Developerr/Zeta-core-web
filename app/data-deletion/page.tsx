"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check, Mail, MessageSquare } from "lucide-react"

export default function DataDeletionPage() {
    const [copied, setCopied] = useState(false)

    const deletionTemplate = `Subject: Data Deletion Request - [Insert Username]

To the Zeta Core Support Team,

I am writing to formally request the deletion of my account and all associated personal data from your servers, in accordance with applicable privacy laws.

My Account Details:
- Discord ID: [Insert Discord ID]
- In-Game Name: [Insert In-Game Name] (if applicable)

Please confirm once this action has been completed.

Sincerely,
[Your Name]`

    const handleCopy = () => {
        navigator.clipboard.writeText(deletionTemplate)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
            <div className="container mx-auto max-w-3xl">
                <div className="mb-12">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">Legality</span>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                        Data Deletion <span className="text-muted-foreground">Request</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        At Zeta Core, we value your privacy and your right to control your personal data.
                        If you wish to remove your account and all associated information permanently from our systems,
                        please follow the procedure below.
                    </p>
                </div>

                <div className="grid gap-8">
                    {/* Method 1: Email */}
                    <div className="p-6 rounded-2xl bg-secondary/30 border border-white/5 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold">Option 1: Email Support</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Send an email to our support team. We typically process these requests within 48-72 hours.
                        </p>
                        <div className="bg-black/40 p-4 rounded-lg font-mono text-sm text-primary">
                            support@zeta-core.com (Placeholder)
                        </div>
                    </div>

                    {/* Method 2: Discord */}
                    <div className="p-6 rounded-2xl bg-secondary/30 border border-white/5 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold">Option 2: Discord Ticket</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            Open a ticket in our main Discord server under the <span className="text-white font-medium">#support-tickets</span> channel.
                            Select "Account Management" as the category.
                        </p>
                    </div>

                    {/* Template */}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Request Template</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            You can use the following template for your email or ticket.
                            Click the button below to copy it to your clipboard.
                        </p>

                        <div className="relative group">
                            <pre className="p-6 rounded-xl bg-secondary/50 border border-white/10 overflow-x-auto text-sm font-mono text-muted-foreground whitespace-pre-wrap">
                                {deletionTemplate}
                            </pre>
                            <Button
                                onClick={handleCopy}
                                size="sm"
                                className="absolute top-4 right-4 bg-primary text-white hover:bg-primary/90"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4 mr-2" />
                                        Copied!
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4 mr-2" />
                                        Copy Template
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
