"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
 const { theme, setTheme } = useTheme();
 const isDark = theme === "dark";

 const toggleTheme = () => {
   setTheme(isDark ? "light" : "dark");
 };

  return (
    <Button
      className="transition-transform duration-300"
      variant="none"
      size="icon"
      onClick={toggleTheme}
    >
      <Sun
        className={`h-[1.5rem] w-[1.5rem] transition-all ${
          isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute h-[1.5rem] w-[1.5rem] transition-all ${
          isDark ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
    </Button>
  )
}