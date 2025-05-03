import Image from "next/image";

export function FeatureShowcase() {
  return (
    <section className="w-full py-16 bg-muted/40  ">
      <div className="container flex flex-col md:flex-row justify-between items-center px-4 lg:px-10 mx-auto">
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Powerful Analytics Dashboard
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg lg:text-base xl:text-lg">
              Gain valuable insights into your audience with our comprehensive
              analytics dashboard. Track clicks, geographic locations, devices,
              browsers, and referrers to optimize your marketing campaigns.
            </p>
          </div>
          <ul className="space-y-2">
            {[
              "Real-time click tracking",
              "Geographic location data",
              "Device and browser information",
              "Referrer tracking",
              "Exportable reports",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center">
          <div className="relative h-[400px] w-full overflow-hidden rounded-xl border bg-background shadow-lg">
            <Image
              src="/placeholder.svg"
              alt="Analytics Dashboard"
              width={600}
              height={400}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
