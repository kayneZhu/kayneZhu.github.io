import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const sectionLinks = [
  { label: "Biography", href: "#biography" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
] as const;

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight">
          {siteConfig.name}
        </a>

        <nav className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            {sectionLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            {siteConfig.features.blog ? (
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                    isActive && "text-foreground",
                  )
                }
              >
                Blog
              </NavLink>
            ) : null}
          </div>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </nav>
      </div>
    </header>
  );
}
