export type Category = {
  category: string
  title: string
  shortDesc: string
  /** Full-width bento tile (spans both columns on desktop). */
  wide?: boolean
}

export const categories: Category[] = [
  {
    category: "Üzlet & Teljesítmény",
    title: "Laptopok és kiegészítők",
    shortDesc:
      "Megbízható prémium minőség mindennapi intenzív használatra és professzionális munkához egyaránt.",
    wide: true,
  },
  {
    category: "Mobilitás",
    title: "Mobiltelefonok",
    shortDesc: "Legújabb generációs, modern okoskészülékek kompromisszumok nélkül.",
  },
  {
    category: "Otthon & Életmód",
    title: "Prémium kisgépek",
    shortDesc: "Intelligens kávéfőzők és háztartási eszközök a tökéletes otthoni élményért.",
  },
]
