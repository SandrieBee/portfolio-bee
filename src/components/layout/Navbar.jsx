import { useEffect, useState } from "react";
import { Link } from "react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { MenuIcon, CancelIcon } from "@hugeicons/core-free-icons";
import { NAV_LINKS, SITE } from "../../constants/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link
          to="/"
          onClick={() => {
            close();
            window.scrollTo({ top: 0 });
          }}
          className="font-heading text-lg font-semibold text-ink"
        >
          {SITE.name}
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-ink transition-colors hover:bg-surface lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <HugeiconsIcon icon={open ? CancelIcon : MenuIcon} size={24} />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-canvas lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={close}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}