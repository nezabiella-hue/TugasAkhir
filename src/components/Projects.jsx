export default function Projects() {
  const categories = [
    { label: "Graphic Design", active: true },
    { label: "Photography", active: false },
    { label: "3D Art", active: false },
    { label: "Video", active: false },
    { label: "Product design", active: false },
    { label: "Robotic", active: false },
  ];

  const cards = [
    { id: 1, title: "Mobile App UI/UX Design for Fitness Platform" },
    { id: 2, title: "Mobile App UI/UX Design for Fitness Platform" },
    { id: 3, title: "Mobile App UI/UX Design for Fitness Platform" },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-16 py-16">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            <span className="text-orange-400">Proyek</span>{" "}
            <span className="font-extrabold">Paling Populer</span>{" "}
            <span className="font-semibold text-neutral-700">minggu ini</span>
          </h2>

          <button className="h-10 rounded-full bg-orange-400 px-6 text-sm font-semibold text-white shadow-sm hover:bg-orange-500">
            Lihat Semua
          </button>
        </div>

        {/* Category pills */}
        <div className="mt-10 flex flex-wrap gap-4">
          {categories.map((c) => (
            <button
              key={c.label}
              className={[
                "h-10 rounded-full px-6 text-sm font-semibold shadow-sm border transition",
                c.active
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50",
              ].join(" ")}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="rounded-[28px] border border-neutral-200 bg-white shadow-sm"
            >
              <div className="p-8">
                {/* Title + heart */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[15px] font-extrabold leading-snug text-neutral-900">
                    {card.title}
                  </h3>

                  <button
                    aria-label="Favorite"
                    className="grid h-10 w-10 place-items-center rounded-full hover:bg-neutral-50"
                  >
                    {/* heart outline */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 21s-7-4.6-9.4-8.6C.7 9.2 2.2 6.4 5 5.6c1.9-.5 3.7.2 5 1.6 1.3-1.4 3.1-2.1 5-1.6 2.8.8 4.3 3.6 2.4 6.8C19 16.4 12 21 12 21z"
                        stroke="#FB7185"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Tag */}
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-neutral-600 shadow-sm">
                    Graphic Design
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                  Need a creative UI/UX designer to design a mobile fitness
                  tracking app. Should include user flows, wireframes, and
                  high-fidelity mockups
                </p>

                {/* Meta row */}
                <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-neutral-500">
                  <div className="flex items-center gap-2">
                    {/* money icon */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>15M - 20M</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* clock icon */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 6v6l4 2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>1 week left</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* time posted icon */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 7h16M7 4v6m10-6v6M6 20h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>5 hours ago</span>
                  </div>
                </div>

                {/* Bottom row */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-neutral-300" />
                    <div className="leading-tight">
                      <div className="text-sm font-extrabold text-neutral-900">
                        Michael Tan <span className="text-orange-400">●</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span className="text-orange-400">★</span>
                        <span className="font-semibold text-neutral-700">
                          4.8
                        </span>
                        <span>32 Projects</span>
                      </div>
                    </div>
                  </div>

                  <button className="h-10 rounded-full bg-orange-400 px-8 text-sm font-semibold text-white shadow-sm hover:bg-orange-500">
                    Bid
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
