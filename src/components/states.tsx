import { Loader2 } from "lucide-react";

export function LoadingState({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-24 text-sm text-muted-foreground">
      <Loader2 className="size-4 animate-spin" />
      <span>{label}</span>
    </div>
  );
}

export function ErrorState({ error }: { error: Error }) {
  return (
    <div className="py-24 text-center">
      <p className="text-sm font-medium">Something went wrong.</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{error.message}</p>
    </div>
  );
}

export function EmptyState({ label = "Nothing here yet." }: { label?: string }) {
  return (
    <div className="py-24 text-center text-sm text-muted-foreground">{label}</div>
  );
}
