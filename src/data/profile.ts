// Single source of truth for every word and number on the site.
// Rule: everything here must be true and safe to publish. Employer work is described
// by outcome and system type only — no internal names, data, vendors or screenshots.

export const site = {
  url: "https://os-portfolio.com",
  name: "Oscar Sanchez",
  title: "Oscar Sanchez — Operations, Finance & Technology Executive",
  description:
    "Oscar Sanchez is a business operator and technology leader who builds the platforms companies run on — combining finance, operations, marketing, sales and engineering to turn messy businesses into measurable ones.",
  email: "architectsanchez13@gmail.com",
  location: "Arkansas, USA",
  links: {
    linkedin: "https://www.linkedin.com/in/oscarsanchez13",
    github: "https://github.com/oscarsanchez13",
    x: "https://x.com/Tech_Sancho",
  },
  // Sancho Holdings footer + link (owner decision 2026-11-15: connect the portfolio,
  // Sancho Holdings and its companies publicly).
  holdings: {
    show: true,
    name: "Sancho Holdings",
    url: "https://sanchoholdings.com",
  },
};

export const hero = {
  greeting: "Hi, I'm Oscar.",
  // Static line above the name.
  eyebrow: "Operations · Finance · Growth · Technology",
  // Cycles in the typewriter: the hats he wears across a business.
  roles: [
    "Founder",
    "COO",
    "CTO",
    "President of Operations",
    "Head of Technology",
    "Finance Leader",
    "Marketing Strategist",
    "Advertising Strategist",
    "Sales Leader",
  ],
  lead: "I run the business and build the technology behind it.",
  keywords: ["finance", "operations", "marketing", "advertising", "sales", "AI"],
  body:
    "From $40M+ multi-unit P&Ls to the technology behind a $2B+ enterprise, I connect the numbers, the people and the software so a company can see itself clearly — and move faster than its competitors.",
};

export type Metric = { value: number; decimals?: number; suffix?: string; prefix?: string; label: string };

export const metrics: Metric[] = [
  { value: 43.5, decimals: 1, prefix: "$", suffix: "M", label: "multi-unit revenue led" },
  { value: 400, suffix: "+", label: "team members led" },
  { value: 60, suffix: "+", label: "international projects" },
  { value: 2, suffix: "×", label: "regional Leader of the Year" },
  { value: 25, prefix: "#", label: "of 1,300+ units — up from #1,297 in 16 months" },
  { value: 100, prefix: "$", suffix: "K+", label: "saved in 5 months with KPI systems" },
  { value: 1000, suffix: "+", label: "hours a year automated with AI" },
  { value: 15, suffix: "+", label: "business systems shipped" },
];

export type Discipline = { key: string; title: string; proof: string };

// The eight things he wants to be known for, each tied to proof (no employer specifics).
export const disciplines: Discipline[] = [
  { key: "leadership", title: "Leadership", proof: "Led up to 400 people across seven units. Two-time regional Leader of the Year. Today leads engineers and business leaders as one team." },
  { key: "operations", title: "Operations", proof: "President of Operations for a growing franchise group. Took a unit from #1,297 to #25 of 1,300+ in 16 months." },
  { key: "finance", title: "Finance", proof: "Owned a $43.5M multi-unit P&L and two years as a Profits Leader. Builds the financial reporting leaders run on." },
  { key: "accounting", title: "Accounting", proof: "Automated journal posting, depreciation and invoice review into the general ledger — and caught a material reporting error others missed." },
  { key: "marketing", title: "Marketing", proof: "Ran local marketing and loyalty programs alongside a national franchisor; ties every campaign to measurable outcomes." },
  { key: "advertising", title: "Advertising", proof: "Meta and geofencing campaigns that grew catering revenue; unified ad-platform data so every dollar is measured." },
  { key: "sales", title: "Sales", proof: "Drove 24% year-over-year sales growth across a region; builds tools that help sales teams respond faster and close more." },
  { key: "technology", title: "Technology", proof: "Built the enterprise applications, SaaS product and MCP server behind a $2B+ company with 1,100+ employees." },
];

export type Venture = {
  name: string;
  role: string;
  status: string;
  since?: string;
  tagline: string;
  body: string;
  url?: string;
  logo?: string;
  accent: "silver" | "emerald" | "loccoli";
  logoShape?: "round" | "square";
  wordmark?: "nunito";
};

// Wording mirrors sanchoholdings.com so both sites read as one family.
export const ventures: Venture[] = [
  {
    name: "Sancho Holdings",
    role: "Founder",
    status: "Parent company",
    tagline: "Building local businesses that last.",
    body: "Sancho Holdings builds and owns businesses that put people to work, open doors to opportunity, and help neighbors build the futures they dream of. We measure our success by the success we help others reach.",
    url: "https://sanchoholdings.com",
    logo: "/ventures/sancho-holdings.png",
    accent: "silver",
  },
  {
    name: "loccoli",
    role: "Founder",
    status: "Launching soon",
    since: "2022",
    tagline: "Anyone can start earning.",
    body: "A local services marketplace where neighbors book trusted providers, and people in every city can earn, grow and build businesses of their own.",
    url: "https://loccoli.com",
    logo: "/ventures/loccoli.png",
    logoShape: "square",
    wordmark: "nunito",
    // Brand locked 2026-11-15: steel blue #3A5A8C + amber #F2A23A; green only inside the logo.
    accent: "loccoli",
  },
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

// Highest title reached in each part of his career; no employer names.
export const experience: Role[] = [
  {
    company: "Multi-location automotive group",
    title: "Head of Technology",
    start: "2025",
    end: "Present",
    summary: "Leads technology for a $2B+ revenue company with 1,100+ employees — every department runs on software I built or improved.",
    highlights: [
      "Built the company's enterprise applications, a SaaS product and an MCP server that lets AI work safely inside the business.",
      "Partners with every department to automate and improve how its people work; directs the engineering team and owns every production release.",
      "Automated 1,000+ hours a year of manual work with AI document processing.",
      "Caught and corrected a material financial-reporting error and restored a complete month-end close.",
      "Retired multiple paid vendor tools with in-house software; added locations with no new corporate headcount.",
    ],
    tags: ["technology", "leadership", "finance", "accounting", "operations"],
  },
  {
    company: "Quick-service restaurant franchise group",
    title: "President of Operations",
    start: "2024",
    end: "2025",
    summary: "Ran operations for a franchise group growing under a ten-store development agreement.",
    highlights: [
      "Built KPI and accountability systems that saved $100K+ in five months.",
      "Launched Meta and geofencing ad campaigns that grew catering revenue.",
      "Developed and promoted general managers; helped select new sites.",
    ],
    tags: ["operations", "finance", "marketing", "advertising", "leadership"],
  },
  {
    company: "National casual-dining brand",
    title: "Director of Operations",
    start: "2021",
    end: "2024",
    summary: "Led seven locations, up to 400 team members and $43.5M in annual revenue.",
    highlights: [
      "Climbed from #1,297 to #25 of 1,300+ units in 16 months.",
      "Regional Leader of the Year (2022, 2023) and Profits Leader (2022, 2023).",
      "Greatest Improvement (2023) and 5-Star (2024) recognition.",
    ],
    tags: ["leadership", "operations", "finance", "sales"],
  },
  {
    company: "Global consumer-brands portfolio",
    title: "Regional Training Director",
    start: "2018",
    end: "2021",
    summary: "Built the people engine for a region: training, standards and leadership development.",
    highlights: [
      "Drove 24% year-over-year sales growth.",
      "Cut team turnover by 40%.",
      "Held labor 5% below the company average.",
    ],
    tags: ["leadership", "operations", "sales"],
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
  issuer?: string;
  year?: string;
  category: CertCategory;
  kind?: "certificate" | "degree" | "license";
  verifyUrl?: string;
  // false = in progress: shows on local previews only, never on the live site.
  earned: boolean;
};

// Only credentials Oscar has confirmed he holds. The wall renders whatever is here.
export const certifications: Certification[] = [
  { title: "Master of Business Administration", category: "leadership", kind: "degree", earned: true },
  { title: "Project Management Professional (PMP)", issuer: "PMI", category: "leadership", earned: true },
  { title: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", category: "leadership", earned: false },
  { title: "Lean Six Sigma Green Belt", category: "operations", earned: true },
  { title: "Google Ads Certification", issuer: "Google", category: "growth", earned: false },
  { title: "Google Analytics Certification", issuer: "Google", category: "growth", earned: false },
  { title: "Full-Stack Software Engineering", year: "2021", category: "technology", earned: true },
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", category: "technology", earned: false },
  { title: "Claude Certification", issuer: "Anthropic", category: "technology", earned: false },
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
  "AI": ["Claude", "OpenAI", "Gemini", "Meta AI", "MCP", "Agents", "OCR", "Voice AI"],
};
