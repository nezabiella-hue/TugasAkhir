import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const FILTERS = {
  waktu: ["Kapan saja", "Hari ini", "Minggu ini", "Bulan ini"],
  budget: [
    "Semua",
    "< Rp 1 jt",
    "Rp 1–3 jt",
    "Rp 3–5 jt",
    "Rp 5–10 jt",
    "> Rp 10 jt",
  ],
  relevansi: ["Relevansi", "Hari ini", "Minggu ini", "Bulan ini"],
  pengalaman: ["Semua", "Entry", "Intermediate", "Expert"],
  lokasi: ["Semua", "Remote", "Indonesia", "Jakarta", "Bandung", "Surabaya"],
};

const CATEGORY_DATA = [
  {
    title: "Design & Creative",
    items: [
      "Graphic Design",
      "UI/UX",
      "Illustration",
      "Branding",
      "Motion Design",
    ],
  },
  {
    title: "Writing & Translation",
    items: [
      "Copywriting",
      "Article Writing",
      "Translation",
      "Proofreading",
      "Script Writing",
    ],
  },
  {
    title: "Development & IT",
    items: ["Frontend", "Backend", "Mobile App", "WordPress", "QA Testing"],
  },
  {
    title: "Marketing & Growth",
    items: [
      "Social Media",
      "SEO",
      "Ads/Performance",
      "Content Strategy",
      "Email Marketing",
    ],
  },
  {
    title: "Finance & Accounting",
    items: [
      "Bookkeeping",
      "Tax",
      "Financial Modeling",
      "Payroll",
      "Audit Support",
    ],
  },
  {
    title: "Admin & Data Support",
    items: [
      "Virtual Assistant",
      "Data Entry",
      "Research",
      "Customer Support",
      "Moderation",
    ],
  },
];

const MOCK_PROJECTS = Array.from({ length: 16 }).map((_, i) => ({
  id: String(100 + i),
  title: "Mobile App UI/UX Design for Fitness Platform",
  budget: "15M – 20M",
  deadline: "1 week left",
  posted: "5 hours ago",
  tags: ["Graphic Design", "UI/UX", "Mobile App"],
  client: "Michael Tan",
  rating: 4.8,
  projectsDone: 32,
  desc: "Need a creative UI/UX designer to design a mobile fitness tracking app. Should include user flows, wireframes, and high-fidelity mockups.",
}));

function Select({ label, value, onChange, options }) {
  return (
    <label className="psel-select">
      <span className="psel-select__label">{label}</span>
      <select
        className="psel-select__control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function Accordion({ title, items, isOpen, onToggle, onPick }) {
  return (
    <div className="psel-acc">
      <button className="psel-acc__head" onClick={onToggle} type="button">
        <span className="psel-acc__title">{title}</span>
        <span className={`psel-acc__chev ${isOpen ? "open" : ""}`}>▾</span>
      </button>

      {isOpen && (
        <div className="psel-acc__body">
          {items.map((it) => (
            <button
              key={it}
              className="psel-acc__item"
              type="button"
              onClick={() => onPick(title, it)}
            >
              {it}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="psel-card">
      <div className="psel-card__top">
        <h3 className="psel-card__title">{p.title}</h3>
        <div className="psel-card__meta">
          <span className="psel-pill">{p.budget}</span>
          <span className="psel-pill">{p.deadline}</span>
          <span className="psel-pill">{p.posted}</span>
        </div>
      </div>

      <div className="psel-card__tags">
        {p.tags.map((t) => (
          <span key={t} className="psel-tag">
            {t}
          </span>
        ))}
      </div>

      <p className="psel-card__desc">{p.desc}</p>

      <div className="psel-card__bottom">
        <div className="psel-client">
          <div className="psel-avatar" aria-hidden />
          <div>
            <div className="psel-client__name">{p.client}</div>
            <div className="psel-client__sub">
              ⭐ {p.rating} • {p.projectsDone} projects
            </div>
          </div>
        </div>

        <div className="psel-actions">
          <button className="psel-like" type="button" aria-label="Like">
            ♥
          </button>
          <Link className="psel-bid" to={`/projects/${p.id}`}>
            Bid
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ProjectSelection() {
  const [filterWaktu, setFilterWaktu] = useState("Kapan saja");
  const [filterBudget, setFilterBudget] = useState("Semua");
  const [filterRelevansi, setFilterRelevansi] = useState("Relevansi");
  const [filterPengalaman, setFilterPengalaman] = useState("Semua");
  const [filterLokasi, setFilterLokasi] = useState("Semua");

  const [openAcc, setOpenAcc] = useState(CATEGORY_DATA[0].title);
  const [pickedCategory, setPickedCategory] = useState({ group: "", item: "" });

  const projects = useMemo(() => MOCK_PROJECTS, []);

  return (
    <div className="psel">
      <style>{`
        /* ✅ SET THIS ONCE */
        :root{
          --navH: 100px;   /* your fixed navbar total footprint (tweak 120-160) */
          --gap: 14px;
        }

        .psel{
          background:#fff;
          padding: 24px 28px;
          padding-top: calc(var(--navH) + 24px); /* ✅ pushes content UNDER navbar */
        }

        /* ✅ Make a viewport "window" under navbar */
        .psel-grid{
          display:grid;
          grid-template-columns: 260px 1fr;
          gap: 22px;
          max-width: 1200px;
          margin: 0 auto;

          height: calc(100vh - var(--navH) - 24px); /* ✅ fixed window height */
          overflow: hidden; /* ✅ body stops scrolling this section */
          align-items: stretch;
        }

        /* LEFT: sticky container, INNER scroll */
        .psel-left{
          position: sticky;
          top: calc(var(--navH) + 12px);
          height: 100%;
          min-height: 0;
        }

        .psel-sidecard{
          border: 1px solid #eee;
          border-radius: 14px;
          padding: 12px;
          background: #fff;

          height: 100%;
          overflow: auto; /* ✅ categories scroll independently */
        }

        .psel-acc{ margin-bottom: 10px; }
        .psel-acc__head{
          width: 100%;
          display:flex;
          align-items:center;
          justify-content: space-between;
          padding: 12px 12px;
          border-radius: 12px;
          border: 1px solid #e9e9e9;
          background: #fff;
          cursor: pointer;
        }
        .psel-acc__title{ font-weight: 600; font-size: 13px; }
        .psel-acc__chev{ transition: transform .15s ease; opacity: .7; }
        .psel-acc__chev.open{ transform: rotate(180deg); }

        .psel-acc__body{
          margin-top: 8px;
          border-radius: 12px;
          border: 1px solid #f0f0f0;
          background: #fff;
          padding: 8px;
        }
        .psel-acc__item{
          width:100%;
          text-align:left;
          padding: 8px 10px;
          border: 0;
          background: transparent;
          border-radius: 10px;
          cursor: pointer;
          font-size: 12px;
          opacity: .9;
        }
        .psel-acc__item:hover{ background: rgba(255, 110, 80, .10); }

        .psel-picked{
          margin-top: 12px;
          padding: 10px 12px;
          border-radius: 12px;
          border: 1px dashed #eee;
          font-size: 12px;
          opacity: .85;
        }
        .psel-picked b{ color: #ff6e50; }

        /* RIGHT: filters + scroll list */
        .psel-right{
          min-width: 0;
          height: 100%;
          min-height: 0;
          display: flex;
          flex-direction: column;
          gap: var(--gap);
        }

        /* ✅ Filters stay put because ONLY cardsScroll scrolls */
        .psel-filters{
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid #eee;
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .psel-filters__row{
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 10px;
          align-items: center;
        }

        .psel-select__label{
          display:block;
          font-size: 11px;
          opacity: .65;
          margin-bottom: 6px;
        }
        .psel-select__control{
          width: 100%;
          border: 1px solid #e8e8e8;
          border-radius: 999px;
          padding: 10px 12px;
          font-size: 12px;
          background: #fff;
          outline: none;
        }
        .psel-select__control:focus{
          border-color: rgba(255,110,80,.55);
          box-shadow: 0 0 0 4px rgba(255,110,80,.12);
        }

        /* ✅ Cards get EXACT remaining height under filters */
        .psel-cardsScroll{
          flex: 1;
          min-height: 0;   /* critical for flex scroll */
          overflow: auto;  /* ✅ cards scroll independently */
          padding-right: 6px;
        }

        .psel-card{
          border: 1px solid #eee;
          border-radius: 18px;
          padding: 16px 18px;
          background: #fff;
          margin-bottom: 14px;
        }
        .psel-card__title{ font-size: 16px; margin: 0 0 8px 0; }
        .psel-card__meta{ display:flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }
        .psel-pill{ font-size: 11px; border: 1px solid #f0f0f0; padding: 6px 10px; border-radius: 999px; opacity: .85; }
        .psel-card__tags{ display:flex; gap: 8px; flex-wrap: wrap; margin: 10px 0; }
        .psel-tag{ font-size: 11px; border: 1px solid #ececec; padding: 6px 10px; border-radius: 999px; opacity: .9; }
        .psel-card__desc{ font-size: 12px; opacity: .8; line-height: 1.45; margin: 0 0 14px 0; }

        .psel-card__bottom{ display:flex; align-items:center; justify-content: space-between; gap: 12px; }
        .psel-client{ display:flex; align-items:center; gap: 10px; }
        .psel-avatar{ width: 34px; height: 34px; border-radius: 999px; background: #eee; }
        .psel-client__name{ font-size: 12px; font-weight: 600; }
        .psel-client__sub{ font-size: 11px; opacity: .7; }
        .psel-actions{ display:flex; align-items:center; gap: 10px; }
        .psel-like{
          width: 38px; height: 38px; border-radius: 999px;
          border: 1px solid #eee; background: #fff; cursor:pointer;
          font-size: 14px; color: #ff6e50;
        }
        .psel-bid{
          display:inline-flex; align-items:center; justify-content:center;
          height: 38px; padding: 0 18px; border-radius: 999px;
          background: #ff6e50; color: white; text-decoration: none;
          font-weight: 600; font-size: 12px;
        }

        @media (max-width: 980px){
          .psel{ padding-top: calc(var(--navH) + 16px); }
          .psel-grid{ grid-template-columns: 1fr; height: auto; overflow: visible; }
          .psel-left{ position: static; height: auto; }
          .psel-sidecard{ height: auto; overflow: visible; }
          .psel-right{ height: auto; }
          .psel-filters__row{ grid-template-columns: 1fr 1fr; }
          .psel-cardsScroll{ overflow: visible; }
        }
      `}</style>

      <div className="psel-grid">
        <aside className="psel-left">
          <div className="psel-sidecard">
            {CATEGORY_DATA.map((c) => (
              <Accordion
                key={c.title}
                title={c.title}
                items={c.items}
                isOpen={openAcc === c.title}
                onToggle={() =>
                  setOpenAcc((prev) => (prev === c.title ? "" : c.title))
                }
                onPick={(group, item) => setPickedCategory({ group, item })}
              />
            ))}

            <div className="psel-picked">
              Filter kategori:{" "}
              {pickedCategory.item ? (
                <>
                  <b>{pickedCategory.group}</b> / {pickedCategory.item}
                </>
              ) : (
                <span>(belum dipilih)</span>
              )}
            </div>
          </div>
        </aside>

        <section className="psel-right">
          <div className="psel-filters">
            <div className="psel-filters__row">
              <Select
                label="Waktu"
                value={filterWaktu}
                onChange={setFilterWaktu}
                options={FILTERS.waktu}
              />
              <Select
                label="Budget"
                value={filterBudget}
                onChange={setFilterBudget}
                options={FILTERS.budget}
              />
              <Select
                label="Relevansi"
                value={filterRelevansi}
                onChange={setFilterRelevansi}
                options={FILTERS.relevansi}
              />
              <Select
                label="Pengalaman"
                value={filterPengalaman}
                onChange={setFilterPengalaman}
                options={FILTERS.pengalaman}
              />
              <Select
                label="Lokasi"
                value={filterLokasi}
                onChange={setFilterLokasi}
                options={FILTERS.lokasi}
              />
            </div>
          </div>

          <div className="psel-cardsScroll">
            {projects.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
