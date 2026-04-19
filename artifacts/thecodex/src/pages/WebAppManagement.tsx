import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Server,
  Shield,
  Zap,
  Clock,
  CheckCircle2,
  ArrowRight,
  Activity,
  Database,
  Settings,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import { SITE_URL } from "@/lib/seo";

const SERVICES = [
  {
    icon: Activity,
    title: "24/7 Monitoring",
    desc: "Continuous monitoring of your application's performance, uptime, and security to catch issues before they impact users.",
  },
  {
    icon: Shield,
    title: "Security Updates",
    desc: "Regular security patches, dependency updates, and vulnerability assessments to keep your application protected.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Database optimization, caching strategies, and frontend improvements for faster load times and better UX.",
  },
  {
    icon: Clock,
    title: "Bug Fixes & Support",
    desc: "Rapid response to issues with priority bug fixes and technical support during business hours or 24/7.",
  },
  {
    icon: Database,
    title: "Backup & Recovery",
    desc: "Automated backups and disaster recovery planning to ensure your data is always safe and recoverable.",
  },
  {
    icon: Settings,
    title: "Feature Updates",
    desc: "Continuous improvements with new features, UI enhancements, and user experience optimizations.",
  },
];

const PLANS = [
  {
    name: "Basic",
    price: "Rs 9,999/month",
    description: "Essential maintenance for small applications",
    features: [
      "Monthly security updates",
      "Uptime monitoring",
      "Bug fixes and troubleshooting",
      "Email support (business hours)",
      "Monthly performance report",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "Rs 19,999/month",
    description: "Comprehensive support for growing applications",
    features: [
      "Weekly maintenance updates",
      "Performance optimization",
      "Priority bug resolution",
      "Phone and email support",
      "Bi-weekly status reports",
      "Feature enhancements (4 hrs/month)",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Rs 39,999/month",
    description: "Enterprise-grade support with SLA guarantee",
    features: [
      "24/7 monitoring and support",
      "Dedicated account manager",
      "Guaranteed response times",
      "Monthly strategy sessions",
      "Feature enhancements (10 hrs/month)",
      "Quarterly security audits",
      "Custom reporting",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const FAQS = [
  {
    question: "What's included in web app maintenance?",
    answer:
      "Our maintenance services include security updates, performance optimization, bug fixes, backups, monitoring, and continuous improvements to keep your application running smoothly.",
  },
  {
    question: "How quickly do you respond to issues?",
    answer:
      "Response times depend on your plan. Basic plans respond within 24 hours, Professional within 4 hours, and Enterprise plans have guaranteed 1-hour response times for critical issues.",
  },
  {
    question: "Can you maintain applications you didn't build?",
    answer:
      "Yes, we can take over maintenance for any web application. We start with a comprehensive audit to understand the codebase and identify areas for improvement.",
  },
  {
    question: "Do you offer custom maintenance plans?",
    answer:
      "Absolutely. We can create a custom maintenance plan tailored to your specific needs, budget, and application requirements.",
  },
];

export default function WebAppManagement() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEO
        title="Web App Management & Maintenance Services | TheCodex"
        description="Keep your web application running smoothly with proactive maintenance, security updates, performance optimization, and 24/7 monitoring. Plans starting at Rs 9,999/month."
        keywords="web app maintenance, application management, web app support, application monitoring, security updates, performance optimization"
        canonicalUrl={`${SITE_URL}/web-app-management`}
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
            Web App Management
            <br />
            <span className="gradient-text">& Maintenance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Keep your web application secure, fast, and up-to-date with our comprehensive maintenance and support services. Focus on growing your business while we handle the technical details.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <NeonButton size="lg" className="min-w-[200px]">
                Get Maintenance Quote
              </NeonButton>
            </Link>
            <Link href="/web-app-development">
              <NeonButton variant="outline" size="lg" className="min-w-[200px]">
                Explore Development
              </NeonButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Comprehensive <span className="text-primary">Maintenance Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to keep your web application running at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <GlassCard key={i} delay={i * 0.1} className="flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/15">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Maintenance <span className="text-primary">Plans</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your application's needs. All plans include our commitment to quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard
                  hoverEffect={false}
                  className={`h-full flex flex-col ${
                    plan.popular ? "border-primary/50 border-2 relative" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                    <div className="text-4xl font-black text-primary mb-2">{plan.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <NeonButton
                      variant={plan.popular ? "primary" : "outline"}
                      fullWidth
                      className="mt-auto"
                    >
                      {plan.cta}
                    </NeonButton>
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
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
              Common questions about our web app maintenance and management services.
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
            Need Reliable App Maintenance?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let us keep your web application secure, fast, and running smoothly 24/7.
          </p>
          <Link href="/contact">
            <NeonButton size="lg" className="px-12 py-5 text-lg">
              Get Your Maintenance Quote
            </NeonButton>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
