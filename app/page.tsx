import { FloatingContact } from "@/components/layout/FloatingContact"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { ContactSection } from "@/sections/ContactSection"
import { HeroSection } from "@/sections/HeroSection"
import { ProductsSection } from "@/sections/ProductsSection"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
