export const SITE = {
  name: "Rishi Banerjee",
  site: "https://rishi-banerjee1.github.io",
  basePath: "/about-me",
  description:
    "TA leader who builds systems. Director of Talent Acquisition at Atlan. Builds talent operating systems, AI products, and open source tools that make hiring more rigorous and repeatable.",
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
  { label: "Projects", href: withBase("/#projects") },
  { label: "Expertise", href: withBase("/#expertise") },
  { label: "Education", href: withBase("/#education") }
];

export const heroStats = [
  { value: "20+", label: "Years in TA" },
  { value: "100+", label: "Leadership Hires" },
  { value: "10+", label: "Countries" },
  { value: "22", label: "Repos Mapped" }
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
      "Own global R&D talent strategy across Engineering, Product, Design, IT, and Security.",
      "Lead talent partners, sourcers, and coordinators while acting as a strategic advisor on org design, role scoping, and sequencing hires against product roadmaps.",
      "Built a disciplined talent operating model spanning intake rigor, scorecards, governance, and hiring investment planning.",
      "Reduced time-to-hire by 40% while protecting quality bar and candidate experience."
    ]
  },
  {
    id: "exp-ztek",
    date: "Mar 2018 - Jul 2022",
    title: "Vice President",
    company: "ZTek Consulting",
    subtitle: "Global Talent & RPO Services",
    bullets: [
      "Scaled recruiting organizations and leadership hiring programs for Fortune 500 clients.",
      "Managed multimillion-dollar TA budgets and influenced workforce plans that reduced cost-per-hire by 30% across key accounts.",
      "Built distributed recruiting teams and delivery governance that sustained 95%+ SLA compliance."
    ]
  },
  {
    id: "exp-infocepts",
    date: "Jul 2016 - Apr 2018",
    title: "Manager, Talent Acquisition",
    company: "InfoCepts",
    subtitle: "Data & Analytics Services",
    bullets: [
      "Designed multi-country talent strategies across India, the US, and Singapore.",
      "Implemented and governed Oracle Taleo workflows and reporting.",
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
      "Helped scale hiring for a robotics company during high-growth expansion.",
      "Built structured hiring loops for technical and leadership hiring during rapid org build-out."
    ]
  },
  {
    id: "exp-earlier",
    date: "Apr 2006 - Jun 2015",
    title: "Earlier Career",
    company: "UST and earlier roles",
    subtitle: "Recruiting, consulting, and people operations",
    bullets: [
      "Built the foundations across recruiting delivery, stakeholder management, and talent operations.",
      "Developed the pattern-recognition and systems instincts that later shaped the tooling work."
    ]
  }
];

export const expertise = [
  {
    title: "Talent Systems, Not Heroics",
    text:
      "I design hiring operating systems: role architecture, evaluation loops, calibration, governance, and sequencing. The goal is repeatability, not dependence on individual interviewers having a good day."
  },
  {
    title: "Executive Talent Advisory",
    text:
      "I work with founders and leadership teams on org design, capability gaps, investment pacing, and leadership hiring. Talent is a strategic lever only when it is tied tightly to company bets."
  },
  {
    title: "AI-Native Recruiting Tools",
    text:
      "I build the tools my team wishes already existed: evaluators, offer experiences, prompt governance, usage visibility, and agentic systems that reduce drift in judgment."
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
    title: "Current AI Systems",
    description:
      "The private systems that deepen the same thesis as the flagship work: encode doctrine, reduce drift, and make judgment more durable.",
    projects: [
      {
        title: "Atlan Interview Assist",
        summary:
          "Gemini-powered transcript analysis app for interviewer feedback, candidate evaluation, and PDF-ready reports against the Hiring for Great framework.",
        tags: ["Next.js", "Gemini", "Private"],
        visibility: "private",
        status: "active",
        href: "https://v0-re-main-interview-assist.vercel.app",
        external: true
      },
      {
        title: "Candidate Intel Agent",
        summary:
          "Parallel research agent that compiles candidate intelligence from resumes, GitHub, publications, and social signals into leveling and comp context.",
        tags: ["AI", "Research", "Private"],
        visibility: "private",
        status: "active"
      },
      {
        title: "JD Genius Builder",
        summary:
          "Private evolution of the JD tooling line: structured, outcome-focused job descriptions with guardrails and better operator UX than the earlier prototypes.",
        tags: ["TypeScript", "Lovable", "Private"],
        visibility: "private",
        status: "active"
      },
      {
        title: "Interviewer Helper",
        summary:
          "Real-time interview support interface for follow-up prompts and coverage guidance; currently more foundation than finished product.",
        tags: ["React", "Private", "Prototype"],
        visibility: "private",
        status: "prototype",
        href: "https://interviewer-helper.vercel.app",
        external: true
      }
    ]
  },
  {
    title: "Explorations & Supporting Utilities",
    description:
      "Public experiments, side utilities, and earlier tools that still show the breadth of the account even if they are not the lead narrative.",
    projects: [
      {
        title: "JD Analyser",
        summary:
          "FastAPI + React application for improving job descriptions on clarity, inclusivity, and SEO. Strong problem framing, older implementation.",
        tags: ["TypeScript", "FastAPI", "Public"],
        visibility: "public",
        status: "supporting",
        href: "https://github.com/rishi-banerjee1/JD-Analyser",
        external: true
      },
      {
        title: "v0 JD Builder",
        summary:
          "An earlier v0-driven UI experiment that helped shape the later JD tool direction.",
        tags: ["TypeScript", "v0", "Public"],
        visibility: "public",
        status: "archive",
        href: "https://github.com/rishi-banerjee1/v0-JD-Builder",
        external: true
      },
      {
        title: "Hotel Concierge",
        summary:
          "Natural-language hotel search and ranking agent that profiles hotel DNA and explains recommendation fit, not just price.",
        tags: ["Python", "Search", "Public"],
        visibility: "public",
        status: "supporting",
        href: "https://github.com/rishi-banerjee1/Natural-Language-Hotel-Searcher",
        external: true
      },
      {
        title: "Repo Extract",
        summary:
          "Contributor extraction and enrichment tool. Useful utility, but the README and polish still feel prototype-grade.",
        tags: ["GitHub", "Utility", "Public"],
        visibility: "public",
        status: "prototype",
        href: "https://github.com/rishi-banerjee1/gh-repo-extract",
        external: true
      },
      {
        title: "Homebrew AI Tools",
        summary:
          "Supporting distribution repo for shipping developer utilities like Claude Usage Widget through Homebrew.",
        tags: ["Homebrew", "Distribution", "Public"],
        visibility: "public",
        status: "supporting",
        href: "https://github.com/rishi-banerjee1/homebrew-ai-tools",
        external: true
      },
      {
        title: "Spring Wellness App",
        summary:
          "Earlier team wellness app experiment built with Next.js and Supabase.",
        tags: ["Next.js", "Supabase", "Public"],
        visibility: "public",
        status: "archive",
        href: "https://github.com/rishi-banerjee1/v0-Wellness-App",
        external: true
      }
    ]
  }
];
