import { Code, Server, TrendingUp, Settings, BarChart3, Share2, type LucideIcon } from "lucide-react";

export interface ServiceOffering {
  title: string;
  description: string;
  bullets: string[];
}

export interface ServicePlan {
  name: string;
  price: string;
  tagline: string;
  bestFor: string;
  features: string[];
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
  plans: ServicePlan[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "web-app-development",
    icon: Code,
    title: "Custom Web Application Development",
    intro:
      "We design and develop scalable, high-performance web applications tailored to your business needs. From MVPs to enterprise platforms, we build software that drives growth.",
    items: [
      "Custom web application development",
      "SaaS product development",
      "Business process automation",
      "API development and integration",
      "Progressive web apps (PWA)",
    ],
    overview:
      "Our custom web application development services help startups and businesses launch powerful, scalable digital products. We combine modern technology with strategic thinking to deliver solutions that convert users and streamline operations.",
    identityLine: "From concept to launch, we build web applications that power business growth.",
    idealFor: [
      "Startups building their first product or MVP",
      "Businesses automating manual workflows",
      "Companies launching SaaS products",
      "Organizations needing custom internal tools",
    ],
    deliverables: [
      "Fully responsive, mobile-first web application",
      "Secure user authentication and authorization",
      "Admin dashboards and reporting tools",
      "API integrations with third-party services",
      "Deployment and launch support",
    ],
    process: [
      "Requirements analysis and technical planning",
      "UI/UX design and prototyping",
      "Agile development with regular demos",
      "Testing, deployment, and launch",
    ],
    offerings: [
      {
        title: "Custom Web Applications",
        description:
          "Tailored web applications built from scratch to solve your unique business challenges and automate complex workflows.",
        bullets: [
          "Custom business applications and platforms",
          "User role management and permissions",
          "Real-time data processing and updates",
          "Scalable architecture for future growth",
        ],
      },
      {
        title: "SaaS Product Development",
        description:
          "End-to-end SaaS product development from initial concept to market launch, with subscription management and multi-tenant architecture.",
        bullets: [
          "Multi-tenant SaaS architecture",
          "Subscription and billing integration",
          "Analytics and user engagement tracking",
          "Continuous deployment and updates",
        ],
      },
      {
        title: "Business Automation Systems",
        description:
          "Streamline operations with intelligent automation that reduces manual work, eliminates errors, and improves team productivity.",
        bullets: [
          "Workflow automation and optimization",
          "Data synchronization across platforms",
          "Automated reporting and notifications",
          "Integration with existing business tools",
        ],
      },
      {
        title: "API Development & Integration",
        description:
          "Connect your systems with custom APIs and third-party integrations for seamless data flow and enhanced functionality.",
        bullets: [
          "RESTful and GraphQL API development",
          "Third-party service integration",
          "Payment gateway implementation",
          "Secure data exchange protocols",
        ],
      },
    ],
    plans: [
      {
        name: "Starter",
        price: "Rs 24,999",
        tagline: "Launch your MVP with essential features.",
        bestFor: "Startups validating their product idea",
        features: [
          "Single-purpose web application",
          "Responsive design for all devices",
          "User authentication and basic dashboard",
          "Database setup and API development",
        ],
      },
      {
        name: "Professional",
        price: "Rs 49,999",
        tagline: "Full-featured application for growing businesses.",
        bestFor: "Businesses ready to scale operations",
        features: [
          "Multi-module web application",
          "Advanced user roles and permissions",
          "Admin panel with analytics",
          "Third-party integrations and automation",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        tagline: "Enterprise-grade platform with complete support.",
        bestFor: "Companies building complex, scalable platforms",
        features: [
          "Custom enterprise web application",
          "Microservices architecture",
          "Advanced security and compliance",
          "Priority support and SLA guarantee",
        ],
      },
    ],
  },
  {
    slug: "web-app-management",
    icon: Server,
    title: "Web App Management & Maintenance",
    intro:
      "Keep your web application running smoothly with proactive maintenance, performance optimization, security updates, and continuous improvements.",
    items: [
      "Proactive application monitoring",
      "Security updates and patches",
      "Performance optimization",
      "Bug fixes and troubleshooting",
      "Feature enhancements and updates",
    ],
    overview:
      "Our web app management and maintenance services ensure your application stays secure, fast, and up-to-date. We provide ongoing support so you can focus on growing your business while we handle the technical details.",
    identityLine: "Continuous support for reliable, high-performing web applications.",
    idealFor: [
      "Businesses with live web applications",
      "Startups needing ongoing technical support",
      "Companies without in-house development teams",
      "Organizations prioritizing application security",
    ],
    deliverables: [
      "24/7 application monitoring and alerting",
      "Regular security updates and backups",
      "Performance optimization reports",
      "Monthly maintenance and improvement updates",
    ],
    process: [
      "Application audit and baseline assessment",
      "Monitoring setup and alert configuration",
      "Regular maintenance schedule execution",
      "Monthly reporting and strategic recommendations",
    ],
    offerings: [
      {
        title: "Proactive Monitoring",
        description:
          "Continuous monitoring of your application's performance, uptime, and security to catch issues before they impact users.",
        bullets: [
          "Real-time uptime monitoring",
          "Performance metrics tracking",
          "Automated alert systems",
          "Incident response and resolution",
        ],
      },
      {
        title: "Security & Updates",
        description:
          "Keep your application secure with regular updates, security patches, and vulnerability assessments.",
        bullets: [
          "Dependency and framework updates",
          "Security vulnerability scanning",
          "Data backup and disaster recovery",
          "SSL certificate management",
        ],
      },
      {
        title: "Performance Optimization",
        description:
          "Improve load times, reduce server costs, and enhance user experience through continuous performance tuning.",
        bullets: [
          "Database query optimization",
          "Frontend performance improvements",
          "Server resource optimization",
          "Caching strategy implementation",
        ],
      },
      {
        title: "Feature Enhancements",
        description:
          "Continuously improve your application with new features, UI improvements, and user experience enhancements.",
        bullets: [
          "New feature development",
          "UI/UX improvements",
          "User feedback implementation",
          "A/B testing and optimization",
        ],
      },
    ],
    plans: [
      {
        name: "Basic",
        price: "Rs 9,999/month",
        tagline: "Essential maintenance for small applications.",
        bestFor: "Simple web apps with basic needs",
        features: [
          "Monthly security updates",
          "Uptime monitoring",
          "Bug fixes and troubleshooting",
          "Email support during business hours",
        ],
      },
      {
        name: "Professional",
        price: "Rs 19,999/month",
        tagline: "Comprehensive support for growing applications.",
        bestFor: "Business-critical applications",
        features: [
          "Weekly maintenance updates",
          "Performance optimization",
          "Priority bug resolution",
          "Phone and email support",
        ],
      },
      {
        name: "Enterprise",
        price: "Rs 39,999/month",
        tagline: "Enterprise-grade support with SLA guarantee.",
        bestFor: "High-traffic, mission-critical platforms",
        features: [
          "24/7 monitoring and support",
          "Dedicated account manager",
          "Monthly strategy sessions",
          "Guaranteed response times",
        ],
      },
    ],
  },
  {
    slug: "saas-development",
    icon: BarChart3,
    title: "SaaS Product Development",
    intro:
      "Transform your software idea into a scalable, revenue-generating SaaS product. We handle everything from architecture to launch and beyond.",
    items: [
      "Multi-tenant SaaS architecture",
      "Subscription management systems",
      "User onboarding and engagement",
      "Analytics and reporting dashboards",
      "Scalable cloud infrastructure",
    ],
    overview:
      "Our SaaS product development service helps entrepreneurs and businesses launch software-as-a-service products that scale. We focus on building robust, user-friendly platforms with strong monetization strategies.",
    identityLine: "Build, launch, and scale your SaaS product with expert development.",
    idealFor: [
      "Entrepreneurs launching SaaS startups",
      "Software companies transitioning to SaaS model",
      "Businesses creating internal tools as products",
      "Agencies productizing their services",
    ],
    deliverables: [
      "Production-ready SaaS application",
      "Subscription and payment integration",
      "User analytics and engagement tools",
      "Scalable cloud infrastructure setup",
    ],
    process: [
      "Market research and product strategy",
      "Architecture design and technology selection",
      "Iterative development with user testing",
      "Launch preparation and go-to-market support",
    ],
    offerings: [
      {
        title: "SaaS Architecture Design",
        description:
          "Build a scalable foundation with multi-tenant architecture, secure data isolation, and efficient resource management.",
        bullets: [
          "Multi-tenant database design",
          "Scalable microservices architecture",
          "Data security and isolation",
          "Performance optimization strategies",
        ],
      },
      {
        title: "Subscription & Billing",
        description:
          "Implement flexible pricing models, automated billing, and subscription management to maximize revenue.",
        bullets: [
          "Stripe/PayPal integration",
          "Tiered pricing and plans",
          "Automated invoicing and receipts",
          "Trial and freemium models",
        ],
      },
      {
        title: "User Experience & Onboarding",
        description:
          "Create intuitive user experiences that drive adoption, reduce churn, and increase customer lifetime value.",
        bullets: [
          "Intuitive user interface design",
          "Guided onboarding flows",
          "In-app tutorials and help systems",
          "User engagement analytics",
        ],
      },
      {
        title: "Analytics & Growth Tools",
        description:
          "Data-driven insights to understand user behavior, optimize features, and drive product-led growth.",
        bullets: [
          "User behavior tracking",
          "Conversion funnel analysis",
          "Revenue and churn metrics",
          "A/B testing framework",
        ],
      },
    ],
    plans: [
      {
        name: "MVP",
        price: "Rs 49,999",
        tagline: "Launch your SaaS MVP quickly.",
        bestFor: "Startups validating their SaaS idea",
        features: [
          "Core SaaS functionality",
          "Basic subscription management",
          "User authentication and dashboard",
          "Cloud deployment setup",
        ],
      },
      {
        name: "Growth",
        price: "Rs 99,999",
        tagline: "Full-featured SaaS ready for market.",
        bestFor: "Companies launching to market",
        features: [
          "Advanced SaaS features",
          "Complete billing system",
          "Analytics and reporting",
          "Marketing integrations",
        ],
      },
      {
        name: "Scale",
        price: "Custom Quote",
        tagline: "Enterprise SaaS with unlimited potential.",
        bestFor: "Established SaaS products scaling up",
        features: [
          "Custom enterprise features",
          "Advanced analytics and AI",
          "Multi-region deployment",
          "White-label capabilities",
        ],
      },
    ],
  },
  {
    slug: "business-automation",
    icon: Settings,
    title: "Business Automation Systems",
    intro:
      "Eliminate repetitive tasks, reduce errors, and boost productivity with intelligent automation tailored to your business processes.",
    items: [
      "Workflow automation",
      "Data entry automation",
      "Report generation and distribution",
      "Email and communication automation",
      "Third-party tool integration",
    ],
    overview:
      "Our business automation services help companies streamline operations, reduce manual work, and improve efficiency. We analyze your workflows and implement smart automation solutions that save time and money.",
    identityLine: "Automate repetitive work. Focus on what matters.",
    idealFor: [
      "Businesses with repetitive manual processes",
      "Companies scaling operations efficiently",
      "Teams struggling with data management",
      "Organizations seeking operational excellence",
    ],
    deliverables: [
      "Automated workflow systems",
      "Integration between business tools",
      "Custom automation scripts and bots",
      "Training and documentation",
    ],
    process: [
      "Process audit and opportunity identification",
      "Automation strategy and roadmap",
      "Implementation and testing",
      "Training and continuous optimization",
    ],
    offerings: [
      {
        title: "Workflow Automation",
        description:
          "Automate complex business workflows to reduce manual intervention and accelerate processes.",
        bullets: [
          "Multi-step workflow automation",
          "Approval and notification systems",
          "Task assignment and tracking",
          "Exception handling and alerts",
        ],
      },
      {
        title: "Data Automation",
        description:
          "Eliminate manual data entry with intelligent data synchronization, validation, and processing.",
        bullets: [
          "Automated data import/export",
          "Cross-platform data sync",
          "Data validation and cleansing",
          "Scheduled data processing",
        ],
      },
      {
        title: "Communication Automation",
        description:
          "Streamline internal and external communications with automated emails, reports, and notifications.",
        bullets: [
          "Automated email campaigns",
          "Scheduled report generation",
          "Customer notification systems",
          "Internal communication workflows",
        ],
      },
      {
        title: "Tool Integration",
        description:
          "Connect your existing business tools to create a unified, automated ecosystem.",
        bullets: [
          "CRM and ERP integration",
          "Accounting software automation",
          "Project management sync",
          "Custom API development",
        ],
      },
    ],
    plans: [
      {
        name: "Starter",
        price: "Rs 19,999",
        tagline: "Automate your first workflow.",
        bestFor: "Businesses new to automation",
        features: [
          "Single workflow automation",
          "Basic tool integration",
          "Setup and configuration",
          "Training session",
        ],
      },
      {
        name: "Professional",
        price: "Rs 39,999",
        tagline: "Comprehensive automation suite.",
        bestFor: "Growing businesses scaling operations",
        features: [
          "Multiple workflow automations",
          "Advanced integrations",
          "Custom automation scripts",
          "Ongoing support",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        tagline: "Full-scale business automation.",
        bestFor: "Large organizations with complex needs",
        features: [
          "Enterprise-wide automation",
          "Custom system development",
          "Dedicated automation engineer",
          "Quarterly optimization reviews",
        ],
      },
    ],
  },
  {
    slug: "google-ads-management",
    icon: TrendingUp,
    title: "Google Ads Management",
    intro:
      "Maximize your ROI with data-driven Google Ads campaigns. We create, manage, and optimize paid advertising that delivers measurable results.",
    items: [
      "Google Search ads",
      "Display and banner campaigns",
      "Shopping ads for e-commerce",
      "Campaign optimization and A/B testing",
      "Performance tracking and reporting",
    ],
    overview:
      "Our Google Ads management service helps businesses reach their target audience at the right time with the right message. We focus on maximizing conversions while minimizing cost per acquisition.",
    identityLine: "Strategic paid advertising that drives qualified leads and sales.",
    idealFor: [
      "E-commerce businesses driving sales",
      "Service businesses generating leads",
      "Startups accelerating customer acquisition",
      "Companies expanding market reach",
    ],
    deliverables: [
      "Campaign strategy and setup",
      "Ad copy and creative development",
      "Ongoing optimization and testing",
      "Monthly performance reports",
    ],
    process: [
      "Account audit and competitor analysis",
      "Campaign strategy and keyword research",
      "Ad creation and campaign launch",
      "Continuous optimization and reporting",
    ],
    offerings: [
      {
        title: "Search Campaign Management",
        description:
          "Target high-intent customers actively searching for your products or services with optimized search ads.",
        bullets: [
          "Keyword research and strategy",
          "Compelling ad copy creation",
          "Bid management and optimization",
          "Quality score improvement",
        ],
      },
      {
        title: "Display & Remarketing",
        description:
          "Re-engage website visitors and build brand awareness with targeted display advertising across the Google network.",
        bullets: [
          "Banner ad design",
          "Audience segmentation",
          "Remarketing campaign setup",
          "Frequency capping and optimization",
        ],
      },
    ],
    plans: [
      {
        name: "Starter",
        price: "Rs 14,999/month",
        tagline: "Get started with Google Ads.",
        bestFor: "Small businesses testing paid ads",
        features: [
          "Single campaign management",
          "Keyword research and setup",
          "Monthly optimization",
          "Basic reporting",
        ],
      },
      {
        name: "Growth",
        price: "Rs 24,999/month",
        tagline: "Scale your advertising efforts.",
        bestFor: "Businesses ready to invest in growth",
        features: [
          "Multiple campaign types",
          "A/B testing and optimization",
          "Remarketing setup",
          "Detailed monthly reports",
        ],
      },
      {
        name: "Advanced",
        price: "Rs 39,999/month",
        tagline: "Comprehensive advertising strategy.",
        bestFor: "Established businesses maximizing ROI",
        features: [
          "Full-funnel campaign strategy",
          "Advanced bidding strategies",
          "Custom conversion tracking",
          "Weekly optimization calls",
        ],
      },
    ],
  },
  {
    slug: "social-media-management",
    icon: Share2,
    title: "Social Media Management",
    intro:
      "Build a strong online presence and engage your audience with strategic social media management that grows your brand.",
    items: [
      "Content strategy and calendar",
      "Post creation and scheduling",
      "Community management",
      "Analytics and performance tracking",
      "Paid social campaigns",
    ],
    overview:
      "Our social media management service helps businesses build authentic connections with their audience, increase brand awareness, and drive engagement across all major platforms.",
    identityLine: "Strategic social media that builds brand loyalty and drives growth.",
    idealFor: [
      "Brands building online presence",
      "Businesses engaging with customers",
      "Companies driving website traffic",
      "Startups creating brand awareness",
    ],
    deliverables: [
      "Monthly content calendar",
      "Custom graphics and copy",
      "Community engagement and responses",
      "Monthly analytics reports",
    ],
    process: [
      "Brand audit and competitor analysis",
      "Content strategy development",
      "Content creation and scheduling",
      "Engagement and performance optimization",
    ],
    offerings: [
      {
        title: "Content Strategy & Creation",
        description:
          "Develop a cohesive content strategy that aligns with your brand voice and resonates with your target audience.",
        bullets: [
          "Brand-aligned content calendar",
          "Custom graphics and videos",
          "Engaging copywriting",
          "Platform-specific optimization",
        ],
      },
      {
        title: "Community Management",
        description:
          "Build relationships with your audience through active engagement, timely responses, and community building.",
        bullets: [
          "Comment and message responses",
          "Community engagement strategies",
          "Brand reputation management",
          "Crisis communication support",
        ],
      },
    ],
    plans: [
      {
        name: "Basic",
        price: "Rs 9,999/month",
        tagline: "Establish your social presence.",
        bestFor: "Small businesses starting out",
        features: [
          "2 platforms managed",
          "12 posts per month",
          "Basic engagement",
          "Monthly report",
        ],
      },
      {
        name: "Professional",
        price: "Rs 19,999/month",
        tagline: "Grow your audience actively.",
        bestFor: "Businesses focused on growth",
        features: [
          "3 platforms managed",
          "20 posts per month",
          "Active community management",
          "Bi-weekly reports",
        ],
      },
      {
        name: "Premium",
        price: "Rs 34,999/month",
        tagline: "Comprehensive social strategy.",
        bestFor: "Brands maximizing social impact",
        features: [
          "4+ platforms managed",
          "30+ posts per month",
          "Advanced analytics",
          "Paid campaign management",
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICE_CATEGORIES.find((service) => service.slug === slug);
}
