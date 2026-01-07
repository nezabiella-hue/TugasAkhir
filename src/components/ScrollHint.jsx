import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 8) setHide(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hide) return null;

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-[999] -translate-x-1/2">
      <div className="flex flex-col items-center gap-1 text-center">
        {/* Static text */}
        <span className="text-[11px] font-medium tracking-wide text-[var(--color-darkgrey)] opacity-70">
          Scroll down
        </span>

        {/* Animated arrow only */}
        <div className="animate-scroll-bounce">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="var(--color-darkgrey)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
