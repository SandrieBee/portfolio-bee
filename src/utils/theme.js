export const THEME_STORAGE_KEY = "portfolio-theme";

// "auto" means: follow the device (Night if it prefers dark, otherwise Light).
export const THEME_PREFERENCES = ["light", "night", "pink", "auto"];

export function getStoredPreference() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return THEME_PREFERENCES.includes(stored) ? stored : "auto";
  } catch {
    return "auto";
  }
}

export function storePreference(preference) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    // Storage can be blocked. The theme still applies for this visit.
  }
}

export function resolveTheme(preference) {
  if (preference !== "auto") return preference;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "night"
    : "light";
}

export function applyTheme(preference) {
  document.documentElement.dataset.theme = resolveTheme(preference);
}