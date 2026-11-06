export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly period: string;
  readonly gpa: string;
  readonly details?: string;
}

export interface Advisor {
  readonly name: string;
  readonly url?: string;
}

export interface ExperienceItem {
  readonly title: string;
  readonly role: string;
  readonly org: string;
  readonly location: string;
  readonly period: string;
  readonly advisor?: Advisor;
  readonly highlights: readonly string[];
}

export interface Publication {
  readonly title: string;
  readonly authors: readonly string[];
  readonly venue: string;
  readonly year: number;
  readonly status?: string;
  readonly note?: string;
  readonly equalContribution?: boolean;
}

export interface Profile {
  readonly interests: readonly string[];
  readonly education: readonly Education[];
  readonly experience: {
    readonly research: readonly ExperienceItem[];
    readonly industry: readonly ExperienceItem[];
  };
  readonly publications: readonly Publication[];
}

export const profile: Profile = {
  interests: [
    "LLM Alignment & Reasoning",
    "Reinforcement Learning (RLVR)",
    "Self-evolving LLM Agents",
    "Software Architecture of AI Systems",
  ],
  education: [
    {
      degree: "M.S. in Electrical and Computer Engineering",
      institution: "UCLA",
      location: "Los Angeles, USA",
      period: "Sep. 2022 – Dec. 2023",
      gpa: "3.89/4.0",
      details:
        "Major core courses: Large-scale Data Mining, Advanced Computer Architecture, Secure and Trusted Edge Computing.",
    },
    {
      degree: "B.E. in Electronic Science and Technology",
      institution: "Shanghai Jiao Tong University",
      location: "Shanghai, China",
      period: "Sep. 2018 – Jun. 2022",
      gpa: "3.6/4.3",
      details:
        "Major core courses: Thinking and Approach of Programming, Artificial Intelligence System Design and Practice, Reinforcement Learning.",
    },
  ],
  experience: {
    research: [
      {
        title: "OvOSkills: Cognitive-Driven Skill Evolution of Language Agents",
        role: "Research Intern",
        org: "Westlake University",
        location: "Hangzhou, China",
        period: "Mar. 2026 – Present",
        advisor: { name: "Tailin Wu", url: "https://tailin.org/" },
        highlights: [
          "Proposed OvOSkills, a self-evolving LLM agent framework that adapts through file-level skill editing guided by a structured SWDV (Sense, World-model, Decide, Value) cognitive scaffold for precise failure attribution, without any model fine-tuning.",
          "Designed an online evolution engine that aggregates SWDV-structured episode reflections into targeted skill-library updates (create/modify/delete), so the agent's learned state stays explicit and portable across runs.",
          "Evaluated across SWE-bench Lite, Terminal-Bench, IFBench, and SEABench with 3 backbone LLMs; OvOSkills consistently outperforms prompt optimization baselines and demonstrates cross-benchmark skill transfer to unseen domains.",
        ],
      },
      {
        title: "Teacher-Guided Curriculum for Data-Efficient RLVR",
        role: "Research Assistant",
        org: "Amazon Web Services (AWS)",
        location: "Remote",
        period: "Dec. 2025 – May 2026",
        advisor: {
          name: "Zhen Han",
          url: "https://sites.google.com/view/zhenhan/home?authuser=0/",
        },
        highlights: [
          "Addressed the data inefficiency of Reinforcement Learning with Verifiable Rewards (RLVR), where problems beyond a model's reasoning boundary yield uniformly failed rollouts and no learning signal. Designed a teacher-guided curriculum that unlocks these inert problems by using partial reasoning traces from a stronger model as graded hints.",
          "Proposed Monotone Frontier Curriculum (MFC), a single-hyperparameter algorithm that ratchets per-sample guidance down to zero through a success-only update, weaning the policy off hints that are unavailable at test time.",
          "Achieved ~16× data efficiency: training on only 128 unsolvable problems matched or exceeded baseline Group Relative Policy Optimization (GRPO) on 2,000 mixed-difficulty problems across 2 models and 9 benchmarks, while expanding the reasoning boundary (pass@k gains at every k up to 256).",
        ],
      },
      {
        title: "Waveform Fitting and Analysis for Time Modulated Arrays",
        role: "Research Assistant",
        org: "SJTU",
        location: "Shanghai, China",
        period: "Apr. 2021 – May 2022",
        advisor: {
          name: "Xianling Liang",
          url: "https://www.researchgate.net/profile/Xian-Ling-Liang",
        },
        highlights: [
          "Developed a MATLAB App Designer platform for TMA analysis, implementing Hilbert transform and peak interpolation to extract envelopes from non-ideal modulation waveforms and automate spectrum analysis.",
          "Validated 2-bit phase-shift waveform reconstruction against ADS electromagnetic simulations; published in the Chinese Journal of Radio Science and secured a software copyright.",
        ],
      },
      {
        title: "DQN-Based Resource Allocation in V2V Communications",
        role: "Research Assistant",
        org: "UCSD",
        location: "Remote",
        period: "Oct. 2020 – Oct. 2021",
        advisor: { name: "Yancong Deng" },
        highlights: [
          "Proposed a Deep Q-Network (DQN) framework to optimize resource allocation in LTE networks underlaid with Vehicle-to-Vehicle (V2V) links, maximizing Cellular User Equipment (CUE) throughput while satisfying V2V reliability and latency constraints.",
          "Modeled urban traffic with cellular automata and designed a multi-objective reward function. The trained agent outperformed greedy baselines on CUE throughput under the same constraints.",
        ],
      },
    ],
    industry: [
      {
        title: "TikTok – Global E-Commerce",
        role: "Software Engineer",
        org: "TikTok",
        location: "Shenzhen, China",
        period: "Jun. 2024 – Feb. 2026",
        highlights: [
          "Developed and maintained core modules of the TikTok Shop Seller Center (Web & Mobile App), a production platform serving 100,000+ weekly active sellers.",
          "Built the agent harness behind seller-facing LLM features, covering tool access, memory, and context management around base models, so that product teams could ship agents without touching model internals.",
          "Brought AI agents into the internal development pipeline, covering technical design, code development, testing, and deployment, and aligned Algorithm, Product, and Engineering teams on shared standards for AI-assisted software engineering (AI4SE).",
        ],
      },
      {
        title: "SiriusXM",
        role: "Software Engineer Intern",
        org: "SiriusXM",
        location: "Los Angeles, USA",
        period: "Jun. 2023 – Aug. 2023",
        highlights: [
          "Built a TypeScript/React diagnostic platform for the SiriusXM Streaming SDK, whose real-time metrics dashboard automated regression testing and exposed latency bottlenecks in the playback path.",
        ],
      },
    ],
  },
  publications: [
    {
      title: "Unlocking the Unsolvable: Teacher-Guided Curriculum for Data-Efficient RLVR",
      authors: ["Yukang Zhu", "Zhen Han"],
      venue: "Findings of EMNLP 2026",
      year: 2026,
      status: "Accepted",
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
      venue: "ACL ARR 2026 October",
      year: 2026,
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
    },
    {
      title:
        "A Model Simulation and Analyses for Resource Allocation Scheme in V2V Communications with Deep Q-Network",
      authors: ["Yukang Zhu", "Yancong Deng", "Qiannan Ji"],
      venue: "Proc. IEEE IEMCON, 2021",
      year: 2021,
      note: "Best Paper Award",
    },
  ],
};
