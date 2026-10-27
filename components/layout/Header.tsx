import { MobileMenu } from "@/components/layout/MobileMenu"
import { Logo } from "@/components/shared/Logo"
import { navItems } from "@/data/navigation"
import { site } from "@/lib/site"

const focusRing = "rounded-full focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none"

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 z-[1000] flex w-[92%] max-w-[1200px] -translate-x-1/2 items-center justify-between rounded-full border border-white/80 bg-nav px-6 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-[24px]">
      <a href="#" className={`relative z-[1001] flex items-center ${focusRing}`}>
        {/* Decorative: the brand name sits right next to it. */}
        <Logo alt="" className="border border-line" />
        <span className="ml-3 font-heading text-lg font-extrabold text-ink">{site.name}</span>
      </a>
      <nav aria-label="Fő navigáció" className="max-[800px]:hidden">
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-[13px] font-bold tracking-[1px] text-ink-muted uppercase transition-colors duration-400 ease-out-expo hover:text-ink ${focusRing}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href={site.email.href}
        className={`bg-black px-6 py-3 text-[13px] font-bold text-white transition-all duration-400 ease-out-expo hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] max-[800px]:hidden ${focusRing}`}
      >
        Konzultáció
      </a>
      <MobileMenu />
    </header>
  )
}
