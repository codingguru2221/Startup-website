import { Link } from "wouter";
import { Twitter, Github, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { NeonButton } from "@/components/ui/NeonButton";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/TheCodexOnBOrd", label: "X" },
  { icon: Github, href: "https://github.com/The-Codex-Official", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/veerendra-vishwakarma-041584393/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/the_codex_official_?igsh=MXR6Ymxwc3J3NG43ZA==", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative bg-background/70 pt-24 pb-12 border-t border-border overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer inline-flex">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden border border-primary/20 bg-card shadow-[0_10px_22px_rgba(15,23,42,0.08)]">
                <img
                  src={`${import.meta.env.BASE_URL}codex.jpg`}
                  alt="TheCOdex logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-foreground">
                The<span className="text-primary">COdex</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Building the future, one solution at a time. We are a premium tech startup dedicated to engineering high-value software ecosystems, AI implementations, and robust infrastructure.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-display font-semibold text-foreground mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-foreground mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              {['Web Development', 'AI Business Models', 'App Development', 'Network Setup'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="font-display font-semibold text-foreground">Ready to start?</h4>
            <p className="text-sm text-muted-foreground">
              Take the leap and transform your business infrastructure with our enterprise-grade solutions.
            </p>
            <Link href="/custom-request">
              <NeonButton variant="outline" className="w-max group">
                Ask Us What You Want <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </NeonButton>
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Copyright {new Date().getFullYear()} TheCOdex Software Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
