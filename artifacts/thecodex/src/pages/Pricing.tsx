import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code,
  Globe,
  Headphones,
  Layers,
  Megaphone,
  Phone,
  Search,
  Settings,
  Share2,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { SEO, createBreadcrumbSchema, createWebPageSchema } from "@/components/SEO";
import { SITE_URL } from "@/lib/seo";

type PlanTier = "basic" | "normal" | "premium";

interface PricingPlan {
  tier: PlanTier;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  excluded?: string[];
  recommended?: boolean;
  cta: string;
  href: string;
}

interface ServicePricing {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

const SERVICE_PRICING: ServicePricing[] = [
  {
    id: "website-development",
    icon: Globe,
    title: "Website Development",
    subtitle: "Professional websites that convert visitors into customers",
    plans: [
      {
        tier: "basic",
        name: "Basic",
        price: "9,999",
        description: "Perfect for small businesses getting online",
        features: [
          "Responsive Website",
          "Up to 5 Pages",
          "Contact Form",
          "WhatsApp Integration",
          "Basic SEO",
          "1 Month Support",
        ],
        excluded: ["Custom Design", "Admin Panel", "Blog"],
        cta: "Get Started",
        href: "/buy-service?service=Website%20Development&plan=Basic&budget=Below%20Rs%2025,000",
      },
      {
        tier: "normal",
        name: "Normal",
        price: "19,999",
        description: "Best for growing businesses that need more",
        recommended: true,
        features: [
          "Everything in Basic",
          "Custom Design",
          "Blog",
          "Admin Panel",
          "Speed Optimization",
          "Analytics",
          "3 Months Support",
        ],
        excluded: ["Premium Animations", "API Integrations"],
        cta: "Most Popular",
        href: "/buy-service?service=Website%20Development&plan=Normal&budget=Rs%2025,000%20-%20Rs%2075,000",
      },
      {
        tier: "premium",
        name: "Premium",
        price: "39,999",
        period: "starting",
        description: "Enterprise-grade websites with advanced features",
        features: [
          "Fully Custom Website",
          "Advanced UI/UX",
          "API Integrations",
          "Dashboard",
          "Premium Animations",
          "Security Optimization",
          "6 Months Support",
        ],
        cta: "Go Premium",
        href: "/buy-service?service=Website%20Development&plan=Premium&budget=Rs%2075,000%20-%20Rs%201,50,000",
      },
    ],
  },
  {
    id: "web-app-development",
    icon: Code,
    title: "Web Application Development",
    subtitle: "Scalable web apps built for performance and growth",
    plans: [
      {
        tier: "basic",
        name: "Basic",
        price: "29,999",
        period: "starting",
        description: "MVP-ready web applications for startups",
        features: [
          "Single-module Web App",
          "User Authentication",
          "Basic Dashboard",
          "Database Setup",
          "Responsive Design",
          "1 Month Support",
        ],
        excluded: ["Multi-role Access", "Third-party APIs", "Advanced Analytics"],
        cta: "Get Started",
        href: "/buy-service?service=Web%20App%20Development&plan=Basic&budget=Rs%2025,000%20-%20Rs%2075,000",
      },
      {
        tier: "normal",
        name: "Normal",
        price: "59,999",
        period: "starting",
        description: "Full-featured apps for growing businesses",
        recommended: true,
        features: [
          "Multi-module Web App",
          "Role-based Access Control",
          "Admin Panel & Analytics",
          "Third-party Integrations",
          "API Development",
          "3 Months Support",
        ],
        excluded: ["Microservices", "AI Features"],
        cta: "Most Popular",
        href: "/buy-service?service=Web%20App%20Development&plan=Normal&budget=Rs%2075,000%20-%20Rs%201,50,000",
      },
      {
        tier: "premium",
        name: "Premium",
        price: "1,20,000",
        period: "starting",
        description: "Enterprise platforms with advanced architecture",
        features: [
          "Enterprise Web Application",
          "Microservices Architecture",
          "Advanced Security",
          "Real-time Features",
          "AI/ML Integration",
          "6 Months Support",
          "Priority Response",
        ],
        cta: "Go Premium",
        href: "/buy-service?service=Web%20App%20Development&plan=Premium&budget=Above%20Rs%203,00,000",
      },
    ],
  },
  {
    id: "mobile-app-development",
    icon: Phone,
    title: "Mobile App Development",
    subtitle: "Native and cross-platform mobile experiences",
    plans: [
      {
        tier: "basic",
        name: "Basic",
        price: "39,999",
        period: "starting",
        description: "Simple mobile apps for essential features",
        features: [
          "Single Platform App",
          "Core UI/UX Design",
          "Basic Functionality",
          "App Store Deployment",
          "Basic Testing",
          "1 Month Support",
        ],
        excluded: ["Cross-platform", "Offline Mode", "Push Notifications Pro"],
        cta: "Get Started",
        href: "/buy-service?service=Mobile%20App%20Development&plan=Basic&budget=Rs%2025,000%20-%20Rs%2075,000",
      },
      {
        tier: "normal",
        name: "Normal",
        price: "79,999",
        period: "starting",
        description: "Cross-platform apps with advanced features",
        recommended: true,
        features: [
          "Cross-platform (iOS + Android)",
          "Custom UI/UX Design",
          "Push Notifications",
          "Offline Mode",
          "API Integrations",
          "3 Months Support",
        ],
        excluded: ["AI Features", "AR/VR Integration"],
        cta: "Most Popular",
        href: "/buy-service?service=Mobile%20App%20Development&plan=Normal&budget=Rs%2075,000%20-%20Rs%201,50,000",
      },
      {
        tier: "premium",
        name: "Premium",
        price: "1,50,000",
        period: "starting",
        description: "Feature-rich apps with cutting-edge technology",
        features: [
          "Native iOS + Android Apps",
          "Advanced Animations",
          "AI/ML Integration",
          "Real-time Sync",
          "Advanced Security",
          "6 Months Support",
          "Priority Response",
        ],
        cta: "Go Premium",
        href: "/buy-service?service=Mobile%20App%20Development&plan=Premium&budget=Above%20Rs%203,00,000",
      },
    ],
  },
  {
    id: "business-automation",
    icon: Settings,
    title: "Business Automation",
    subtitle: "Streamline operations with intelligent automation",
    plans: [
      {
        tier: "basic",
        name: "Basic",
        price: "14,999",
        period: "starting",
        description: "Automate your first critical workflow",
        features: [
          "Single Workflow Automation",
          "Basic Tool Integration",
          "Setup & Configuration",
          "Training Session",
          "Documentation",
          "1 Month Support",
        ],
        excluded: ["Multi-workflow", "Custom Scripts", "Advanced Reporting"],
        cta: "Get Started",
        href: "/buy-service?service=Business%20Automation&plan=Basic&budget=Rs%2025,000%20-%20Rs%2075,000",
      },
      {
        tier: "normal",
        name: "Normal",
        price: "34,999",
        period: "starting",
        description: "Comprehensive automation for growing teams",
        recommended: true,
        features: [
          "Multiple Workflow Automation",
          "Advanced Integrations",
          "Custom Automation Scripts",
          "Billing & Payment Integration",
          "Inventory Management",
          "3 Months Support",
        ],
        excluded: ["Enterprise-wide Automation"],
        cta: "Most Popular",
        href: "/buy-service?service=Business%20Automation&plan=Normal&budget=Rs%2075,000%20-%20Rs%201,50,000",
      },
      {
        tier: "premium",
        name: "Premium",
        price: "74,999",
        period: "starting",
        description: "Full-scale business transformation",
        features: [
          "Enterprise-wide Automation",
          "Cafe/Restaurant Automation",
          "Custom System Development",
          "Workflow Orchestration",
          "Advanced Analytics",
          "6 Months Support",
          "Dedicated Engineer",
        ],
        cta: "Go Premium",
        href: "/buy-service?service=Business%20Automation&plan=Premium&budget=Above%20Rs%203,00,000",
      },
    ],
  },
  {
    id: "website-maintenance",
    icon: Shield,
    title: "Website Maintenance",
    subtitle: "Keep your website secure, fast, and up-to-date",
    plans: [
      {
        tier: "basic",
        name: "Basic",
        price: "999",
        period: "month",
        description: "Essential maintenance for small sites",
        features: [
          "Monthly Security Updates",
          "Uptime Monitoring",
          "Bug Fixes & Troubleshooting",
          "Email Support",
          "Basic Performance Check",
          "Backup Management",
        ],
        excluded: ["Priority Support", "Performance Optimization", "Feature Additions"],
        cta: "Get Started",
        href: "/buy-service?service=Web%20App%20Maintenance&plan=Basic&budget=Below%20Rs%2025,000",
      },
      {
        tier: "normal",
        name: "Normal",
        price: "2,999",
        period: "month",
        description: "Proactive maintenance for business sites",
        recommended: true,
        features: [
          "Weekly Security Updates",
          "Performance Optimization",
          "Priority Bug Resolution",
          "Phone & Email Support",
          "Monthly Reports",
          "Content Updates",
        ],
        excluded: ["24/7 Support", "Feature Development"],
        cta: "Most Popular",
        href: "/buy-service?service=Web%20App%20Maintenance&plan=Normal&budget=Rs%2025,000%20-%20Rs%2075,000",
      },
      {
        tier: "premium",
        name: "Premium",
        price: "6,999",
        period: "month",
        description: "Enterprise-grade support with SLA",
        features: [
          "24/7 Monitoring & Support",
          "Dedicated Account Manager",
          "Monthly Strategy Sessions",
          "Guaranteed Response Times",
          "Feature Enhancements",
          "Security Audits",
        ],
        cta: "Go Premium",
        href: "/buy-service?service=Web%20App%20Maintenance&plan=Premium&budget=Rs%2075,000%20-%20Rs%201,50,000",
      },
    ],
  },
  {
    id: "google-ads",
    icon: Megaphone,
    title: "Google Ads Management",
    subtitle: "Data-driven campaigns that maximize your ROI",
    plans: [
      {
        tier: "basic",
        name: "Basic",
        price: "3,999",
        period: "month",
        description: "Get started with paid advertising",
        features: [
          "Single Campaign Management",
          "Keyword Research & Setup",
          "Monthly Optimization",
          "Basic Reporting",
          "Ad Copy Creation",
          "Landing Page Suggestions",
        ],
        excluded: ["Remarketing", "A/B Testing", "Conversion Tracking Pro"],
        cta: "Get Started",
        href: "/buy-service?service=Marketing%20and%20Growth%20Support&plan=Basic&budget=Below%20Rs%2025,000",
      },
      {
        tier: "normal",
        name: "Normal",
        price: "7,999",
        period: "month",
        description: "Scale your advertising efforts",
        recommended: true,
        features: [
          "Multiple Campaign Types",
          "A/B Testing & Optimization",
          "Remarketing Setup",
          "Detailed Monthly Reports",
          "Conversion Tracking",
          "Competitor Analysis",
        ],
        excluded: ["Full-funnel Strategy", "Weekly Calls"],
        cta: "Most Popular",
        href: "/buy-service?service=Marketing%20and%20Growth%20Support&plan=Normal&budget=Rs%2025,000%20-%20Rs%2075,000",
      },
      {
        tier: "premium",
        name: "Premium",
        price: "14,999",
        period: "month",
        description: "Comprehensive advertising strategy",
        features: [
          "Full-funnel Campaign Strategy",
          "Advanced Bidding Strategies",
          "Custom Conversion Tracking",
          "Weekly Optimization Calls",
          "Dedicated Ads Manager",
          "ROI Dashboard Access",
        ],
        cta: "Go Premium",
        href: "/buy-service?service=Marketing%20and%20Growth%20Support&plan=Premium&budget=Rs%2075,000%20-%20Rs%201,50,000",
      },
    ],
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Management",
    subtitle: "Build your brand presence across all platforms",
    plans: [
      {
        tier: "basic",
        name: "Basic",
        price: "5,999",
        period: "month",
        description: "Establish your social presence",
        features: [
          "2 Platforms Managed",
          "12 Posts per Month",
          "Basic Engagement",
          "Monthly Report",
          "Content Calendar",
          "Profile Optimization",
        ],
        excluded: ["Community Management", "Paid Campaigns", "Advanced Analytics"],
        cta: "Get Started",
        href: "/buy-service?service=Marketing%20and%20Growth%20Support&plan=Basic&budget=Below%20Rs%2025,000",
      },
      {
        tier: "normal",
        name: "Normal",
        price: "9,999",
        period: "month",
        description: "Grow your audience actively",
        recommended: true,
        features: [
          "3 Platforms Managed",
          "20 Posts per Month",
          "Active Community Management",
          "Bi-weekly Reports",
          "Story/Reel Creation",
          "Hashtag Strategy",
        ],
        excluded: ["Paid Campaign Management"],
        cta: "Most Popular",
        href: "/buy-service?service=Marketing%20and%20Growth%20Support&plan=Normal&budget=Rs%2025,000%20-%20Rs%2075,000",
      },
      {
        tier: "premium",
        name: "Premium",
        price: "19,999",
        period: "month",
        description: "Comprehensive social strategy",
        features: [
          "4+ Platforms Managed",
          "30+ Posts per Month",
          "Advanced Analytics",
          "Paid Campaign Management",
          "Influencer Coordination",
          "Weekly Strategy Calls",
        ],
        cta: "Go Premium",
        href: "/buy-service?service=Marketing%20and%20Growth%20Support&plan=Premium&budget=Rs%2075,000%20-%20Rs%201,50,000",
      },
    ],
  },
  {
    id: "seo-services",
    icon: Search,
    title: "SEO Services",
    subtitle: "Rank higher and drive organic traffic consistently",
    plans: [
      {
        tier: "basic",
        name: "Basic",
        price: "5,999",
        period: "month",
        description: "Foundation SEO for small websites",
        features: [
          "Keyword Research",
          "On-page SEO Optimization",
          "Technical SEO Audit",
          "Monthly Reports",
          "Meta Tag Optimization",
          "Basic Link Building",
        ],
        excluded: ["Content Strategy", "Local SEO Pro", "Advanced Analytics"],
        cta: "Get Started",
        href: "/buy-service?service=Marketing%20and%20Growth%20Support&plan=Basic&budget=Below%20Rs%2025,000",
      },
      {
        tier: "normal",
        name: "Normal",
        price: "9,999",
        period: "month",
        description: "Growth-focused SEO for businesses",
        recommended: true,
        features: [
          "Advanced Keyword Strategy",
          "Content Optimization",
          "Local SEO Setup",
          "Link Building Campaign",
          "Bi-weekly Reports",
          "Competitor Analysis",
        ],
        excluded: ["Content Creation", "PR Outreach"],
        cta: "Most Popular",
        href: "/buy-service?service=Marketing%20and%20Growth%20Support&plan=Normal&budget=Rs%2025,000%20-%20Rs%2075,000",
      },
      {
        tier: "premium",
        name: "Premium",
        price: "19,999",
        period: "month",
        description: "Complete SEO domination strategy",
        features: [
          "Full SEO Strategy",
          "Content Creation & Blog",
          "Advanced Link Building",
          "Local + National SEO",
          "Weekly Reports & Calls",
          "Conversion Rate Optimization",
        ],
        cta: "Go Premium",
        href: "/buy-service?service=Marketing%20and%20Growth%20Support&plan=Premium&budget=Rs%2075,000%20-%20Rs%201,50,000",
      },
    ],
  },
];

const COMPARISON_FEATURES = [
  { category: "Website Development", features: ["Responsive Design", "Custom Design", "Admin Panel", "Blog", "API Integrations", "Premium Animations"] },
  { category: "Web Application", features: ["User Authentication", "Dashboard", "Role-based Access", "Third-party APIs", "Real-time Features", "AI/ML Integration"] },
  { category: "Mobile App", features: ["Single Platform", "Cross-platform", "Push Notifications", "Offline Mode", "AI Integration", "Advanced Security"] },
  { category: "Business Automation", features: ["Workflow Automation", "Tool Integration", "Custom Scripts", "Inventory Management", "Payment Integration", "Enterprise-wide"] },
];

const FAQ_ITEMS = [
  {
    q: "How long does development take?",
    a: "Timelines vary based on scope. A basic website takes 1-2 weeks, while complex web applications or mobile apps can take 4-12 weeks. We provide a detailed timeline during the consultation phase.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can upgrade your plan at any time. We'll adjust the scope and pricing based on your current needs. Any payments already made will be credited toward the upgrade.",
  },
  {
    q: "Do prices include domain and hosting?",
    a: "Domain and hosting costs are separate and depend on your specific requirements. We'll help you choose the best providers and handle the setup as part of our service.",
  },
  {
    q: "Will I get source code?",
    a: "Yes. You own 100% of the source code for all development projects. We provide complete code access along with documentation for future maintenance or team handoff.",
  },
  {
    q: "What support is included?",
    a: "Each plan includes a specific support duration: Basic gets 1 month, Normal gets 3 months, and Premium gets 6 months. Support covers bug fixes, minor updates, and technical assistance.",
  },
  {
    q: "Can you develop custom software?",
    a: "Yes. Beyond our standard plans, we build fully customized software, enterprise solutions, AI-powered systems, and automation tailored specifically to your workflow. Contact us for a custom quote.",
  },
];

const COMPARISON_TABLE_DATA = [
  { service: "Website Development", basic: "Up to 5 Pages", normal: "Custom + Blog + Admin", premium: "Fully Custom + Dashboard" },
  { service: "Web App Development", basic: "Single Module MVP", normal: "Multi-module + APIs", premium: "Enterprise + Microservices" },
  { service: "Mobile App", basic: "Single Platform", normal: "Cross-platform", premium: "Native iOS + Android" },
  { service: "Business Automation", basic: "Single Workflow", normal: "Multi-workflow + Billing", premium: "Enterprise-wide System" },
  { service: "Website Maintenance", basic: "Monthly Updates", normal: "Weekly + Optimization", premium: "24/7 + Dedicated Manager" },
  { service: "Google Ads", basic: "Single Campaign", normal: "Multiple + Remarketing", premium: "Full-funnel + Weekly Calls" },
  { service: "Social Media", basic: "2 Platforms, 12 Posts", normal: "3 Platforms, 20 Posts", premium: "4+ Platforms, 30+ Posts" },
  { service: "SEO Services", basic: "On-page + Technical", normal: "Advanced + Local SEO", premium: "Full Strategy + Content" },
];

function PricingCard({ plan, serviceId }: { plan: PricingPlan; serviceId: string }) {
  const isFeatured = plan.recommended;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      className={`plan-card relative rounded-2xl p-6 lg:p-8 flex flex-col ${
        isFeatured ? "plan-card-featured bg-card border border-primary/20" : "bg-card/80 border border-border"
      }`}
    >
      {isFeatured && (
        <>
          <div className="plan-card-featured-glow rounded-2xl" />
          <div className="plan-card-ribbon">
            <span className="relative z-10" />
          </div>
        </>
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            {isFeatured && <Star className="w-4 h-4 text-primary fill-primary" />}
            <span className={`text-sm font-semibold uppercase tracking-wider ${isFeatured ? "text-primary" : "text-muted-foreground"}`}>
              {plan.name}
            </span>
          </div>
          <div className="flex items-baseline gap-1 mb-3">
            {plan.period === "starting" && (
              <span className="text-sm text-muted-foreground font-medium">Starting</span>
            )}
            <span className="text-sm text-muted-foreground font-medium">₹</span>
            <span className="text-4xl lg:text-5xl font-display font-black text-foreground">
              {plan.price}
            </span>
            {plan.period && plan.period !== "starting" && (
              <span className="text-sm text-muted-foreground font-medium">/{plan.period}</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
        </div>

        <div className="flex-1">
          <div className="space-y-3 mb-6">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
            {plan.excluded?.map((feature) => (
              <div key={feature} className="flex items-start gap-3 opacity-40">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                  <X className="w-3 h-3 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground line-through">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <Link href={plan.href}>
          <NeonButton
            variant={isFeatured ? "primary" : "outline"}
            fullWidth
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {plan.cta}
          </NeonButton>
        </Link>
      </div>
    </motion.div>
  );
}

function ServicePricingSection({ service, index }: { service: ServicePricing; index: number }) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <section className={`py-16 lg:py-24 ${isEven ? "" : "bg-muted/30"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 text-primary text-sm font-semibold mb-5">
            <Icon className="w-4 h-4" />
            {service.title}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {service.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {service.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {service.plans.map((plan) => (
            <PricingCard key={plan.tier} plan={plan} serviceId={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEO
        title="Transparent Pricing for Every Business | TheCOdex Software Solutions"
        description="Choose the perfect plan for your business needs. From website development to business automation, find transparent pricing for all TheCOdex services."
        keywords="software development pricing, website development cost, web app pricing, business automation pricing, SaaS development cost, SEO services pricing"
        canonicalUrl={`${SITE_URL}/pricing`}
        schemaMarkup={[
          createWebPageSchema({
            path: "/pricing",
            name: "Transparent Pricing for Every Business | TheCOdex Software Solutions",
            description: "Choose the perfect plan for your business needs. From website development to business automation, find transparent pricing for all TheCOdex services.",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-12 w-96 h-96 rounded-full bg-primary/8 blur-[140px] animate-pulse-slow" />
          <div className="absolute bottom-10 right-12 w-80 h-80 rounded-full bg-accent/8 blur-[120px] animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/4 blur-[180px]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl text-center mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 border border-primary/15 shadow-[0_14px_34px_rgba(15,23,42,0.08)] mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary tracking-wide">
                TRANSPARENT PRICING
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-foreground leading-[1.05] tracking-tight mb-6"
            >
              Transparent Pricing for{" "}
              <span className="gradient-text text-glow">Every Business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Choose the perfect plan for your business needs. Whether you need a website, web application, automation, or digital growth services, we have a solution designed for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <NeonButton size="lg" className="min-w-[220px]">
                  Get Free Consultation
                </NeonButton>
              </Link>
              <Link href="/custom-request">
                <NeonButton
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="min-w-[220px]"
                >
                  Request Custom Quote
                </NeonButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Pricing Sections */}
      {SERVICE_PRICING.map((service, index) => (
        <ServicePricingSection key={service.id} service={service} index={index} />
      ))}

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Compare <span className="gradient-text">All Plans</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See what's included in each tier across all our services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-5 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Service
                    </th>
                    <th className="text-center p-5">
                      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Basic</span>
                    </th>
                    <th className="text-center p-5 bg-primary/5">
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">Normal</span>
                    </th>
                    <th className="text-center p-5">
                      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Premium</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_TABLE_DATA.map((row, i) => (
                    <tr
                      key={row.service}
                      className={`border-b border-border last:border-b-0 ${i % 2 === 0 ? "" : "bg-muted/30"}`}
                    >
                      <td className="p-5 text-sm font-semibold text-foreground">
                        {row.service}
                      </td>
                      <td className="p-5 text-center text-sm text-muted-foreground">
                        {row.basic}
                      </td>
                      <td className="p-5 text-center text-sm text-foreground font-medium bg-primary/5">
                        {row.normal}
                      </td>
                      <td className="p-5 text-center text-sm text-muted-foreground">
                        {row.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-primary/6 blur-[160px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/6 blur-[140px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Custom Solutions
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-6 leading-tight">
              Need Something <span className="gradient-text text-glow">Custom?</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Every business is unique. We also build fully customized software, enterprise solutions,
              AI-powered systems, and business automation tailored specifically to your workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/custom-request">
                <NeonButton size="lg" className="min-w-[220px]">
                  Request Custom Quote
                </NeonButton>
              </Link>
              <Link href="/contact">
                <NeonButton
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="min-w-[220px]"
                >
                  Talk to an Expert
                </NeonButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about our pricing and services
            </p>
          </motion.div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left cursor-pointer"
                >
                  <span className="text-base lg:text-lg font-semibold text-foreground pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/6" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-primary/5 blur-[200px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8">
              <Zap className="w-4 h-4" />
              Let's Build Together
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="gradient-text text-glow">Amazing Together</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Whether you're launching a startup, automating your business, or scaling your digital presence,
              our team is ready to help you succeed. Book a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <NeonButton size="lg" className="min-w-[220px]">
                  Book Free Consultation
                </NeonButton>
              </Link>
              <Link href="/buy-service">
                <NeonButton
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="min-w-[220px]"
                >
                  Contact Sales
                </NeonButton>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>100% source code ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Post-launch support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
