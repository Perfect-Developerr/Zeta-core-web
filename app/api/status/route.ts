import { NextResponse } from 'next/server';

export async function GET() {
  const SERVER_IP = process.env.NEXT_PUBLIC_SERVER_IP;
  // If no server IP is set, return a mock "offline/dev" status or a demo status
  if (!SERVER_IP) {
    return NextResponse.json({
      online: true,
      players: 128,
      maxPlayers: 2048,
      isMock: true
    });
  }

  try {
    // Attempt to fetch from FiveM server info endpoint
    const response = await fetch(`http://${SERVER_IP}/players.json`, {
      next: { revalidate: 30 }, // Cache for 30 seconds
      signal: AbortSignal.timeout(3000) // 3s timeout
    });

    if (!response.ok) {
      throw new Error('Server unreachable');
    }

    const players = await response.json();
    // Some servers return an array of players, others might returning object details
    // Standard FiveM players.json is an array.
    const playerCount = Array.isArray(players) ? players.length : 0;
    
    // Attempt to get max players from dynamic.json or dynamic info if possible, 
    // but for now we'll hardcode or guess, or fetch 'info.json'
    // Let's try to fetch info.json for maxClients
    let maxPlayers = 0;
    try {
        const infoResponse = await fetch(`http://${SERVER_IP}/info.json`, { signal: AbortSignal.timeout(3000) });
        if (infoResponse.ok) {
            const info = await infoResponse.json();
            maxPlayers = info.vars.sv_maxClients || 0;
        }
    } catch (e) {
        // failed to get info, ignore
    }

    return NextResponse.json({
      online: true,
      players: playerCount,
      maxPlayers: maxPlayers || 0
    });

  } catch (error) {
    console.error("Failed to fetch server status:", error);
    return NextResponse.json({
      online: false,
      players: 0,
      maxPlayers: 0
    });
  }
}
