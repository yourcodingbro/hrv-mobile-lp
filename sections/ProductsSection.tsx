import { CategoryCard } from "@/components/cards/CategoryCard"
import { Tilt } from "@/components/cards/Tilt"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { categories } from "@/data/categories"
import { cn } from "@/lib/utils"

export function ProductsSection() {
  return (
    <section id="termekek" className="relative z-[2] px-[6%] py-[100px]">
      <Reveal className="mb-[60px] text-center">
        <SectionHeader
          reverse
          title="Főbb termékkategóriáink"
          subtitle="Prémium Portfólió"
          subtitleClassName="mb-3 text-[12px] font-extrabold tracking-[3px] uppercase"
        />
      </Reveal>
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 max-[1024px]:grid-cols-1">
        {categories.map(({ wide, ...card }, i) => (
          // The original's tilt transform overrides its reveal translate, so cards only fade in.
          <Reveal key={card.title} y={0} delay={(i + 1) * 0.1} className={cn(wide && "col-span-2 max-[1024px]:col-span-1")}>
            <Tilt className={cn("grid h-full rounded-[32px]", wide ? "min-h-[500px]" : "min-h-[420px]")}>
              <CategoryCard {...card} />
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
