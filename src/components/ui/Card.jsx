import { cn } from "../../utils/cn";

export default function Card({
  as: Component = "div",
  interactive = false,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "rounded-card border border-line bg-white p-6 shadow-soft",
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