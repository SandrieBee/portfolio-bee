import { cn } from "../../utils/cn";

export default function FilterPills({ label, filters, active, onChange }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = active === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
              isActive
                ? "border-accent bg-accent text-white"
                : "border-line bg-white text-muted hover:bg-surface hover:text-ink",
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}