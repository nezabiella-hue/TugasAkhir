function Chip({ children }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
      {children}
    </span>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="text-lg font-extrabold text-neutral-900">{children}</h3>
  );
}

export default function ProjectExtras({ project }) {
  return (
    <section className="border-t border-neutral-200 pt-10">
      {/* References */}
      <SectionTitle>References</SectionTitle>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="aspect-[16/9] rounded-2xl bg-neutral-200" />
        <div className="aspect-[16/9] rounded-2xl bg-neutral-200" />
      </div>

      {/* Skills */}
      <div className="mt-10">
        <SectionTitle>Skills and Expertise</SectionTitle>

        <div className="mt-4">
          <div className="text-xs font-extrabold text-orange-500">
            Mandatory Skills
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {(project.skills?.mandatory || []).map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="text-xs font-extrabold text-neutral-400">
            Nice-to-have Skills
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {(project.skills?.nice || []).map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </div>
      </div>

      {/* Activity */}
      <div className="mt-10">
        <SectionTitle>Activity on this Job</SectionTitle>
        <div className="mt-4 flex flex-wrap gap-6 text-sm">
          <div>
            <div className="text-xs font-semibold text-neutral-500">
              Bid on this Job :
            </div>
            <div className="font-extrabold text-orange-500">
              {project.activity?.bids ?? 0}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-neutral-500">
              Owner Last view :
            </div>
            <div className="font-extrabold text-orange-500">
              {project.activity?.lastView ?? "-"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
