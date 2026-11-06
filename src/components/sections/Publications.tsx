import { Section } from "@/components/sections/Section";
import { Badge } from "@/components/ui/badge";
import { profile, type Publication } from "@/config/profile";

function isSelfAuthor(author: string): boolean {
  return author === "Yukang Zhu" || author === "Yukang Zhu*";
}

function Authors({ authors }: { authors: readonly string[] }) {
  return (
    <p className="mt-1 text-sm text-muted-foreground">
      {authors.map((author, index) => (
        <span key={author}>
          {index > 0 ? ", " : null}
          <span className={isSelfAuthor(author) ? "font-medium text-foreground" : undefined}>
            {author}
          </span>
        </span>
      ))}
    </p>
  );
}

function Venue({ publication }: { publication: Publication }) {
  return (
    <p className="mt-1 text-sm text-muted-foreground">
      <span className="italic">{publication.venue}</span>
      {publication.status ? (
        <Badge className="ml-2 align-middle not-italic">{publication.status}</Badge>
      ) : null}
      {publication.note ? (
        <Badge className="ml-2 align-middle not-italic">{publication.note}</Badge>
      ) : null}
      {publication.links ? (
        <span className="ml-3 inline-flex gap-3 align-middle">
          {publication.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </span>
      ) : null}
    </p>
  );
}

export function Publications() {
  const showEqualContribution = profile.publications.some(
    (publication) => publication.equalContribution === true,
  );

  return (
    <Section id="publications" title="Publications">
      <ol className="list-decimal space-y-8 pl-5 marker:text-muted-foreground">
        {profile.publications.map((publication) => (
          <li key={publication.title} className="pl-1">
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {publication.tags.join(" · ")}
            </p>
            <p className="font-medium">{publication.title}</p>
            <Authors authors={publication.authors} />
            <Venue publication={publication} />
          </li>
        ))}
      </ol>
      {showEqualContribution ? (
        <p className="mt-6 text-xs text-muted-foreground">* Equal contribution</p>
      ) : null}
    </Section>
  );
}
