import { CategoryCard } from "@/components/cards/CategoryCard"
import { Tilt } from "@/components/cards/Tilt"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { categories } from "@/data/categories"
import { cn } from "@/lib/utils"

export function ProductsSection() {
  return (
    <section id="termekek" className="relative z-20 px-gutter py-24">
      <Reveal className="mb-16 text-center">
        <SectionHeader
          reverse
          title="Főbb termékkategóriáink"
          subtitle="Prémium Portfólió"
          subtitleClassName="mb-3 text-xs font-extrabold tracking-widest uppercase"
        />
      </Reveal>
      <div className="mx-auto grid max-w-content grid-cols-2 gap-6 max-lg:grid-cols-1">
        {categories.map(({ wide, ...card }, i) => (
          // The original's tilt transform overrides its reveal translate, so cards only fade in.
          <Reveal key={card.title} y={0} delay={(i + 1) * 0.1} className={cn(wide && "col-span-2 max-lg:col-span-1")}>
            <Tilt className={cn("grid h-full rounded-card", wide ? "min-h-96" : "min-h-96")}>
              <CategoryCard {...card} imageSizes={wide ? "(max-width: 1024px) 88vw, 1200px" : undefined} />
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
