export const siteMeta = {
  title: "Chaoxiang Xie | Trustworthy AI",
  description:
    "Chaoxiang Xie, M.Sc. student at Hohai University and research assistant at SJTU. Current research focus: trustworthy AI, with a background in multimodal learning and code intelligence.",
};

export const hero = {
  name: "Chaoxiang Xie",
  chineseName: "谢超祥",
  role: "M.Sc. Student in Library & Information Studies",
  affiliation:
    "Hohai University · Research Assistant at LLMSE, Shanghai Jiao Tong University",
  location: "Shanghai, China",
  focus: "Trustworthy AI",
  summary:
    "My current research focus is trustworthy AI. I am interested in how we can evaluate AI systems and make their outputs more reliable.",
  status:
    "My previous work spans multimodal code understanding, code generation evaluation, and review credibility assessment. These experiences shape my approach to trustworthy AI research.",
  tags: [
    "Trustworthy AI",
    "Model Evaluation",
    "Multimodal Learning",
  ],
  links: [
    { label: "Publications", href: "#publications" },
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
  ],
  contacts: [
    {
      label: "Email",
      href: "mailto:edxxx1@icloud.com",
      value: "edxxx1@icloud.com",
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
    value: "Trustworthy AI",
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
    title: "Trustworthy AI",
    description:
      "My current focus is the trustworthiness of AI systems, with an interest in understanding their limitations and evaluating the reliability of their outputs.",
  },
  {
    title: "Evaluation of code intelligence",
    description:
      "My work on ClassEval-Pro and CodeOCR examines code generation and multimodal code understanding through benchmarks, test suites, and error analysis.",
  },
  {
    title: "Multimodal credibility assessment",
    description:
      "My work on review credibility combines textual, visual, and relational evidence to assess human-written and AI-generated reviews.",
  },
];

export const news = [
  {
    date: "2026-08",
    text: "Joined 若界人工智能实验室 as an Agent Algorithm Intern.",
  },
  {
    date: "2026-04-21",
    text: "ClassEval-Pro was accepted to AIWare 2026.",
  },
  {
    date: "2026-04-17",
    text: "CodeOCR was accepted to ISSTA 2026.",
  },
  {
    date: "2025-10",
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
      "Research concentration: natural language processing. GPA: 87/100.",
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
    "period": "Oct. 2025 - Present",
    "title": "Research Assistant",
    "organization": "LLM for Software Engineering Lab (LLMSE), Shanghai Jiao Tong University",
    "location": "Shanghai, China",
    "advisor": "Advisor: Prof. Xiaodong Gu",
    "details": [
      "Led the experimental design and implementation for CodeOCR, integrating LiveCodeBench and RepoQA with syntax-highlighted code rendering and visual context compression of up to 8x.",
      "Built reproducible Python pipelines for GPT, Gemini, and Qwen-VL, including batch inference, rate-limit retries, structured results, statistical tests, and error analysis. Wrote the experimental section of the paper.",
      "Evaluated three class-level code generation strategies for ClassEval-Pro. Designed the dependency, interface, logic, and integration error taxonomy and wrote the results analysis. Co-first author of the AIware 2026 paper."
    ]
  },
  {
    "period": "Jun. 2023 - Present",
    "title": "Independent Researcher",
    "organization": "Institute of Management Science, Hohai University",
    "location": "Nanjing, China",
    "details": [
      "Independently developed MDCFN for human-written and AI-generated fake review detection, covering data collection, model design, training, ablation studies, and manuscript preparation.",
      "Fine-tuned a DeBERTa-v3 three-class model using 500,000 training and 20,000 validation samples, selecting weights by Macro-F1.",
      "Built a multimodal dataset with 33k+ reviews and 50k+ images. Combined textual, temporal, visual, and relational features, achieving 98.77% F1 on the self-built dataset. The manuscript is under review at the International Journal of Intelligent Systems."
    ]
  }
];

export const professionalExperience = [
  {
    "period": "Aug. 2026 - Present",
    "title": "Agent Algorithm Intern",
    "organization": "若界人工智能实验室",
    "location": "",
    "details": []
  },
  {
    "period": "Jul. 2022 - Jun. 2024",
    "title": "Software Engineer, Backend Infrastructure",
    "organization": "Inspur Morning Cloud Technologies Co., Ltd.",
    "location": "Shenzhen, China",
    "details": [
      "Built shared Python backend frameworks for HCM Cloud using Tornado, Celery, Redis, and MySQL/openGauss. Delivered configurable data import/export, work alerts, and concurrency controls.",
      "Designed metadata-driven import/export for business models, nested records, field mappings, attachments, and permissions, supporting batches of tens of thousands of records.",
      "Implemented asynchronous jobs with Celery, WebSocket/Redis progress updates, detailed error reporting, and configurable business-key deduplication for safe retries.",
      "Built scheduled and manual alert workflows with rule evaluation, recipient resolution, templates, and notification channels. Contributed to SSO, data-push conflict prevention, and a concurrency-related patent application.",
      "Supported requirements from 100+ enterprises and production troubleshooting across SQL, Redis, Celery, and Linux/Kibana logs. Received the 2023 Inspur Group R&D Rising Star Award."
    ]
  }
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
      {
        label: "Code",
        href: "https://github.com/bailynlove/codezipstudy",
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
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2604.26923" },
      { label: "Code", href: "https://github.com/ian-Kappa/ClassEval-Pro" },
    ],
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
    "status": "Experimental",
    "title": "Correction",
    "stack": "TypeScript, Node.js, Pi, Ollama, MLX",
    "details": [
      "Built a local prompt correction pipeline for coding agents. It edits natural language while preserving code, paths, commands, and numbers, with approve, edit, bypass, and cancel controls in the Pi terminal UI.",
      "Implemented protected-span recovery, semantic checks, layered configuration, and JSONL diagnostics. Evaluated 200 frozen prompts and 1,000 protected-span samples across local models and 11 prompt versions.",
      "In 300 time-limited validation runs, outcome p95 was 1.80 s; all 100 timeouts retained the original input. The project remains experimental, with long-input latency still being improved."
    ],
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/bailynlove/correction"
      }
    ]
  },
  {
    "status": "Released",
    "title": "Feishu Web Clip",
    "stack": "Chrome Extension, Node.js, Readability, Turndown, lark-cli",
    "details": [
      "Built a Chrome extension and local bridge to save web articles, images, and related PDFs to Feishu, with configurable AI summaries and streaming progress.",
      "Implemented persistent clip attempts for timeout and partial-failure recovery, paired bridge credentials, an Origin allowlist, and minimal browser permissions. The extension reuses lark-cli authentication without storing Feishu access tokens.",
      "Released on the Chrome Web Store and under active development."
    ],
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/bailynlove/feishu-clip"
      }
    ]
  },
  {
    "status": "Competition prototype · Private repository",
    "title": "FreeGo travel agent",
    "stack": "Swift / SwiftUI, MNN-LLM, Node.js",
    "details": [
      "Led a two-person team to build a travel planning and price-monitoring prototype for the Qwen on-device model application competition.",
      "Designed on-device itinerary understanding and explanations, with cloud support for authorized data collection, scheduling, synchronization, and APNs notifications.",
      "Implemented streaming model calls, tool-call parsing, search integration, quote validation, and a staged planning loop, with tests for the agent loop and synchronization boundaries."
    ],
    "links": []
  },
  {
    "status": "Personal publishing workflow",
    "title": "Hermes news and WeChat publishing tools",
    "stack": "Hermes Agent Skills, RSS, arXiv, GitHub Trending",
    "details": [
      "Integrated 100+ RSS sources, arXiv, GitHub Trending, and URL summaries with concurrent fetching, caching, and persistent state.",
      "Built a WeChat draft workflow with placeholder, frontmatter, credential, and dry-run checks. Supported daily publishing for 想开一间信心花舍 from July 27 through the August 17, 2026 reporting period."
    ],
    "links": [
      {
        "label": "News fetcher",
        "href": "https://github.com/bailynlove/hermes-news-fetcher"
      },
      {
        "label": "WeChat publisher",
        "href": "https://github.com/bailynlove/news-wechat-publisher"
      }
    ]
  }
];

export const skills = {
  "technical": [
    "Python",
    "TypeScript",
    "Node.js",
    "SQL",
    "PyTorch",
    "Transformers",
    "Swift / SwiftUI",
    "Tornado",
    "Celery",
    "Redis",
    "Docker",
    "Linux",
    "Shell",
    "Git",
    "LaTeX"
  ],
  "agents": [
    "Tool calling",
    "Structured output",
    "Streaming and async agent loops",
    "Prompt and evaluation pipelines",
    "Context engineering"
  ],
  "languages": [
    "English (IELTS 7.0, Reading 8.5; CET-4/6)",
    "Cantonese",
    "Mandarin (Native)"
  ]
};

export const awards = [
  "R&D Rising Star Award, Inspur Group (2023)",
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
