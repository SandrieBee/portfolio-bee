import { cn } from "../../utils/cn";

export default function Card({
  as: Component = "div",
  interactive = false,
  flush = false,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "rounded-card border border-line bg-white shadow-soft",
        !flush && "p-5 sm:p-6",
        interactive &&
          "transition duration-200 hover:-translate-y-0.5 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}