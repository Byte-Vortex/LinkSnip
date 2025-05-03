import { FeatureHighlights } from "@/components/feature-highlights";
import { FeatureComparison } from "@/components/feature-comparison";
import { FeatureShowcase } from "@/components/feature-showcase";
import { FeatureCTA } from "@/components/feature-cta";

export const metadata = {
  title: "Features - LinkSnip URL Shortener",
  description: "Explore the powerful features of LinkSnip URL shortener",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <FeatureHighlights />
        <FeatureShowcase />
        <FeatureComparison />
        <FeatureCTA />
      </main>
    </div>
  );
}
