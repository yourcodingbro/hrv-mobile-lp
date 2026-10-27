"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navItems } from "@/data/navigation"
import { cn } from "@/lib/utils"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const bar = "h-0.5 w-6 rounded-full bg-ink transition-all duration-300 ease-out-expo"

  return (
    // Non-modal: the original is a dropdown panel, and no scroll lock keeps hash links working.
    <Sheet open={open} onOpenChange={setOpen} modal={false}>
      <SheetTrigger
        aria-label="Menü"
        className="hidden cursor-pointer flex-col gap-1 rounded-sm p-1 max-compact:flex focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <span className={cn(bar, open && "translate-y-1.5 rotate-45")} />
        <span className={cn(bar, open && "opacity-0")} />
        <span className={cn(bar, open && "-translate-y-1.5 -rotate-45")} />
      </SheetTrigger>
      <SheetContent
        side="top"
        showCloseButton={false}
        aria-label="Menü"
        overlayClassName="bg-transparent z-30 backdrop-blur-none supports-backdrop-filter:backdrop-blur-none"
        className="top-24! inset-x-4! z-40 gap-4 rounded-3xl border border-line bg-white/95 p-6 shadow-xl data-[side=top]:border-b data-[side=top]:data-ending-style:-translate-y-2.5 data-[side=top]:data-starting-style:-translate-y-2.5 dark:bg-page/95"
      >
        <nav aria-label="Mobil navigáció">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-line pb-4 text-center last:border-b-0 last:pb-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md p-2.5 text-base font-bold tracking-wider text-ink-muted uppercase transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
