import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col mx-auto md:px-10 px-4">
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
      </main>
    </div>
  )
}
