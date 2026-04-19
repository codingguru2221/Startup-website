import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShieldCheck, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { SEO } from "@/components/SEO";
import { getServiceHref, SERVICE_CATEGORIES } from "@/data/services";
import { SITE_URL } from "@/lib/seo";

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Software Development Services | Web Apps, SaaS & Automation | TheCodex"
        description="Explore TheCodex services for custom web app development, web app management, SaaS product development, business automation, and growth systems."
        keywords="software development services, web app development services, SaaS development services, business automation services"
        canonicalUrl={`${SITE_URL}/services`}
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
          <GlassCard hoverEffect={false} className="border-primary/20 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 rounded-full bg-accent/12 flex items-center justify-center flex-shrink-0 box-glow">
              <ShieldCheck className="w-16 h-16 text-accent" />
            </div>
            <div className="flex-grow">
              <h2 className="text-3xl font-display font-bold mb-4">Post-Development Support</h2>
              <p className="text-muted-foreground text-lg mb-6">
                This is one of our extra advantages. After development, we continue supporting your product with maintenance, improvements, technical guidance, and operational help as your business grows.
              </p>
              <Link href="/maintenance-support">
                <NeonButton variant="secondary">Discuss Maintenance</NeonButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
}
