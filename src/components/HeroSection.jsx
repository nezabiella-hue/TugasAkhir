import HeroGreet from "./HeroGreet";
import HeroCarousel from "./HeroCarousel";
import ScrollHint from "./ScrollHint"; // <- adjust path if needed

export default function HeroSection() {
  return (
    <section className="w-full min-h-200">
      {/* container */}
      <div className="mx-auto max-w-360 px-16">
        {/* vertical offset */}
        <div className="pt-[180px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <HeroGreet />

            {/* RIGHT */}
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* scroll hint (fixed bottom, hides on scroll) */}
      <ScrollHint />
    </section>
  );
}
