import { Linkedin, Mail, MapPin } from "lucide-react";

import { Section } from "@/components/sections/Section";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="leading-relaxed text-foreground/90">The best way to reach me is by email.</p>
      <ul className="mt-6 space-y-3 text-sm">
        <li className="flex items-center gap-3">
          <Mail className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          <a
            href={`mailto:${siteConfig.email}`}
            className="underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
        </li>
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
      </ul>
    </Section>
  );
}
