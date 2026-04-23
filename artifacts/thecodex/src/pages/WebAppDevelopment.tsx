import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cloud,
  Code,
  Database,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEO, BRAND_SEARCH_KEYWORDS, createBreadcrumbSchema, createWebPageSchema } from "@/components/SEO";
import { SITE_URL } from "@/lib/seo";
import { useState } from "react";

const CAPABILITIES = [
  {
    icon: Code,
    title: "Custom application architecture",
    desc: "We design the platform around your users, workflows, permissions, reporting needs, and future roadmap so the product can evolve without major rework.",
  },
  {
    icon: Shield,
    title: "Security-aware development",
    desc: "Authentication, access control, validation, secure data handling, and deployment hygiene are built into the foundation instead of treated as extras.",
  },
  {
    icon: Zap,
    title: "Performance and usability",
    desc: "Fast interfaces, practical navigation, and efficient data handling matter because adoption suffers when software feels slow or confusing.",
  },
  {
    icon: Users,
    title: "Business-ready UX",
    desc: "We design for real usage patterns across admins, operators, managers, and customers so each role can complete the work they came to do.",
  },
  {
    icon: Database,
    title: "Integrations and data flow",
    desc: "From CRMs and payment systems to spreadsheets, communication tools, and internal databases, we connect applications to the systems they depend on.",
  },
  {
    icon: Cloud,
    title: "Deployment and ongoing support",
    desc: "We prepare production environments, launch safely, and continue improving the application after release through support and optimization work.",
  },
];

const SOLUTION_SECTIONS = [
  {
    title: "Web applications designed around your business model",
    paragraphs: [
      "A custom web application should do more than look modern. It should make work easier, improve decision-making, reduce duplicated effort, and create a system your team can trust. That requires more than coding screens. It requires understanding how the business operates, where information comes from, who needs access, which actions need approval, what reports matter, and what is likely to change once the product is live.",
      "Our web app development service is built for teams that need that level of alignment. We work with startups building SaaS products, operational teams replacing spreadsheets with workflow systems, and businesses creating internal dashboards, portals, and automation-backed tools. In each case, the goal is the same: build software that improves how the company actually functions.",
      "Because of that, we approach every project as both a product decision and an engineering decision. We look at the user experience, the underlying architecture, the operational dependencies, and the commercial intent of the application. That helps us avoid the most common failure pattern in custom software: building features that exist in the interface but do not solve the workflow underneath.",
    ],
  },
  {
    title: "SaaS product development for founders and product teams",
    paragraphs: [
      "For founders, custom web application development often means turning a product idea into a usable SaaS platform. That shift from concept to product is where a lot of risk lives. The right features need to be prioritized, the onboarding flow needs to make sense, billing and user permissions need to work cleanly, and the platform needs to be structured so that new features can be added after launch without breaking the foundation.",
      "We help shape SaaS applications with that longer view in mind. Instead of only focusing on the first release, we think about account structure, administration, reporting, subscription management, support operations, and future modules. That does not mean overbuilding. It means making sure the MVP is lean without becoming disposable.",
      "This is especially useful for teams that need a credible launch but also want to protect future growth. If your SaaS product will eventually need role-based access, analytics dashboards, automation triggers, customer messaging, audit logs, or deeper integrations, the first version should already be pointing in that direction.",
    ],
  },
  {
    title: "Business automation and internal workflow systems",
    paragraphs: [
      "Many companies do not need a public-facing SaaS product first. They need their internal operations to stop leaking time. That may mean replacing a spreadsheet-driven approval process, centralizing lead flow, automating reporting, connecting multiple tools, or giving managers one place to track the work across teams. Those are still web applications, and they can have as much operational value as revenue-facing software.",
      "Our development process is especially useful for these cases because we work backward from the workflow. We identify where data starts, how it moves, which roles interact with it, what decisions depend on it, and which steps should happen automatically. From there, we define the right application structure rather than forcing your team into a generic admin panel.",
      "That often leads to cleaner operations, better visibility, and fewer expensive errors. It also reduces the risk that your team keeps relying on manual follow-ups, duplicated records, or disconnected systems that hide the real status of the work.",
    ],
  },
];

const PROCESS = [
  {
    title: "1. Discovery and technical scoping",
    desc: "We define the user roles, workflows, integrations, major features, success metrics, edge cases, and business constraints that shape the application.",
  },
  {
    title: "2. Product structure and interface planning",
    desc: "We organize dashboards, forms, modules, reporting views, and navigation around the actual actions users need to take in the product.",
  },
  {
    title: "3. Architecture and delivery planning",
    desc: "We select the stack, model the data, outline the APIs, and break the build into practical milestones so delivery stays visible and manageable.",
  },
  {
    title: "4. Frontend and backend implementation",
    desc: "We build the application in stages, covering interface logic, APIs, core workflows, roles, and integrations as the product takes shape.",
  },
  {
    title: "5. QA, launch preparation, and deployment",
    desc: "We validate critical flows, fix defects, prepare deployment, and reduce the common launch risks that undermine user trust in new software.",
  },
  {
    title: "6. Post-launch support and iteration",
    desc: "After launch we help with maintenance, fixes, enhancements, operational feedback, and the next version of the product roadmap.",
  },
];

const USE_CASES = [
  "Custom CRM and lead pipeline tools",
  "ERP-style internal operations dashboards",
  "Client portals and account management systems",
  "Booking, workflow, and approval platforms",
  "SaaS products with subscriptions and user roles",
  "Automation systems that connect multiple business tools",
];

const VALUE_POINTS = [
  "A system built around your workflows instead of adapting your workflows to generic software limitations",
  "A stronger operational foundation for reporting, accountability, and process consistency",
  "Cleaner user experiences that reduce friction for staff, admins, and customers",
  "Architecture that can support future modules, integrations, and automation layers",
  "A development partner who can continue after launch with maintenance and structured improvements",
];

const FAQS = [
  {
    question: "How long does custom web app development usually take?",
    answer:
      "That depends on scope, but most serious business applications need a phased approach. A focused MVP may take several weeks, while a larger SaaS or operations platform can take multiple months. The key is planning milestones around business value rather than waiting for an enormous all-at-once release.",
  },
  {
    question: "How much does a custom web application cost?",
    answer:
      "Cost depends on workflow complexity, user roles, integrations, reporting needs, and long-term platform expectations. A product that includes admin systems, automation logic, payment workflows, or multiple dashboards will naturally be more involved than a narrow MVP. We scope pricing around the business requirements instead of using vague package promises.",
  },
  {
    question: "Can you build both customer-facing software and internal admin systems?",
    answer:
      "Yes. Many of our projects combine both. For example, a SaaS product may need a customer dashboard on one side and a much deeper internal operations panel on the other. We can plan both as one connected system.",
  },
  {
    question: "Do you support integrations with third-party services?",
    answer:
      "Yes. We regularly plan for integrations such as payment gateways, CRMs, communication tools, spreadsheets, analytics systems, and internal data services. Integration planning is important early because it affects data models and workflow design.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Launch is not the end of the work. Real users expose opportunities for improvements, operational edge cases, and new priorities. We support post-launch maintenance, performance work, security updates, and new feature delivery so the application continues to improve.",
  },
];

export default function WebAppDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      <SEO
        title="Custom Web Application Development Services for SaaS and Automation | TheCOdex"
        description="TheCOdex builds custom web applications for SaaS products, internal business systems, and automation-heavy workflows with scalable architecture and long-term support."
        keywords="custom web application development services, SaaS application development, business automation software development, internal tool development"
        canonicalUrl={`${SITE_URL}/web-app-development`}
        schemaMarkup={[
          createWebPageSchema({
            path: "/web-app-development",
            name: "Custom Web Application Development Services for SaaS and Automation | TheCOdex",
            description:
              "TheCOdex builds custom web applications for SaaS products, internal business systems, and automation-heavy workflows with scalable architecture and long-term support.",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Web App Development", path: "/web-app-development" },
          ]),
          {
            "@type": "Service",
            name: "Custom Web Application Development",
            description:
              "Custom web application development for SaaS products, business automation systems, internal tools, and scalable digital platforms.",
            keywords: `custom web application development, SaaS application development, internal tool development, ${BRAND_SEARCH_KEYWORDS}`,
            provider: {
              "@type": "Organization",
              name: "TheCOdex Software Solutions",
              url: SITE_URL,
            },
            areaServed: "IN",
            serviceType: "Custom Web Application Development",
          },
        ]}
      />

      <section className="pt-32 pb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-primary/15 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight"
          >
            Custom Web Application Development Services for
            <span className="gradient-text"> SaaS, Operations, and Business Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6"
          >
            We build custom web applications that help startups launch software products, help teams automate internal
            operations, and help businesses move away from fragmented tools that slow down execution.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-muted-foreground max-w-4xl mx-auto mb-10"
          >
            From SaaS platforms and customer portals to internal dashboards, admin systems, and workflow automation, we
            focus on practical software that supports real users, real reporting needs, and real business decisions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <NeonButton size="lg" className="min-w-[220px]">
                Talk About Your Project
              </NeonButton>
            </Link>
            <Link href="/business-automation">
              <NeonButton variant="outline" size="lg" className="min-w-[220px]">
                Explore Automation Services
              </NeonButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              What Our Web App Development Service Actually Covers
            </h2>
            <p className="text-muted-foreground text-lg">
              We do not just deliver a frontend. We help structure the application, connect the business logic,
              support the launch, and set the product up for future growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((feature, i) => (
              <GlassCard key={feature.title} delay={i * 0.06} className="flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/15">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">{feature.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {SOLUTION_SECTIONS.map((section, index) => (
            <GlassCard key={section.title} delay={index * 0.05} hoverEffect={false}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">{section.title}</h2>
              <div className="space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-muted-foreground text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <GlassCard hoverEffect={false}>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
                When Custom Web App Development Makes More Sense Than Off-the-Shelf Software
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Off-the-shelf tools can be useful early on, but they start creating friction when your workflow becomes
                more specific than the software allows. That usually shows up as manual workarounds, duplicate records,
                confusing permissions, or teams relying on several disconnected tools just to complete one process.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A custom application becomes the stronger option when your company needs better visibility, cleaner
                process control, faster execution, or a product that can become part of your commercial strategy. That
                is true for both internal platforms and external SaaS products. In both cases, the real value is not
                only in digitizing the work. It is in structuring the work so the business can operate more reliably.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                If your process has become too important to leave inside spreadsheets and loosely connected tools, a web
                application is often the right next step.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="border-primary/15">
              <h2 className="text-2xl font-bold mb-5">Common project types</h2>
              <div className="space-y-4">
                {USE_CASES.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our Development Process Keeps the Product Grounded in Business Reality
            </h2>
            <p className="text-muted-foreground text-lg">
              We use a staged delivery model so planning, execution, review, and launch stay aligned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <div className="text-6xl font-black text-primary/10 mb-4">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 items-start">
            <GlassCard hoverEffect={false}>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
                The Long-Term Value of a Well-Planned Web Application
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Good software compounds. When the application is built around the right process, it becomes easier to
                onboard users, maintain data quality, monitor activity, automate tasks, and make decisions based on
                clean information. That is why custom web application development is often both a technology investment
                and an operational investment.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For SaaS products, that means a stronger path from launch to retention and expansion. For internal
                systems, it means less hidden waste, less reliance on individual team members to manually hold the
                process together, and better visibility across the business. In both cases, the application becomes a
                system the company can build on instead of constantly working around.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                That is the level we aim for in every build: software that supports growth, not software that creates a
                new maintenance problem six months later.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="border-accent/20">
              <h2 className="text-2xl font-bold mb-5">What clients usually gain</h2>
              <div className="space-y-4">
                {VALUE_POINTS.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked Questions About Web App Development
            </h2>
            <p className="text-muted-foreground text-lg">
              These answers cover the questions we hear most from founders, managers, and teams evaluating a custom
              software project.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <GlassCard
                key={faq.question}
                hoverEffect={false}
                className="cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </div>
                {openFaq === i && (
                  <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/6" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            Planning a SaaS Product or Internal Business Platform?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            We can help you define the right scope, structure the workflows, and build a web application that supports
            launch, adoption, and long-term improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <NeonButton size="lg" className="px-12 py-5 text-lg">
                Request a Consultation
              </NeonButton>
            </Link>
            <Link href="/saas-development">
              <NeonButton variant="outline" size="lg" className="px-12 py-5 text-lg" icon={<ArrowRight className="w-5 h-5" />}>
                See SaaS Development
              </NeonButton>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
