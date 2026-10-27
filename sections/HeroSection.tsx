import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Reveal } from "@/components/shared/Reveal";

export function HeroSection() {
  return (
    <section
      id="rolunk"
      className="relative z-[2] flex min-h-screen items-center justify-center px-[6%] pt-[140px] pb-20"
    >
      <Reveal className="mx-auto grid max-w-[1300px] grid-cols-2 items-center gap-[60px] max-[1024px]:grid-cols-1 max-[1024px]:text-center">
        <div className="max-[1024px]:order-2">
          <p className="mb-6 inline-block rounded-full border border-line bg-black/5 px-[18px] py-2 text-xs leading-[normal] font-bold tracking-[2px] text-ink uppercase">
            HRV Mobile Trade • 2011
          </p>
          <h1 className="mb-8 font-heading text-[4vw] leading-[1.1] font-extrabold tracking-[-2px] text-heading max-[1024px]:text-5xl">
            Korszerű technológia.
            <br />
            <span className="text-gradient">Mindennapi kényelem.</span>
          </h1>
          <div className="mb-10 [&_p]:mb-5 [&_p]:text-lg [&_p]:leading-[1.7] [&_p]:font-medium [&_p]:text-ink-muted">
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
            className="inline-block rounded-full bg-black px-10 py-[18px] text-[15px] font-bold text-white transition-all duration-400 ease-out-expo hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] focus-visible:ring-3 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Kínálat felfedezése ⚡
          </a>
        </div>
        <div className="group relative max-[1024px]:order-1 max-[1024px]:mb-10">
          {/* Original photo is 1000×667, shown at 100% column width. */}
          <ImagePlaceholder
            aspectRatio="1000 / 667"
            className="w-full rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-transform duration-400 ease-out-expo [transform:perspective(1000px)_rotateY(-5deg)] group-hover:[transform:perspective(1000px)_rotateY(0deg)]"
          />
          <div className="absolute bottom-10 -left-[30px] flex flex-col items-center rounded-[20px] border border-white bg-white/90 px-[30px] py-5 shadow-[0_20px_40px_rgba(0,0,0,0.1)] backdrop-blur-[10px] max-[1024px]:bottom-5 max-[1024px]:left-5">
            <strong className="font-heading text-2xl leading-none font-extrabold text-[#0a0a0b]">
              Prémium
            </strong>
            <span className="mt-[5px] text-xs font-bold text-[#52525b] uppercase">
              Minőség
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
