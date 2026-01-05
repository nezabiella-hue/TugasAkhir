export default function HeroSection() {
  return (
    <section className="w-full min-h-200">
      {/* container */}
      <div className="mx-auto max-w-360 px-16">
        {/* vertical offset */}
        <div className="pt-[180px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div className="max-w-xl">
              <h1 className="text-[56px] leading-[1.05] font-extrabold tracking-tight text-neutral-900">
                Temukan Proyek <br />
                Terbaik Untuk <br />
                <span className="text-orange-400">Bakatmu</span>
              </h1>

              <p className="mt-6 max-w-[420px] text-sm text-neutral-500">
                Marketplace kreatif Indonesia untuk Terhubung ke Seluruh dunia
              </p>

              {/* Search */}
              <div className="mt-10 flex w-full max-w-[520px] items-center rounded-full border border-neutral-200 bg-white shadow-sm">
                <div className="flex flex-1 items-center gap-2 px-6 py-4 text-neutral-400">
                  {/* icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="opacity-70"
                  >
                    <path
                      d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M16.5 16.5 21 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  <input
                    className="w-full bg-transparent text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none"
                    placeholder="Masukan kata kunci..."
                  />
                </div>

                <button className="mr-2 h-11 rounded-full bg-orange-400 px-6 text-sm font-semibold text-white shadow-sm hover:bg-orange-500">
                  Cari Proyek
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="relative mx-auto w-full max-w-180 overflow-hidden rounded-[44px] shadow-sm bg-neutral-200">
                {/* image placeholder */}
                <div className="aspect-[16/9] w-full bg-gradient-to-b from-neutral-200 to-neutral-300" />

                {/* top pill */}
                <div className="absolute left-10 top-6 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 shadow-md backdrop-blur">
                  <div className="h-10 w-10 rounded-full bg-neutral-300" />
                  <div className="leading-tight">
                    <div className="text-[12px] text-neutral-700">
                      Project Owner{" "}
                      <span className="font-semibold text-neutral-900">
                        Gupita Rajan
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-neutral-500">
                      <span className="text-orange-400">★★★★★</span>
                      <span>2 Projects</span>
                    </div>
                  </div>
                </div>

                {/* bottom pill */}
                <div className="absolute bottom-6 right-10 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 shadow-md backdrop-blur">
                  <div className="h-10 w-10 rounded-full bg-neutral-300" />
                  <div className="leading-tight">
                    <div className="text-[12px] text-neutral-700">
                      Product Designer{" "}
                      <span className="font-semibold text-neutral-900">
                        Arif Budiman
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-neutral-500">
                      <span className="text-orange-400">★★★★★</span>
                      <span>10 Projects</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* dots */}
              <div className="mt-6 flex justify-center gap-3">
                <span className="h-2 w-2 rounded-full bg-neutral-700" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
