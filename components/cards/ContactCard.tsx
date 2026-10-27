import type { ComponentType, ReactNode, SVGProps } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type ContactCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  /** Text or a link; a link inside is stretched so the whole card is clickable, like the original. */
  content: ReactNode
  className?: string
}

export function ContactCard({ icon: Icon, title, content, className }: ContactCardProps) {
  return (
    <Card
      className={cn(
        "group relative items-center gap-0 rounded-[20px] border border-line bg-page p-10 text-base leading-[normal] text-ink ring-0 transition-all duration-400 ease-out-expo hover:-translate-y-1.5 hover:border-black/15 hover:bg-surface-hover hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] has-[a:focus-visible]:ring-3 has-[a:focus-visible]:ring-ring dark:bg-card-dark dark:hover:border-white/20",
        className,
      )}
    >
      <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-white text-black shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 group-hover:scale-110">
        <Icon aria-hidden="true" className="size-7" />
      </div>
      <h3 className="mb-3 text-[13px] font-extrabold tracking-[1px] text-ink-muted uppercase dark:text-ink">{title}</h3>
      <p className="font-heading text-2xl leading-[normal] font-extrabold text-ink transition-colors duration-400 group-hover:text-ink-muted [&_a]:outline-none [&_a]:after:absolute [&_a]:after:inset-0 [&_a]:after:content-['']">
        {content}
      </p>
    </Card>
  )
}
