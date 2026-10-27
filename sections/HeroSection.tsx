import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

export function HeroSection() {
  return (
    <section
      id="rolunk"
      className="relative z-20 flex min-h-screen items-center justify-center px-gutter pt-36 pb-20"
    >
      <Reveal className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:text-center">
        <div className="max-lg:order-2">
          <p className="mb-6 inline-block rounded-full border border-line bg-black/5 px-4 py-2 text-xs font-bold tracking-widest text-ink uppercase">
            HRV Mobile Trade • 2011
          </p>
          <h1 className="mb-8 font-heading text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight font-extrabold tracking-tighter text-heading">
            Korszerű technológia.
            <br />
            <span className="bg-linear-to-r from-black to-gray-500 bg-clip-text text-transparent dark:from-white dark:to-gray-400">
              Mindennapi kényelem.
            </span>
          </h1>
          <div className="mb-10 *:mb-5 *:text-lg *:leading-relaxed *:font-medium *:text-ink-muted">
            <p>
              Az HRV Mobile Trade Kft-t 2011-ban alapítottuk, azzal a céllal,
              hogy megbízható és korszerű megoldásokat kínáljunk a mindennapi
              élethez.
            </p>
            <p>
              Cégünk otthoni kis háztartási gépek, mobiltelefonok, laptopok és
              kiegészítők forgalmazásával foglalkozik.
            </p>
            <p>
              Fontos számunkra a minőség, a versenyképes árak és a vásárlóink
              elégedettsége, ezért kínálatunkat folyamatosan a piaci igényekhez
              igazítjuk.
            </p>
          </div>
          <a
            href="#termekek"
            className="inline-block rounded-full bg-black px-10 py-4 text-base font-bold text-white transition-all duration-300 ease-out-expo hover:scale-105 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Kínálat felfedezése ⚡
          </a>
        </div>
        <div className="group relative perspective-distant max-lg:order-1 max-lg:mb-10">
          {/* Above the fold (LCP candidate): load eagerly with high priority. */}
          <Image
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=80"
            alt="Laptop, fejhallgató, okostelefon és okosóra egy asztalon"
            width={1000}
            height={667}
            sizes="(max-width: 1024px) 88vw, 620px"
            loading="eager"
            fetchPriority="high"
            className="h-auto w-full rounded-card shadow-2xl transition-transform duration-300 ease-out-expo -rotate-y-6 group-hover:rotate-y-0"
          />
          <div className="absolute bottom-10 -left-8 flex flex-col items-center rounded-tile border border-white bg-white/90 px-8 py-5 shadow-xl backdrop-blur-md max-lg:bottom-5 max-lg:left-5">
            <strong className="font-heading text-2xl leading-none font-extrabold text-neutral-950">
              Prémium
            </strong>
            <span className="mt-1 text-xs font-bold text-zinc-600 uppercase">
              Minőség
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
