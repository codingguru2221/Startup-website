import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { getServiceBySlug, SERVICE_CATEGORIES } from "@/data/services";

interface ServiceDetailProps {
  slug: string;
}

export default function ServiceDetail({ slug }: ServiceDetailProps) {
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <Layout>
        <section className="pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard hoverEffect={false} className="text-center">
              <h1 className="text-4xl font-display font-bold mb-4">Service not found</h1>
              <p className="text-muted-foreground mb-8">
                The service you opened does not exist or may have been moved.
              </p>
              <Link href="/services">
                <NeonButton icon={<ArrowLeft className="w-4 h-4" />}>Back to Services</NeonButton>
              </Link>
            </GlassCard>
          </div>
        </section>
      </Layout>
    );
  }

  const otherServices = SERVICE_CATEGORIES.filter((item) => item.slug !== service.slug).slice(0, 3);
  const ServiceIcon = service.icon;

  return (
    <Layout>
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-10 w-64 h-64 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-accent/10 blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-primary/8 text-primary text-sm font-semibold mb-6"
              >
                <ServiceIcon className="w-4 h-4" />
                Service Detail
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-4xl md:text-6xl font-display font-black mb-5"
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-3xl"
              >
                {service.overview}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-xl font-medium mt-6 text-foreground/90"
              >
                {service.identityLine}
              </motion.p>
            </div>

            <GlassCard hoverEffect={false} className="border-primary/15">
              <h2 className="text-2xl font-bold mb-4">What you can expect</h2>
              <div className="space-y-4">
                {service.deliverables.map((item) => (
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

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8">
            <GlassCard hoverEffect={false} className="h-full">
              <h2 className="text-3xl font-display font-bold mb-4">Detailed Solutions</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Each service area is delivered with business clarity, practical planning, and technical execution that
                fits your real-world goals.
              </p>

              <div className="space-y-5">
                {service.offerings.map((offering, index) => (
                  <div key={offering.title} className="rounded-2xl border border-border/70 bg-background/55 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/15 text-primary flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold">{offering.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{offering.description}</p>
                    <div className="space-y-3">
                      {offering.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                          <p className="text-sm text-muted-foreground leading-relaxed">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="space-y-8">
              <GlassCard>
                <h2 className="text-2xl font-bold mb-5">Best Fit For</h2>
                <div className="space-y-4">
                  {service.idealFor.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <h2 className="text-2xl font-bold mb-5">How We Work</h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={step} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 text-accent flex items-center justify-center font-semibold shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard hoverEffect={false} className="border-accent/20">
                <h2 className="text-2xl font-bold mb-4">Need this service?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Tell us what you want to build, improve, or automate and we will guide you toward the right solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/start-project">
                    <NeonButton icon={<ArrowRight className="w-4 h-4" />}>Start Your Project</NeonButton>
                  </Link>
                  <Link href="/contact">
                    <NeonButton variant="outline">Talk to Our Team</NeonButton>
                  </Link>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative border-t border-border/70 bg-background/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">Explore More Services</h2>
              <p className="text-muted-foreground">
                If this is not exactly what you need, you can explore other solution areas here.
              </p>
            </div>
            <Link href="/services">
              <span className="hidden md:inline-flex items-center text-sm text-primary font-semibold hover:text-primary/75 transition-colors cursor-pointer">
                All Services <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((item, index) => {
              const Icon = item.icon;

              return (
                <GlassCard key={item.slug} delay={index * 0.05} className="h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.intro}</p>
                  <Link href={`/services/${item.slug}`}>
                    <span className="text-primary text-sm font-semibold hover:text-primary/75 transition-colors cursor-pointer inline-flex items-center">
                      View Details <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
