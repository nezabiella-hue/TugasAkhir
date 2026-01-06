export default function ProjectHeader({ project }) {
  return (
    <header className="pb-6">
      <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900">
        {project.title}
      </h1>

      <div className="mt-3 flex flex-wrap gap-2">
        {(project.tags || []).map((t) => (
          <span
            key={t}
            className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 h-px w-full bg-neutral-200" />
    </header>
  );
}
