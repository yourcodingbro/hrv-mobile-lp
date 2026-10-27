"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navItems } from "@/data/navigation"
import { cn } from "@/lib/utils"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const bar = "h-0.5 w-6 rounded-[2px] bg-ink transition-all duration-400 ease-out-expo"

  return (
    // Non-modal: the original is a dropdown panel, and no scroll lock keeps hash links working.
    <Sheet open={open} onOpenChange={setOpen} modal={false}>
      <SheetTrigger
        aria-label="Menü"
        className="relative z-[1001] hidden cursor-pointer flex-col gap-[5px] rounded-sm p-1 max-[800px]:flex focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none"
      >
        <span className={cn(bar, open && "translate-y-[7px] rotate-45")} />
        <span className={cn(bar, open && "opacity-0")} />
        <span className={cn(bar, open && "-translate-y-[7px] -rotate-45")} />
      </SheetTrigger>
      <SheetContent
        side="top"
        showCloseButton={false}
        aria-label="Menü"
        overlayClassName="bg-transparent backdrop-blur-none supports-backdrop-filter:backdrop-blur-none"
        className="top-[96px]! inset-x-[4%]! z-[999] gap-4 rounded-3xl border border-line bg-white/98 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.15)] data-[side=top]:border-b data-[side=top]:data-ending-style:-translate-y-2.5 data-[side=top]:data-starting-style:-translate-y-2.5 dark:bg-nav-dark"
      >
        <nav aria-label="Mobil navigáció">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-line pb-4 text-center last:border-b-0 last:pb-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md p-2.5 text-base font-bold tracking-[1px] text-ink-muted uppercase transition-colors hover:text-ink focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none"
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
