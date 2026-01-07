import { useEffect, useMemo, useRef, useState } from "react";
import { HERO_SLIDES } from "../data/carousel";

function Stars({ count = 5 }) {
  return (
    <span className="tracking-[0.12em] text-[var(--color-coral)]">
      {"★".repeat(count)}
    </span>
  );
}

export default function HeroCarousel() {
  const slides = HERO_SLIDES;
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef(null);

  const total = slides.length;
  const current = useMemo(() => slides[active], [slides, active]);

  // Track direction so wrap-around still feels correct
  const prevActiveRef = useRef(active);
  const [dir, setDir] = useState(1); // 1 = forward, -1 = backward

  useEffect(() => {
    const prev = prevActiveRef.current;
    if (prev !== active) {
      // detect forward/back (handles wrap)
      const forward = (active - prev + total) % total === 1;
      setDir(forward ? 1 : -1);
      prevActiveRef.current = active;
    }
  }, [active, total]);

  useEffect(() => {
    if (hovered) return;

    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, 3500);

    return () => clearInterval(timerRef.current);
  }, [hovered, total]);

  const prevIndex = (active - 1 + total) % total;
  const nextIndex = (active + 1) % total;

  // Returns translateX percent for slide layout
  // We keep only prev/active/next "near" so the loop doesn't jump.
  const getX = (idx) => {
    if (idx === active) return 0;
    if (idx === prevIndex) return -100;
    if (idx === nextIndex) return 100;

    // push far slides offscreen based on direction (keeps them out of view)
    return dir === 1 ? 200 : -200;
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer card: NO overflow-hidden so pills can float outside */}
      <div className="relative mx-auto w-full max-w-[720px] rounded-[44px] bg-neutral-200 shadow-sm">
        {/* Image area: clips only the image */}
        <div className="relative overflow-hidden rounded-[44px]">
          <div className="relative aspect-[16/9] w-full">
            {/* background wash */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-200 to-neutral-300" />

            {/* ✅ Slide + crossfade overlap */}
            {slides.map((s, idx) => {
              const isActive = idx === active;
              const isNeighbor = idx === prevIndex || idx === nextIndex;

              return (
                <img
                  key={s.id}
                  src={s.image}
                  alt=""
                  draggable="false"
                  className={[
                    "absolute inset-0 h-full w-full object-cover",
                    // slide + fade together
                    "transition-[transform,opacity] duration-700 ease-in-out",
                    isActive
                      ? "opacity-100"
                      : isNeighbor
                      ? "opacity-0"
                      : "opacity-0",
                  ].join(" ")}
                  style={{
                    transform: `translateX(${getX(idx)}%)`,
                    // keep active on top while overlapping
                    zIndex: isActive ? 2 : 1,
                  }}
                />
              );
            })}

            {/* subtle gloss */}
            <div className="pointer-events-none absolute inset-0 bg-white/10" />
          </div>
        </div>

        {/* Top pill */}
        <div
          className="
            pill-float pill-float--slow
            absolute left-0 top-[-28px] z-20
            flex items-center gap-3
            rounded-full bg-white/90 px-4 py-2
            shadow-md backdrop-blur
          "
          style={{ "--tx": "12px" }}
        >
          <div className="h-10 w-10 rounded-full bg-neutral-300" />
          <div className="leading-tight">
            <div className="text-[12px] text-[var(--color-darkgrey)]">
              {current.topPill.label}{" "}
              <span className="font-semibold text-[var(--color-inkblack)]">
                {current.topPill.name}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-[var(--color-darkgrey)]">
              <Stars count={current.topPill.rating} />
              <span>{current.topPill.projects} Projects</span>
            </div>
          </div>
        </div>

        {/* Bottom pill */}
        <div
          className="
            pill-float pill-float--delay
            absolute left-1/2 bottom-[-18px] z-20
            flex items-center gap-3
            rounded-full bg-white/90 px-4 py-2
            shadow-md backdrop-blur
          "
          style={{ "--tx": "25%" }}
        >
          <div className="h-10 w-10 rounded-full bg-neutral-300" />
          <div className="leading-tight">
            <div className="text-[12px] text-[var(--color-darkgrey)]">
              {current.bottomPill.label}{" "}
              <span className="font-semibold text-[var(--color-inkblack)]">
                {current.bottomPill.name}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-[var(--color-darkgrey)]">
              <Stars count={current.bottomPill.rating} />
              <span>{current.bottomPill.projects} Projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-3">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setActive(idx)}
            className={[
              "h-2 w-2 rounded-full transition",
              idx === active ? "bg-[var(--color-inkblack)]" : "bg-neutral-300",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
