import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("font-heading text-heading text-[42px] font-extrabold tracking-[-1.5px]", className)}>
      {children}
    </h2>
  )
}
