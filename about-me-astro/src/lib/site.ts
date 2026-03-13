export const SITE = {
  name: "Rishi Banerjee",
  site: "https://rishi-banerjee1.github.io",
  basePath: "/about-me",
  description:
    "Director of Talent Acquisition at Atlan. Runs R&D hiring across Engineering, Product, Design, IT, and Security. Also builds the internal tools — evaluators, offer generators, prompt governance, candidate research agents.",
  email: "rpbanerjee@outlook.com",
  linkedin: "https://www.linkedin.com/in/rishibanerjee/",
  github: "https://github.com/rishi-banerjee1",
  book: "https://www.amazon.in/dp/B0FQMWW9RR",
  company: "https://atlan.com",
  promptControlPlane: "https://getpcp.site/"
};

export function withBase(path = "/") {
  if (path === "/") {
    return SITE.basePath + "/";
  }

  return `${SITE.basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export const navLinks = [
  { label: "About", href: withBase("/#about") },
  { label: "Experience", href: withBase("/#experience") },
  { label: "Expertise", href: withBase("/#expertise") },
  { label: "Education", href: withBase("/#education") },
  { label: "Projects", href: withBase("/#projects") }
];

export const heroStats = [
  { value: "20+", label: "Years in TA" },
  { value: "100+", label: "Leadership Hires" },
  { value: "10+", label: "Countries" },
  { value: "8+", label: "Products Shipped" }
];

export const organizations = [
  { name: "Atlan", logo: "/assets/Blue.svg", href: "#exp-atlan", invertInDark: false },
  { name: "ZTek Consulting", logo: "/assets/ztek.avif", href: "#exp-ztek", invertInDark: false },
  { name: "InfoCepts", logo: "/assets/Infocepts.png", href: "#exp-infocepts", invertInDark: false },
  { name: "GreyOrange", logo: "/assets/greyorange-logo.webp", href: "#exp-greyorange", invertInDark: false },
  { name: "UST", logo: "/assets/ust-white-logo.svg", href: "#exp-earlier", invertInDark: true }
];

export const experience = [
  {
    id: "exp-atlan",
    date: "Aug 2022 - Present",
    title: "R&D Talent Strategy & Talent Acquisition",
    company: "Atlan",
    companyHref: "https://atlan.com",
    subtitle: "The Missing Context Layer for Data & AI",
    bullets: [
      "Own R&D hiring across Engineering, Product, Design, IT, and Security. Lead a team of talent partners, sourcers, and coordinators.",
      "Advise leadership on org design, role scoping, and sequencing hires against product roadmaps.",
      "Designed the talent operating model: intake rigor, scorecards, governance, hiring investment planning.",
      "Reduced time-to-hire by 40%. Quality bar and candidate experience held."
    ]
  },
  {
    id: "exp-ztek",
    date: "Mar 2018 - Jul 2022",
    title: "Vice President",
    company: "ZTek Consulting",
    subtitle: "Global Talent & RPO Services",
    bullets: [
      "Scaled recruiting orgs and leadership hiring for Fortune 500 clients.",
      "Managed multimillion-dollar TA budgets. Cost-per-hire dropped 30% across key accounts.",
      "Built distributed teams and delivery governance. 95%+ SLA compliance."
    ]
  },
  {
    id: "exp-infocepts",
    date: "Jul 2016 - Apr 2018",
    title: "Manager, Talent Acquisition",
    company: "InfoCepts",
    subtitle: "Data & Analytics Services",
    bullets: [
      "Multi-country talent strategy across India, the US, and Singapore.",
      "Implemented Oracle Taleo workflows and reporting governance.",
      "Built executive hiring and early-talent programs tied to curriculum partnerships."
    ]
  },
  {
    id: "exp-greyorange",
    date: "Jul 2015 - Jul 2016",
    title: "Talent Acquisition Leadership",
    company: "GreyOrange",
    subtitle: "Robotics & automation",
    bullets: [
      "Scaled hiring during high-growth robotics expansion.",
      "Built structured interview loops for technical and leadership roles."
    ]
  },
  {
    id: "exp-earlier",
    date: "Apr 2006 - Jun 2015",
    title: "Earlier Career",
    company: "UST and earlier roles",
    subtitle: "Recruiting, consulting, and people operations",
    bullets: [
      "Recruiting delivery, stakeholder management, and talent operations across multiple orgs.",
      "Built the pattern-recognition that later shaped the systems and tooling work."
    ]
  }
];

export const expertise = [
  {
    title: "Talent Systems, Not Heroics",
    text:
      "I design hiring operating systems: role architecture, evaluation loops, calibration, governance, and sequencing. Repeatability over dependence on individual interviewers having a good day."
  },
  {
    title: "Executive Talent Advisory",
    text:
      "I work with founders and leadership teams on org design, capability gaps, investment pacing, and leadership hiring. The work is tied to company bets, not headcount targets."
  },
  {
    title: "AI-Native Recruiting Tools",
    text:
      "I build the tools my team uses daily — evaluators, offer experiences, prompt governance, usage tracking, candidate research agents. If a process runs often enough, it should be software."
  }
];

export const testimonials = [
  {
    quote:
      "One of the rare TA leaders who doesn't just recruit for the business, he influences how leadership thinks about talent as a competitive lever.",
    author: "Head of Global TA",
    context: "Enterprise SaaS"
  },
  {
    quote: "Instrumental in the best executive-level hires that helped us scale rapidly.",
    author: "Senior Technology Leader",
    context: "Data & Analytics"
  },
  {
    quote:
      "Talking to him feels less like talking to a recruiter and more like talking to an experienced colleague who has done the homework.",
    author: "Risk Management Executive",
    context: "Fortune 500"
  }
];

export const book = {
  title: "Raising the Bar",
  subtitle: "Building High-Density Teams in the Age of AI",
  href: "https://www.amazon.in/dp/B0FQMWW9RR",
  description:
    "A practical framework for building high-performing teams when AI changes what individuals can deliver. Covers hiring doctrine, evaluation design, and scaling judgment across growing organizations."
};

export const education = [
  {
    title: "Post Graduate Programme in Strategic Human Resource Management",
    institution: "IIM Nagpur",
    text:
      "Executive education in workforce planning, talent analytics, organizational design, and HR as a business function."
  },
  {
    title: "Professional Certifications",
    institution: "Industry credentials",
    tags: [
      "Lean Recruiting Yellow Belt",
      "Certified Tech Recruiter",
      "Diversity Recruiting",
      "Advanced LinkedIn Recruiter"
    ]
  }
];

export const supportingSections = [
  {
    title: "AI-Powered Hiring Tools",
    description:
      "Internal tools the recruiting team uses daily.",
    projects: [
      {
        title: "Atlan Interview Assist",
        summary:
          "Transcript analysis app that generates structured interviewer feedback, candidate evaluations, and PDF-ready reports against our Hiring for Great framework.",
        tags: ["Next.js", "Gemini", "Private"],
        visibility: "private",
        status: "active",
        href: "https://v0-re-main-interview-assist.vercel.app",
        external: true
      },
      {
        title: "Candidate Intel Agent",
        summary:
          "Parallel research agent that compiles candidate intelligence from resumes, GitHub, publications, and social signals into leveling and comp briefs.",
        tags: ["AI", "Research", "Private"],
        visibility: "private",
        status: "active"
      },
      {
        title: "JD Genius Builder",
        summary:
          "Job description generator. Enforces structure, outcome focus, and consistency. Recruiters use it instead of writing JDs from scratch.",
        tags: ["TypeScript", "Lovable", "Private"],
        visibility: "private",
        status: "active"
      },
      {
        title: "Interviewer Helper",
        summary:
          "Real-time interview support interface that surfaces follow-up prompts and coverage guidance during live conversations.",
        tags: ["React", "Private", "Prototype"],
        visibility: "private",
        status: "prototype",
        href: "https://interviewer-helper.vercel.app",
        external: true
      }
    ]
  },
  {
    title: "Open Source & Experiments",
    description:
      "Public repos, side projects, and earlier work.",
    projects: [
      {
        title: "JD Analyser",
        summary:
          "Full-stack app that scores job descriptions on clarity, inclusivity, and SEO — then suggests concrete improvements.",
        tags: ["TypeScript", "FastAPI", "Public"],
        visibility: "public",
        status: "supporting",
        href: "https://github.com/rishi-banerjee1/JD-Analyser",
        external: true
      },
      {
        title: "v0 JD Builder",
        summary:
          "Early v0 prototype for structured job descriptions. Led to the later JD Genius Builder.",
        tags: ["TypeScript", "v0", "Public"],
        visibility: "public",
        status: "archive",
        href: "https://github.com/rishi-banerjee1/v0-JD-Builder",
        external: true
      },
      {
        title: "Hotel Concierge",
        summary:
          "Natural-language hotel search agent that profiles hotel DNA and explains why each recommendation fits — not just price.",
        tags: ["Python", "Search", "Public"],
        visibility: "public",
        status: "supporting",
        href: "https://github.com/rishi-banerjee1/Natural-Language-Hotel-Searcher",
        external: true
      },
      {
        title: "Repo Extract",
        summary:
          "GitHub contributor extraction and enrichment tool for building candidate pipelines from open source activity.",
        tags: ["GitHub", "Utility", "Public"],
        visibility: "public",
        status: "supporting",
        href: "https://github.com/rishi-banerjee1/gh-repo-extract",
        external: true
      },
      {
        title: "Homebrew AI Tools",
        summary:
          "Homebrew tap for distributing developer utilities like Claude Usage Widget with one-command install.",
        tags: ["Homebrew", "Distribution", "Public"],
        visibility: "public",
        status: "supporting",
        href: "https://github.com/rishi-banerjee1/homebrew-ai-tools",
        external: true
      },
      {
        title: "Spring Wellness App",
        summary:
          "Team wellness check-in app. Next.js + Supabase.",
        tags: ["Next.js", "Supabase", "Public"],
        visibility: "public",
        status: "archive",
        href: "https://github.com/rishi-banerjee1/v0-Wellness-App",
        external: true
      },
      {
        title: "BlindBench",
        summary:
          "Open-source arena that blind-tests 100+ AI models on real prompts from 4 Kaggle datasets. Trust scores, failure classification, BYOK support.",
        tags: ["React", "Supabase", "Public"],
        visibility: "public",
        status: "active",
        href: "https://github.com/rishi-banerjee1/blindbench",
        external: true
      }
    ]
  }
];
