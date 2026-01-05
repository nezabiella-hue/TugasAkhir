export default function Products() {
  const items = [
    { label: "Desain & Logo", icon: PaletteIcon },
    { label: "Video & Audio", icon: PlayIcon },
    { label: "Program Desktop", icon: MonitorIcon },
    { label: "Skrip Website", icon: CodeIcon },
    { label: "Template Website", icon: LayoutIcon },
    { label: "Illustrasi & Fotografi", icon: ImageIcon },
    { label: "3D Model & Animasi", icon: CubeIcon },
    { label: "Buku Digital", icon: BookIcon },
  ];

  return (
    <section className="w-full bg-neutral-50/60">
      <div className="mx-auto max-w-[1440px] px-16 py-16">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-neutral-900">
              Berbagai <span className="text-orange-400">Produk Digital</span>{" "}
              untuk kebutuhanmu
            </h2>
            <p className="mt-3 max-w-[560px] text-sm text-neutral-600">
              Kumpulan template, tools, dan aset digital siap pakai untuk semua
              kebutuhan proyekmu.
            </p>
          </div>

          <button className="mt-1 h-10 rounded-full bg-orange-400 px-8 text-sm font-semibold text-white shadow-sm hover:bg-orange-500">
            Lihat Semua
          </button>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <button
                key={it.label}
                className={[
                  "group",
                  "h-[150px] w-full",
                  "rounded-[30px] bg-white",
                  "border border-neutral-200/60",
                  "shadow-[0_18px_40px_rgba(0,0,0,0.08)]",
                  "transition hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(0,0,0,0.10)]",
                  "flex flex-col items-center justify-center gap-4",
                ].join(" ")}
              >
                <Icon className="h-10 w-10" />
                <span className="text-sm font-semibold text-neutral-700">
                  {it.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================
   ICONS (inline svg)
   - default neutral stroke + orange accents
   ========================= */

function PaletteIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3c-4.97 0-9 3.58-9 8 0 4.08 3.43 7.2 7.74 7.2H12c1.66 0 3-1.34 3-3 0-1.2-.7-2.24-1.72-2.74.18-.18.42-.46.62-.84.33-.63.46-1.43.1-2.34C13.35 4.05 12 3 12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <circle cx="8" cy="10" r="1.2" fill="#fb923c" />
      <circle cx="12" cy="8" r="1.2" fill="#fb923c" />
      <circle cx="15.5" cy="11" r="1.2" fill="#fb923c" />
    </svg>
  );
}

function PlayIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path
        d="M11 9.5v5l4-2.5-4-2.5Z"
        fill="#fb923c"
        stroke="#fb923c"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MonitorIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V14a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 14V6.5Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path
        d="M9 20h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M10 8h4"
        stroke="#fb923c"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CodeIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18 3 12l6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M15 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M13 6 11 18"
        stroke="#fb923c"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LayoutIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect
        x="4"
        y="5"
        width="16"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path d="M8 9h8" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M8 13h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

function ImageIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect
        x="4"
        y="5"
        width="16"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path
        d="M8.5 11.5a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z"
        fill="#fb923c"
      />
      <path
        d="M6.5 17l4.2-4.2a1 1 0 0 1 1.4 0L17.5 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

function CubeIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 20 7.5 12 12 4 7.5 12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path
        d="M20 7.5v9L12 21v-9l8-4.5Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path d="M4 7.5v9L12 21" stroke="#fb923c" strokeWidth="2" opacity="0.9" />
    </svg>
  );
}

function BookIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4h10a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1H8a3 3 0 0 0-3 3V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path d="M8 8h7" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
