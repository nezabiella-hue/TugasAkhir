import CTABtn from "./BitsAndBops/CTAbtn";

export default function HeroGreet() {
  return (
    <div className="max-w-[620px]">
      <h1 className="text-[56px] font-extrabold leading-[1.15] text-[var(--color-inkblack)]">
        Temukan Proyek <br />
        Terbaik Untuk <br />
        <span className="text-[var(--color-coral)]">Bakatmu</span>
      </h1>

      <p className="mt-6 max-w-[460px] text-base text-[var(--color-darkgrey)]">
        Marketplace kreatif Indonesia untuk Terhubung ke Seluruh dunia
      </p>

      <div className="mt-10">
        <CTABtn />
      </div>
    </div>
  );
}
