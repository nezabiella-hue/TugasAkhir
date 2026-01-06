function BulletList({ items }) {
  return (
    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-neutral-700">
      {(items || []).map((it) => (
        <li key={it} className="flex gap-2">
          <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-neutral-400" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function MetaItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-xs font-semibold text-neutral-500">{label}</div>
        <div className="text-sm font-bold text-neutral-900">{value}</div>
      </div>
    </div>
  );
}

export default function ProjectMainContent({ project }) {
  return (
    <section className="pb-8">
      {/* client row */}
      <div className="flex items-center justify-between gap-6 border-b border-neutral-200 pb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-neutral-200" />
          <div>
            <div className="flex items-center gap-2">
              <div className="text-sm font-extrabold text-neutral-900">
                {project.client}
              </div>
              <span className="h-2 w-2 rounded-full bg-orange-500" />
            </div>
            <div className="text-xs text-neutral-600">
              ⭐ {project.rating} • {project.projectsDone} projects
              <span className="mx-2 opacity-40">|</span>
              <span className="opacity-80">{project.joined}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="pt-8">
        <h2 className="text-lg font-extrabold text-neutral-900">Overview</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          {project.overview}
        </p>

        <div className="mt-6 space-y-6">
          <div>
            <div className="text-sm font-extrabold text-neutral-900">
              Scope of Work
            </div>
            <BulletList items={project.scope} />
          </div>

          <div>
            <div className="text-sm font-extrabold text-neutral-900">
              Key Requirements
            </div>
            <BulletList items={project.requirements} />
          </div>

          <div>
            <div className="text-sm font-extrabold text-neutral-900">
              Deliverables
            </div>
            <BulletList items={project.deliverables} />
          </div>

          <div>
            <div className="text-sm font-extrabold text-neutral-900">
              Style Direction
            </div>
            <BulletList items={project.styleDirection} />
          </div>

          <div>
            <div className="text-sm font-extrabold text-neutral-900">Notes</div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              {project.notes}
            </p>
          </div>
        </div>

        {/* Meta grid */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <MetaItem icon="📅" label="Deadline" value={project.meta?.deadline} />
          <MetaItem icon="🕒" label="Duration" value={project.meta?.duration} />
          <MetaItem icon="📍" label="Location" value={project.meta?.location} />
          <MetaItem
            icon="🎚️"
            label="Experience Level"
            value={project.meta?.level}
          />
        </div>
      </div>
    </section>
  );
}
