import { Brain, Code, Cpu, TrendingUp, type LucideIcon } from "lucide-react";

export interface ServiceOffering {
  title: string;
  description: string;
  bullets: string[];
}

export interface ServiceCategory {
  slug: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  items: string[];
  overview: string;
  identityLine: string;
  idealFor: string[];
  deliverables: string[];
  process: string[];
  offerings: ServiceOffering[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "development-solutions",
    icon: Code,
    title: "Development Solutions",
    intro:
      "Design-led software delivery for businesses that need modern products, smoother user experiences, and dependable long-term support.",
    items: [
      "Website development",
      "App development",
      "Web app maintenance",
      "Redesign of apps and websites with a modern look and feel",
      "After-development support and service continuity",
    ],
    overview:
      "We build business websites, custom web applications, and modern product experiences that are fast, reliable, and designed to convert visitors into customers.",
    identityLine: "From landing pages to full platforms, we build software that supports real business growth.",
    idealFor: [
      "Startups launching a new product or MVP",
      "Businesses that need a professional website that converts",
      "Brands with outdated apps or websites that need a redesign",
      "Teams that need ongoing maintenance after launch",
    ],
    deliverables: [
      "Business-focused UI and UX design",
      "Responsive website or app development",
      "Admin panels, dashboards, and business workflows",
      "Performance optimization and technical support",
      "Post-launch maintenance and improvement roadmap",
    ],
    process: [
      "Discovery of goals, target users, and required features",
      "Wireframes and interface direction aligned with your brand",
      "Development of the website or app with responsive behavior",
      "Testing, feedback rounds, launch, and support handover",
    ],
    offerings: [
      {
        title: "Website Development",
        description:
          "Professional websites built to present your brand clearly, load fast, and create trust with your audience.",
        bullets: [
          "Company websites, portfolio sites, and service websites",
          "Responsive layouts for mobile, tablet, and desktop",
          "SEO-friendly structure and clear content hierarchy",
          "Conversion-focused sections such as CTAs, forms, and lead capture",
        ],
      },
      {
        title: "App Development",
        description:
          "Custom application development for businesses that need a better digital experience for users, teams, or customers.",
        bullets: [
          "Custom business applications and client-facing products",
          "Feature planning based on real workflows",
          "Scalable architecture for future updates",
          "Smooth user journeys with practical interface decisions",
        ],
      },
      {
        title: "Redesign and Modernization",
        description:
          "Refreshing outdated websites and applications with better design, cleaner structure, and stronger usability.",
        bullets: [
          "Visual redesign with a modern look and feel",
          "Improved layout, readability, and navigation flow",
          "Better content presentation and brand consistency",
          "Experience upgrades based on real business goals",
        ],
      },
      {
        title: "Maintenance and Support",
        description:
          "Ongoing care after launch so your product continues to perform well as your business grows.",
        bullets: [
          "Bug fixes and stability improvements",
          "Content and feature updates",
          "Technical guidance for future enhancements",
          "Reliable support for continuity and performance",
        ],
      },
    ],
  },
  {
    slug: "infrastructure-computation",
    icon: Cpu,
    title: "Infrastructure & Computation",
    intro:
      "From local computer environments to enterprise-grade network systems, we build stable technical foundations that can grow with your operations.",
    items: [
      "Server control systems",
      "Network development and lab setup",
      "Computer connection and office system configuration",
      "NAS setups for secure storage and access",
      "LAN, WAN, and MAN development with smart integration",
    ],
    overview:
      "We plan and implement the technical infrastructure that powers daily work, secure storage, team connectivity, and scalable office operations.",
    identityLine: "Strong digital systems start with dependable infrastructure.",
    idealFor: [
      "Schools setting up labs or digital classrooms",
      "Offices that need network planning and device connectivity",
      "Teams that need centralized storage and access control",
      "Businesses preparing for long-term technical scale",
    ],
    deliverables: [
      "Infrastructure planning based on your workspace and operations",
      "Network setup and system configuration",
      "Secure data access and storage design",
      "Technical documentation and support guidance",
    ],
    process: [
      "Assessment of current systems and infrastructure goals",
      "Network and hardware planning with clear requirements",
      "Installation, integration, and system configuration",
      "Testing, optimization, and operational support",
    ],
    offerings: [
      {
        title: "Network and Lab Setup",
        description:
          "Building reliable technical environments for schools, offices, and operational teams.",
        bullets: [
          "Computer lab planning and setup",
          "Structured device connectivity and internet distribution",
          "Office system configuration for smooth team use",
          "Scalable layouts for future expansion",
        ],
      },
      {
        title: "Server and Control Systems",
        description:
          "Foundational system setups that support better control, monitoring, and internal operations.",
        bullets: [
          "Server-side environment setup",
          "Control systems for connected infrastructure",
          "Operational access planning and stability checks",
          "Configuration aligned with long-term usage",
        ],
      },
      {
        title: "Storage and Access Infrastructure",
        description:
          "Secure internal storage systems that make files easier to manage, protect, and access.",
        bullets: [
          "NAS setup for centralized business storage",
          "Organized file access across teams or departments",
          "Backup-aware configuration and permissions planning",
          "Practical structure for growing data needs",
        ],
      },
      {
        title: "LAN, WAN, and MAN Integration",
        description:
          "Network planning that supports both local efficiency and broader connectivity requirements.",
        bullets: [
          "Local area network setup",
          "Wider network integration for multi-point communication",
          "Configuration support for complex environments",
          "Smart planning for performance and reliability",
        ],
      },
    ],
  },
  {
    slug: "ai-automation",
    icon: Brain,
    title: "AI Integration & Automation",
    intro:
      "We help teams use AI in practical ways that improve sales, management, workflows, and decision-making instead of adding complexity.",
    items: [
      "Business AI models to improve sales and management",
      "AI integrations for existing software and processes",
      "Automation systems for repeated business tasks",
      "Smart operational workflows for growing teams",
    ],
    overview:
      "Our AI and automation services focus on reducing manual effort, improving decision-making, and creating smarter business operations.",
    identityLine: "AI should make your team faster, clearer, and more effective, not more confused.",
    idealFor: [
      "Businesses dealing with repetitive operational tasks",
      "Teams that want AI integrated into existing systems",
      "Sales and management workflows that need automation",
      "Growing companies that need smarter decision support",
    ],
    deliverables: [
      "Workflow mapping and automation planning",
      "AI feature integration into current systems",
      "Business-specific automation design",
      "Training and support for practical adoption",
    ],
    process: [
      "Identify repetitive tasks and business bottlenecks",
      "Map the right AI or automation opportunities",
      "Integrate and test the workflow inside your operations",
      "Monitor outcomes and refine for better efficiency",
    ],
    offerings: [
      {
        title: "AI Business Models",
        description:
          "Tailored AI-driven systems built around operational goals such as sales growth, management efficiency, and better reporting.",
        bullets: [
          "Sales-support workflows",
          "Internal decision-support systems",
          "Business logic adapted to your workflow",
          "Practical implementation instead of generic AI demos",
        ],
      },
      {
        title: "AI Integration",
        description:
          "Adding AI capabilities to tools and systems you already use so your team gets more value without replacing everything.",
        bullets: [
          "AI integration into existing software",
          "Support for data-driven workflows",
          "User-friendly adoption inside current operations",
          "Focused implementation tied to business outcomes",
        ],
      },
      {
        title: "Automation Systems",
        description:
          "Removing repetitive work through process automation so teams can focus on higher-value tasks.",
        bullets: [
          "Automated task flows for routine processes",
          "Time-saving systems for repeated operations",
          "Lower manual dependency and fewer process delays",
          "Operational consistency across teams",
        ],
      },
      {
        title: "Smart Workflow Design",
        description:
          "Connecting tools, people, and actions into smoother systems that support day-to-day business performance.",
        bullets: [
          "Workflow simplification and optimization",
          "Clear role-based process flow design",
          "Better handoffs across teams",
          "Structure for scale and continuity",
        ],
      },
    ],
  },
  {
    slug: "growth-marketing-advisory",
    icon: TrendingUp,
    title: "Growth, Marketing & Advisory",
    intro:
      "A business-focused support layer that combines marketing execution, strategic guidance, and practical growth planning.",
    items: [
      "Ad management",
      "Social media management and marketing",
      "Marketing advice",
      "Investment guidance for companies exploring strong stocks and brokerage options",
      "Business support aligned with technical delivery",
    ],
    overview:
      "We support business growth with digital marketing execution, advisory thinking, and practical direction that helps companies move with more confidence.",
    identityLine: "Strong business growth needs both execution and the right strategic direction.",
    idealFor: [
      "Businesses that need better online visibility",
      "Brands looking for structured social media support",
      "Founders who want practical marketing guidance",
      "Companies that want business advice connected to digital execution",
    ],
    deliverables: [
      "Marketing strategy support and execution planning",
      "Social media and ad campaign assistance",
      "Growth-oriented advisory recommendations",
      "Practical business support connected to your digital systems",
    ],
    process: [
      "Understand business goals, market position, and audience",
      "Define a focused growth or marketing plan",
      "Execute campaigns, content direction, or advisory support",
      "Review outcomes and improve for stronger performance",
    ],
    offerings: [
      {
        title: "Ad Management",
        description:
          "Campaign support designed to improve visibility, lead generation, and business reach.",
        bullets: [
          "Ad planning based on business goals",
          "Audience-focused promotion direction",
          "Creative and messaging alignment",
          "Performance-aware optimization support",
        ],
      },
      {
        title: "Social Media Management",
        description:
          "Helping brands stay active, consistent, and growth-focused across digital platforms.",
        bullets: [
          "Content direction and posting support",
          "Brand consistency across channels",
          "Audience engagement strategy",
          "Practical digital presence improvement",
        ],
      },
      {
        title: "Marketing Advice",
        description:
          "Clear, practical guidance that helps businesses make smarter marketing decisions.",
        bullets: [
          "Positioning and messaging advice",
          "Campaign direction and content planning",
          "Channel selection guidance",
          "Growth thinking tied to business reality",
        ],
      },
      {
        title: "Business and Investment Guidance",
        description:
          "Supportive business insight for companies exploring opportunities, growth direction, and better financial decision frameworks.",
        bullets: [
          "Practical business support conversations",
          "Guidance aligned with company growth thinking",
          "Structured advice for decision confidence",
          "Connected perspective across business and technology",
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICE_CATEGORIES.find((service) => service.slug === slug);
}
