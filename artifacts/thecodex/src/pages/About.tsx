import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Target, Flag, Rocket } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* HEADER */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none">
          <img 
            src={`${import.meta.env.BASE_URL}images/about-bg.png`} 
            alt="About Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center justify-center mb-6"
          >
            <div className="px-4 py-1.5 rounded-full border border-accent/50 bg-accent/10 text-accent font-medium text-sm">
              MISSION_OBJECTIVE: 100_DAYS
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black mb-6"
          >
            Forged in <span className="text-accent text-glow-accent">Code.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            TheCodex Software Solutions isn't just an agency. It's a high-velocity startup with a singular objective: engineering immense technological value within 100 days.
          </motion.p>
        </div>
      </section>

      {/* STORY & VALUES */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard delay={0.1} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">The Vision</h3>
              <p className="text-muted-foreground">To redefine the baseline of technological excellence for startups and enterprises globally.</p>
            </GlassCard>

            <GlassCard delay={0.2} className="text-center relative">
              {/* Highlight card */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent rounded-2xl pointer-events-none" />
              <div className="absolute -inset-[1px] rounded-2xl border border-accent/50 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-6 border border-accent/40 box-glow">
                  <Rocket className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-accent text-glow-accent">100 Day Challenge</h3>
                <p className="text-muted-foreground">An aggressive growth roadmap: building a high-value software company from scratch in under 100 days.</p>
              </div>
            </GlassCard>

            <GlassCard delay={0.3} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <Flag className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">The Standard</h3>
              <p className="text-muted-foreground">Zero compromises. We deliver scalable, secure, and impeccably designed systems every single time.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* TEAM SECTION (using abstract icons as avatars per design request) */}
      <section className="py-24 relative border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">The <span className="text-primary text-glow">Architects</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { role: "Founder & CEO", spec: "System Architecture" },
              { role: "CTO", spec: "AI & Machine Learning" },
              { role: "Lead Engineer", spec: "Full-Stack Development" },
              { role: "Head of Infrastructure", spec: "Networks & Security" }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative glass-card rounded-2xl p-6 border border-white/5 group-hover:border-primary/50 transition-colors duration-300">
                  <div className="w-24 h-24 mx-auto rounded-full bg-background border-2 border-primary/30 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow">
                    <span className="font-display font-black text-3xl text-primary/50 group-hover:text-primary transition-colors">0{i+1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Architect_{i+1}</h4>
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
