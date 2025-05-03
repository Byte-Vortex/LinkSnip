import { PricingPlans } from "@/components/pricing-plans";
import { PricingFAQ } from "@/components/pricing-faq";
import { PricingCTA } from "@/components/pricing-cta";

export const metadata = {
  title: "Pricing - LinkSnip URL Shortener",
  description: "Choose the perfect plan for your URL shortening needs",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <PricingPlans />
        <PricingFAQ />
        <PricingCTA />
      </main>
    </div>
  );
}
