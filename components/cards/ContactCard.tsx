import type { ComponentType, ReactNode, SVGProps } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ContactCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  /** Text or a link; a link inside is stretched so the whole card is clickable, like the original. */
  content: ReactNode;
  className?: string;
};

export function ContactCard({
  icon: Icon,
  title,
  content,
  className,
}: ContactCardProps) {
  return (
    <Card
      className={cn(
        "group relative h-full min-h-56 items-center justify-center gap-0 rounded-tile border border-line bg-page px-6 py-10 sm:px-8 text-base text-ink ring-0 transition-all duration-300 ease-out-expo hover:-translate-y-1.5 hover:border-black/15 hover:bg-surface-hover hover:shadow-xl has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring dark:bg-graphite/80 dark:hover:border-white/20",
        className
      )}
    >
      <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform duration-300 group-hover:scale-110">
        <Icon aria-hidden="true" className="size-7" />
      </div>
      <h3 className="mb-3 text-label font-extrabold tracking-widest text-ink-muted uppercase dark:text-ink">
        {title}
      </h3>
      <p className="max-w-full min-w-0 font-heading text-2xl font-extrabold wrap-anywhere text-ink truncate transition-colors duration-300 group-hover:text-ink-muted [&_a]:outline-none [&_a]:after:absolute [&_a]:after:inset-0">
        {content}
      </p>
    </Card>
  );
}
