import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Badge from "./components/ui/Badge";

export default function App() {
  return (
    <main className="mx-auto max-w-3xl space-y-12 px-6 py-16">
      <section>
        <h1 className="text-3xl font-semibold">UI components</h1>
        <p className="mt-2 text-muted">Temporary test page for Phase 4.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button>Explore my work</Button>
          <Button variant="secondary">View resume</Button>
          <Button variant="ghost">Ghost button</Button>
          <Button size="lg">Large button</Button>
          <Button disabled>Disabled</Button>
          <Button as="a" href="#" variant="secondary">
            Link styled as button
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>React</Badge>
          <Badge>Python</Badge>
          <Badge variant="accent">Web Development</Badge>
          <Badge variant="accent">2026</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cards</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Static card</h3>
            <p className="mt-2 text-muted">A plain card with a soft shadow.</p>
          </Card>
          <Card interactive>
            <h3 className="text-lg font-semibold">Interactive card</h3>
            <p className="mt-2 text-muted">Hover to see it lift.</p>
          </Card>
        </div>
      </section>
    </main>
  );
}