export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium text-accent">{eyebrow}</p>
      <h2 className="mt-1.5 text-2xl font-semibold sm:text-3xl">{title}</h2>
      {description && <p className="mt-2 text-muted">{description}</p>}
    </div>
  );
}