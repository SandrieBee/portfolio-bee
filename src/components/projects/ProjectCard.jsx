import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import { CATEGORY_LABELS } from "../../constants/projects";

const linkClass =
  "rounded text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export default function ProjectCard({ project }) {
  const {
    title,
    role,
    description,
    technologies,
    categories,
    year,
    githubUrl,
    liveUrl,
    thumbnail,
  } = project;

  const meta = [role, year].filter(Boolean).join(" | ");

  const primary = githubUrl
    ? { href: githubUrl, label: "View GitHub" }
    : liveUrl
      ? { href: liveUrl, label: "View Live Demo" }
      : null;

  const showLiveLink = Boolean(githubUrl && liveUrl);

  return (
    <Card
      as="article"
      interactive
      flush
      className="flex h-full flex-col overflow-hidden"
    >
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={`${title} preview`}
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="aspect-video w-full border-b border-line bg-surface bg-[radial-gradient(#DEE0E4_1.5px,transparent_1.5px)] [background-size:22px_22px]"
        />
      )}

      <div className="flex flex-1 flex-col p-5">
        <ul className="flex flex-wrap gap-2" aria-label="Categories">
          {categories.map((id) => (
            <li key={id}>
              <Badge variant="accent">{CATEGORY_LABELS[id]}</Badge>
            </li>
          ))}
        </ul>

        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        {meta && <p className="mt-1 text-sm text-muted">{meta}</p>}
        {description && <p className="mt-3 text-sm text-muted">{description}</p>}

        {technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {technologies.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        )}

        {primary && (
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
            <Button
              as="a"
              href={primary.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {primary.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </Button>
            {showLiveLink && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Live demo
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}