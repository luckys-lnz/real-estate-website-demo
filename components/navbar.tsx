"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Building2, Menu, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "properties", label: "Listings" },
  { id: "trust", label: "Buyer Protection" },
  { id: "contact", label: "Contact" },
]

interface NavbarProps {
  isScrolled: boolean
  onPrimaryAction: () => void
}

export default function Navbar({ isScrolled, onPrimaryAction }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sectionElements = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    if (sectionElements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-3 shadow-lg transition-all duration-300 md:px-5",
          isScrolled
            ? "border-border/70 bg-background/88 text-foreground backdrop-blur-xl"
            : "border-white/15 bg-black/24 text-white backdrop-blur-md",
        )}
      >
        <a href="#home" className="flex items-center gap-3 rounded-full px-2 py-1">
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border transition-colors",
              isScrolled ? "border-primary/20 bg-primary/10 text-primary" : "border-white/20 bg-white/10 text-white",
            )}
          >
            <Building2 className="h-5 w-5" />
          </span>
          <div className="leading-none">
            <p className="text-sm font-semibold uppercase tracking-[0.22em]">PrimeEdge</p>
            <p className={cn("mt-1 text-xs", isScrolled ? "text-muted-foreground" : "text-white/65")}>
              Accra Real Estate
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/72 hover:text-white",
                  isActive &&
                    (isScrolled
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-white text-foreground shadow-sm"),
                )}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            size="sm"
            className={cn(
              "rounded-full px-5",
              isScrolled
                ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                : "bg-white text-foreground hover:bg-white/90",
            )}
            onClick={onPrimaryAction}
          >
            <MessageCircle className="h-4 w-4" />
            Book Viewing
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full md:hidden",
                isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10 hover:text-white",
              )}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l border-border/60 bg-background/95">
            <SheetHeader className="pt-10">
              <SheetTitle className="flex items-center gap-2 text-left">
                <Building2 className="h-5 w-5 text-primary" />
                PrimeEdge Realty
              </SheetTitle>
              <SheetDescription className="text-left">
                Jump to listings fast and start a viewing request in a few seconds.
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-1 flex-col px-4 pb-6">
              <div className="space-y-2">
                {navigationItems.map((item) => {
                  const isActive = activeSection === item.id

                  return (
                    <SheetClose key={item.id} asChild>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setActiveSection(item.id)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl border px-4 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "border-primary/20 bg-primary/10 text-primary"
                            : "border-border/60 text-foreground hover:bg-muted/70",
                        )}
                      >
                        {item.label}
                        <span className="text-sm text-muted-foreground">#{item.id}</span>
                      </a>
                    </SheetClose>
                  )
                })}
              </div>

              <div className="mt-6 rounded-3xl border border-border/60 bg-muted/40 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Need help?</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  Start with a short form and continue to WhatsApp with your viewing request already prepared.
                </p>
                <SheetClose asChild>
                  <Button
                    className="mt-4 w-full rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    onClick={onPrimaryAction}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book Viewing
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
