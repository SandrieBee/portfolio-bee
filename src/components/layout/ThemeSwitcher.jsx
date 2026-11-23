import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ColorsIcon,
  FavouriteIcon,
  MoonIcon,
  SunIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { useTheme } from "../../hooks/useTheme";

const OPTIONS = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "night", label: "Night", icon: MoonIcon },
  { value: "pink", label: "Pink", icon: FavouriteIcon },
  { value: "auto", label: "Auto", hint: "Follows your device", icon: ColorsIcon },
];

const ICON_BY_THEME = {
  light: SunIcon,
  night: MoonIcon,
  pink: FavouriteIcon,
};

export default function ThemeSwitcher() {
  const { preference, resolved, setPreference } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Move focus to the selected option when the menu opens.
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector('[aria-checked="true"]')?.focus();
  }, [open]);

  const choose = (value) => {
    setPreference(value);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const onMenuKeyDown = (event) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const items = [...menuRef.current.querySelectorAll('[role="menuitemradio"]')];
    const current = items.indexOf(document.activeElement);
    const step = event.key === "ArrowDown" ? 1 : -1;
    items[(current + step + items.length) % items.length]?.focus();
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Change theme"
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-surface hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <HugeiconsIcon icon={ICON_BY_THEME[resolved]} size={20} />
      </button>

      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Theme"
          onKeyDown={onMenuKeyDown}
          className="absolute right-0 top-full z-50 mt-2 w-52 rounded-card border border-line bg-card p-1 shadow-lift"
        >
          {OPTIONS.map(({ value, label, hint, icon }) => {
            const selected = preference === value;
            return (
              <button
                key={value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => choose(value)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-ink transition-colors hover:bg-surface focus-visible:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <HugeiconsIcon icon={icon} size={18} className="shrink-0 text-muted" />
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">{label}</span>
                  {hint && <span className="block text-xs text-muted">{hint}</span>}
                </span>
                {selected && (
                  <HugeiconsIcon icon={Tick02Icon} size={16} className="shrink-0 text-accent" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}