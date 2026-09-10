"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Phone,
  Car,
  Utensils,
  Accessibility,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { restaurant } from "@/data/restaurant";

// Lossless 4K Ultra-High-Definition Culinary & Hospitality Scenes (w=3840, q=95)
const heroScenes = [
  {
    id: "breakfast-tradition",
    label: "Breakfast Tradition",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=3840&q=95",
    alt: "Eppies 40-year breakfast tradition with hotcakes, eggs, and bacon in 4K",
  },
  {
    id: "prime-rib-special",
    label: "Friday Prime Rib",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=3840&q=95",
    alt: "Slow-roasted herb-crusted prime rib dinner in 4K",
  },
  {
    id: "dining-hospitality",
    label: "Dining Room",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=3840&q=95",
    alt: "Warm restaurant dining room and hospitality in 4K",
  },
];

export function InteractiveMotionHero() {
  const [activeScene, setActiveScene] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  // 3D Parallax Tilt with Damped Spring Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 180, mass: 0.6 };

  // Background shifts gently in the opposite direction of mouse
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [24, -24]), springConfig);
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), springConfig);

  // Foreground text has subtle optical 3D tilt
  const textRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const textRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  // Interactive subtle lighting glow following cursor
  const cursorGlowX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["25%", "75%"]), springConfig);
  const cursorGlowY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["25%", "75%"]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const currentScene = heroScenes[activeScene];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-brown-900 pt-32 pb-20 px-6 sm:px-12 lg:px-20 select-none"
    >
      {/* ─── Full-Covered 4K Background Image with 3D Parallax ─── */}
      <motion.div
        style={{
          x: bgX,
          y: bgY,
          scale: 1.08,
        }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={currentScene.id}
            src={currentScene.image}
            alt={currentScene.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full object-cover object-center"
            style={{
              imageRendering: "-webkit-optimize-contrast",
            }}
            loading="eager"
            fetchPriority="high"
          />
        </AnimatePresence>

        {/* Cinematic Multi-Layer Dark Gradients for 100% Typographic Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />

        {/* Subtle Interactive Ambient Lighting Highlight */}
        <motion.div
          style={{
            left: cursorGlowX,
            top: cursorGlowY,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"
        />
      </motion.div>

      {/* ─── Foreground: Only Main Text & Essential CTAs ─── */}
      <motion.div
        style={{
          rotateX: textRotateX,
          rotateY: textRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 max-w-4xl space-y-7"
      >
        {/* Authentic Top Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-amber-300 shadow-xl"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span>Family-Owned Since 1980s · 4025 Lake Road</span>
          <span className="text-white/40 hidden sm:inline">|</span>
          <span className="text-white/90 hidden sm:inline">Open Daily 7:00 AM – 8:30 PM</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-bold tracking-tight text-white leading-[0.98] text-balance drop-shadow-md"
          style={{ fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif" }}
        >
          Good Food.
          <br />
          Good People.
          <br />
          <span className="italic font-normal text-amber-300">Over 40 Years.</span>
        </motion.h1>

        {/* Main Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl md:text-2xl text-cream/90 max-w-2xl leading-relaxed font-body font-normal drop-shadow-sm"
        >
          A true West Sacramento landmark. From sunrise buttermilk hotcakes and fresh country scrambles to our award-winning hand-carved Friday Night Prime Rib.
        </motion.p>

        {/* Main Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 items-center pt-2"
        >
          <Button href="/menu" size="lg" variant="primary" arrow={true}>
            Explore Full Menu
          </Button>
          <Button
            href={`tel:${restaurant.phone.replace(/-/g, "")}`}
            size="lg"
            variant="light"
            className="shadow-2xl font-bold"
          >
            <Phone size={16} className="text-terracotta shrink-0" />
            <span className="text-brown-900 font-bold">Call (916) 371-7767</span>
          </Button>
        </motion.div>

        {/* Clean Authentic Amenities Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm text-white/85 font-medium"
        >
          <div className="flex items-center gap-2">
            <Utensils size={15} className="text-amber-400 shrink-0" />
            <span>Breakfast, Lunch & Dinner Daily</span>
          </div>
          <div className="flex items-center gap-2">
            <Car size={15} className="text-amber-400 shrink-0" />
            <span>Large Free Parking Lot</span>
          </div>
          <div className="flex items-center gap-2">
            <Accessibility size={15} className="text-amber-400 shrink-0" />
            <span>ADA Accessible</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ─── Discreet 4K Scene Switcher (Bottom-Right) ─── */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2 bg-black/45 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-xl">
        <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 pl-3 pr-1 font-bold">
          4K View:
        </span>
        {heroScenes.map((scene, idx) => (
          <button
            key={scene.id}
            onClick={() => setActiveScene(idx)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
              activeScene === idx
                ? "bg-white text-brown-900 font-bold shadow-md"
                : "text-white/70 hover:text-white"
            }`}
          >
            {scene.label}
          </button>
        ))}
      </div>
    </section>
  );
}
