// Single source of truth for every word and number on the site.
// Rule: everything here must be true and safe to publish. Employer work is described
// by outcome and system type only — no internal names, data, vendors or screenshots.

export const site = {
  url: "https://os-portfolio.com",
  name: "Oscar Sanchez",
  title: "Oscar Sanchez — Operator, Technologist, Builder",
  description:
    "Oscar Sanchez is a business operator and technology leader who builds the platforms companies run on — combining finance, operations, marketing, sales and engineering to turn messy businesses into measurable ones.",
  email: "architectsanchez13@gmail.com",
  location: "Arkansas, USA",
  links: {
    linkedin: "https://www.linkedin.com/in/oscarsanchez13",
    github: "https://github.com/oscarsanchez13",
    x: "https://x.com/Tech_Sancho",
  },
};

export const hero = {
  greeting: "Hi, I'm Oscar.",
  // Short line above the name; mirrors site.title so it stays neutral.
  eyebrow: "Operator · Technologist · Builder",
  // Cycles in the typewriter. Keep to roles he has actually held or does today.
  roles: [
    "Technology Leader",
    "Operations Executive",
    "Senior Product Owner",
    "Multi-Unit Operator",
    "Platform Builder",
    "AI Systems Architect",
  ],
  lead: "I run the business and build the technology behind it.",
  keywords: ["finance", "operations", "marketing", "sales", "AI"],
  body:
    "From multi-unit P&Ls to production AI, I connect the numbers, the people and the software so a company can see itself clearly — and move faster than its competitors.",
};

export type Metric = { value: number; suffix?: string; prefix?: string; label: string };

export const metrics: Metric[] = [
  { value: 15, suffix: "+", label: "business systems shipped to production" },
  { value: 8, label: "business disciplines led or built for" },
  { value: 1, prefix: "#", label: "store in its area, turned around as GM" },
  { value: 2, label: "languages — English & Spanish" },
];

export type Discipline = { key: string; title: string; proof: string };

// The eight things he wants to be known for, each tied to proof (no employer specifics).
export const disciplines: Discipline[] = [
  { key: "leadership", title: "Leadership", proof: "Took a restaurant to the top of its seven-store area as General Manager; selected for a company leadership program; now leads engineers and business partners together." },
  { key: "operations", title: "Operations", proof: "Ran multi-unit operations and now designs the systems that run day-to-day work end to end." },
  { key: "finance", title: "Finance", proof: "Builds financial statements, forecasting and fixed-asset reporting into software leaders actually use." },
  { key: "accounting", title: "Accounting", proof: "Automated journal posting, depreciation schedules and invoice review straight into the general ledger." },
  { key: "marketing", title: "Marketing", proof: "Built marketing budget tracking and analytics that tie spend to outcomes across every location." },
  { key: "advertising", title: "Advertising", proof: "Unified ad-platform data into one warehouse so every advertising dollar can be measured." },
  { key: "sales", title: "Sales", proof: "Customer-first operator background; builds tools that help sales teams respond faster and close more." },
  { key: "technology", title: "Technology", proof: "Full-stack engineer and AI architect: Next.js, Node, Postgres, AWS, agents and MCP in production." },
];

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    company: "Multi-location automotive group",
    title: "Senior Product Owner",
    start: "2025",
    end: "Present",
    summary:
      "Leads product strategy and delivery for internal business software across a multi-location organization.",
    highlights: [
      "Owns the roadmap from business problem to shipped software, partnering with finance, operations and marketing leaders.",
      "Brought AI-assisted development and automated quality checks into the delivery process.",
      "Turns manual, spreadsheet-driven work into tracked, measurable workflows.",
    ],
    tags: ["technology", "operations", "finance", "accounting", "marketing"],
  },
  {
    company: "Quick-service restaurant franchise group",
    title: "Operations Leadership",
    start: "2025",
    end: "2025",
    summary: "Led operations for a growing quick-service franchise group.",
    highlights: [
      "Partnered with the franchisor on local marketing and customer loyalty.",
      "Focused on cost control and repeatable operating standards.",
    ],
    tags: ["operations", "marketing", "sales", "leadership"],
  },
  {
    company: "National casual-dining brand",
    title: "General Manager → Director of Operations",
    start: "2022",
    end: "2024",
    summary: "Promoted from General Manager to Director of Operations, leading multi-unit P&L, people and guest experience.",
    highlights: [
      "Turned a restaurant into the top performer of its seven-store area, then earned the move to Director of Operations.",
      "Recognized by the company and selected for a leadership development program.",
      "Owned the P&L, labor, food cost and guest metrics.",
    ],
    tags: ["leadership", "operations", "finance", "sales"],
  },
  {
    company: "National bakery-café brand",
    title: "Restaurant Management",
    start: "2020",
    end: "2022",
    summary: "Joined management and learned multi-shift operations at scale.",
    highlights: [
      "Led shifts, trained team members and kept standards consistent.",
    ],
    tags: ["leadership", "operations"],
  },
];

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  built: string[];
  impact: string[];
  stack: string[];
  disciplines: string[];
  visual: "ops" | "invoice" | "agents" | "mcp" | "pipeline" | "voice" | "finance" | "cicd";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "operations-platform",
    name: "Unified Operations Platform",
    tagline: "One system for inventory, service, finance and people across every location.",
    problem: "Each department lived in its own spreadsheet or vendor tool, so leaders couldn't see the business in one place.",
    built: [
      "Inventory and resource tracking across locations",
      "Service and work-order tracking",
      "Financial statements and fixed-asset reporting",
      "Multi-step approval workflows",
      "Help desk with a form builder and e-signatures",
    ],
    impact: ["Single source of truth across locations", "Approvals moved from email chains to tracked workflows"],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    disciplines: ["operations", "finance", "leadership", "technology"],
    visual: "ops",
  },
  {
    slug: "vendor-replacement",
    name: "In-House Finance Automation",
    tagline: "Replaced paid software with tools built for how the business actually works.",
    problem: "Subscriptions for depreciation, e-signature and document handling cost money and still left manual work.",
    built: [
      "Fixed-asset accounting with automated depreciation",
      "Invoice review with OCR and exception flags",
      "Journal posting into the general ledger",
      "E-signature and form workflows",
    ],
    impact: ["Retired multiple vendor subscriptions", "Turned manual data entry into review-and-approve"],
    stack: ["TypeScript", "PostgreSQL", "OCR", "AWS"],
    disciplines: ["accounting", "finance", "technology"],
    visual: "invoice",
  },
  {
    slug: "agent-engineering",
    name: "AI-Assisted Engineering",
    tagline: "AI reviewers and automated gates that check every change before it ships.",
    problem: "A small team shipping a large platform needed senior-level review on every change without slowing down.",
    built: [
      "AI code review on every pull request",
      "Automated quality and privacy gates",
      "Living documentation the whole team works from",
    ],
    impact: ["Every change reviewed before a human looks at it", "Faster onboarding through living documentation"],
    stack: ["Claude", "GitHub Actions", "TypeScript"],
    disciplines: ["technology", "leadership", "operations"],
    visual: "agents",
  },
  {
    slug: "mcp-server",
    name: "Governed AI Access (MCP)",
    tagline: "Let approved AI assistants use business tools — safely, with a full audit trail.",
    problem: "Teams wanted AI help with real work, but the business needed control over what AI could see and do.",
    built: [
      "Model Context Protocol (MCP) server",
      "OAuth sign-in and explicit consent",
      "Per-user tokens and a complete activity log",
    ],
    impact: ["AI access granted per person and per tool", "Every AI action traceable"],
    stack: ["MCP", "OAuth 2.1", "Node.js", "PostgreSQL"],
    disciplines: ["technology", "operations"],
    visual: "mcp",
  },
  {
    slug: "data-pipelines",
    name: "Unified Data & Marketing Analytics",
    tagline: "Sales, advertising, operations and finance data in one place.",
    problem: "Marketing, sales and operations each reported their own numbers, so no one agreed on what worked.",
    built: [
      "Pipelines from business systems and ad platforms",
      "One warehouse with shared definitions",
      "Marketing budget and spend-to-outcome reporting",
    ],
    impact: ["One version of the numbers for every leader", "Ad spend measured against results"],
    stack: ["Python", "PostgreSQL", "AWS", "REST APIs"],
    disciplines: ["marketing", "advertising", "sales", "finance"],
    visual: "pipeline",
  },
  {
    slug: "voice-ai",
    name: "Voice AI & Document Intelligence",
    tagline: "AI that answers calls and reads paperwork so people can focus on customers.",
    problem: "Inbound calls and paper documents ate hours of staff time every day.",
    built: [
      "Voice AI on inbound calls with intent routing",
      "Vision classification of scanned documents",
      "OCR data capture",
    ],
    impact: ["Faster answers for customers", "Hours of manual sorting removed"],
    stack: ["Voice AI", "Computer Vision", "OCR", "Node.js"],
    disciplines: ["sales", "operations", "technology"],
    visual: "voice",
  },
  {
    slug: "sancho-finance",
    name: "Sancho Finance",
    tagline: "A private financial command center with a specialist agent for every money decision.",
    problem: "Budgeting apps show where money went. I wanted a system that plans where it should go.",
    built: [
      "Bank-statement ingestion and categorization",
      "Budgets, debt paydown, tax, receipts and net-worth reporting",
      "18-month forecast and goal engine",
      "AI-assisted insights and planning",
    ],
    impact: ["Every dollar linked to a purpose", "Installable phone app with smart alerts"],
    stack: ["Next.js", "TypeScript", "Supabase", "Postgres", "Vercel"],
    disciplines: ["finance", "accounting", "technology"],
    visual: "finance",
  },
  {
    slug: "delivery-pipeline",
    name: "Zero-Touch Delivery Pipeline",
    tagline: "Protected main, automated checks, privacy guard and one-click production deploys.",
    problem: "Shipping fast is only safe if every release is checked the same way, every time.",
    built: [
      "GitHub Actions CI with lint, tests and type checks",
      "Automated privacy scanning on every pull request",
      "Production deploys and nightly database backups",
    ],
    impact: ["Dozens of releases shipped with no manual deploy steps", "Sensitive data blocked before it can reach git"],
    stack: ["GitHub Actions", "Vercel", "Postgres", "Bash"],
    disciplines: ["technology", "operations"],
    visual: "cicd",
  },
];

export type CertCategory = "leadership" | "technology" | "operations" | "growth";
export type Certification = {
  title: string;
  issuer: string;
  year: string;
  category: CertCategory;
  kind?: "certificate" | "degree" | "license";
  verifyUrl?: string;
};

// Only credentials Oscar has confirmed he holds. The wall renders whatever is here.
export const certifications: Certification[] = [
  { title: "Full-Stack Software Engineering", issuer: "Thinkful", year: "2021", category: "technology" },
  { title: "Full-Stack Web Development", issuer: "Udemy", year: "2022", category: "technology" },
];

export const certCategories: { key: CertCategory; label: string; blurb: string }[] = [
  { key: "leadership", label: "Leadership & Strategy", blurb: "Leading people, programs and companies" },
  { key: "operations", label: "Operations & Finance", blurb: "Running the numbers and the machine" },
  { key: "growth", label: "Marketing & Growth", blurb: "Finding customers and keeping them" },
  { key: "technology", label: "Technology & AI", blurb: "Building what the business runs on" },
];

export const recommendations = [
  { name: "Jim Medlock", image: "/images/jim-medlock.jpg", role: "Founder & CEO, global developer community", message: "An outstanding engineer with a strong work ethic. Highly recommend!" },
  { name: "Josh Neufeld", image: "/images/josh-neufeld.jpg", role: "VP of Operations, national restaurant brand", message: "A pleasure to work with. Always delivers high-quality results." },
  { name: "Ricardo Aguilera", image: "/images/ricardo-aguilera.jpg", role: "Product Owner", message: "Brings great leadership and technical expertise to any team." },
  { name: "Roxanne Davis", image: "/images/roxanne-davis.jpg", role: "Senior Software Engineer", message: "Incredibly skilled and passionate about technology." },
];

export const stack = {
  Frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Figma"],
  Backend: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "Postman", "Auth0"],
  "Cloud & DevOps": ["AWS", "Vercel", "Docker", "GitHub Actions", "Git"],
  "AI": ["Claude", "MCP", "Agents", "OCR", "Voice AI"],
};
