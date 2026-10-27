import type { ReactNode } from "react"
import { SectionSubtitle } from "@/components/shared/SectionSubtitle"
import { SectionTitle } from "@/components/shared/SectionTitle"

type SectionHeaderProps = {
  title: ReactNode
  subtitle: ReactNode
  /** Puts the h3 before the h2 in the DOM; heading levels stay the same. */
  reverse?: boolean
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export function SectionHeader({
  title,
  subtitle,
  reverse = false,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  const h2 = <SectionTitle className={titleClassName}>{title}</SectionTitle>
  const h3 = <SectionSubtitle className={subtitleClassName}>{subtitle}</SectionSubtitle>

  return (
    <div className={className}>
      {reverse ? h3 : h2}
      {reverse ? h2 : h3}
    </div>
  )
}
