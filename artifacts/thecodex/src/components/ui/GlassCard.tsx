import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  delay?: number;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hoverEffect = true, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
        whileHover={hoverEffect ? { y: -5, scale: 1.01 } : undefined}
        className={cn(
          "glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group",
          className
        )}
        {...props}
      >
        {hoverEffect && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-accent/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}
        
        {hoverEffect && (
          <div className="absolute inset-0 border border-border rounded-2xl group-hover:border-primary/25 transition-colors duration-500 pointer-events-none" />
        )}
        
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
