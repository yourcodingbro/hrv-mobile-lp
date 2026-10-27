import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SectionSubtitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("text-ink-muted", className)}>{children}</h3>
}
