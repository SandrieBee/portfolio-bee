import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import SectionStatus from "../ui/SectionStatus";
import { useThesis } from "../../hooks/useThesis";

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
  const { data: thesis, loading, error, retry } = useThesis();

  const blocks = thesis
    ? BLOCKS.filter((block) => hasContent(thesis[block.key]))
    : [];

  return (
    <section
      id="thesis"
      className="scroll-mt-20 border-y border-line bg-surface/60"
    >
      <div className="container-page py-10 sm:py-12 lg:py-10">
        <p className="text-sm font-medium text-accent">
          Featured undergraduate thesis
        </p>

        {loading && (
          <SectionStatus status="loading" message="Loading thesis..." />
        )}

        {error && (
          <SectionStatus
            status="error"
            message="The thesis could not be loaded. Please check your connection and try again."
            onRetry={retry}
          />
        )}

        {!loading && !error && !thesis && (
          <SectionStatus
            status="empty"
            message="Thesis details are not available yet."
          />
        )}

        {thesis && (
          <>
            <Reveal>
              <h2 className="mt-3 max-w-4xl border-l-4 border-accent-soft pl-5 text-2xl font-semibold leading-snug sm:text-3xl">
                {thesis.title}
              </h2>

              {thesis.overview && (
                <p className="mt-6 max-w-3xl text-lg text-muted">
                  {thesis.overview}
                </p>
              )}

              {thesis.models.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium">Models evaluated</span>
                  <ul className="flex flex-wrap gap-2">
                    {thesis.models.map((model) => (
                      <li key={model}>
                        <Badge variant="accent">{model}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {thesis.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {thesis.links.map((link) => (
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
              <ol className="mt-8 grid gap-4 md:grid-cols-2">
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
                        <h3 className="mt-1 text-lg font-semibold">
                          {block.title}
                        </h3>
                        {block.type === "text" ? (
                          <p className="mt-3 text-muted">{thesis[block.key]}</p>
                        ) : (
                          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
                            {thesis[block.key].map((item) => (
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
          </>
        )}
      </div>
    </section>
  );
}