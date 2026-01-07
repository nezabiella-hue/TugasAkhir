export default function HeroGreet() {
  return (
    <div className="max-w-[620px]">
      {/* Headline */}
      <h1 className="text-[56px] font-extrabold leading-[1.15] text-[var(--color-inkblack)]">
        Temukan Proyek <br />
        Terbaik Untuk <br />
        <span className="text-[var(--color-coral)]">Bakatmu</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-[460px] text-base text-[var(--color-darkgrey)]">
        Marketplace kreatif Indonesia untuk Terhubung ke Seluruh dunia
      </p>

      {/* CTA */}
      <div className="mt-10">
        <button
          className={[
            "h-12 rounded-full px-8",
            "bg-[var(--color-coral)] text-sm font-semibold text-white",
            "hover:opacity-90 active:scale-[0.98]",
            "transition",
          ].join(" ")}
        >
          Cari Proyek
        </button>
      </div>
    </div>
  );
}
