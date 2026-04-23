import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShieldCheck, ChevronRight, LifeBuoy, RefreshCcw, Wrench } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { SEO, createBreadcrumbSchema, createWebPageSchema } from "@/components/SEO";
import { getServiceHref, SERVICE_CATEGORIES } from "@/data/services";
import { SITE_URL } from "@/lib/seo";

export default function Services() {
  const supportItems = [
    {
      icon: RefreshCcw,
      title: "Ongoing improvements",
      description: "Refine flows, add features, and improve performance as your product and users evolve.",
    },
    {
      icon: Wrench,
      title: "Maintenance and fixes",
      description: "Keep dependencies, infrastructure, and critical workflows stable after launch.",
    },
    {
      icon: LifeBuoy,
      title: "Operational support",
      description: "Get technical guidance when your team needs help with usage, scaling, or rollout decisions.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Software Development Services | Web Apps, SaaS & Automation | TheCOdex"
        description="Explore TheCOdex services for custom web app development, web app management, SaaS product development, business automation, and growth systems."
        keywords="software development services, web app development services, SaaS development services, business automation services"
        canonicalUrl={`${SITE_URL}/services`}
        schemaMarkup={[
          createWebPageSchema({
            path: "/services",
            name: "Software Development Services | Web Apps, SaaS & Automation | TheCOdex",
            description:
              "Explore TheCOdex services for custom web app development, web app management, SaaS product development, business automation, and growth systems.",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          {
            "@type": "ItemList",
            name: "TheCOdex Software Development Services",
            itemListElement: SERVICE_CATEGORIES.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.title,
              url: `${SITE_URL}${getServiceHref(service.slug)}`,
            })),
          },
        ]}
      />

      <section className="pt-32 pb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-primary/15 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black mb-6"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We organize our services into focused categories so clients can quickly understand how we support development, infrastructure, AI automation, and business growth.
          </motion.p>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_CATEGORIES.map((category, i) => (
              <GlassCard key={i} delay={i * 0.05} className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/12 to-transparent border border-primary/15 flex items-center justify-center mb-6">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{category.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{category.intro}</p>
                <div className="space-y-3 flex-grow">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between gap-4">
                  <Link href={getServiceHref(category.slug)}>
                    <span className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors cursor-pointer inline-flex items-center">
                      View Details <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                  <Link href="/custom-request">
                    <span className="text-primary text-sm font-semibold hover:text-primary/75 transition-colors cursor-pointer inline-flex items-center">
                      Ask Us What You Want <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard hoverEffect={false} className="border-primary/20 p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
              <div className="text-center lg:text-left">
                <div className="w-28 h-28 rounded-full bg-accent/12 flex items-center justify-center mx-auto lg:mx-0 mb-6 box-glow">
                  <ShieldCheck className="w-14 h-14 text-accent" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">
                  Beyond Launch
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Post-Development Support
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Launch is not the end of the project. We continue supporting your product
                  with maintenance, technical guidance, and practical improvements so it stays
                  reliable as your business grows.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/maintenance-support">
                    <NeonButton variant="secondary">Discuss Maintenance</NeonButton>
                  </Link>
                  <Link href="/contact">
                    <NeonButton variant="outline">Talk to Our Team</NeonButton>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {supportItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-muted/25 p-5 md:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.description}
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
