import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [
    siteConfig.social.github && { label: "GitHub", href: siteConfig.social.github },
    siteConfig.social.twitter && { label: "Twitter", href: siteConfig.social.twitter },
    siteConfig.social.linkedin && { label: "LinkedIn", href: siteConfig.social.linkedin },
    siteConfig.email && { label: "Email", href: `mailto:${siteConfig.email}` },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="container flex flex-col items-start justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>
          © {year} {siteConfig.name}
        </p>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
