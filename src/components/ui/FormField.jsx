import { cn } from "../../utils/cn";

export default function FormField({
  id,
  label,
  error,
  multiline = false,
  registration,
  ...props
}) {
  const Control = multiline ? "textarea" : "input";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <Control
        id={id}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "mt-1.5 w-full rounded-xl border bg-card px-4 py-2.5 text-sm text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
          error
            ? "border-danger-ink"
            : "border-line hover:border-muted/60 focus-visible:border-accent",
          multiline && "resize-y",
        )}
        {...registration}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-danger-ink">
          {error}
        </p>
      )}
    </div>
  );
}