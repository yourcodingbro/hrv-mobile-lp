import { ContactCard } from "@/components/cards/ContactCard"
import { Logo } from "@/components/shared/Logo"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { contacts } from "@/data/contacts"

export function ContactSection() {
  const [phone, email] = contacts
  const card = (c: (typeof contacts)[number], delay: number) => (
    <Reveal delay={delay} className="w-80 max-compact:w-full">
      <ContactCard icon={c.icon} title={c.title} content={<a href={c.href}>{c.value}</a>} />
    </Reveal>
  )

  return (
    <section id="kapcsolat" className="relative z-20 border-t border-line bg-surface px-gutter py-28">
      <Reveal className="mx-auto max-w-content text-center">
        <SectionHeader
          title="Lépjünk kapcsolatba."
          subtitle="Kattintson az alábbi lehetőségek egyikére az azonnali kapcsolatfelvételhez."
          titleClassName="mb-4 text-5xl tracking-tighter"
          subtitleClassName="mb-16 text-lg font-medium"
        />
        <div className="flex flex-wrap items-center justify-center gap-10 max-compact:flex-col">
          {card(phone, 0.1)}
          <Reveal delay={0.2} className="flex items-center justify-center max-compact:order-first max-compact:mb-5">
            <Logo className="size-44 border border-line shadow-lg transition-transform duration-300 hover:scale-105" />
          </Reveal>
          {card(email, 0.3)}
        </div>
      </Reveal>
    </section>
  )
}
