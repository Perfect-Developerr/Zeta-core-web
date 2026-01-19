import { Hero } from "@/components/features/hero";
import { FeaturesGrid } from "@/components/features/features-grid";
import { ScreenshotsShowcase } from "@/components/features/screenshots-showcase";
import { SocialProof } from "@/components/features/social-proof";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <FeaturesGrid />
      <ScreenshotsShowcase />
      <SocialProof />
      <Footer />
    </main>
  );
}
