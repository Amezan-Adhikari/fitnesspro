"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Flame, CalendarDays, BarChart3, User } from "lucide-react"
import { cn } from "cn"

const navItems = [
  {
    title: "Today",
    href: "/today",
    icon: Flame,
  },
  {
    title: "History",
    href: "/history",
    icon: CalendarDays,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur-lg md:hidden">
      <div className="flex items-center justify-around px-2 py-1.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "size-5 transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              />
              <span>{item.title}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
