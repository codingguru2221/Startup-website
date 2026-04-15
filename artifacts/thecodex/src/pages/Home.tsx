import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, Cpu, Shield, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SERVICE_CATEGORIES } from "@/data/services";

const FEATURES = [
  { icon: Code, title: "Precision Engineering", desc: "Clean, scalable, and maintainable codebases planned for long-term business use." },
  { icon: Cpu, title: "AI Integration", desc: "Practical automation and AI features that improve operations without adding confusion." },
  { icon: Shield, title: "Enterprise Security", desc: "Reliable systems, stable architecture, and careful implementation across the stack." },
  { icon: Zap, title: "Fast Delivery", desc: "Focused execution with modern tooling, polished interfaces, and dependable support." },
];

const CORE_SERVICE_CARDS = [
  {
    title: "Web & App Development",
    href: "/services/development-solutions",
  },
  {
    title: "AI Business Models",
    href: "/services/ai-automation",
  },
  {
    title: "Network & Server Control",
    href: "/services/infrastructure-computation",
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Professional abstract background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/88 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 border border-primary/15 shadow-[0_14px_34px_rgba(15,23,42,0.08)] mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary tracking-wide">TRUSTED DIGITAL DELIVERY PARTNER</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground max-w-5xl leading-[1.08] tracking-tight mb-6"
          >
            Modern websites, apps, and AI systems
            <br />
            <span className="gradient-text text-glow">built with clarity and purpose</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            We help businesses launch polished digital products, dependable infrastructure, and practical AI solutions with a structured and professional execution style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="/services">
              <NeonButton size="lg" className="w-full sm:w-auto min-w-[200px]">
                Explore Services
              </NeonButton>
            </Link>
            <Link href="/custom-request">
              <NeonButton variant="outline" size="lg" icon={<ArrowRight className="w-5 h-5" />} className="w-full sm:w-auto min-w-[200px]">
                Ask Us What You Want
              </NeonButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">A professional team for <span className="text-primary text-glow">serious digital work</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our delivery approach combines design quality, technical depth, and business thinking so every project feels stable, useful, and client-ready.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, i) => (
              <GlassCard key={i} delay={i * 0.1} className="flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/15">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-panel p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Core <span className="text-accent">service areas</span></h2>
                <p className="text-muted-foreground max-w-xl">Clear service categories designed to support product development, automation, and long-term operations.</p>
              </div>
              <Link href="/services">
                <span className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors cursor-pointer group">
                  View All Services <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {CORE_SERVICE_CARDS.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group rounded-3xl border border-border bg-card p-8 flex flex-col justify-between shadow-[0_20px_55px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{card.title}</h3>
                    <p className="text-muted-foreground text-sm">Full-stack implementation from frontend experiences to backend systems and operational support.</p>
                  </div>

                  <div className="self-start w-12 h-12 rounded-full border border-border bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">The <span className="text-primary text-glow">COdex</span> advantage</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We focus on delivery that feels thoughtful, stable, and commercially useful. That means clearer planning, cleaner interfaces, and solutions that support growth without unnecessary complexity.
              </p>

              <ul className="space-y-4">
                {[
                  "Clear project communication",
                  "Modern full-stack delivery",
                  "Post-development maintenance",
                  "Scalable architecture decisions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass p-2"
            >
              <div className="w-full h-full rounded-2xl bg-card overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />
                <div className="w-48 h-48 bg-accent/10 rounded-full blur-[80px] -ml-24" />

                <div className="absolute inset-8 border border-border rounded-xl flex flex-col p-6 backdrop-blur-md bg-card/85 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">system_status: online</div>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse" />
                    <div className="h-4 w-1/2 bg-slate-200 rounded animate-pulse" style={{ animationDelay: "150ms" }} />
                    <div className="h-4 w-5/6 bg-slate-200 rounded animate-pulse" style={{ animationDelay: "300ms" }} />
                  </div>
                  <div className="mt-auto h-32 w-full border border-primary/15 rounded-lg relative overflow-hidden bg-primary/5">
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/30 to-transparent" />
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      <polyline points="0,100 50,50 100,80 150,20 200,60 250,10 300,100" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Transparent <span className="text-primary text-glow">plan pricing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare starting plans across our major service areas and choose the right path for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((service, index) => {
              const Icon = service.icon;

              return (
                <GlassCard key={service.slug} delay={index * 0.05} hoverEffect={false} className="plan-card h-full overflow-visible border border-border/80">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.intro}</p>

                  <div className="space-y-3 mb-7">
                    {service.plans.map((plan) => (
                      <div key={plan.name} className="flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-background/60 px-4 py-3">
                        <span className="text-sm font-semibold">{plan.name}</span>
                        <span className="text-sm font-bold text-primary">{plan.price}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/services/${service.slug}`}>
                    <NeonButton variant="outline" fullWidth icon={<ArrowRight className="w-4 h-4" />}>
                      View Plans
                    </NeonButton>
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/6" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">Ready to scale?</h2>
          <p className="text-xl text-muted-foreground mb-10">Let&apos;s turn your idea into a cleaner, stronger, and more professional digital presence.</p>
          <Link href="/start-project">
            <NeonButton size="lg" className="px-12 py-5 text-lg">
              Start Your Project
            </NeonButton>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
