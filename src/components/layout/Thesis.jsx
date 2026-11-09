import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import { THESIS } from "../../constants/thesis";

const BLOCKS = [
  { key: "objectives", title: "Research objectives", type: "list" },
  { key: "methodology", title: "Methodology", type: "text" },
  { key: "dataset", title: "Dataset and experimental setup", type: "text" },
  {
    key: "stressors",
    title: "Robustness conditions and stressors",
    type: "list",
  },
  { key: "metrics", title: "Evaluation metrics", type: "list" },
  { key: "findings", title: "Key findings", type: "list" },
  { key: "contributions", title: "Research contributions", type: "list" },
];

function hasContent(value) {
  return Array.isArray(value) ? value.length > 0 : Boolean(value);
}

export default function Thesis() {
  const blocks = BLOCKS.filter((block) => hasContent(THESIS[block.key]));

  return (
    <section
      id="thesis"
      className="scroll-mt-20 border-y border-line bg-surface/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <Reveal>
          <p className="text-sm font-medium text-accent">
            Featured undergraduate thesis
          </p>
          <h2 className="mt-3 max-w-4xl border-l-4 border-accent-soft pl-5 text-2xl font-semibold leading-snug sm:text-3xl">
            {THESIS.title}
          </h2>

          {THESIS.overview && (
            <p className="mt-6 max-w-3xl text-lg text-muted">
              {THESIS.overview}
            </p>
          )}

          {THESIS.models.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium">Models evaluated</span>
              <ul className="flex flex-wrap gap-2">
                {THESIS.models.map((model) => (
                  <li key={model}>
                    <Badge variant="accent">{model}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {THESIS.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {THESIS.links.map((link) => (
                <Button
                  key={link.href}
                  as="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </Button>
              ))}
            </div>
          )}
        </Reveal>

        {blocks.length > 0 && (
          <ol className="mt-12 grid gap-4 md:grid-cols-2">
            {blocks.map((block, index) => (
              <li key={block.key}>
                <Reveal delay={index * 0.05} className="h-full">
                  <Card className="h-full">
                    <p
                      aria-hidden="true"
                      className="font-heading text-sm font-semibold text-accent"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{block.title}</h3>
                    {block.type === "text" ? (
                      <p className="mt-3 text-muted">{THESIS[block.key]}</p>
                    ) : (
                      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
                        {THESIS[block.key].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </Reveal>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}