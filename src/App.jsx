const swatches = [
  ["canvas", "bg-canvas"],
  ["surface", "bg-surface"],
  ["line", "bg-line"],
  ["muted", "bg-muted"],
  ["accent-soft", "bg-accent-soft"],
  ["accent", "bg-accent"],
  ["ink", "bg-ink"],
];

export default function App() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Computer Science graduate</h1>
      <p className="mt-3 text-muted">
        Building software, exploring data, and learning about artificial
        intelligence.
      </p>

      <div className="mt-10 grid grid-cols-4 gap-3 sm:grid-cols-7">
        {swatches.map(([name, cls]) => (
          <div key={name}>
            <div className={`h-14 rounded-card border border-line ${cls}`} />
            <p className="mt-2 text-xs text-muted">{name}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-card border border-line bg-surface p-6 shadow-soft transition hover:shadow-lift">
        <h2 className="text-xl font-semibold">Sample card</h2>
        <p className="mt-2 text-muted">Hover this card to see the shadow lift.</p>
        <a href="#" className="mt-4 inline-block text-accent underline">
          Sample link
        </a>
      </div>
    </main>
  );
}