"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, LinkIcon, QrCode, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"

export function DashboardNav() {
  const pathname = usePathname()
  const { user } = useAuth()

  // Check if user has admin role
  const isAdmin = user?.user_metadata?.role === "admin"

  const navItems = [
    {
      title: "URLs",
      href: "/dashboard",
      icon: LinkIcon,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart2,
    },
    {
      title: "QR Codes",
      href: "/dashboard/qr-codes",
      icon: QrCode,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  // Add admin section if user is admin
  if (isAdmin) {
    navItems.push({
      title: "Admin",
      href: "/dashboard/admin",
      icon: Users,
    })
  }

  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className={cn("justify-start", pathname === item.href && "bg-muted font-medium")}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
