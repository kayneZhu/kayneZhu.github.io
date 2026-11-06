/**
 * Site-wide settings. Set `features.blog` to true to restore blog routes and the nav link.
 */
interface SiteConfig {
  name: string;
  role: string;
  affiliation: string;
  location: string;
  email: string;
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
  name: "Yukang Zhu",
  role: "Software Engineer & Researcher",
  affiliation: "Research Intern, Westlake University",
  location: "Hangzhou, China",
  email: "yukangzhu@g.ucla.edu",
  about: [
    "I am a software engineer and researcher based in Hangzhou, China. I received an M.S. in Electrical and Computer Engineering from the University of California, Los Angeles, and a B.E. in Electronic Science and Technology from Shanghai Jiao Tong University.",
    "At TikTok's Global E-Commerce I worked as a software engineer, building core modules of the Seller Center and the agent harness behind seller-facing LLM features. My research focuses on data-efficient reinforcement learning with verifiable rewards (RLVR) and self-evolving LLM agents, and I am currently a research intern at Westlake University.",
  ],
  social: {
    github: "",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/yukang-zhu-b33a6a250/",
    scholar: "",
  },
  features: {
    blog: false,
  },
};
