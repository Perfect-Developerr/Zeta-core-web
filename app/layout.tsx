import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keep standard fonts for now or switch if requested
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeta Core | Next Gen Roleplay",
  description: "Experience the most immersive roleplay server. Join the revolution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-sans overflow-x-hidden",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
