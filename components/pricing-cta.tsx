import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PricingCTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our support team is here to help you with any questions you may
              have about our plans and features.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg">Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
