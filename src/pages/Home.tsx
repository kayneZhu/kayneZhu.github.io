import { Biography } from "@/components/sections/Biography";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Publications } from "@/components/sections/Publications";

export function Home() {
  return (
    <div className="container">
      <div className="mx-auto max-w-4xl">
        <Biography />
        <Experience />
        <Publications />
        <Contact />
      </div>
    </div>
  );
}
