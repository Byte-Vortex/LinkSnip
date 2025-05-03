import { BarChart2, Link, QrCode, Shield } from "lucide-react"

export function FeatureSection() {
  return (
    <section className="bg-muted/40 py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Key Features
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Everything you need to manage, track, and share your links
            effectively.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
          <Link className="h-12 w-12 rounded-lg bg-primary/10 text-primary p-3" />
          <h3 className="text-xl font-bold">URL Shortening</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Create short, memorable links with custom slugs or auto-generated
            ones.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
          <BarChart2 className="h-12 w-12 rounded-lg bg-primary/10 text-primary p-3" />
          <h3 className="text-xl font-bold">Detailed Analytics</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Track clicks, locations, devices, and more with our comprehensive
            dashboard.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
          <QrCode className="h-12 w-12 rounded-lg bg-primary/10 text-primary p-3" />
          <h3 className="text-xl font-bold">QR Code Generation</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Generate customizable QR codes for your shortened links.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
          <Shield className="h-12 w-12 rounded-lg bg-primary/10 text-primary p-3" />
          <h3 className="text-xl font-bold">Secure & Private</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Your data is protected with industry-standard security measures.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-12 w-12 rounded-lg bg-primary/10 text-primary p-3"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <h3 className="text-xl font-bold">User Management</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Create an account to save and manage all your shortened links.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-12 w-12 rounded-lg bg-primary/10 text-primary p-3"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <h3 className="text-xl font-bold">Admin Controls</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Powerful admin tools to manage users and monitor system performance.
          </p>
        </div>
      </div>
    </section>
  );
}
