import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, Cpu, Shield, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";

const FEATURES = [
  { icon: Code, title: "Precision Engineering", desc: "Clean, scalable, and maintainable codebase architected for the future." },
  { icon: Cpu, title: "AI Integration", desc: "Leveraging cutting-edge machine learning to automate and scale your workflows." },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade security protocols implemented at every layer of the stack." },
  { icon: Zap, title: "Blazing Performance", desc: "Optimized delivery networks and microservices for sub-second responses." },
];

export default function Home() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        {/* Background Image / Render */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Futuristic Grid" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary-foreground tracking-wide">INITIALIZING THE NEXT GENERATION</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-foreground max-w-5xl leading-[1.1] tracking-tight mb-6"
          >
            Building The Future, <br />
            <span className="gradient-text text-glow">One Solution At A Time</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            We architect elite software ecosystems, robust networks, and AI-driven business models tailored for unprecedented scale.
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
            <Link href="/buy">
              <NeonButton variant="outline" size="lg" icon={<ArrowRight className="w-5 h-5" />} className="w-full sm:w-auto min-w-[200px]">
                Ask Us What You Want
              </NeonButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CORE SKILLS SECTION */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Architecting <span className="text-primary text-glow">Excellence</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our multi-disciplinary team operates at the intersection of design, engineering, and artificial intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, i) => (
              <GlassCard key={i} delay={i * 0.1} className="flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 relative overflow-hidden bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Core <span className="text-accent text-glow-accent">Competencies</span></h2>
              <p className="text-muted-foreground max-w-xl">Comprehensive digital transformation services engineered for maximum ROI.</p>
            </div>
            <Link href="/services">
              <span className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors cursor-pointer group">
                View All Services <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {['Web & App Development', 'AI Business Models', 'Network & Server Control'].map((title, i) => (
              <div key={i} className="group relative p-[1px] rounded-3xl overflow-hidden cursor-pointer">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl group-hover:animate-pulse" />
                <div className="relative bg-card h-full rounded-[23px] p-8 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
                  
                  <div className="relative z-10 mb-12">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
                    <p className="text-muted-foreground text-sm">Full-stack implementation from frontend interfaces to complex backend infrastructure.</p>
                  </div>
                  
                  <Link href="/services" className="relative z-10 self-start">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">The <span className="text-primary text-glow">COdex</span> Advantage</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We don't just write code; we build digital empires. Our holistic approach ensures that your technological infrastructure aligns perfectly with your business goals.
              </p>
              
              <ul className="space-y-4">
                {[
                  "100-Day Acceleration Protocol",
                  "Elite Full-Stack Developers",
                  "Post-Development Maintenance",
                  "Scalable Microservices Architecture"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
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
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass border border-white/10 p-2"
            >
              <div className="w-full h-full rounded-2xl bg-card/80 overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />
                <div className="w-48 h-48 bg-accent/20 rounded-full blur-[80px] -ml-24" />
                
                {/* Decorative Tech UI Element */}
                <div className="absolute inset-8 border border-white/5 rounded-xl flex flex-col p-6 backdrop-blur-md bg-white/5 shadow-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">system_status: online</div>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse" />
                    <div className="h-4 w-1/2 bg-white/10 rounded animate-pulse" style={{ animationDelay: '150ms' }}/>
                    <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse" style={{ animationDelay: '300ms' }}/>
                  </div>
                  <div className="mt-auto h-32 w-full border border-primary/20 rounded-lg relative overflow-hidden bg-primary/5">
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

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">Ready to scale?</h2>
          <p className="text-xl text-muted-foreground mb-10">Stop waiting. Start building. Let TheCOdex architect your digital future today.</p>
          <Link href="/buy">
            <NeonButton size="lg" className="px-12 py-5 text-lg">
              Initialize Your Project
            </NeonButton>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
