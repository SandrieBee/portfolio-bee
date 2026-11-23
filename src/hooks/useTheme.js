import { useCallback, useEffect, useState } from "react";
import { getStoredPreference, storePreference } from "../utils/theme";

const DARK_QUERY = "(prefers-color-scheme: dark)";

export function useTheme() {
  const [preference, setPreferenceState] = useState(getStoredPreference);
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia(DARK_QUERY).matches,
  );

  // Follow the device while it changes (only matters in Auto mode).
  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY);
    const onChange = (event) => setSystemDark(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const resolved =
    preference === "auto" ? (systemDark ? "night" : "light") : preference;

  // Keep the <html> attribute in sync with the resolved theme.
  useEffect(() => {
    document.documentElement.dataset.theme = resolved;
  }, [resolved]);

  const setPreference = useCallback((next) => {
    storePreference(next);
    setPreferenceState(next);
  }, []);

  return { preference, resolved, setPreference };
}