import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background relative selection:bg-primary/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/8 rounded-full blur-[120px] opacity-70 animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/8 rounded-full blur-[120px] opacity-60 animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-[0.03]" />

      <Navbar />
      
      <main className="flex-grow relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      <a
        href="https://wa.me/918305223353"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] hover:scale-105 hover:shadow-[0_22px_46px_rgba(37,211,102,0.45)] transition-all duration-300"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
      
      <Footer />
    </div>
  );
}
