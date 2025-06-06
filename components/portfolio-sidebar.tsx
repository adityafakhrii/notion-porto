"use client"

import {
  Home,
  User,
  Briefcase,
  FileText,
  MessageSquare,
  Moon,
  Sun,
  Menu,
  FileDown,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  GraduationCap,
  Users,
  Mic,
  Lightbulb,
  DollarSign,
} from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { useEffect, useState } from "react"

export function PortfolioSidebar() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const { isMobile } = useSidebar()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Ensure theme toggle only renders client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const currentTheme = mounted ? resolvedTheme : "light"

  return (
    <>
      {isMobile && (
        <div className="fixed top-4 left-4 z-50">
          <SidebarTrigger>
            <Menu className="h-5 w-5" />
          </SidebarTrigger>
        </div>
      )}
      <Sidebar>
        <SidebarHeader className="border-b pb-4">
          <div className="flex flex-col items-center space-y-2 px-2 pt-4">
            <Avatar className="h-20 w-20">
              <AvatarImage alt="Aditya Fakhri Riansyah" />
              <AvatarFallback>AFR</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h1 className="text-xl font-bold">Aditya Fakhri Riansyah</h1>
              <p className="text-sm text-muted-foreground">AI-Driven Web Developer</p>
              <p className="text-sm text-muted-foreground">Mentor • Tech Content Creator</p>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu className="mx-6 my-4">
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/"}>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/about"}>
                <Link href="/about">
                  <User className="mr-2 h-4 w-4" />
                  <span>About</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/skills"}>
                <Link href="/skills">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  <span>Skills</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/services"}>
                <Link href="/services">
                  <DollarSign className="mr-2 h-4 w-4" />
                  <span>Services & Rates</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname.startsWith("/projects")}>
                <Link href="/projects">
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>Projects</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/experience"}>
                <Link href="/experience">
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>Experience</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/education"}>
                <Link href="/education">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  <span>Education</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/community"}>
                <Link href="/community">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Community</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/speaking"}>
                <Link href="/speaking">
                  <Mic className="mr-2 h-4 w-4" />
                  <span>Speaking</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname.startsWith("/blog")}>
                <Link href="/blog">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Blog</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/contact"}>
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Contact</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t pt-4">
          <div className="flex flex-col space-y-4 px-4">
            <div className="flex justify-center space-x-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/adityafakhrii" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com/in/adityafakhrii/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://instagram.com/adityafakhrii" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://twitter.com/adityafakhrii" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">X</span>
                </Link>
              </Button>
            </div>
            <Button variant="outline" className="w-full" asChild>
              <Link
                href="https://drive.google.com/file/d/1w9zr9Rj0tOd_ubBOP9SaWIFdj7tYP6-9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
            {mounted && (
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="w-full flex items-center justify-center gap-2"
              >
                {currentTheme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" />
                    <span>Dark Mode</span>
                  </>
                )}
              </Button>
            )}
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}
