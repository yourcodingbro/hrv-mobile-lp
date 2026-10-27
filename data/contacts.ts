import { Mail, Phone, type LucideIcon } from "lucide-react"
import { site } from "@/lib/site"

export type ContactItem = {
  icon: LucideIcon
  title: string
  value: string
  href: string
}

export const contacts: ContactItem[] = [
  { icon: Phone, title: "Hívjon minket", value: site.phone.display, href: site.phone.href },
  { icon: Mail, title: "Írjon e-mailt", value: site.email.display, href: site.email.href },
]
