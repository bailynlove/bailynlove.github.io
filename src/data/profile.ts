export const siteMeta = {
  title: "Chaoxiang Xie | Academic Homepage",
  description:
    "Academic homepage for Chaoxiang Xie, M.Sc. student at Hohai University working on multimodal learning, NLP, and code intelligence.",
};

export const hero = {
  name: "Chaoxiang Xie",
  chineseName: "谢超祥",
  role: "M.Sc. Student in Library & Information Studies",
  affiliation:
    "Hohai University · Research Assistant at LLMSE, Shanghai Jiao Tong University",
  location: "Shanghai, China",
  summary:
    "My research interests lie in multimodal learning and natural language processing for software engineering.",
  status:
    "Currently, I focus on multimodal coding agents and image-assisted code intelligence, especially how visual interfaces and rendered code images can support code generation, understanding, and reasoning.",
  tags: [
    "Multimodal Learning",
    "Natural Language Processing",
    "Multimodal Coding Agent",
    "Image-assisted Code Intelligence",
    "Software Engineering",
  ],
  links: [
    { label: "CV", href: "cv/" },
    { label: "Publications", href: "#publications" },
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
  ],
  contacts: [
    {
      label: "Email",
      href: "mailto:xcxnevergiveup@hhu.edu.cn",
      value: "xcxnevergiveup@hhu.edu.cn",
    },
    {
      label: "GitHub",
      href: "https://github.com/bailynlove",
      value: "github.com/bailynlove",
    },
  ],
};

export const highlights = [
  {
    label: "Current Research",
    value: "Multimodal coding agents",
  },
  {
    label: "Lab",
    value: "LLMSE, Shanghai Jiao Tong University",
  },
  {
    label: "Master's GPA",
    value: "87/100",
  },
  {
    label: "Industry Experience",
    value: "2 years in Python backend engineering",
  },
];

export const researchAreas = [
  {
    title: "Multimodal Coding Agent",
    description:
      "Investigating agentic frameworks that generate runnable code from UI design images and natural-language functional requirements, bridging visual interface understanding with end-to-end software implementation.",
  },
  {
    title: "Image-assisted Code Intelligence",
    description:
      "Studying how image-based code representations can support code generation, understanding, and reasoning, including fine-tuning multimodal models for more effective visual-assisted code intelligence.",
  },
  {
    title: "Multimodal Code Understanding",
    description:
      "Building and evaluating visual code representations, benchmarks, and experimental pipelines for multimodal LLMs in software engineering tasks.",
  },
];

export const news = [
  {
    date: "2026-04-21",
    text: "ClassEval-Pro was accepted to AIWare 2026.",
  },
  {
    date: "2026-04-17",
    text: "CodeOCR was accepted to ISSTA 2026.",
  },
  {
    date: "2024",
    text: "Joined the LLM for Software Engineering Lab at Shanghai Jiao Tong University as a research assistant.",
  },
  {
    date: "2024",
    text: "Started the M.Sc. program in Library and Information Studies at Hohai University.",
  },
  {
    date: "2024",
    text: "Won the Excellent Work Award at the Intel Mini Hackathon for a fine-tuned LLM project.",
  },
];

export const education = [
  {
    period: "Sep. 2024 - Present",
    title: "M.Sc. in Library and Information Studies",
    organization: "Hohai University",
    location: "Nanjing, China",
    details: [
      "Focus on data mining with GPA 87/100.",
      "Relevant coursework: Business Intelligence Analysis and Mining, Advanced Information Retrieval, Machine Learning Applications.",
    ],
  },
  {
    period: "Sep. 2018 - Jun. 2022",
    title: "B.Sc. in Information Management and Information System",
    organization: "Hohai University",
    location: "Nanjing, China",
    details: [
      "Graduated with GPA 85/100.",
      "Relevant coursework: Statistics, Database Principles, Data Structures, Information Security, Calculus, Linear Algebra.",
    ],
  },
];

export const researchExperience = [
  {
    period: "Oct. 2024 - Present",
    title: "Research Assistant",
    organization:
      "LLM for Software Engineering Lab (LLMSE), Shanghai Jiao Tong University",
    location: "Shanghai, China",
    advisor: "Advisor: Prof. Xiaodong Gu",
    details: [
      "Spearheaded engineering for the CodeOCR experimental pipeline, a systematic study of multimodal LLMs for code understanding.",
      "Implemented visual code representation methods that transform source code into rendered images, achieving up to 8x token compression while preserving semantic and structural information.",
      "Contributed to ClassEval-Pro, a cross-domain benchmark for class-level code generation, including benchmark construction, evaluation design, and analysis across multiple generation strategies.",
      "Conducted evaluations on code completion, clone detection, and class-level code generation tasks, analyzing how model capability, visual cues, and generation strategies affect code understanding and synthesis performance.",
      "Investigating multimodal coding agents that generate runnable code from UI design images and natural-language functional requirements.",
      "Studying image-assisted code intelligence, including fine-tuning multimodal models to support visual-assisted code generation, understanding, and reasoning.",
    ],
  },
  {
    period: "Jun. 2023 - Present",
    title: "Independent Researcher",
    organization: "Institute of Management Science, Hohai University",
    location: "Nanjing, China",
    details: [
      "Proposed the Multi-Detector Credibility Fusion Network for detecting sophisticated fake reviews, including human-written and AI-generated content.",
      "Designed a hierarchical fusion mechanism combining textual-temporal, visual, and relational graph branches for complementary credibility cues.",
      "Built a large annotated multimodal dataset with 33k+ reviews and 50k+ images, including LLM-generated content, and achieved 98.77% accuracy beyond prior baselines.",
      "Conducted VLM-based construction-site inspection research for vehicle-washing compliance, using vision-language recognition and chain-of-thought reasoning to localize inspection regions, judge compliance, and structure records for agent-based querying.",
    ],
  },
];

export const professionalExperience = [
  {
    period: "Jul. 2022 - Jun. 2024",
    title: "Software Engineer (Python Backend)",
    organization: "Inspur Morning Cloud Technologies Co., Ltd.",
    location: "Shenzhen, China",
    details: [
      "Developed and maintained backend modules for an enterprise Human Capital Management system, including data import/export, work alerts, data push, and single sign-on services.",
      "Designed multi-model data import/export workflows for concurrent data processing and cross-model data association in enterprise business scenarios.",
      "Implemented a tree-traversal export module for complex tables with multi-level headers and structured data relationships.",
      "Built a configurable work-alert module with rule-based monitoring, notification targets, message templates, channels, and scheduled delivery.",
      "Delivered additional platform features including message withdrawal, data-push conflict prevention, and permission verification during data import; received the R&D Rising Star Award and contributed to one pending patent.",
    ],
  },
];

export const publications = [
  {
    title:
      "CodeOCR: On the Effectiveness of Vision Language Models in Code Understanding",
    authors:
      "Yuling Shi, Chaoxiang Xie, Zhensu Sun, Yeheng Chen, Chenxu Zhang, Longfei Yun, Chengcheng Wan, Hongyu Zhang, David Lo, Xiaodong Gu",
    venue: "Proceedings of ISSTA 2026",
    year: "2026",
    description:
      "Studies code-as-image representations for multimodal code understanding and shows how visual encoding can improve efficiency while remaining competitive on downstream tasks.",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2602.01785",
      },
    ],
    status: "Conference",
  },
  {
    title: "ClassEval-Pro: A Cross-Domain Benchmark for Class-Level Code Generation",
    authors:
      "Yeheng Chen*, Chaoxiang Xie*, Yuling Shi, Wenhao Zeng, Yongpan Wang, Hongyu Zhang, Xiaodong Gu",
    author_notes: "* Equal contribution / co-first authors (Yeheng Chen and Chaoxiang Xie)",
    venue: "Proceedings of AIware 2026, Benchmark & Dataset Track",
    year: "2026",
    description: "Introduces ClassEval-Pro, a benchmark of 300 class-level code generation tasks across 11 domains, built through an automated three-stage pipeline with complexity enhancement, cross-domain class composition, and real-world GitHub code integration. Each task is validated by an LLM Judge Ensemble and test suites with over 90% line coverage. Experiments on five frontier LLMs under five generation strategies show that the best model reaches only 45.6% class-level Pass@1, while error analysis highlights logic and dependency errors as the main bottlenecks.",
    links: [],
    status: "Conference",
  },
  {
    title:
      "Multi-Detector Credibility Fusion Network: A Neural Architecture for Robust Multimodal Review Credibility Assessment",
    authors: "Chaoxiang Xie, Ming Li",
    venue: "International Journal of Intelligent Systems",
    year: "2026",
    description:
      "Presents MDCFN, a multimodal architecture for robust review credibility assessment across textual, visual, and relational signals.",
    links: [],
    status: "Under Review",
  },
];

export const projects = [
  {
    period: "Jun. 2024",
    title: "Simulating Conversations with Fine-Tuned LLMs",
    stack: "Python, PyTorch, LoRA, MLX",
    details: [
      "Fine-tuned Qwen-7B-Chat with LoRA on a custom Rednote dataset to mimic persona-based conversational styles.",
      "Deployed the model for real-time interaction and won the Excellent Work Award at the Intel Mini Hackathon.",
    ],
  },
  {
    period: "Mar. 2022 - Apr. 2022",
    title: "E-sports Player Style Clustering Analysis",
    stack: "Python, Scikit-learn",
    details: [
      "Built a pipeline to crawl more than 100 matches of top-ranked players and extract 11 key performance indicators.",
      "Applied K-means clustering to categorize playstyles and generate strategic insights for team composition.",
    ],
  },
];

export const skills = {
  technical: [
    "Python",
    "PyTorch",
    "SQL",
    "Docker",
    "Linux",
    "LaTeX",
    "Git",
    "Scikit-learn",
  ],
  languages: [
    "English (IELTS 7.0, Reading 8.5)",
    "Cantonese",
    "Mandarin (Native)",
  ],
};

export const awards = [
  "R&D Rising Star Award, Inspur Group (2022)",
  "Excellent Work Award, Intel LLM Challenge / Intel Mini Hackathon (2024)",
];

export const misc = {
  hometown: "Zhongshan, a picturesque city in southern China.",
  interests: [
    "Tennis",
    "Table tennis",
    "Badminton",
    "Photography",
    "Eason Chan",
    "Aviation",
  ],
  note:
    "Outside research and engineering, I like sports, photography, and long-horizon technical ideas that feel a bit like building Jarvis.",
};
