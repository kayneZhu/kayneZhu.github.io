import { Github, GraduationCap, Linkedin, Mail, type LucideIcon } from "lucide-react";

import photo from "@/assets/photo.jpg";
import { Section } from "@/components/sections/Section";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/config/profile";
import { siteConfig } from "@/config/site";

const subsectionHeadingClassName =
  "text-sm font-semibold uppercase tracking-wider text-muted-foreground";

function iconLinks(): { href: string; label: string; icon: LucideIcon }[] {
  const links: { href: string; label: string; icon: LucideIcon }[] = [
    { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
    { href: siteConfig.social.linkedin, label: "LinkedIn", icon: Linkedin },
  ];

  if (siteConfig.social.github !== "") {
    links.push({ href: siteConfig.social.github, label: "GitHub", icon: Github });
  }

  if (siteConfig.social.scholar !== "") {
    links.push({
      href: siteConfig.social.scholar,
      label: "Google Scholar",
      icon: GraduationCap,
    });
  }

  return links;
}

export function Biography() {
  const links = iconLinks();

  return (
    <Section id="biography" className="border-t-0">
      <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-14">
        <div className="flex flex-col items-center text-center">
          <img
            src={photo}
            alt="Yukang Zhu"
            width={320}
            height={320}
            loading="eager"
            className="h-40 w-40 rounded-full object-cover"
          />
          <h1 className="mt-4 text-xl font-semibold">{siteConfig.name}</h1>
          <p className="mt-1 text-muted-foreground">{siteConfig.role}</p>
          <p className="mt-1 text-sm text-muted-foreground">{siteConfig.affiliation}</p>
          <div className="mt-4 flex items-center gap-1">
            {links.map((link) => {
              const Icon = link.icon;
              const external = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                >
                  <Icon aria-hidden />
                </a>
              );
            })}
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="text-2xl font-semibold tracking-tight">Biography</h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/90">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className={subsectionHeadingClassName}>Interests</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {profile.interests.map((interest) => (
                  <li key={interest} className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="size-1 shrink-0 rounded-full bg-muted-foreground"
                    />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={subsectionHeadingClassName}>Education</h3>
              <div className="mt-3 space-y-4">
                {profile.education.map((item) => (
                  <div key={item.institution}>
                    <p className="text-sm font-medium">{item.degree}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.institution} · {item.period}
                    </p>
                    <p className="text-xs text-muted-foreground">GPA: {item.gpa}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
