import { ContactCard } from "@/components/cards/ContactCard";
import { Logo } from "@/components/shared/Logo";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { contacts } from "@/data/contacts";

export function ContactSection() {
  const [phone, email] = contacts;
  const card = (c: (typeof contacts)[number], delay: number) => (
    <Reveal delay={delay} className="h-full min-w-0 lg:flex-1">
      <ContactCard
        icon={c.icon}
        title={c.title}
        content={<a href={c.href}>{c.value}</a>}
      />
    </Reveal>
  );

  return (
    <section
      id="kapcsolat"
      className="relative z-20 border-t border-line bg-surface px-gutter py-28"
    >
      <Reveal className="mx-auto max-w-content text-center">
        <SectionHeader
          title="Lépjünk kapcsolatba."
          subtitle="Kattintson az alábbi lehetőségek egyikére az azonnali kapcsolatfelvételhez."
          titleClassName="mb-4 text-5xl tracking-tighter"
          subtitleClassName="mb-16 text-lg font-medium"
        />
        {/* lg: flex row so the logo column fits its content and the cards share the rest. */}
        <div className="grid gap-10 md:grid-cols-1 lg:flex lg:gap-0">
          {card(phone, 0.1)}
          <Reveal
            delay={0.2}
            className="order-first flex items-center justify-center lg:order-none lg:flex-none lg:px-10"
          >
            <Logo className="size-44 border border-line shadow-lg transition-transform duration-300 hover:scale-105" />
          </Reveal>
          {card(email, 0.3)}
        </div>
      </Reveal>
    </section>
  );
}
