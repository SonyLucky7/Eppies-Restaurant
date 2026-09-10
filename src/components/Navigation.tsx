"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Utensils } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu & Specials" },
  { href: "/about", label: "Our Story" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto max-w-5xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-5 sm:px-7 py-3 ${
            isScrolled
              ? "bg-warm-white/90 backdrop-blur-xl border border-brown-200/70 shadow-xl"
              : "bg-warm-white/80 backdrop-blur-md border border-brown-200/40 shadow-md"
          }`}
        >
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Utensils size={15} />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-wider text-brown-900 leading-none group-hover:text-terracotta transition-colors">
                EPPIES
              </span>
              <span className="text-[9px] font-mono tracking-widest text-brown-400 uppercase -mt-0.5">
                EST. 1980s
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-mono uppercase tracking-wider transition-all duration-300 py-1 ${
                  pathname === link.href
                    ? "text-terracotta font-semibold"
                    : "text-brown-700 hover:text-terracotta"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-terracotta rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${restaurant.phone.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 h-9 px-4 bg-terracotta text-white text-xs font-semibold tracking-wider rounded-xl hover:bg-terracotta-dark transition-all shadow-sm active:scale-[0.98]"
            >
              <Phone size={13} className="shrink-0" />
              <span>Call Order</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-brown-900 cursor-pointer rounded-full hover:bg-cream transition-colors"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.nav>
      </header>

      {/* Fullscreen Mobile Drawer with Blur */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`font-display text-4xl font-semibold tracking-tight transition-colors ${
                      pathname === link.href
                        ? "text-terracotta"
                        : "text-brown-900 hover:text-terracotta"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="space-y-4 pt-8 border-t border-brown-200/60"
            >
              <a
                href={`tel:${restaurant.phone.replace(/-/g, "")}`}
                className="w-full flex items-center justify-center gap-2 h-12 bg-terracotta text-white rounded-xl font-semibold text-base shadow-lg active:scale-[0.98] transition-transform"
              >
                <Phone size={18} className="shrink-0" />
                <span>Call Eppies ({restaurant.phoneFormatted})</span>
              </a>
              <p className="text-center text-xs text-brown-400 font-mono">
                {restaurant.address.street} · {restaurant.hours.display}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
