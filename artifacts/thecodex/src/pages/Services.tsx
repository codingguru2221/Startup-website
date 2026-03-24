import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Code, Smartphone, Wrench, RefreshCw, Brain, Server, 
  Network, HardDrive, Wifi, BarChart, Share2, Lightbulb, TrendingUp, ShieldCheck
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";

const SERVICES = [
  { icon: Code, title: "Web Development", desc: "Full-stack web applications built with modern frameworks for extreme performance." },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile experiences that engage and retain users." },
  { icon: Wrench, title: "Web App Maintenance", desc: "Continuous optimization, bug fixes, and scaling for existing infrastructure." },
  { icon: RefreshCw, title: "Website & App Redesign", desc: "Modernize legacy systems with cutting-edge UI/UX and architectural upgrades." },
  { icon: Brain, title: "AI Business Models", desc: "Integrate LLMs and predictive models to automate and scale your business logic." },
  { icon: Server, title: "Server Control Systems", desc: "Custom server management panels and automated deployment pipelines." },
  { icon: Network, title: "Network Development", desc: "Secure, scalable network architectures designed for high-throughput environments." },
  { icon: HardDrive, title: "NAS Setup", desc: "Network Attached Storage solutions for secure, local enterprise data management." },
  { icon: Wifi, title: "LAN/WAN/MAN with AI", desc: "AI-optimized routing and network creation for local and wide area environments." },
  { icon: BarChart, title: "Ad Management", desc: "Data-driven advertising strategies maximizing ROAS across platforms." },
  { icon: Share2, title: "Social Media Mgmt", desc: "Algorithmic content distribution and community building." },
  { icon: Lightbulb, title: "Marketing Advice", desc: "Strategic consulting for market penetration and growth hacking." },
  { icon: TrendingUp, title: "Investment Management", desc: "Technological vetting and system audits for tech investments." },
];

export default function Services() {
  return (
    <Layout>
      {/* HEADER */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-primary/20 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black mb-6"
          >
            Our <span className="gradient-text">Arsenal</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            From low-level network infrastructure to high-level AI integrations, we provide the tools required to dominate the digital landscape.
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <GlassCard key={i} delay={i * 0.05} className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow leading-relaxed">{service.desc}</p>
                <div className="mt-8 pt-4 border-t border-white/5">
                  <Link href="/buy">
                    <span className="text-primary text-sm font-semibold hover:text-white transition-colors cursor-pointer inline-flex items-center">
                      Request Service <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* POST-DEVELOPMENT SUPPORT */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard hoverEffect={false} className="border-primary/30 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 box-glow">
              <ShieldCheck className="w-16 h-16 text-accent" />
            </div>
            <div className="flex-grow">
              <h2 className="text-3xl font-display font-bold mb-4">Post-Development Support</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Deployment is just the beginning. Our maintenance packages ensure your systems remain secure, performant, and scale seamlessly as your user base grows.
              </p>
              <Link href="/contact">
                <NeonButton variant="secondary">Discuss Maintenance</NeonButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
}
