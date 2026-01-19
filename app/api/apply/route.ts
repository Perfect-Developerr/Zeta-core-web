import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { discordId, age, charName, backstory, definitionMG, definitionPG, definitionVDM } = body;

        // Basic validation
        if (!discordId || !age || !charName || !backstory) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

        if (!WEBHOOK_URL) {
            console.warn("DISCORD_WEBHOOK_URL is not set. Simulating success.");
            // In dev mode without webhook, just return success to not block testing
            return NextResponse.json({ success: true, simulated: true });
        }

        // Construct Discord Embed
        const embed = {
            title: "📝 New Whitelist Application",
            color: 0x7c3aed, // Primary purple color
            fields: [
                { name: "Discord User", value: `<@${discordId}> (${discordId})`, inline: true },
                { name: "Age", value: age.toString(), inline: true },
                { name: "Character Name", value: charName, inline: true },
                { name: "Backstory", value: backstory },
                { name: "Definition: MG", value: definitionMG || "N/A" },
                { name: "Definition: PG", value: definitionPG || "N/A" },
                { name: "Definition: VDM", value: definitionVDM || "N/A" },
            ],
            footer: {
                text: "Zeta Core Web Application System",
                timestamp: new Date().toISOString()
            }
        };

        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] })
        });

        if (!response.ok) {
            throw new Error(`Discord API error: ${response.statusText}`);
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Webhook processing error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
