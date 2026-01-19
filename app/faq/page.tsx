import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 px-8">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How do I join the server?</AccordionTrigger>
                        <AccordionContent>
                            You need to download our launcher and join our Discord server for whitelisting.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it free to play?</AccordionTrigger>
                        <AccordionContent>
                            Yes, Zeta Core is free to play. we offer optional cosmetic subscriptions.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What are the PC requirements?</AccordionTrigger>
                        <AccordionContent>
                            A modern gaming PC is recommended (GTX 1060 or better, 16GB RAM).
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
