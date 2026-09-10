"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Phone,
  Flame,
  Clock,
  Sparkles,
  Utensils,
  LayoutGrid,
  List,
  ChevronRight,
  Info
} from "lucide-react";
import { menuCategories, type MenuItem } from "@/data/menu";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { restaurant } from "@/data/restaurant";
import { Button } from "@/components/ui/Button";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeModalItem, setActiveModalItem] = useState<MenuItem | null>(null);

  // All items flattened
  const allItems = useMemo(() => {
    return menuCategories.flatMap((c) => c.items);
  }, []);

  // Filtered items
  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Tag filter
      if (selectedFilter === "popular" && !item.popular) {
        return false;
      }
      if (selectedFilter === "vegetarian" && !item.dietary?.some((d) => d.toLowerCase().includes("vegetarian"))) {
        return false;
      }
      if (selectedFilter === "hearty" && !item.dietary?.some((d) => d.toLowerCase().includes("hearty") || d.toLowerCase().includes("steak") || d.toLowerCase().includes("portion"))) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchIng = item.ingredients?.some((ing) => ing.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchIng) return false;
      }
      return true;
    });
  }, [allItems, selectedCategory, selectedFilter, searchQuery]);

  return (
    <div className="min-h-screen pt-28 pb-32 bg-ivory text-brown-900">
      {/* ─── Hero Header ─────────────────────────────────────── */}
      <section className="relative px-6 max-w-7xl mx-auto text-center pb-12">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream border border-brown-200/60 mb-6 text-xs font-mono uppercase tracking-widest text-terracotta">
            <Sparkles size={13} />
            <span>Farm-Fresh & Made to Order · Since 1980s</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-brown-900 text-balance">
            Our Kitchen Menu
          </h1>
          <p className="mt-4 text-lg md:text-xl text-brown-400 max-w-2xl mx-auto leading-relaxed">
            Prepared with care, hearty portions, and generous hospitality. Every dish is cooked fresh to order.
          </p>
        </SectionReveal>

        {/* ─── Controls & Search ────────────────────────────────── */}
        <SectionReveal delay={0.15}>
          <div className="mt-10 max-w-3xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-2/3">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-brown-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pancakes, prime rib, burgers, eggs..."
                className="w-full pl-11 pr-10 py-3.5 bg-warm-white border border-brown-200 rounded-full text-sm text-brown-900 placeholder:text-brown-400 focus:outline-none focus:border-terracotta shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-brown-400 hover:text-brown-700 p-1"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-cream p-1.5 rounded-full border border-brown-200/50 self-end md:self-auto">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  viewMode === "grid"
                    ? "bg-terracotta text-white shadow-sm"
                    : "text-brown-700 hover:text-terracotta"
                }`}
              >
                <LayoutGrid size={14} />
                <span>Gallery</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  viewMode === "list"
                    ? "bg-terracotta text-white shadow-sm"
                    : "text-brown-700 hover:text-terracotta"
                }`}
              >
                <List size={14} />
                <span>Details</span>
              </button>
            </div>
          </div>
        </SectionReveal>

        {/* ─── Category Tabs ──────────────────────────────────── */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 justify-start md:justify-center scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === "all"
                ? "bg-brown-900 text-white shadow-md scale-105"
                : "bg-cream text-brown-700 hover:bg-brown-100 border border-brown-200/40"
            }`}
          >
            All Items ({allItems.length})
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-brown-900 text-white shadow-md scale-105"
                  : "bg-cream text-brown-700 hover:bg-brown-100 border border-brown-200/40"
              }`}
            >
              {cat.name} ({cat.items.length})
            </button>
          ))}
        </div>

        {/* ─── Quick Filter Chips ─────────────────────────────── */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {[
            { id: "all", label: "Show All" },
            { id: "popular", label: "⭐ Most Popular / House Legends" },
            { id: "vegetarian", label: "🌿 Vegetarian" },
            { id: "hearty", label: "🥩 Hearty Platters" },
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => setSelectedFilter(chip.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedFilter === chip.id
                  ? "bg-terracotta/15 text-terracotta border border-terracotta/40 font-semibold"
                  : "bg-warm-white text-brown-400 hover:text-brown-700 border border-brown-100"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Main Menu Items Display ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-cream rounded-3xl border border-brown-100 p-8">
            <Utensils size={40} className="mx-auto text-terracotta mb-4 opacity-70" />
            <h3 className="font-display text-2xl font-semibold text-brown-900">
              No dishes found matching your selection
            </h3>
            <p className="mt-2 text-sm text-brown-400">
              Try searching for something else or clearing your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedFilter("all");
              }}
              className="mt-6 px-6 py-2.5 bg-terracotta text-white rounded-full text-xs font-medium cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          /* ─── Modern Visual Gallery Grid ───────────────────── */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setActiveModalItem(item)}
                className="group relative bg-warm-white rounded-[1.75rem] border border-brown-200/60 p-2 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Image Container with Zoom & Badge */}
                <div className="relative aspect-[4/3] w-full rounded-[1.25rem] overflow-hidden bg-cream">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {item.badge && (
                      <span className="px-3 py-1 bg-terracotta text-white rounded-full text-[11px] font-medium tracking-wide shadow-md">
                        {item.badge}
                      </span>
                    )}
                    {item.popular && (
                      <span className="px-3 py-1 bg-brown-900/80 backdrop-blur-md text-amber-300 rounded-full text-[11px] font-medium shadow-md flex items-center gap-1">
                        <Flame size={12} className="text-amber-400" />
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Price Tag Bottom Right */}
                  <div className="absolute bottom-3 right-3 bg-warm-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brown-200/40 shadow-md">
                    <span className="font-mono text-base font-semibold text-terracotta">
                      {item.price}
                    </span>
                  </div>

                  {/* Calories Tag Bottom Left */}
                  {item.calories && (
                    <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-white/90">
                      {item.calories}
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-brown-900 group-hover:text-terracotta transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-brown-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-brown-100 flex items-center justify-between text-xs text-brown-700">
                    <span className="text-terracotta font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Dish Details <ChevronRight size={14} />
                    </span>
                    {item.portion && (
                      <span className="text-brown-400 font-mono text-[11px]">
                        {item.portion}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* ─── Detailed List View ────────────────────────────── */
          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group bg-warm-white rounded-2xl border border-brown-200/60 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center gap-5 cursor-pointer"
              >
                <div className="relative w-full sm:w-36 h-28 shrink-0 rounded-xl overflow-hidden bg-cream">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-terracotta text-white rounded text-[10px] font-semibold">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex-1 text-left w-full">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-brown-900 group-hover:text-terracotta transition-colors">
                        {item.name}
                      </h3>
                      {item.calories && (
                        <span className="text-xs font-mono text-brown-400">
                          {item.calories}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-lg font-bold text-terracotta">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm text-brown-400 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    {item.dietary?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-cream text-[10px] text-brown-700 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-xs text-terracotta font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Details <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* ─── Interactive Dish Modal ──────────────────────────── */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalItem(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="relative w-full max-w-2xl bg-warm-white rounded-[2rem] border border-brown-200 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/70 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0 bg-cream">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    {activeModalItem.badge && (
                      <span className="px-3 py-1 bg-terracotta text-white rounded-full text-xs font-medium tracking-wide">
                        {activeModalItem.badge}
                      </span>
                    )}
                    <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mt-2">
                      {activeModalItem.name}
                    </h2>
                  </div>
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-amber-300">
                    {activeModalItem.price}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-brown-400 mb-2">
                    Dish Description
                  </h4>
                  <p className="text-base text-brown-700 leading-relaxed">
                    {activeModalItem.description}
                  </p>
                </div>

                {activeModalItem.preparation && (
                  <div className="p-4 bg-cream/70 rounded-xl border border-brown-100 flex items-start gap-3">
                    <Info size={18} className="text-terracotta shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-brown-900 font-semibold block">
                        Preparation Method
                      </span>
                      <p className="text-xs text-brown-400 mt-0.5">
                        {activeModalItem.preparation}
                      </p>
                    </div>
                  </div>
                )}

                {activeModalItem.ingredients && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-brown-400 mb-2">
                      Key Fresh Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalItem.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="px-3 py-1 bg-cream rounded-full text-xs text-brown-700 border border-brown-200/50"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-brown-100 text-xs text-brown-400">
                  {activeModalItem.calories && (
                    <span className="font-mono">Calories: {activeModalItem.calories}</span>
                  )}
                  {activeModalItem.portion && (
                    <span className="font-mono">Portion: {activeModalItem.portion}</span>
                  )}
                </div>

                {/* Call to Order Button */}
                <div className="pt-2">
                  <Button
                    href={`tel:${restaurant.phone.replace(/-/g, "")}`}
                    size="lg"
                    variant="primary"
                    className="w-full"
                  >
                    <Phone size={16} className="shrink-0" />
                    <span>Call Eppies to Order for Takeout ({restaurant.phoneFormatted})</span>
                  </Button>
                  <p className="text-center text-xs text-brown-400 mt-2.5">
                    Open Daily 7:00 AM – 8:30 PM · Large Free Parking Lot Available
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
