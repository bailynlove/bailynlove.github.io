export const siteMeta = {
  title: "Chaoxiang Xie | Academic Homepage",
  description:
    "Academic homepage for Chaoxiang Xie, M.Sc. student at Hohai University and research assistant at LLMSE, Shanghai Jiao Tong University.",
};

export const hero = {
  name: "Chaoxiang Xie",
  chineseName: "谢超祥",
  role: "M.Sc. Student in Library & Information Studies",
  affiliation:
    "Hohai University · Research Assistant at LLMSE, Shanghai Jiao Tong University",
  location: "Shanghai, China",
  summary:
    "I work on multimodal learning, trustworthy NLP, and code understanding, with current projects spanning fake review detection and multimodal large models for software engineering.",
  status:
    "My recent work includes MDCFN for robust multimodal review credibility assessment and CodeOCR, a study of vision-language models for code understanding.",
  tags: [
    "Multimodal Learning",
    "Trustworthy NLP",
    "Code Understanding",
    "Software Engineering",
    "Data Mining",
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
    value: "Multimodal fake review detection",
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
    title: "Review Credibility Assessment",
    description:
      "Building robust multimodal models that detect both human-written and AI-generated fake reviews using textual, visual, temporal, and relational cues.",
  },
  {
    title: "Multimodal Code Understanding",
    description:
      "Exploring whether rendered code images and visual cues can let multimodal large models match or exceed text-based baselines in software engineering tasks.",
  },
  {
    title: "Applied Data Mining",
    description:
      "Using machine learning and information retrieval methods to study practical information systems problems with an emphasis on reliable evaluation and strong engineering execution.",
  },
];

export const news = [
  {
    date: "2026",
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
      "Led engineering for the full CodeOCR experimental pipeline, a systematic study of multimodal LLMs for code understanding.",
      "Implemented visual context compression that renders code into images and achieved up to 8x token compression while preserving semantic integrity.",
      "Ran evaluations on code completion and clone detection, showing that visual cues such as syntax highlighting can match or outperform text-only baselines in specific settings.",
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
      "Developed core modules for a Human Capital Management system serving enterprise clients.",
      "Improved complex import and export workflows by implementing tree-traversal logic for multi-level headers, reducing processing time substantially.",
      "Received the R&D Rising Star Award for technical innovation and secured one pending patent.",
    ],
  },
];

export const publications = [
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
