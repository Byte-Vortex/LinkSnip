"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAuth } from "@/hooks/use-auth"
import { UserNav } from "@/components/user-nav"
import { Check, Link as LinkIcon } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const { user, isLoading } = useAuth()

  return (
    <header className="border-b sticky top-0 backdrop-blur-md overflow-y-hidden z-50">
      <div className="flex h-16 items-center justify-between lg:px-10 px-4 ">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
          <LinkIcon className="h-8 w-8" />
            <span className="text-xl font-bold tracking-wider">LinkSnip</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === "/"
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={`text-sm font-medium transition-colors ${
              pathname === "/features"
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium transition-colors ${
              pathname === "/pricing"
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {!isLoading && !user ? (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
              <UserNav />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
