import Image from "next/image"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  /** Pass "" where the brand name is already shown next to the logo. */
  alt?: string
}

/** Circular brand logo; size it with `size-*` classes. */
export function Logo({ className, alt = `${site.name} logó` }: LogoProps) {
  return (
    <span className={cn("relative block size-10 shrink-0 overflow-hidden rounded-full bg-black", className)}>
      {/* 78% scale keeps the whole 936×743 logo inside the circle (its diagonal fits the diameter), so nothing is clipped. */}
      {/* shortcut: one `sizes` for every placement (largest is 180px); pass it as a prop if a much bigger logo is added. */}
      <Image src="/logo.jpg" alt={alt} fill sizes="180px" className="scale-75 object-contain" />
    </span>
  )
}
