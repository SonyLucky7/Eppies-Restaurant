"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "dark" | "light" | "outline-light";
  size?: "sm" | "md" | "lg";
  href?: string;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  arrow = false,
  children,
  className = "",
  onClick,
  target,
  rel,
}: ButtonProps) {
  // Agency-grade, crisp, modern button styling (no bloated pills, no awkward wrapping)
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2.5 rounded-xl font-body font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2";

  const sizeStyles = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-sm sm:text-base",
  };

  const variants = {
    primary:
      "bg-[#B8532B] text-white hover:bg-[#9E421E] border border-[#9A3C17] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_4px_rgba(184,83,43,0.18)] hover:shadow-[0_4px_12px_rgba(184,83,43,0.28)]",
    secondary:
      "bg-white text-[#2C211B] border border-[#D5C7BD] hover:border-[#B8532B] hover:text-[#B8532B] hover:bg-[#FAF8F5] shadow-sm hover:shadow",
    outline:
      "bg-transparent text-[#2C211B] border border-[#D5C7BD] hover:border-[#B8532B] hover:text-[#B8532B] hover:bg-[#B8532B]/5",
    dark:
      "bg-[#1C1410] text-white hover:bg-[#2C211B] border border-[#2C211B] shadow-sm hover:shadow",
    light:
      "bg-white text-[#1C1410] border border-white hover:bg-[#FAF8F5] shadow-md hover:shadow-lg",
    "outline-light":
      "bg-white/10 text-white border border-white/50 hover:bg-white hover:text-[#1C1410] hover:border-white shadow-sm backdrop-blur-sm",
  };

  const arrowIcon = arrow && (
    <ArrowRight
      size={size === "sm" ? 13 : size === "lg" ? 17 : 15}
      strokeWidth={2.2}
      className="shrink-0 group-hover:translate-x-1 transition-transform duration-200"
    />
  );

  const cls = `group ${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={cls}
        whileHover={{ y: -1 }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <span className="inline-flex items-center gap-2 justify-center leading-none">
          {children}
        </span>
        {arrowIcon}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={cls}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      <span className="inline-flex items-center gap-2 justify-center leading-none">
        {children}
      </span>
      {arrowIcon}
    </motion.button>
  );
}
