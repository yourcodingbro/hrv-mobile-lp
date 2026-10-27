import { ContactCard } from "@/components/cards/ContactCard"
import { Logo } from "@/components/shared/Logo"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { contacts } from "@/data/contacts"

export function ContactSection() {
  const [phone, email] = contacts
  const card = (c: (typeof contacts)[number], delay: number) => (
    <Reveal delay={delay} className="w-[340px] max-[800px]:w-full">
      <ContactCard icon={c.icon} title={c.title} content={<a href={c.href}>{c.value}</a>} />
    </Reveal>
  )

  return (
    <section id="kapcsolat" className="relative z-[2] border-t border-line bg-surface px-[6%] py-[120px]">
      <Reveal className="mx-auto max-w-[1200px] text-center">
        <SectionHeader
          title="Lépjünk kapcsolatba."
          subtitle="Kattintson az alábbi lehetőségek egyikére az azonnali kapcsolatfelvételhez."
          titleClassName="mb-4 text-[52px] tracking-[-2px]"
          subtitleClassName="mb-[60px] text-[18px] font-medium"
        />
        <div className="flex flex-wrap items-center justify-center gap-10 max-[800px]:flex-col">
          {card(phone, 0.1)}
          <Reveal delay={0.2} className="flex items-center justify-center max-[800px]:order-first max-[800px]:mb-5">
            <Logo className="size-[180px] border border-line shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-transform duration-400 hover:scale-105" />
          </Reveal>
          {card(email, 0.3)}
        </div>
      </Reveal>
    </section>
  )
}
