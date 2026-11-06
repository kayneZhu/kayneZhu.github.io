import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-32 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link to="/" className={buttonVariants({ variant: "outline", className: "mt-8" })}>
        Go home
      </Link>
    </div>
  );
}
