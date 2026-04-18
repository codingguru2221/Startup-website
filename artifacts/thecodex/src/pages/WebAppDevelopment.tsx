import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Code,
  Shield,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  Database,
  Cloud,
  Smartphone,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEO } from "@/components/SEO";
import { useState } from "react";

const FEATURES = [
  {
    icon: Code,
    title: "Custom Development",
    desc: "Tailored web applications built from scratch to match your exact business requirements and workflows.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Robust security measures including encryption, authentication, and compliance with industry standards.",
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Optimized for speed and scalability, ensuring fast load times even with growing user bases.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    desc: "Intuitive interfaces designed for maximum usability and engagement across all devices.",
  },
  {
    icon: Database,
    title: "API Integration",
    desc: "Seamless integration with third-party services, payment gateways, and existing business tools.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    desc: "Scalable cloud infrastructure on AWS, Azure, or Google Cloud for reliable performance.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Requirements Gathering",
    desc: "We analyze your business needs, target audience, and technical requirements to create a comprehensive project blueprint.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    desc: "Our designers create wireframes and prototypes that visualize the user experience before development begins.",
  },
  {
    number: "03",
    title: "Frontend Development",
    desc: "We build responsive, interactive user interfaces using modern frameworks like React, Next.js, and TypeScript.",
  },
  {
    number: "04",
    title: "Backend Development",
    desc: "Robust server-side architecture with secure APIs, database design, and business logic implementation.",
  },
  {
    number: "05",
    title: "Testing & QA",
    desc: "Comprehensive testing including unit tests, integration tests, performance testing, and security audits.",
  },
  {
    number: "06",
    title: "Deployment & Launch",
    desc: "Smooth deployment to production with monitoring setup, documentation, and team training.",
  },
];

const TECH_STACK = [
  { category: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", technologies: ["Node.js", "Python", "Express", "PostgreSQL"] },
  { category: "Cloud & DevOps", technologies: ["AWS", "Azure", "Docker", "CI/CD"] },
  { category: "Tools & APIs", technologies: ["Stripe", "Firebase", "Redis", "GraphQL"] },
];

const FAQS = [
  {
    question: "How long does it take to build a custom web application?",
    answer:
      "Development timelines vary based on complexity. A simple MVP typically takes 4-6 weeks, while more complex applications can take 3-6 months. We provide detailed timelines during the planning phase.",
  },
  {
    question: "What is the cost of custom web app development?",
    answer:
      "Pricing depends on features, complexity, and timeline. Our starter packages begin at Rs 24,999 for MVPs. We provide transparent quotes after understanding your requirements.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer comprehensive maintenance and support plans to keep your application secure, updated, and performing optimally after launch.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Absolutely. We specialize in integrating web applications with existing business tools, CRMs, ERPs, payment gateways, and third-party APIs.",
  },
  {
    question: "Is my web application secure?",
    answer:
      "Security is our priority. We implement industry-standard security measures including encryption, secure authentication, regular security audits, and compliance with data protection regulations.",
  },
];

export default function WebAppDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEO
        title="Custom Web Application Development Services | TheCOdex"
        description="Professional custom web application development services. We build scalable, secure, and high-performance web apps for startups and businesses. Get a free consultation."
        keywords="web app development, custom web application, web application development company, custom software development, SaaS development"
        canonicalUrl="https://thecodex.com/web-app-development"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-primary/15 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight"
          >
            Custom Web Application
            <br />
            <span className="gradient-text">Development Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            We design and develop scalable, high-performance web applications tailored to your business needs. From MVPs to enterprise platforms, we build software that drives growth and streamlines operations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <NeonButton size="lg" className="min-w-[200px]">
                Get Free Consultation
              </NeonButton>
            </Link>
            <Link href="/projects">
              <NeonButton variant="outline" size="lg" className="min-w-[200px]">
                View Our Work
              </NeonButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Powerful Features for <span className="text-primary">Modern Web Apps</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every web application we build includes enterprise-grade features designed for performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Process Section */}
      <section className="py-20 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our Development <span className="text-primary">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven, agile development methodology that ensures transparency, quality, and on-time delivery.
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

      {/* Tech Stack Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Modern <span className="text-primary">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use industry-leading technologies to build fast, reliable, and scalable web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK.map((stack, i) => (
              <GlassCard key={i} delay={i * 0.1}>
                <h3 className="text-xl font-bold text-foreground mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Why Choose <span className="text-primary">TheCOdex</span> for Web App Development?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We combine technical expertise with business understanding to deliver web applications that not only work flawlessly but also drive measurable results for your business.
              </p>

              <ul className="space-y-4">
                {[
                  "Experienced full-stack development team",
                  "Agile methodology with regular updates",
                  "Scalable architecture for future growth",
                  "Post-launch support and maintenance",
                  "Transparent pricing and communication",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
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
              className="glass p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our web application development services.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <GlassCard key={i} hoverEffect={false} className="cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex items-center justify-between">
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

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/6" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            Ready to Build Your Web App?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss your project and create a powerful web application that drives your business forward.
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
