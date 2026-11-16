import { SITE } from "../../constants/site";

const linkClass = "text-muted transition-colors hover:text-accent hover:underline";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
        <ul className="flex gap-5 text-sm">
          <li>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`} className={linkClass}>
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}