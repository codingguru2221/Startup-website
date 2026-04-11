import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", size = "md", children, icon, fullWidth, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/95 shadow-[0_16px_36px_rgba(14,116,204,0.22)] hover:shadow-[0_20px_42px_rgba(14,116,204,0.28)]",
      secondary: "bg-accent text-accent-foreground hover:bg-accent/95 shadow-[0_16px_36px_rgba(14,116,144,0.18)] hover:shadow-[0_20px_42px_rgba(14,116,144,0.22)]",
      outline: "bg-card border border-border text-foreground hover:border-primary/40 hover:bg-primary/8 hover:text-primary shadow-[0_10px_24px_rgba(15,23,42,0.05)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {icon && <span className="ml-1 group-hover:translate-x-1 transition-transform">{icon}</span>}
        </span>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      </motion.button>
    );
  }
);

NeonButton.displayName = "NeonButton";
