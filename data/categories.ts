export type Category = {
  category: string
  title: string
  shortDesc: string
  imageSrc: string
  /** Full-width bento tile (spans both columns on desktop). */
  wide?: boolean
}

export const categories: Category[] = [
  {
    category: "Üzlet & Teljesítmény",
    title: "Laptopok és kiegészítők",
    shortDesc:
      "Megbízható prémium minőség mindennapi intenzív használatra és professzionális munkához egyaránt.",
    imageSrc: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
    wide: true,
  },
  {
    category: "Mobilitás",
    title: "Mobiltelefonok",
    shortDesc: "Legújabb generációs, modern okoskészülékek kompromisszumok nélkül.",
    imageSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Otthon & Életmód",
    title: "Prémium kisgépek",
    shortDesc: "Intelligens kávéfőzők és háztartási eszközök a tökéletes otthoni élményért.",
    imageSrc: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
  },
]
