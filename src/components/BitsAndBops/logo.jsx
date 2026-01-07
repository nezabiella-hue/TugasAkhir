export default function Logo({
  size,
  className = "",
  dotClassName = "",
  text = "projects",
  ariaLabel = "Projects",
  style: styleProp = {}, // ✅ allow passing style from parent
}) {
  const style = {
    "--logo-size": size ?? "clamp(28px, 3.2vw, 48px)",
    fontFamily: "var(--font-jakarta)",
    ...styleProp, // ✅ parent can override --logo-size if they want
  };

  return (
    <span
      aria-label={ariaLabel}
      className={[
        "inline-flex items-end leading-none select-none",
        "text-[length:var(--logo-size)] font-extrabold",
        "text-[var(--color-inkblack)]",
        className,
      ].join(" ")}
      style={style}
    >
      <span>{text}</span>

      <span
        className={[
          "ml-[0.06em] leading-none",
          "text-[var(--color-coral)]",
          dotClassName,
        ].join(" ")}
        style={{
          fontSize: "calc(var(--logo-size) * 1.3333333)",
          lineHeight: 1,
        }}
      >
        .
      </span>
    </span>
  );
}
