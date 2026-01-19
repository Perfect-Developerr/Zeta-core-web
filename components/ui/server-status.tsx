"use client";

import { useEffect, useState } from "react";
import { Users, Wifi, WifiOff } from "lucide-react";

interface ServerStatusData {
    online: boolean;
    players: number;
    maxPlayers: number;
}

export function ServerStatus() {
    const [status, setStatus] = useState<ServerStatusData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const res = await fetch("/api/status");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setStatus(data);
            } catch (error) {
                console.error("Error fetching status:", error);
                setStatus({ online: false, players: 0, maxPlayers: 0 });
            } finally {
                setLoading(false);
            }
        };

        fetchStatus();
        // Poll every 60 seconds
        const interval = setInterval(fetchStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-white/5 backdrop-blur-sm animate-pulse">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                <div className="h-4 w-16 bg-muted-foreground/20 rounded" />
            </div>
        );
    }

    if (!status?.online) {
        return (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 backdrop-blur-sm text-destructive-foreground">
                <WifiOff size={14} className="text-destructive" />
                <span className="text-sm font-medium">Offline</span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-secondary/50 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-white">Online</span>
            </div>
            <div className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-1.5 text-muted-foreground">
                <Users size={14} />
                <span className="text-sm font-mono tracking-tight text-white/90">
                    {status.players}
                    <span className="text-muted-foreground/60 ml-0.5">/</span>
                    {status.maxPlayers || "?"}
                </span>
            </div>
        </div>
    );
}
