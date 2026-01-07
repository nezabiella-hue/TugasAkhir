import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./BitsAndBops/logo";
import { SEARCH_SUGGESTIONS } from "../data/searchSuggestion";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = SEARCH_SUGGESTIONS.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6);

  const LOGO_NUDGE_PX = -8;

  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-[1512px] px-8">
        <div className="flex h-[101px] items-center rounded-2xl border border-white/30 bg-white/40 px-8 shadow-sm backdrop-blur-md">
          {/* LOGO */}
          <div className="flex items-center">
            <Link
              to="/"
              className="whitespace-nowrap hover:opacity-90"
              style={{ transform: `translateY(${LOGO_NUDGE_PX}px)` }}
            >
              <Logo
                size="28px"
                className="leading-none"
                ariaLabel="Projects Home"
              />
            </Link>
          </div>

          {/* Search */}
          <div className="hidden flex-1 justify-center md:flex">
            <div className="relative w-[380px] lg:w-[440px]">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-darkgrey)]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(true);
                }}
                onFocus={() => setOpen(true)}
                onBlur={() => setTimeout(() => setOpen(false), 120)}
                placeholder="Cari skill, tools, atau keyword…"
                className={[
                  "h-10 w-full rounded-full border border-neutral-200/70 bg-white/70",
                  "pl-10 pr-4 text-sm shadow-sm outline-none",
                  "text-[var(--color-inkblack)] placeholder:text-[var(--color-darkgrey)]",
                  "focus:bg-white focus:ring-4 focus:ring-[color:var(--color-coral)]/30",
                ].join(" ")}
              />

              {open && query && (
                <div className="absolute top-12 w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
                  {filtered.length > 0 ? (
                    filtered.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setQuery(item);
                          setOpen(false);
                        }}
                        className={[
                          "w-full px-4 py-2 text-left text-sm",
                          "text-[var(--color-inkblack)]",
                          "hover:bg-[color:var(--color-coral)]/10 hover:text-[var(--color-coral)]",
                        ].join(" ")}
                      >
                        {item}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-[var(--color-darkgrey)]">
                      Tidak ada hasil
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <Link
              to="/projects"
              className="text-[var(--color-coral)] hover:opacity-80"
            >
              Cari Proyek
            </Link>

            <a
              href="#"
              className="text-[var(--color-inkblack)] hover:opacity-80"
            >
              Buat Proyek
            </a>
            <a
              href="#"
              className="text-[var(--color-inkblack)] hover:opacity-80"
            >
              Servis
            </a>
            <a
              href="#"
              className="text-[var(--color-inkblack)] hover:opacity-80"
            >
              Produk
            </a>
            <a
              href="#"
              className="text-[var(--color-inkblack)] hover:opacity-80"
            >
              Komunitas
            </a>
            <a
              href="#"
              className="text-[var(--color-inkblack)] hover:opacity-80"
            >
              Afiliasi
            </a>
          </div>

          {/* Actions */}
          <div className="ml-8 flex items-center gap-3">
            <button
              className={[
                "h-10 rounded-full border px-5 text-sm font-semibold",
                "bg-white/70 text-[var(--color-inkblack)]",
                "hover:bg-white/90",
              ].join(" ")}
            >
              Daftar
            </button>

            <button
              className={[
                "h-10 rounded-full px-5 text-sm font-semibold text-white",
                "bg-[var(--color-coral)] hover:opacity-90",
              ].join(" ")}
            >
              Masuk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
