import Hero from "../components/layout/Hero";

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
      <Hero />

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