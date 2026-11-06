import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 border-t border-border/60 py-16 sm:py-20", className)}
    >
      {title ? (
        <>
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <div className="mt-8">{children}</div>
        </>
      ) : (
        children
      )}
    </section>
  );
}
