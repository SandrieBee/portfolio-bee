import { cn } from "../../utils/cn";

const variants = {
  neutral: "border-line bg-surface text-muted",
  accent: "border-accent-soft bg-accent-soft/40 text-accent-dark",
};

export default function Badge({
  variant = "neutral",
  className,
  children,
  ...props
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}