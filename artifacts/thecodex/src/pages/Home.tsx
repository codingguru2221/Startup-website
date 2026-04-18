import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Code,
  Server,
  BarChart3,
  Settings,
  CheckCircle2,
  ChevronRight,
  Users,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEO, defaultSchema } from "@/components/SEO";

const FEATURES = [
  {
    icon: Code,
    title: "Expert Full-Stack Team",
    desc: "Experienced developers skilled in React, Node.js, Python, and modern cloud technologies.",
  },
  {
    icon: Zap,
    title: "Agile Development",
    desc: "Iterative development process with regular demos, feedback loops, and transparent communication.",
  },
  {
    icon: Shield,
    title: "Post-Launch Support",
    desc: "Comprehensive maintenance and support to keep your application secure and performing optimally.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    desc: "Future-proof solutions designed to grow with your business and handle increasing demand.",
  },
];

const CORE_SERVICES = [
  {
    icon: Code,
    title: "Custom Web App Development",
    description: "Tailored web applications built from scratch to solve your unique business challenges.",
    href: "/web-app-development",
  },
  {
    icon: Server,
    title: "Web App Management",
    description: "24/7 monitoring, security updates, performance optimization, and continuous improvements.",
    href: "/web-app-management",
  },
  {
    icon: BarChart3,
    title: "SaaS Product Development",
    description: "End-to-end SaaS development from concept to launch with subscription management.",
    href: "/services/saas-development",
  },
  {
    icon: Settings,
    title: "Business Automation",
    description: "Eliminate repetitive tasks and boost productivity with intelligent automation systems.",
    href: "/services/business-automation",
  },
];

const INDUSTRIES = [
  "Startups & Entrepreneurs",
  "E-commerce & Retail",
  "Healthcare & Wellness",
  "Education & E-Learning",
  "FinTech & Banking",
  "Real Estate",
  "Logistics & Supply Chain",
  "Media & Entertainment",
];

const PROCESS_STEPS = [
  { number: "01", title: "Discovery", desc: "Understand your goals, users, and requirements" },
  { number: "02", title: "Design", desc: "Create wireframes and UI/UX prototypes" },
  { number: "03", title: "Develop", desc: "Build with modern technologies and best practices" },
  { number: "04", title: "Test", desc: "Rigorous QA testing for quality and performance" },
  { number: "05", title: "Launch", desc: "Deploy to production with monitoring setup" },
  { number: "06", title: "Support", desc: "Ongoing maintenance and continuous improvements" },
];

export default function Home() {
  return (
    <Layout>
      <SEO
        title="TheCOdex Software Solutions | Custom Web App Development Company"
        description="Expert web application development, SaaS products, and business automation. We build scalable, high-performance web apps for startups and growing businesses."
        keywords="web app development, custom web application, SaaS development, business automation, web application company, custom software development"
        canonicalUrl="https://thecodex.com"
        schemaMarkup={defaultSchema}
      />

      {/* Hero Section */}
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
            <span className="text-sm font-medium text-primary tracking-wide">WEB APP DEVELOPMENT EXPERTS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground max-w-5xl leading-[1.08] tracking-tight mb-6"
          >
            Custom Web Application Development
            <br />
            <span className="gradient-text text-glow">for Growing Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10"
          >
            We design and develop scalable, high-performance web applications, SaaS products, and business automation systems that drive growth and streamline operations for startups and enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="/contact">
              <NeonButton size="lg" className="w-full sm:w-auto min-w-[200px]">
                Get Free Consultation
              </NeonButton>
            </Link>
            <Link href="/web-app-development">
              <NeonButton variant="outline" size="lg" icon={<ArrowRight className="w-5 h-5" />} className="w-full sm:w-auto min-w-[200px]">
                Explore Services
              </NeonButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "3+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our Core <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software solutions designed to help startups and businesses build, launch, and scale digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_SERVICES.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group"
              >
                <GlassCard delay={i * 0.1} className="h-full cursor-pointer hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/15">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-primary font-semibold text-sm mt-6">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Why Choose <span className="text-primary">TheCOdex</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We combine technical expertise with business understanding to deliver web applications that not only work flawlessly but also drive measurable results for your business.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {FEATURES.map((feature, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
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

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our Development <span className="text-primary">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven, agile methodology that ensures transparency, quality, and on-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-black text-primary/10 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We build custom web applications for diverse industries, each with unique challenges and requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRIES.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard hoverEffect={false} className="text-center py-6">
                  <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="text-sm font-semibold text-foreground">{industry}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/6" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            Ready to Build Your Web App?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss your project and create a powerful web application that drives your business forward. Get a free consultation today.
          </p>
          <Link href="/contact">
            <NeonButton size="lg" className="px-12 py-5 text-lg">
              Start Your Project Today
            </NeonButton>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
