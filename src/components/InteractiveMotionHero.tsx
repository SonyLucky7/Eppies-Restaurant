"use client";

import { useState, useRef, useEffect, MouseEvent } from "react";
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

  // Auto-scroll / transition background scenes smoothly every 5.5 seconds
  useEffect(() => {
    // Preload all high-res scenes into browser cache
    heroScenes.forEach((scene) => {
      const img = new Image();
      img.src = scene.image;
    });

    const interval = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % heroScenes.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  // 3D Parallax Tilt with Damped Spring Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 180, mass: 0.6 };

  // Background shifts gently in the opposite direction of mouse
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), springConfig);
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);

  // Foreground text has subtle optical 3D tilt
  const textRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const textRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  // Interactive subtle lighting glow following cursor
  const cursorGlowX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["30%", "70%"]), springConfig);
  const cursorGlowY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["30%", "70%"]), springConfig);

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
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-brown-900 pt-28 pb-20 px-6 sm:px-12 select-none"
    >
      {/* ─── Full-Covered 4K Background Image with Smooth Crossfade & Parallax ─── */}
      <motion.div
        style={{
          x: bgX,
          y: bgY,
          scale: 1.08,
        }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentScene.id}
            src={currentScene.image}
            alt={currentScene.alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full h-full object-cover object-center absolute inset-0"
            style={{
              imageRendering: "-webkit-optimize-contrast",
            }}
            loading="eager"
            fetchPriority="high"
          />
        </AnimatePresence>

        {/* Subtle Scrim Gradient: Keeps 4K Food Photos Bright, Crisp & Highlighted */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />

        {/* Subtle Interactive Ambient Lighting Highlight */}
        <motion.div
          style={{
            left: cursorGlowX,
            top: cursorGlowY,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"
        />
      </motion.div>

      {/* ─── Foreground: Simple, Refined 2-Line Hero Text (Image is Hero) ─── */}
      <motion.div
        style={{
          rotateX: textRotateX,
          rotateY: textRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6"
      >
        {/* Simple, Refined 1-2 Line Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-2 max-w-3xl mx-auto"
        >
          <h1
            className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif" }}
          >
            Good Food. Good People.
          </h1>
          <p
            className="font-display text-2xl sm:text-3xl md:text-4xl italic font-normal text-amber-300 leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif" }}
          >
            Over 40 Years in West Sacramento
          </p>
        </motion.div>

        {/* Main Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 items-center justify-center pt-1"
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

        {/* Clean Authentic Amenities Row (Breakfast & Free Parking Kept) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="pt-5 border-t border-white/25 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-white/95 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
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

      {/* ─── Minimal Unobtrusive Auto-Scroll Pagination Indicators (Bottom Center) ─── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {heroScenes.map((scene, idx) => (
          <button
            key={scene.id}
            onClick={() => setActiveScene(idx)}
            aria-label={`Switch to ${scene.label}`}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              activeScene === idx
                ? "w-8 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
