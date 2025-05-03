"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/use-auth"
import Link from "next/link"
import { LogOutIcon, LayoutDashboardIcon, Settings } from "lucide-react"

export function UserNav() {
  const { user, signOut } = useAuth()

  if (!user) return null

  const initials = user.email ? user.email.charAt(0).toUpperCase() : "U"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="border">{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit" align="end" forceMount>
        <DropdownMenuLabel className="font-normal text-center">
          <p className="text-sm font-medium leading-none">{user.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/dashboard">
            <DropdownMenuItem><LayoutDashboardIcon className="mr-3"/> Dashboard</DropdownMenuItem>
          </Link>
          <Link href="/dashboard/settings">
            <DropdownMenuItem><Settings className="mr-3"/> Settings</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}><LogOutIcon className="mr-3"/> Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
