import { BarChart2, Link, QrCode, Shield, Zap, Globe } from "lucide-react";

export function FeatureHighlights() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Powerful Features for Your Links
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              LinkSnip provides all the tools you need to create, manage, and
              track your shortened URLs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
            <div className="rounded-full bg-primary/10 p-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Fast URL Shortening</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Create short, memorable links in seconds with our lightning-fast
              shortening engine.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
            <div className="rounded-full bg-primary/10 p-4">
              <Link className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Custom Slugs</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Create branded, custom URLs that are easy to remember and share
              with your audience.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
            <div className="rounded-full bg-primary/10 p-4">
              <BarChart2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Detailed Analytics</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Track clicks, locations, devices, and more with our comprehensive
              analytics dashboard.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
            <div className="rounded-full bg-primary/10 p-4">
              <QrCode className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">QR Code Generation</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Generate customizable QR codes for your shortened links to use in
              print and digital media.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
            <div className="rounded-full bg-primary/10 p-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Secure & Private</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Your data is protected with industry-standard security measures
              and privacy controls.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
            <div className="rounded-full bg-primary/10 p-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Global CDN</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Lightning-fast redirects worldwide with our global content
              delivery network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
