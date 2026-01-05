export default function Services() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-16 py-16">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
              Dukung Proyekmu dengan pilihan{" "}
              <span className="text-orange-400">Jasa</span>{" "}
              <span className="text-neutral-900">kami</span>
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Berbagai jasa yang di tawarkan oleh freelancer dari seluruh
              Indonesia
            </p>
          </div>

          <button className="mt-1 h-10 rounded-full bg-orange-400 px-8 text-sm font-semibold text-white shadow-sm hover:bg-orange-500">
            Lihat Semua
          </button>
        </div>

        {/* 4-column zigzag that still forms a neat rectangle */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* COL 1: BIG(top) + SMALL(bottom) */}
          <div className="flex flex-col gap-6">
            <ServiceTile
              size="big"
              label="Layout, Logo, & Desain Grafis"
              imgSrc="/images/service-layout.jpg"
              // ^ replace with your real image path
              pillTone="light"
            />
            <ServiceTile
              size="small"
              label="Video, Audio & Fotografi"
              imgSrc="/images/service-video.jpg"
              pillTone="light"
            />
          </div>

          {/* COL 2: SMALL(top) + BIG(bottom) */}
          <div className="flex flex-col gap-6">
            <ServiceTile
              size="small"
              label="Marketing"
              imgSrc="/images/service-marketing.jpg"
              pillTone="light"
            />
            <ServiceTile
              size="big"
              label="Coding Website"
              imgSrc="/images/service-coding.jpg"
              pillTone="light"
            />
          </div>

          {/* COL 3: BIG(top) + SMALL(bottom) */}
          <div className="flex flex-col gap-6">
            <ServiceTile
              size="big"
              label="Jasa menulis & Translasi"
              imgSrc="/images/service-writing.jpg"
              pillTone="light"
            />
            <ServiceTile
              size="small"
              label="Accounting"
              imgSrc="/images/service-accounting.jpg"
              pillTone="light"
            />
          </div>

          {/* COL 4: SMALL(top) + BIG(bottom) */}
          <div className="flex flex-col gap-6">
            <ServiceTile
              size="small"
              label="3D Modeling & Animasi"
              imgSrc="/images/service-3d.jpg"
              pillTone="dark"
            />
            <ServiceTile
              size="big"
              label="Data Mining & Entry"
              imgSrc="/images/service-data.jpg"
              pillTone="light"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ServiceTile
 * - big + small sizes are tuned so each column totals the same height
 * - ready for real images (object-cover)
 */
function ServiceTile({ size = "big", label, imgSrc, pillTone = "light" }) {
  const heightClass = size === "big" ? "h-[380px]" : "h-[260px]";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[28px]",
        "border border-neutral-200",
        "shadow-[0_18px_40px_rgba(0,0,0,0.08)]",
        heightClass,
      ].join(" ")}
    >
      {/* Image */}
      <img
        src={imgSrc}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          // fallback to a soft placeholder if image not found
          e.currentTarget.style.display = "none";
        }}
      />

      {/* Fallback placeholder background */}
      <div className="absolute inset-0 bg-neutral-200" />

      {/* Soft overlay so pill is readable */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Pill */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center px-6">
        <div
          className={[
            "inline-flex items-center justify-center",
            "rounded-[16px] px-5 py-3",
            "text-xs font-semibold",
            "shadow-md backdrop-blur border",
            pillTone === "dark"
              ? "bg-black/35 text-white border-white/10"
              : "bg-white/35 text-white border-white/10",
          ].join(" ")}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
