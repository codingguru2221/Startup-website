import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Target, Flag, Rocket } from "lucide-react";

const TEAM = [
  {
    name: "Core Founder",
    role: "CEO",
    spec: "Vision, Strategy, and Growth",
    image: "images/ceo.jpg",
  },
  {
    name: "Creative Lead",
    role: "Designer",
    spec: "Brand, UI, and Visual Systems",
    image: "images/designer.png",
  },
  {
    name: "Build Lead",
    role: "Developer",
    spec: "Frontend, Backend, and Delivery",
    image: "images/devloper.jpeg",
  },
];

export default function About() {
  return (
    <Layout>
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

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard delay={0.1} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">The Vision</h3>
              <p className="text-muted-foreground">To deliver digital products and systems that feel polished, useful, and ready for real business growth.</p>
            </GlassCard>

            <GlassCard delay={0.2} className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent rounded-2xl pointer-events-none" />
              <div className="absolute -inset-[1px] rounded-2xl border border-accent/20 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/12 flex items-center justify-center mb-6 border border-accent/25 box-glow">
                  <Rocket className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-accent text-glow-accent">100 Day Challenge</h3>
                <p className="text-muted-foreground">A focused growth roadmap centered on strong execution, better service quality, and disciplined progress.</p>
              </div>
            </GlassCard>

            <GlassCard delay={0.3} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <Flag className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">The Standard</h3>
              <p className="text-muted-foreground">We aim for clarity, consistency, and scalable solutions that clients can trust over time.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 relative border-t border-border/80 bg-background/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">The <span className="text-primary text-glow">Architects</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
