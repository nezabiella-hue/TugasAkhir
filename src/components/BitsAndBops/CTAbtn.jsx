import { Link } from "react-router-dom";

const SIZE_STYLES = {
  sm: "h-10 px-6 text-xs",
  md: "h-12 px-8 text-sm",
  lg: "h-14 px-10 text-base",
};

export default function CTABtn({
  to = "/projects",
  label = "Cari Proyek",
  size = "md",
  className = "",
}) {
  return (
    <Link to={to}>
      <button
        className={[
          "rounded-full font-semibold text-white",
          "bg-[var(--color-coral)]",
          "hover:opacity-90 active:scale-[0.98]",
          "transition",
          SIZE_STYLES[size] ?? SIZE_STYLES.md,
          className,
        ].join(" ")}
      >
        {label}
      </button>
    </Link>
  );
}
