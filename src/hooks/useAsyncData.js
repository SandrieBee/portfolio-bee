import { useCallback, useEffect, useState } from "react";

// Runs an async fetcher and tracks loading, error, and data.
// The fetcher must be a stable function (defined outside components).
export function useAsyncData(fetcher) {
  const [state, setState] = useState({ data: null, error: null, loading: true });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let ignore = false;

    fetcher()
      .then((data) => {
        if (!ignore) setState({ data, error: null, loading: false });
      })
      .catch((error) => {
        console.error(error);
        if (!ignore) setState({ data: null, error, loading: false });
      });

    return () => {
      ignore = true;
    };
  }, [fetcher, attempt]);

  const retry = useCallback(() => {
    setState({ data: null, error: null, loading: true });
    setAttempt((count) => count + 1);
  }, []);

  return { ...state, retry };
}