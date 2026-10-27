import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("font-heading text-4xl text-heading font-extrabold tracking-tight", className)}>
      {children}
    </h2>
  )
}
