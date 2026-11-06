import { Section } from "@/components/sections/Section";
import { profile, type ExperienceItem, type Person } from "@/config/profile";
import { cn } from "@/lib/utils";

function PersonCredit({ person }: { person: Person }) {
  return (
    <span className="text-muted-foreground">
      {` · ${person.role}: `}
      {person.url !== undefined ? (
        <a
          href={person.url}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 transition-colors hover:text-foreground"
        >
          {person.name}
        </a>
      ) : (
        person.name
      )}
      {person.affiliation !== undefined ? ` (${person.affiliation})` : null}
    </span>
  );
}

function ExperienceEntry({ item }: { item: ExperienceItem }) {
  return (
    <div className="min-w-0">
      <p className="font-medium">{item.title}</p>
      <p className="text-sm text-foreground/80">
        {item.employer}
        {item.person !== undefined ? <PersonCredit person={item.person} /> : null}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div>
        {profile.experience.map((item, index) => (
          <div
            key={`${item.title}-${item.employer}-${item.period}`}
            className={cn(
              "grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-8 py-6",
              index < profile.experience.length - 1 && "border-b border-border/40",
            )}
          >
            <div>
              <p className="text-sm tabular-nums text-muted-foreground">{item.period}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.location}</p>
            </div>
            <ExperienceEntry item={item} />
          </div>
        ))}
      </div>
    </Section>
  );
}
