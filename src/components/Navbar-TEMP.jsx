import { Link } from "react-router-dom";
import { useState } from "react";

const SUGGESTIONS = [
  "UI/UX Designer",
  "Mobile App UI",
  "Website Redesign",
  "Landing Page",
  "Figma",
  "Wireframe",
  "Design System",
  "Logo Design",
  "Branding",
  "Illustration",
  "Social Media Design",
  "Motion Graphics",
  "Frontend Developer",
  "React",
  "Next.js",
  "Tailwind CSS",
  "WordPress",
  "Backend Developer",
  "Node.js",
  "API Integration",
  "SEO",
  "Copywriting",
  "Translation",
  "Data Entry",
  "Virtual Assistant",
  "Game Artist",
];

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = SUGGESTIONS.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-[1512px] px-8">
        <div className="h-[80px] rounded-2xl border border-white/30 bg-white/40 backdrop-blur-md shadow-sm flex items-center px-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight text-neutral-900 whitespace-nowrap hover:opacity-90"
            >
              projects<span className="text-orange-500">.</span>
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-[380px] lg:w-[440px]">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500"
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
                className="h-10 w-full rounded-full border border-neutral-200/70 bg-white/70 pl-10 pr-4 text-sm text-neutral-900 shadow-sm outline-none placeholder:text-neutral-500 focus:bg-white focus:ring-4 focus:ring-orange-200/60"
              />

              {/* Dropdown */}
              {open && query && (
                <div className="absolute top-12 w-full rounded-xl border border-neutral-200 bg-white shadow-lg overflow-hidden">
                  {filtered.length > 0 ? (
                    filtered.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setQuery(item);
                          setOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-orange-50 hover:text-orange-600"
                      >
                        {item}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-neutral-400">
                      Tidak ada hasil
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-800">
            <Link to="/projects" className="text-orange-500 hover:opacity-80">
              {" "}
              Cari Proyek{" "}
            </Link>
            <a href="#" className="hover:opacity-80">
              Buat Proyek
            </a>
            <a href="#" className="hover:opacity-80">
              Servis
            </a>
            <a href="#" className="hover:opacity-80">
              Produk
            </a>
            <a href="#" className="hover:opacity-80">
              Komunitas
            </a>
            <a href="#" className="hover:opacity-80">
              Afiliasi
            </a>
          </div>

          {/* Actions */}
          <div className="ml-8 flex items-center gap-3">
            <button className="h-10 rounded-full border bg-white/70 px-5 text-sm font-semibold">
              Daftar
            </button>
            <button className="h-10 rounded-full bg-orange-400 px-5 text-sm font-semibold text-white">
              Masuk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
