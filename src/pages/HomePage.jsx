const sections = [
  "about",
  "skills",
  "projects",
  "thesis",
  "certificates",
  "experience",
  "contact",
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-semibold">Home</h1>
        <p className="mt-3 text-muted">Hero section placeholder.</p>
      </section>

      {sections.map((id) => (
        <section
          key={id}
          id={id}
          className="mx-auto min-h-[70vh] max-w-6xl scroll-mt-20 px-6 py-16"
        >
          <h2 className="text-2xl font-semibold capitalize">{id}</h2>
          <p className="mt-2 text-muted">Placeholder section.</p>
        </section>
      ))}
    </>
  );
}