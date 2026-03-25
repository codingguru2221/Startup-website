import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NeonButton } from "@/components/ui/NeonButton";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden border border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 bg-black/20">
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = location === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative text-sm font-medium transition-colors hover:text-primary py-2 cursor-pointer",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="w-px h-6 bg-white/10" />
            <Link href="/buy">
              <NeonButton size="sm">Buy a Service</NeonButton>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer",
                    location === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link href="/buy" onClick={() => setIsMobileMenuOpen(false)}>
                  <NeonButton fullWidth size="md">Buy a Service</NeonButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
