// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE = {
  name: "Mir Sameer Irfan",
  role: "Engineer · Enterprise AI & full-stack",
  location: "St. Catharines, ON",
  timeZone: "America/Toronto",
  // Where "get in touch" links point. No email or phone is published on this site.
  contact: "https://www.linkedin.com/in/mirsameerirfan/",
  description:
    "Engineer with 5+ years across software development and production troubleshooting. Builds in TypeScript, Java and Python, and takes failures on an enterprise AI platform to root cause.",
};

// Kept for the RSS feed
export const SITE_TITLE = SITE.name;
export const SITE_DESCRIPTION = SITE.description;

export const NAV = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export const SOCIALS = [
  { href: "https://github.com/MirSameerIrfan", label: "GitHub" },
  { href: "https://www.linkedin.com/in/mirsameerirfan/", label: "LinkedIn" },
  { href: "https://x.com/Mirsameer_", label: "X" },
];

export const FOCUS = [
  {
    title: "Build",
    text: "React and TypeScript frontends and Java/Spring Boot APIs for client projects, Python automation that runs on every new ticket, and a multi-agent system that investigates incidents before a human does.",
    items: ["TypeScript", "React", "Java / Spring Boot", "Python", "LLM agents & MCP"],
  },
  {
    title: "Debug",
    text: "Production failures taken to root cause: reproduce the problem, read the application code across the stack, query the database, and confirm or rule out each hypothesis.",
    items: ["Docker", "Kubernetes", "gRPC", "PostgreSQL", "REST, SSO & SCIM"],
  },
  {
    title: "Operate",
    text: "Linux servers, containers and the network around them, watched through logs and metrics, with incidents led end to end and written up afterwards.",
    items: ["Linux", "DNS & TLS", "Nginx", "ELK Stack", "Datadog"],
  },
];

// Titles, dates and bullet points follow the résumé. Keep them in step with it.
export const EXPERIENCE = [
  {
    period: "Jan 2026 — Present",
    role: "Enterprise AI Support Engineer",
    company: "Accenture",
    place: "St. Catharines, ON",
    summary:
      "Root-cause work on an enterprise AI platform, including inference services on Docker and Kubernetes, plus Python triage tooling and a multi-agent incident investigation system.",
    points: [
      "Take enterprise customer issues to root cause, including inference services running in Docker containers on Kubernetes that communicate over gRPC: reproduce the problem, read application code across the stack to locate the failure logic, and confirm or rule out hypotheses; run PostgreSQL queries to investigate data-level issues directly without waiting on engineering.",
      "Write Python scripts for automated triage, system health inspection, data verification, and production validation that run on every new ticket, catching systemic issues early and reducing time to resolution.",
      "Troubleshoot API integration, SSO/SCIM provisioning, and access control failures for developer-facing enterprise customers, resolving the majority without engineering involvement.",
      "Synthesize recurring failures from ELK Stack and Datadog into structured bug reports with reproduction steps that engineering prioritizes within the sprint.",
      "Built the team's runbook library from scratch covering the most common SSO, API, and instrumentation failure patterns, reducing repeat escalations by ~40%.",
      "Built and operate a multi-agent incident investigation system: parallel LLM agents consume historical cases and SOPs with MCP-based tool access, surfacing resolution paths before a human investigates.",
    ],
  },
  {
    period: "Sep 2024 — Dec 2025",
    role: "IT Support Specialist",
    company: "SSCI IT Services",
    place: "Mississauga, ON",
    summary:
      "Root cause analysis for Docker-deployed SaaS applications and Linux servers: container logs, DNS, Apache and Nginx. Led response on two major incidents.",
    points: [
      "Provided SaaS application support for clients whose applications were mostly deployed on Docker: checked container health, read container logs, and traced failures to the cause, then escalated to engineering with a complete package (reproduction steps, logs, and analysis) only when genuinely needed.",
      "Owned technical escalations across client accounts: diagnosed Linux server failures, DNS misconfigurations, Apache and Nginx outages, and permission conflicts through systematic root cause analysis; most cases resolved without reaching senior engineering.",
      "Managed 80+ tickets per week (16–18 per day) in ServiceNow and Jira, maintaining 95%+ CSAT while consistently meeting SLA targets with accurate documentation and clean escalation handoffs.",
      "Led major incident response for two large service disruptions, coordinating internal teams, maintaining client communication at an agreed update cadence, and delivering post-incident reports with zero account attrition.",
      "Established a shared troubleshooting knowledge base and documentation standards that reduced time-to-resolve for recurring issues.",
    ],
  },
  {
    period: "Jun 2022 — Apr 2023",
    role: "Customer Experience Quality Operations Associate",
    company: "Amazon Development Center",
    place: "Remote",
    summary:
      "Monitored high-volume CX platforms in a 24×7 global operation and turned failure patterns into workflow changes.",
    points: [
      "Monitored high-volume CX platforms in a 24×7 global operation, turning failure patterns into recommendations that tightened escalation workflows and reduced repeat failures.",
    ],
  },
  {
    period: "Sep 2019 — Jun 2022",
    role: "Front End Developer",
    company: "Claro Software Solutions",
    place: "Hyderabad, India",
    summary:
      "Java/Spring Boot REST APIs and React/TypeScript frontends for client projects, from specification through production, including Stripe integrations.",
    points: [
      "Built Java/Spring Boot REST APIs and React/TypeScript frontends across multiple client projects, from specification through production deployment, and cut post-release bugs by 20% through testing and debugging.",
      "Integrated and debugged Stripe end-to-end across multiple client deployments: traced payment flow failures, authentication errors, and webhook delivery issues from application code through API responses, resolving integration failures directly in live production environments.",
      "Engineered reusable React and TypeScript component libraries that reduced production defect rates across client projects.",
    ],
  },
];

export const EDUCATION = [
  {
    period: "2023 — 2024",
    title: "Post Graduate Diploma, Information Technology Business Analysis",
    school: "Conestoga College, Kitchener, ON",
  },
  {
    period: "2015 — 2019",
    title: "Bachelor of Engineering, Computer Science",
    school: "Osmania University, Hyderabad, India",
  },
];

export const TOOLKIT = [
  {
    group: "Languages",
    items: ["Python", "TypeScript & JavaScript", "Java / Spring Boot", "React", "Bash", "SQL", "Git"],
  },
  {
    group: "Containers & orchestration",
    items: ["Kubernetes", "Docker", "gRPC", "Containerized inference services"],
  },
  {
    group: "Linux & networking",
    items: ["Linux (Ubuntu)", "DNS", "TCP/IP", "SSL/TLS", "Nginx", "Apache", "FortiGate"],
  },
  {
    group: "Cloud & infrastructure",
    items: ["AWS (EC2, S3, IAM, CloudWatch)", "Azure", "Windows Server", "VMware", "KVM"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    group: "APIs & integrations",
    items: ["REST", "GraphQL", "Webhooks", "OAuth", "SSO", "SCIM"],
  },
  {
    group: "Observability",
    items: ["ELK Stack", "Datadog", "Grafana", "Dynatrace", "Sentry"],
  },
  {
    group: "AI & automation",
    items: ["Multi-agent workflows", "LLM orchestration", "RAG", "MCP", "n8n", "Prompt engineering"],
  },
];
