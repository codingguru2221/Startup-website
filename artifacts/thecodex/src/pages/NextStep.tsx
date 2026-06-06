import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock3,
  Globe2,
  Layers,
  LineChart,
  Rocket,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { SEO, createBreadcrumbSchema, createWebPageSchema } from "@/components/SEO";
import { SITE_URL } from "@/lib/seo";

const featureCards = [
  {
    icon: Globe2,
    title: "Online readiness review",
    description:
      "Next Step AI will help business owners understand what they need before going online, from website flow to basic digital presence.",
  },
  {
    icon: ServerCog,
    title: "Domain and hosting guidance",
    description:
      "It will explain domain, hosting, server, and maintenance choices in simple language so businesses can avoid confusing setup decisions.",
  },
  {
    icon: BarChart3,
    title: "Growth gap analysis",
    description:
      "Visitors will be able to discover what is working, what is missing, and which TheCOdex service can support the next stage.",
  },
];

const upcomingItems = [
  "AI business advisor chat",
  "Domain and hosting cost suggestions",
  "Online business gap report",
  "Service matching for TheCOdex solutions",
];

const servicePathways = [
  {
    icon: Layers,
    title: "Development Solutions",
    description: "Websites, landing pages, dashboards, and custom web applications.",
  },
  {
    icon: Rocket,
    title: "SaaS and Product Builds",
    description: "MVP planning, product flows, admin systems, and scalable feature delivery.",
  },
  {
    icon: LineChart,
    title: "Growth and Automation",
    description: "Business automation, lead systems, marketing support, and operational improvements.",
  },
];

export default function NextStep() {
  return (
    <Layout>
      <SEO
        title="Next Step AI | Coming Soon | TheCOdex"
        description="Next Step AI is an upcoming TheCOdex business advisor experience for online readiness, domain and hosting guidance, growth gaps, and service recommendations."
        keywords="Next Step AI, business advisor AI, online business guidance, TheCOdex services, coming soon"
        canonicalUrl={`${SITE_URL}/next-step`}
        schemaMarkup={[
          createWebPageSchema({
            path: "/next-step",
            name: "Next Step AI | Coming Soon | TheCOdex",
            description:
              "Next Step AI is an upcoming TheCOdex business advisor experience for online readiness, domain and hosting guidance, growth gaps, and service recommendations.",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Next Step AI", path: "/next-step" },
          ]),
        ]}
      />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-x-0 top-24 mx-auto h-72 max-w-5xl bg-primary/12 blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/8 text-primary text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Next Step AI
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
                Your online business advisor is{" "}
                <span className="gradient-text">coming soon</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                Next Step AI is being prepared as a simple guidance tool for founders,
                shops, startups, and growing businesses. It will describe what your business
                needs to move online, where your digital gaps are, and which TheCOdex services
                can help you launch with clarity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/services">
                  <NeonButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Explore More Services
                  </NeonButton>
                </Link>
                <Link href="/contact">
                  <NeonButton variant="outline" size="lg">
                    Talk to Our Team
                  </NeonButton>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassCard hoverEffect={false} className="border-primary/20 p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/12 border border-primary/20 flex items-center justify-center">
                      <Bot className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-black">Next Step AI</h2>
                      <p className="text-sm text-muted-foreground">Business guidance assistant</p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Coming Soon
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-muted/25 p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock3 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Frontend preview is live</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The interactive AI backend is currently disabled. Visitors can still
                        understand what Next Step AI will do and continue exploring our services.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {upcomingItems.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              What It Will Help With
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-4">
              Built for clearer online decisions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Until the AI advisor is fully launched, this page explains the upcoming
              experience and guides visitors toward the services already available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCards.map((feature, index) => (
              <GlassCard key={feature.title} delay={index * 0.05} className="h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard hoverEffect={false} className="border-primary/20 p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">
                  Explore More Services
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
                  Need help before Next Step AI launches?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-7">
                  TheCOdex can already help with websites, web apps, SaaS MVPs,
                  automation, hosting guidance, and growth support.
                </p>
                <Link href="/services">
                  <NeonButton variant="secondary" icon={<ArrowRight className="w-5 h-5" />}>
                    Explore More Services
                  </NeonButton>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {servicePathways.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-border bg-muted/25 p-5 md:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
}
