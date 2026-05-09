import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Binary,
  BrainCircuit,
  Code2,
  Database,
  FileCode2,
  Github,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MessageCircleCode,
  MonitorCog,
  Radar,
  ServerCog,
  Sparkles,
  Twitter,
  UserRoundSearch,
  WandSparkles,
} from "lucide-react";

export type SkillItem = {
  name: string;
  icon: LucideIcon;
  description: string;
  tools: string[];
  projects: string[];
};

export type SkillCategory = {
  id: string;
  label: string;
  title: string;
  description: string;
  accent: string;
  skills: SkillItem[];
};

export type Project = {
  title: string;
  category: string;
  featured: boolean;
  comingSoon?: boolean;
  summary: string;
  description: string;
  stack: string[];
  features: string[];
  github: string;
  demo: string;
  accent: string;
};

export const githubUsername = "Pritam-Sing-2025";
export const githubProfileUrl = "https://github.com/Pritam-Sing-2025";

export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const heroSignals = [
  { label: "Based In", value: "India · Remote Friendly" },
  { label: "Stack", value: "MERN · Java · Python · SQL" },
  { label: "Now Learning", value: "AI-assisted workflows and stronger product systems" },
];

export const featuredSignals = [
  "I care about products that feel thoughtful, not over-designed.",
  "I enjoy turning messy ideas into clear, useful software systems.",
  "My best work sits between engineering discipline and visual taste.",
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    title: "Interfaces that feel sharp, calm, and production-ready.",
    description:
      "I like front-end systems that are clean under the hood and quietly premium on the surface. Layout, rhythm, responsiveness, and interaction quality matter as much to me as code structure.",
    accent: "from-white/80 via-slate-300/70 to-slate-500/60",
    skills: [
      {
        name: "React.js",
        icon: Atom,
        description: "Building scalable interfaces with reusable architecture and clean state flow.",
        tools: ["Hooks", "Component systems", "Routing", "State patterns"],
        projects: ["AI Mindmap", "Portfolio", "Plant Health Detector"],
      },
      {
        name: "HTML/CSS",
        icon: FileCode2,
        description: "Crafting semantic structure, refined layouts, and polished visual systems.",
        tools: ["Semantic HTML", "Responsive layouts", "Tailwind CSS", "Custom styling"],
        projects: ["Portfolio", "AI Mindmap", "Sign Language Detection"],
      },
      {
        name: "Responsive Design",
        icon: WandSparkles,
        description: "Designing experiences that stay balanced across phones, tablets, and desktops.",
        tools: ["Fluid spacing", "Adaptive grids", "Mobile-first thinking", "Layout testing"],
        projects: ["Portfolio", "Plant Health Detector"],
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    title: "Reliable application logic, APIs, and full-stack structure.",
    description:
      "I build backend flows that support real product use, from APIs and routing to clean server structure. I care about maintainability, clarity, and practical delivery.",
    accent: "from-slate-200/70 via-zinc-300/55 to-zinc-500/55",
    skills: [
      {
        name: "Node.js",
        icon: ServerCog,
        description: "Writing backend logic that supports fast, useful, end-to-end products.",
        tools: ["REST APIs", "Async logic", "Server workflows", "Integrations"],
        projects: ["AI Mindmap", "Plant Health Detector"],
      },
      {
        name: "Express.js",
        icon: Layers3,
        description: "Structuring routes, middleware, and backend modules in a clean way.",
        tools: ["Routing", "Middleware", "Controllers", "Authentication flows"],
        projects: ["AI Mindmap", "Sign Language Detection"],
      },
      {
        name: "APIs",
        icon: Globe2,
        description: "Connecting frontend experiences with backend services and external data.",
        tools: ["Fetch flows", "REST patterns", "Error handling", "Response design"],
        projects: ["Plant Health Detector", "AI Mindmap", "Portfolio"],
      },
    ],
  },
  {
    id: "data",
    label: "Data",
    title: "Data structures that support practical products and AI-oriented workflows.",
    description:
      "I’m comfortable shaping both relational and document-based data for products that need clarity, scale, and consistency. The goal is always practical architecture.",
    accent: "from-zinc-100/75 via-slate-300/50 to-slate-500/50",
    skills: [
      {
        name: "MongoDB",
        icon: Database,
        description: "Using flexible document structures for dynamic product data and content flows.",
        tools: ["Schemas", "Collections", "CRUD", "Content modeling"],
        projects: ["AI Mindmap", "Experimental Build"],
      },
      {
        name: "MySQL",
        icon: Database,
        description: "Building structured relational models for apps, analytics, and applied AI workflows.",
        tools: ["Tables", "Joins", "Normalization", "Query design"],
        projects: ["Plant Health Detector", "Sign Language Detection"],
      },
      {
        name: "SQL",
        icon: Binary,
        description: "Querying and shaping data for product features, admin tools, and analysis.",
        tools: ["Queries", "Joins", "Filtering", "Data retrieval"],
        projects: ["Plant Health Detector", "Experimental Build"],
      },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    title: "Core programming languages I use for full-stack work, logic building, and experimentation.",
    description:
      "This category is less about flashy interaction and more about fluency. It’s the foundation layer that supports problem solving, backend logic, product implementation, and technical growth.",
    accent: "from-slate-200/70 via-stone-300/45 to-slate-500/45",
    skills: [
      {
        name: "Java",
        icon: MonitorCog,
        description: "Used for structured problem solving, object-oriented thinking, and foundational logic work.",
        tools: ["OOP", "Core Java", "Collections", "DSA practice"],
        projects: ["Sign Language Detection", "Practice systems"],
      },
      {
        name: "Python",
        icon: Sparkles,
        description: "Useful for data work, quick experimentation, and AI-focused prototypes.",
        tools: ["Scripting", "Data handling", "Model integration", "Rapid prototyping"],
        projects: ["Plant Health Detector", "AI Mindmap"],
      },
      {
        name: "JavaScript",
        icon: Code2,
        description: "The main language behind the interactive and full-stack product experiences I build.",
        tools: ["ES6+", "Async workflows", "Browser logic", "UI integration"],
        projects: ["Portfolio", "AI Mindmap", "Sign Language Detection"],
      },
      {
        name: "SQL",
        icon: Binary,
        description: "Used for structured querying, relational data design, and system-level data organization.",
        tools: ["Queries", "Joins", "Schema planning", "Filtering"],
        projects: ["Plant Health Detector", "Experimental Build"],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Sign Language Detection",
    category: "AI",
    featured: true,
    summary: "An AI-assisted vision project focused on detecting sign language gestures in a more accessible and practical way.",
    description:
      "This project explores gesture recognition and real-time interpretation using a cleaner product direction around accessibility, interaction clarity, and model-assisted detection.",
    stack: ["Python", "JavaScript", "Computer Vision", "Machine Learning"],
    features: [
      "Gesture recognition flow for sign language interaction",
      "Model-assisted detection with practical interface thinking",
      "Clear output presentation for accessibility-oriented use",
      "Designed as an applied AI project rather than a generic demo",
    ],
    github: "#",
    demo: "#",
    accent: "from-neutral-50/10 via-neutral-300/6 to-neutral-500/10",®
  },
  {
    title: "Plant Health Detector",
    category: "AI",
    featured: true,
    summary: "A product concept for identifying plant health issues through a cleaner, utility-focused AI workflow.",
    description:
      "Built around the idea of making plant diagnosis more understandable, this project combines AI detection with a more approachable presentation layer.",
    stack: ["Python", "Machine Learning", "Node.js", "MySQL"],
    features: [
      "Image-based plant condition analysis",
      "Readable health output and issue classification",
      "Structured backend and data flow for AI results",
    ],
    github: "#",
    demo: "#",
    accent: "from-stone-100/10 via-stone-300/5 to-stone-500/10",
  },
  {
    title: "AI Mindmap",
    category: "AI",
    featured: false,
    summary: "A concept interface for exploring AI tools, workflows, and connected ideas through a cleaner product surface.",
    description:
      "This project focuses on structuring AI-assisted thinking into a usable interface, combining mapping, organization, and product-minded interaction.",
    stack: ["React.js", "Node.js", "APIs", "MongoDB"],
    features: [
      "Structured idea mapping interface",
      "Readable information hierarchy",
      "Built as a future-facing product concept",
    ],
    github: "#",
    demo: "#",
    accent: "from-zinc-100/10 via-zinc-300/5 to-zinc-500/10",
  },
  {
    title: "Experimental Build",
    category: "Upcoming",
    featured: false,
    comingSoon: true,
    summary: "An intentional placeholder for the next project in development, designed to feel like part of the portfolio instead of empty space.",
    description:
      "This card is reserved for the next polished project addition. It is intentionally styled as an active part of the portfolio so the section still feels complete and curated.",
    stack: ["In Development", "Research", "Design Direction"],
    features: [
      "Reserved for a future premium build",
      "Styled to feel deliberate, not unfinished",
      "Flexible slot for the next AI or product-focused project",
    ],
    github: "#",
    demo: "#",
    accent: "from-neutral-50/10 via-neutral-200/5 to-neutral-400/10",
  },
];

export const timeline = [
  {
    year: "Academic Foundation",
    title: "Computer Science Graduate",
    type: "Education",
    description:
      "Built a solid base in programming, data structures, databases, and systems thinking.",
  },
  {
    year: "Full-stack Transition",
    title: "MERN Stack Focus",
    type: "Learning Journey",
    description:
      "Moved from fundamentals into practical product building with React, Node.js, Express, and MongoDB.",
  },
  {
    year: "Applied Projects",
    title: "AI + Full-stack Builds",
    type: "Project Milestone",
    description:
      "Applied front-end, backend, database, and AI-oriented thinking across practical project builds.",
  },
  {
    year: "Current Direction",
    title: "Sharper Product Thinking",
    type: "Growth",
    description:
      "Leaning further into elegant interfaces, stronger build quality, and AI-assisted workflows.",
  },
];

export const certificates = [
  {
    title: "Frontend Engineering Track",
    issuer: "Certificate Slot",
    summary: "A dedicated surface for your verified frontend development certification.",
    verify: "#",
  },
  {
    title: "JavaScript & Problem Solving",
    issuer: "Certificate Slot",
    summary: "Ideal for a JavaScript, DSA, or coding challenge certificate with a public verification link.",
    verify: "#",
  },
  {
    title: "Databases / SQL",
    issuer: "Certificate Slot",
    summary: "Use this for a database, SQL, or backend-focused certification when available.",
    verify: "#",
  },
];

export const socialLinks = [
  { label: "Instagram", href: "#", icon: Instagram, note: "Visual updates and design taste." },
  { label: "GitHub", href: githubProfileUrl, icon: Github, note: "Code, repositories, and development activity." },
  { label: "LinkedIn", href: "#", icon: Linkedin, note: "Professional profile and network." },
  { label: "X / Twitter", href: "#", icon: Twitter, note: "Thoughts, ideas, and tech interests." },
  { label: "Discord", href: "#", icon: MessageCircleCode, note: "Community and direct connection." },
  { label: "Medium", href: "#", icon: Radar, note: "Articles and longer-form writing." },
  { label: "Email", href: "mailto:replace-with-your-email@example.com", icon: Mail, note: "Best for direct collaboration." },
];

export const aboutHighlights = [
  {
    title: "Builder Mindset",
    description: "I like taking unclear ideas and shaping them into something structured, useful, and real.",
    icon: Code2,
  },
  {
    title: "Design Sensitivity",
    description: "I care about spacing, hierarchy, responsiveness, and making interfaces feel calm and premium.",
    icon: Sparkles,
  },
  {
    title: "Practical Curiosity",
    description: "I’m especially interested in AI, better workflows, and products that solve everyday friction.",
    icon: UserRoundSearch,
  },
];
