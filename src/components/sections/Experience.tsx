import { Section } from "@/components/sections/Section";
import { profile, type ExperienceItem } from "@/config/profile";
import { cn } from "@/lib/utils";

const subsectionHeadingClassName =
  "text-sm font-semibold uppercase tracking-wider text-muted-foreground";

function ExperienceMeta({ item }: { item: ExperienceItem }) {
  return (
    <p className="mt-1 text-sm text-muted-foreground">
      {item.role}
      {" · "}
      {item.org}
      {item.advisor ? (
        <>
          {" · Advisor: "}
          {item.advisor.url ? (
            <a
              href={item.advisor.url}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              {item.advisor.name}
            </a>
          ) : (
            item.advisor.name
          )}
        </>
      ) : null}
    </p>
  );
}

function ExperienceGroup({
  heading,
  items,
}: {
  heading: string;
  items: readonly ExperienceItem[];
}) {
  return (
    <div>
      <h3 className={subsectionHeadingClassName}>{heading}</h3>
      <div>
        {items.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "grid gap-2 py-6 sm:grid-cols-[160px_1fr] sm:gap-8",
              index < items.length - 1 && "border-b border-border/40",
            )}
          >
            <div>
              <p className="text-sm tabular-nums text-muted-foreground">{item.period}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.location}</p>
            </div>
            <div className="min-w-0">
              <p className="font-medium">{item.title}</p>
              <ExperienceMeta item={item} />
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed marker:text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        <ExperienceGroup heading="Research" items={profile.experience.research} />
        <ExperienceGroup heading="Industry" items={profile.experience.industry} />
      </div>
    </Section>
  );
}
