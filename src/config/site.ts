/**
 * Site-wide settings. Set `features.blog` to true to restore blog routes and the nav link.
 */
interface SiteConfig {
  name: string;
  shortName: string;
  roles: readonly string[];
  location: string;
  emails: readonly [string, ...string[]];
  about: readonly string[];
  social: {
    github: string;
    twitter: string;
    linkedin: string;
    scholar: string;
  };
  features: {
    blog: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: "Yukang (Kayne) Zhu",
  shortName: "Yukang Zhu",
  roles: ["Researcher, LLM Reasoning & Agents", "Software Engineer"],
  location: "Hangzhou, China",
  emails: ["zhuyukang2000@gmail.com", "yukangzhu@g.ucla.edu"],
  about: [
    "I'm a researcher and software engineer working on large language models. Most of my time goes into two questions: how to teach models to reason efficiently, and how to build agents that get better at their work by learning from their own mistakes.",
    "Before this, I spent almost two years at TikTok as a software engineer on the e-commerce team. I worked on the Seller Center web & mobile applications and later on the agent infrastructure behind its LLM features. I also explored agentic development in depth, working to integrate AI capabilities across our entire engineering and business workflow. Shipping things to real users changed how I think about research. These days I care a lot about whether an idea still works once it leaves the paper.",
    "Right now I'm a research intern at Westlake University in Hangzhou, advised by Tailin Wu. I did my master's at UCLA and my undergrad at Shanghai Jiao Tong University.",
  ],
  social: {
    github: "https://github.com/kayneZhu",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/yukang-zhu-b33a6a250/",
    scholar: "",
  },
  features: {
    blog: false,
  },
};
