export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
}

export interface Person {
  readonly role: "Advisor" | "Collaborator";
  readonly name: string;
  readonly url?: string;
  readonly affiliation?: string;
}

export interface ExperienceItem {
  readonly title: string;
  readonly employer: string;
  readonly period: string;
  readonly location: string;
  readonly summary: string;
  readonly person?: Person;
}

export interface Publication {
  readonly title: string;
  readonly authors: readonly string[];
  readonly venue: string;
  readonly year: number;
  readonly tags: readonly string[];
  readonly status?: string;
  readonly note?: string;
  readonly equalContribution?: boolean;
  readonly links?: readonly {
    readonly label: string;
    readonly url: string;
  }[];
}

export interface Profile {
  readonly interests: readonly string[];
  readonly education: readonly Education[];
  readonly experience: readonly ExperienceItem[];
  readonly publications: readonly Publication[];
}

export const profile: Profile = {
  interests: [
    "LLM Alignment & Reasoning",
    "Continual Learning of Language Agents",
    "Software Architecture of AI Systems",
    "Accountable and Responsible AI",
  ],
  education: [
    {
      degree: "M.S. in Electrical and Computer Engineering",
      institution: "University of California, Los Angeles",
      period: "2022 – 2023",
    },
    {
      degree: "B.E. in Electronic Science and Technology",
      institution: "Shanghai Jiao Tong University",
      period: "2018 – 2022",
    },
  ],
  experience: [
    {
      title: "Research Intern",
      employer: "Westlake University",
      period: "Mar 2026 – Present",
      location: "",
      person: { role: "Advisor", name: "Tailin Wu", url: "https://tailin.org/" },
      summary:
        "I'm building agents that get better by rewriting their own skill files after each task, with no fine-tuning involved. Right now I'm testing them on coding, terminal, and instruction-following benchmarks.",
    },
    {
      title: "Independent Researcher",
      employer: "Independent",
      period: "Dec 2025 – May 2026",
      location: "",
      person: {
        role: "Collaborator",
        name: "Zhen Han",
        url: "https://sites.google.com/view/zhenhan/home",
        affiliation: "Amazon",
      },
      summary:
        "Worked with Zhen Han on getting RL training to learn from problems a model can't solve yet. With hints from a stronger model, 128 hard problems turned out to be enough to match a baseline trained on 2,000. The paper was accepted to Findings of EMNLP 2026.",
    },
    {
      title: "Full-time Software Engineer",
      employer: "TikTok · Global E-Commerce",
      period: "Jun 2024 – Feb 2026",
      location: "",
      summary:
        "Worked on the TikTok Shop Seller Center, which more than 100,000 sellers use every week on web and mobile. I built the agent harness behind its LLM features (tools, memory, context management) so product teams could ship agents without digging into the models. I also brought coding agents into our own workflow, from design docs all the way to testing and deployment.",
    },
    {
      title: "Research Assistant",
      employer: "Shanghai Jiao Tong University",
      period: "Apr 2021 – May 2022",
      location: "",
      person: {
        role: "Advisor",
        name: "Xianling Liang",
        url: "https://www.researchgate.net/profile/Xian-Ling-Liang",
      },
      summary:
        "Wrote MATLAB tools to analyze signals from time-modulated antenna arrays. The work turned into a journal paper and a software copyright.",
    },
    {
      title: "Research Assistant",
      employer: "University of California, San Diego",
      period: "Oct 2020 – Oct 2021",
      location: "",
      person: { role: "Advisor", name: "Yancong Deng" },
      summary:
        "Used deep reinforcement learning to allocate spectrum in vehicle-to-vehicle networks. This was my first paper, and it won Best Paper at IEEE IEMCON 2021.",
    },
  ],
  publications: [
    {
      title: "Unlocking the Unsolvable: Teacher-Guided Curriculum for Data-Efficient RLVR",
      authors: ["Yukang Zhu", "Zhen Han"],
      venue: "Findings of EMNLP 2026",
      year: 2026,
      tags: ["LLM Reasoning", "RLVR", "Curriculum Learning"],
      status: "Accepted",
      links: [
        { label: "Paper", url: "https://aclanthology.org/2026.findings-emnlp.931/" },
        { label: "arXiv", url: "https://arxiv.org/abs/2609.13997" },
      ],
    },
    {
      title: "OvOSkills: Cognitive-Driven Skill Evolution of Language Agents",
      authors: [
        "Yuru Jiang*",
        "Yukang Zhu*",
        "Wenhao Deng",
        "Tian Xia",
        "Ouyuan Chen",
        "Tailin Wu",
      ],
      venue: "Manuscript, 2026",
      year: 2026,
      tags: ["Language Agents", "Self-Improvement", "Skill Learning"],
      status: "Under review",
      equalContribution: true,
    },
    {
      title:
        "A Physics-Guided Learning Framework for Accurate and Generalizable EDFA Gain Spectrum Modeling with FourierKAN",
      authors: [
        "Qizhi Qiu*",
        "Yukang Zhu*",
        "Shaowen Xiang*",
        "Yihao Zhang",
        "Jingyu Wen",
        "Ziheng Zhang",
        "Weisheng Hu",
        "Qunbi Zhuge",
      ],
      venue: "Journal of Lightwave Technology, 2026",
      year: 2026,
      tags: ["Physics-Guided ML", "KAN", "Optical Networking"],
      status: "Under review",
      note: "Invited as OFC 2026 ML Challenge Winner",
      equalContribution: true,
    },
    {
      title:
        "Research on Harmonic Characteristics of Non-Ideal Time Modulation of 2-Bit Phase-Shifting Circuit",
      authors: [
        "Lei Xiang",
        "Yanchang Gao",
        "Yuchuan Luo",
        "Yukang Zhu",
        "Jingfeng Chen",
        "Ronghong Jin",
        "Xianling Liang",
      ],
      venue: "Chinese Journal of Radio Science, vol. 37, no. 6, pp. 933–939, 2022",
      year: 2022,
      tags: ["Signal Processing", "Time-Modulated Arrays"],
    },
    {
      title:
        "A Model Simulation and Analyses for Resource Allocation Scheme in V2V Communications with Deep Q-Network",
      authors: ["Yukang Zhu", "Yancong Deng", "Qiannan Ji"],
      venue: "Proc. IEEE IEMCON, 2021",
      year: 2021,
      tags: ["Deep RL", "Resource Allocation", "V2V Communications"],
      note: "Best Paper Award",
    },
  ],
};
