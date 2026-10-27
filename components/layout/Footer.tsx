export function Footer() {
  return (
    <footer className="relative z-[2] border-t border-line bg-white px-[6%] py-10">
      {/* The original's dark mode darkens only this inner box, leaving the white footer edges. */}
      <div className="mx-auto flex max-w-[1200px] items-center justify-between text-sm font-semibold text-ink-muted max-[800px]:flex-col max-[800px]:gap-4 max-[800px]:text-center dark:bg-page">
        <p>© 2026 HRV Mobile Trade Kft. Minden jog fenntartva.</p>
        <p>Megbízható minőség 2026 óta.</p>
      </div>
    </footer>
  );
}
