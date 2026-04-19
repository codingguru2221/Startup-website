import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code,
  Server,
  Settings,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEO, defaultSchema } from "@/components/SEO";
import { SITE_URL } from "@/lib/seo";

const CORE_SERVICES = [
  {
    icon: Code,
    title: "Custom Web App Development",
    description:
      "We plan, design, and build business-ready web applications around your workflows, users, and revenue goals instead of forcing your company into generic software.",
    outcomes: [
      "MVPs for startups",
      "Internal portals and dashboards",
      "Client-facing products",
    ],
    href: "/web-app-development",
  },
  {
    icon: Server,
    title: "Web App Management",
    description:
      "Once your product is live, we maintain uptime, security, performance, and release quality so your team can focus on operations and growth.",
    outcomes: [
      "Performance optimization",
      "Security patching",
      "Continuous maintenance",
    ],
    href: "/web-app-management",
  },
  {
    icon: BarChart3,
    title: "SaaS Development",
    description:
      "We help founders and product teams launch scalable SaaS platforms with subscription logic, account management, analytics, and reliable cloud deployment.",
    outcomes: [
      "Multi-tenant architecture",
      "Billing integrations",
      "Growth-focused product workflows",
    ],
    href: "/saas-development",
  },
  {
    icon: Settings,
    title: "Business Automation",
    description:
      "We replace repetitive manual work with connected systems that sync data, trigger actions, and reduce the hidden cost of operational bottlenecks.",
    outcomes: [
      "Workflow automation",
      "Tool integrations",
      "Reporting systems",
    ],
    href: "/business-automation",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Zap,
    title: "Business-first delivery",
    desc: "Every build starts with the process, outcome, and user journey the software needs to support.",
  },
  {
    icon: Shield,
    title: "Reliable engineering",
    desc: "We prioritize maintainable architecture, security basics, deployment clarity, and long-term support.",
  },
  {
    icon: TrendingUp,
    title: "Growth-oriented systems",
    desc: "We structure apps for future features, new roles, better reporting, and scale instead of quick dead ends.",
  },
];

const BUYER_PAIN_POINTS = [
  "Teams wasting hours every week on spreadsheets, WhatsApp updates, repetitive admin work, or disconnected tools",
  "Founders needing an MVP or SaaS platform that looks credible, works reliably, and can evolve after launch",
  "Growing businesses outgrowing off-the-shelf software and needing workflows built around how they actually operate",
  "Organizations struggling with slow reporting, weak internal visibility, or inconsistent service delivery because systems are fragmented",
];

const PROCESS = [
  {
    title: "Discovery and scoping",
    desc: "We clarify goals, user types, workflows, integrations, risks, and success metrics before development starts.",
  },
  {
    title: "UX, architecture, and planning",
    desc: "We define the product structure, choose the right stack, and design interfaces that are practical for real users.",
  },
  {
    title: "Build and review cycles",
    desc: "We ship in stages, review progress with you, and keep the product aligned with priorities instead of disappearing for weeks.",
  },
  {
    title: "Testing, launch, and support",
    desc: "We prepare for deployment, QA the critical flows, and stay available for fixes, optimization, and future improvements.",
  },
];

const USE_CASES = [
  "CRM and lead management dashboards",
  "Admin panels and operations portals",
  "Booking, workflow, and approval systems",
  "Inventory, reporting, and business intelligence tools",
  "SaaS products with subscription or account-based access",
  "Automation layers connecting forms, sheets, APIs, and internal tools",
];

const FAQS = [
  {
    q: "What kind of companies do you work with?",
    a: "We primarily support startups, service businesses, operational teams, and companies that need custom systems for growth, process control, or digital product delivery.",
  },
  {
    q: "Do you only build from scratch?",
    a: "No. We can modernize an existing platform, extend a live application, replace a fragile manual process, or help shape a new product from idea to launch.",
  },
  {
    q: "Can you handle both SaaS products and internal tools?",
    a: "Yes. We build customer-facing web apps, internal admin systems, reporting platforms, and automation-heavy operational software.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Ongoing support is part of our core offer, especially for teams that need maintenance, monitoring, iteration, and execution continuity.",
  },
];

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Web App Development Company for SaaS & Business Automation | TheCodex"
        description="TheCodex Software Solutions helps startups and businesses build custom web applications, SaaS products, and automation systems that improve operations and support growth."
        keywords="web app development company, custom web application development, SaaS development company, business automation company, custom software for startups"
        canonicalUrl={SITE_URL}
        schemaMarkup={defaultSchema}
      />

      <section className="relative min-h-[90vh] flex items-center pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Abstract technology background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/88 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl text-center mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 border border-primary/15 shadow-[0_14px_34px_rgba(15,23,42,0.08)] mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary tracking-wide">
                CUSTOM WEB APPLICATIONS, SAAS PRODUCTS, AND AUTOMATION SYSTEMS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground max-w-5xl leading-[1.05] tracking-tight mb-6 mx-auto"
            >
              Web App Development Company for Businesses That Need
              <span className="gradient-text text-glow"> Better Systems, Not More Complexity</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mb-6 mx-auto"
            >
              TheCodex Software Solutions designs and develops custom web applications for startups, service businesses,
              and growing teams that need software aligned with their actual workflows. We build SaaS products,
              internal platforms, client portals, and automation systems that reduce manual effort, improve visibility,
              and create room for scale.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-4xl mb-10 mx-auto"
            >
              If your team is losing time in spreadsheets, passing work manually between tools, or struggling to launch
              a digital product with confidence, we help turn those operational gaps into reliable software systems that
              are easier to manage, easier to grow, and easier to trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <NeonButton size="lg" className="min-w-[220px]">
                  Get Free Consultation
                </NeonButton>
              </Link>
              <Link href="/web-app-development">
                <NeonButton
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="min-w-[220px]"
                >
                  Explore Web App Development
                </NeonButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "3+", label: "Years of Delivery Experience" },
              { number: "24/7", label: "Support for Active Systems" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Software Services Built Around <span className="text-primary">Real Business Outcomes</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our focus is not generic website work. We specialize in software that helps companies launch products,
              automate operations, and build more reliable digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_SERVICES.map((service, i) => (
              <Link key={service.title} href={service.href} className="group">
                <GlassCard delay={i * 0.08} className="h-full cursor-pointer hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/15">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.outcomes.map((outcome) => (
                      <span
                        key={outcome}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Why Companies Choose <span className="text-primary">TheCodex</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Businesses usually come to us when off-the-shelf tools stop fitting the way their teams operate, or
                when a product idea needs dependable execution to become a credible launch. In both cases, the problem
                is the same: the system is no longer helping the business move efficiently.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We approach software as an operational asset. That means we care about how leads move through your
                pipeline, how teams access information, how customers interact with your product, and how future
                features will be added without turning the codebase into a maintenance burden.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {DIFFERENTIATORS.map((item) => (
                  <div key={item.title} className="flex flex-col">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard hoverEffect={false} className="border-primary/15">
              <h2 className="text-2xl font-bold mb-5">Common situations we solve</h2>
              <div className="space-y-4">
                {BUYER_PAIN_POINTS.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              What We Build for <span className="text-primary">Startups and Growing Teams</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our work typically sits at the intersection of product development, internal operations, and business
              automation, which is why many projects combine multiple service areas into one system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((item, index) => (
              <GlassCard key={item} delay={index * 0.05} hoverEffect={false}>
                <p className="text-lg font-semibold text-foreground">{item}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our Delivery Process Supports <span className="text-primary">Clarity and Momentum</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Good software projects usually fail because expectations, scope, and execution drift apart. We keep them
              connected through staged delivery and practical communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCESS.map((step, index) => (
              <GlassCard key={step.title} delay={index * 0.06} hoverEffect={false}>
                <div className="text-4xl font-black text-primary/15 mb-4">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              These are the questions we hear most often from founders, operations teams, and business owners planning
              a custom software project.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <GlassCard key={faq.q} delay={index * 0.04} hoverEffect={false}>
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/6" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            Need a Software Partner Who Can Build and Improve the System?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Whether you are launching a SaaS product, replacing manual workflows, or planning a business-critical web
            application, we can help define the right scope and turn it into dependable execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <NeonButton size="lg" className="px-12 py-5 text-lg">
                Start Your Project
              </NeonButton>
            </Link>
            <Link href="/web-app-development">
              <NeonButton variant="outline" size="lg" className="px-12 py-5 text-lg">
                See Web App Development Details
              </NeonButton>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
