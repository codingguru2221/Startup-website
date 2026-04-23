import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEO, createBreadcrumbSchema, createWebPageSchema } from "@/components/SEO";
import { Target, Rocket, Sparkles, ShieldCheck, Cpu, Building2 } from "lucide-react";
import { SITE_URL } from "@/lib/seo";

const TEAM = [
  {
    name: "Core Founder",
    role: "CEO",
    spec: "Vision, Strategy, and Growth",
    image: "images/ceo.jpg",
  },
  {
    name: "Build Lead",
    role: "Developer",
    spec: "Frontend, Backend, and Delivery",
    image: "images/devloper.jpeg",
  },
  {
    name: "Business Lead",
    role: "Business Development",
    spec: "Sales, Partnerships, and Growth",
    image: "images/busness lead.jpg",
  },
  {
    name: "Marketing Lead",
    role: "Marketing Strategist",
    spec: "Campaigns, Branding, and Outreach",
    image: "images/Marketing lead.jpg",
  },
];

const MISSION_POINTS = [
  "Building websites, management systems, and digital infrastructure for schools",
  "Developing high-converting websites and applications for businesses",
  "Setting up computer labs and IT infrastructure from planning to execution",
  "Creating AI-powered solutions and automation tools that save time and cost",
  "Strengthening the online presence and branding of local businesses",
];

const VALUES = [
  "Quality over quantity",
  "Client growth first",
  "Innovation mindset",
  "Execution over ideas",
  "Trust and transparency",
];

const FUTURE_DIRECTIONS = [
  "Launching AI-powered SaaS products",
  "Building automated lead generation systems",
  "Developing cybersecurity-focused tools through initiatives like Trinetra",
  "Becoming a trusted technology partner for schools and businesses nationwide",
];

export default function About() {
  return (
    <Layout>
      <SEO
        title="About TheCOdex Software Solutions | Software Team for Web Apps and SaaS"
        description="Meet TheCOdex Software Solutions and learn about our mission, team, and approach to custom web applications, SaaS development, and business automation."
        keywords="about TheCOdex, web app development team, SaaS development company"
        canonicalUrl={`${SITE_URL}/about`}
        schemaMarkup={[
          createWebPageSchema({
            path: "/about",
            name: "About TheCOdex Software Solutions | Software Team for Web Apps and SaaS",
            description:
              "Meet TheCOdex Software Solutions and learn about our mission, team, and approach to custom web applications, SaaS development, and business automation.",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-12 pointer-events-none">
          <img
            src={`${import.meta.env.BASE_URL}images/about-bg.png`}
            alt="About Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/92" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="px-4 py-1.5 rounded-full border border-accent/20 bg-card/80 text-accent font-medium text-sm">
              MISSION_OBJECTIVE: 100_DAYS
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black mb-6"
          >
            Built with <span className="text-accent text-glow-accent">focus.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            TheCOdex Software Solutions is a growing team focused on design quality, dependable software delivery, and practical support for businesses that want to build with confidence.
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-panel p-8 md:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/10 pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-primary/8 text-primary text-sm font-semibold mb-6">
                  <Building2 className="w-4 h-4" />
                  About Us
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-black leading-tight mb-5">
                  MISSION &amp; VISION
                  <span className="block text-accent text-glow-accent">TheCOdex Software Solutions</span>
                </h2>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  We are a software solutions company building practical, scalable, and easy-to-use digital systems for
                  schools, small businesses, and startups. Our focus is not just to build software, but to deliver
                  technology that creates real growth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="glass-card rounded-2xl p-6 border border-primary/15">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our vision is to create a digital ecosystem where every school, small business, and startup can
                      adopt modern technology easily, without unnecessary complexity or cost.
                    </p>
                  </div>

                  <div className="glass-card rounded-2xl p-6 border border-accent/20">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our mission is to deliver practical, result-driven technology solutions that directly strengthen
                      our clients' growth, efficiency, and digital presence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="glass-card rounded-2xl p-6 border border-border/80">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold">Simple Identity</h3>
                  </div>
                  <p className="text-2xl font-display font-bold leading-snug">
                    "We build technology that actually grows businesses."
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-border/80">
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-bold">Long-Term Direction</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We aim to digitally empower the education sector, help small businesses grow online, and lead
                    digital transformation across India's tier-2 and tier-3 cities.
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-border/80">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold">Core Belief</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To make even the smallest school or business strong in the digital world through smart systems and
                    dependable execution.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            <GlassCard delay={0.05} className="h-full">
              <h3 className="text-2xl font-bold mb-5">What We Do</h3>
              <div className="space-y-4">
                {MISSION_POINTS.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.1} className="h-full">
              <h3 className="text-2xl font-bold mb-5">Core Values</h3>
              <div className="space-y-4">
                {VALUES.map((value, index) => (
                  <div key={index} className="rounded-2xl border border-border/70 bg-background/60 px-4 py-3">
                    <p className="font-semibold mb-1">{value}</p>
                    <p className="text-sm text-muted-foreground">
                      {value === "Quality over quantity" && "Every project should be impactful, polished, and meaningful."}
                      {value === "Client growth first" && "Our work is successful only when our clients grow with it."}
                      {value === "Innovation mindset" && "Every solution should reflect smart thinking and a future-ready approach."}
                      {value === "Execution over ideas" && "Strong execution matters just as much as strong ideas."}
                      {value === "Trust and transparency" && "Long-term relationships are built through honesty, clarity, and reliable delivery."}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.15} className="h-full">
              <h3 className="text-2xl font-bold mb-5">Future Direction</h3>
              <div className="space-y-4">
                {FUTURE_DIRECTIONS.map((direction, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{direction}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 relative border-t border-border/80 bg-background/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">The <span className="text-primary text-glow">Architects</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative glass-card rounded-2xl p-6 border border-border group-hover:border-primary/30 transition-colors duration-300">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden bg-background border-2 border-primary/20 mb-6 shadow-[0_14px_30px_rgba(15,23,42,0.06)] transition-shadow">
                    <img
                      src={`${import.meta.env.BASE_URL}${member.image}`}
                      alt={`${member.role} at TheCOdex`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-xs">{member.spec}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
