import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UrlShortenerForm } from "@/components/url-shortener-form"

export function HeroSection() {
  return (
    <section className="flex flex-col py-12 md:px-10 px-4 gap-5">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Shorten, Share, and Track Your Links
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Create shortened URLs with custom slugs, QR codes, and detailed
            analytics to track your link performance.
          </p>
        </div>
        <div className="w-full max-w-md space-y-2">
          <UrlShortenerForm />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
          <Link href="/features">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
