"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CalendarDays, BarChart3, User, Flame, Sun, Moon, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

const navItems = [
  { title: "Today", href: "/today", icon: Flame },
  { title: "History", href: "/history", icon: CalendarDays },
  { title: "Analytics", href: "/analytics", icon: BarChart3 },
  { title: "Profile", href: "/profile", icon: User },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader className="p-2">
        <div className="flex items-center gap-2 px-2">
          <Flame className="size-5 shrink-0 text-primary" />
          <span className="text-sm font-semibold tracking-tight group-data-[collapsible=icon]:hidden">
            NutriTrack
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    tooltip={item.title}
                    render={
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <Separator className="mb-2" />
        <div className="flex justify-center">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon-sm">
                  {theme === "dark" ? (
                    <Moon className="size-4" />
                  ) : theme === "light" ? (
                    <Sun className="size-4" />
                  ) : (
                    <Monitor className="size-4" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              }
              onClick={() =>
                setTheme(
                  theme === "dark" ? "light" : theme === "light" ? "system" : "dark"
                )
              }
            />
            <TooltipContent side="right">
              {theme === "dark"
                ? "Dark mode"
                : theme === "light"
                  ? "Light mode"
                  : "System"}
            </TooltipContent>
          </Tooltip>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}