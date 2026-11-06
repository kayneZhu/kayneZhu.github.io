import { useEffect, useState } from "react";

type AsyncState<T> =
  | { status: "loading"; data: undefined; error: undefined }
  | { status: "success"; data: T; error: undefined }
  | { status: "error"; data: undefined; error: Error };

/**
 * Minimal data-fetching hook. Runs `factory` when any dependency changes and
 * tracks loading / success / error states while guarding against setting state
 * after unmount or a stale run.
 */
export function useAsync<T>(factory: () => Promise<T>, deps: unknown[]): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({
    status: "loading",
    data: undefined,
    error: undefined,
  });

  useEffect(() => {
    let active = true;
    setState({ status: "loading", data: undefined, error: undefined });

    factory()
      .then((data) => {
        if (active) setState({ status: "success", data, error: undefined });
      })
      .catch((err: unknown) => {
        if (active) {
          setState({
            status: "error",
            data: undefined,
            error: err instanceof Error ? err : new Error(String(err)),
          });
        }
      });

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
