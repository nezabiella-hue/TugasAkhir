import { Link } from "react-router-dom";

/* ---------------------------------- */
/* Card */
/* ---------------------------------- */
function SimilarCard({ p }) {
  return (
    <div className="relative rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
      <button
        className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-neutral-200 bg-white text-orange-500"
        type="button"
        aria-label="Like"
      >
        ♥
      </button>

      <div className="text-sm font-extrabold text-neutral-900">{p.title}</div>

      <div className="mt-3 flex flex-wrap gap-2">
        {(p.tags || []).slice(0, 2).map((t) => (
          <span
            key={t}
            className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-semibold text-neutral-700"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-neutral-600">{p.desc}</p>

      <div className="mt-5 h-px w-full bg-neutral-200" />

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-neutral-200" />
          <div className="text-xs">
            <div className="font-extrabold text-neutral-900">{p.client}</div>
            <div className="text-neutral-600">
              ⭐ {p.rating} • {p.projectsDone} projects
            </div>
          </div>
        </div>

        <Link
          to={`/projects/${p.id}`}
          className="inline-flex h-10 items-center justify-center rounded-full bg-orange-400 px-6 text-xs font-extrabold text-white shadow-sm hover:bg-orange-500"
        >
          Bid
        </Link>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Section (NO mockProjects) */
/* ---------------------------------- */
export default function SimilarProjects() {
  const items = [
    {
      id: "201",
      title: "Mobile App UI/UX Design for Fitness Platform",
      tags: ["Graphic Design", "UI/UX"],
      desc: "Need a creative UI/UX designer to design a mobile fitness tracking app with clear flows and modern UI.",
      client: "Michael Tan",
      rating: 4.8,
      projectsDone: 32,
    },
    {
      id: "202",
      title: "Dashboard Redesign for Health Analytics Tool",
      tags: ["UI/UX", "Web App"],
      desc: "Redesign an existing analytics dashboard to improve clarity, usability, and visual hierarchy.",
      client: "Sarah Lim",
      rating: 4.7,
      projectsDone: 21,
    },
  ];

  return (
    <section>
      <h3 className="text-lg font-extrabold text-neutral-900">
        Explore similar <span className="text-orange-500">Projects</span>
      </h3>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((p) => (
          <SimilarCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
