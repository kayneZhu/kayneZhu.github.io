import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { Section } from "@/components/sections/Section";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="leading-relaxed text-foreground/90">I'm always happy to talk about collaborations, so feel free to reach out anytime. Email is the easiest way to reach me.</p>
      <ul className="mt-6 space-y-3 text-sm">
        {siteConfig.emails.map((email) => (
          <li key={email} className="flex items-center gap-3">
            <Mail className="size-4 shrink-0 text-muted-foreground" aria-hidden />
            <a href={`mailto:${email}`} className="underline-offset-4 hover:underline">
              {email}
            </a>
          </li>
        ))}
        <li className="flex items-center gap-3">
          <MapPin className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          <span>{siteConfig.location}</span>
        </li>
        <li className="flex items-center gap-3">
          <Linkedin className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
        </li>
        {siteConfig.social.github !== "" && (
          <li className="flex items-center gap-3">
            <Github className="size-4 shrink-0 text-muted-foreground" aria-hidden />
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              GitHub
            </a>
          </li>
        )}
      </ul>
    </Section>
  );
}
