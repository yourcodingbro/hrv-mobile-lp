import { MobileMenu } from "@/components/layout/MobileMenu"
import { Logo } from "@/components/shared/Logo"
import { navItems } from "@/data/navigation"
import { site } from "@/lib/site"

const focusRing = "rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"

export function Header() {
  return (
    <header className="fixed top-6 inset-x-4 z-50 flex mx-auto max-w-content items-center justify-between rounded-full border border-white/80 bg-nav px-6 py-2.5 shadow-sm backdrop-blur-xl">
      <a href="#" className={`flex items-center ${focusRing}`}>
        {/* Decorative: the brand name sits right next to it. */}
        <Logo alt="" className="border border-line" />
        <span className="ml-3 font-heading text-lg font-extrabold text-ink">{site.name}</span>
      </a>
      <nav aria-label="Fő navigáció" className="max-compact:hidden">
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-label font-bold tracking-widest text-ink-muted uppercase transition-colors duration-300 ease-out-expo hover:text-ink ${focusRing}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href={site.email.href}
        className={`bg-black px-6 py-3 text-label font-bold text-white transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lg max-compact:hidden ${focusRing}`}
      >
        Konzultáció
      </a>
      <MobileMenu />
    </header>
  )
}
