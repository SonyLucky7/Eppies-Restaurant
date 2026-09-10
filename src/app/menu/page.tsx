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

  // Helper classification functions
  const isVegetarianItem = (item: MenuItem) => {
    return (
      item.dietary?.some((d) => /vegetarian/i.test(d)) ||
      item.category === "desserts-beverages" ||
      /pancake|french toast|veggie|zucchini|pie|cheesecake|coffee/i.test(item.name)
    );
  };

  const isHeartyItem = (item: MenuItem) => {
    return (
      item.dietary?.some((d) => /hearty|beef|steak|rib|meat|pork/i.test(d)) ||
      item.category === "weekly-specials" ||
      item.category === "steaks-seafood" ||
      /platter|steak|burger|ribs|meatloaf|roast beef|country fried|benedict|club/i.test(item.name)
    );
  };

  const isPopularItem = (item: MenuItem) => {
    return (
      item.popular === true ||
      /legend|favorite|best seller|choice|king|top rated|crowd favorite/i.test(item.badge || "")
    );
  };

  // Filtered items
  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Tag filter
      if (selectedFilter === "popular" && !isPopularItem(item)) {
        return false;
      }
      if (selectedFilter === "vegetarian" && !isVegetarianItem(item)) {
        return false;
      }
      if (selectedFilter === "hearty" && !isHeartyItem(item)) {
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

  // Live matching item counts for filter chips
  const filterCounts = useMemo(() => {
    const scopeItems = selectedCategory === "all"
      ? allItems
      : allItems.filter((i) => i.category === selectedCategory);

    return {
      all: scopeItems.length,
      popular: scopeItems.filter(isPopularItem).length,
      vegetarian: (selectedCategory === "all" ? allItems : scopeItems).filter(isVegetarianItem).length,
      hearty: (selectedCategory === "all" ? allItems : scopeItems).filter(isHeartyItem).length,
    };
  }, [allItems, selectedCategory]);

  // Intelligent Category Switcher: resets filter if no matches exist in target category
  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    if (selectedFilter !== "all") {
      const itemsInCat = catId === "all" ? allItems : allItems.filter((i) => i.category === catId);
      const hasMatches = itemsInCat.some((item) => {
        if (selectedFilter === "popular") return isPopularItem(item);
        if (selectedFilter === "vegetarian") return isVegetarianItem(item);
        if (selectedFilter === "hearty") return isHeartyItem(item);
        return true;
      });
      if (!hasMatches) {
        setSelectedFilter("all");
      }
    }
  };

  // Intelligent Filter Switcher: auto-switches to "all" categories if current category has 0 matches
  const handleFilterSelect = (filterId: string) => {
    if (filterId === "all") {
      setSelectedFilter("all");
      return;
    }
    const itemsInCat = selectedCategory === "all" ? allItems : allItems.filter((i) => i.category === selectedCategory);
    const countInCat = itemsInCat.filter((item) => {
      if (filterId === "popular") return isPopularItem(item);
      if (filterId === "vegetarian") return isVegetarianItem(item);
      if (filterId === "hearty") return isHeartyItem(item);
      return true;
    }).length;

    if (countInCat === 0) {
      setSelectedCategory("all");
    }
    setSelectedFilter(filterId);
  };

  const currentCategoryInfo = menuCategories.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen pt-28 pb-32 bg-ivory text-brown-900">
      {/* ─── Hero Header ─────────────────────────────────────── */}
      <section className="relative px-6 max-w-7xl mx-auto text-center pb-8">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream border border-brown-200/70 mb-6 text-xs font-semibold tracking-wider text-terracotta shadow-sm">
            <Sparkles size={14} />
            <span>Farm-Fresh & Made to Order · Since 1980s</span>
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brown-900 text-balance"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif" }}
          >
            Our Kitchen Menu
          </h1>
          <p className="mt-4 text-lg md:text-xl text-brown-700 max-w-2xl mx-auto leading-relaxed font-body">
            Prepared with care, hearty portions, and generous hospitality. Every single dish is cooked fresh to order from 7:00 AM.
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
                className="w-full pl-11 pr-10 py-3.5 bg-warm-white border border-brown-200 rounded-xl text-sm text-brown-900 placeholder:text-brown-400 focus:outline-none focus:border-terracotta shadow-sm transition-all font-body"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-brown-400 hover:text-brown-700 p-1 cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-cream p-1.5 rounded-xl border border-brown-200/70 self-end md:self-auto shadow-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
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
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
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

        {/* ─── Category Tabs (Clean Wrap, No Clipping) ────────── */}
        <div className="mt-8 flex flex-wrap gap-2.5 items-center justify-center max-w-5xl mx-auto px-2">
          <button
            onClick={() => handleCategorySelect("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === "all"
                ? "bg-brown-900 text-white shadow-md font-bold ring-2 ring-brown-900 ring-offset-2 scale-105"
                : "bg-warm-white text-brown-700 hover:bg-cream border border-brown-200/80 shadow-sm"
            }`}
          >
            All Items ({allItems.length})
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-brown-900 text-white shadow-md font-bold ring-2 ring-brown-900 ring-offset-2 scale-105"
                  : "bg-warm-white text-brown-700 hover:bg-cream border border-brown-200/80 shadow-sm"
              }`}
            >
              {cat.name} ({cat.items.length})
            </button>
          ))}
        </div>

        {/* ─── Quick Filter Chips with Real Counts ────────────── */}
        <div className="mt-4 flex flex-wrap gap-2.5 justify-center items-center">
          {[
            { id: "all", label: "Show All", count: filterCounts.all },
            { id: "popular", label: "⭐ Most Popular / House Legends", count: filterCounts.popular },
            { id: "vegetarian", label: "🌿 Vegetarian", count: filterCounts.vegetarian },
            { id: "hearty", label: "🥩 Hearty Platters", count: filterCounts.hearty },
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => handleFilterSelect(chip.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
                selectedFilter === chip.id
                  ? "bg-terracotta text-white shadow-md font-semibold scale-105"
                  : "bg-warm-white text-brown-700 hover:bg-cream border border-brown-200/70 shadow-sm"
              }`}
            >
              <span>{chip.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  selectedFilter === chip.id
                    ? "bg-white/25 text-white"
                    : "bg-brown-100 text-brown-700"
                }`}
              >
                {chip.count}
              </span>
            </button>
          ))}
        </div>

        {/* ─── Active Filter Status & Reset Banner ────────────── */}
        {(selectedCategory !== "all" || selectedFilter !== "all" || searchQuery.trim()) && (
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-cream border border-brown-200/80 text-xs text-brown-700 shadow-sm">
            <span>
              Showing <strong className="text-brown-900 font-bold">{filteredItems.length}</strong> {filteredItems.length === 1 ? "dish" : "dishes"}
              {selectedCategory !== "all" && (
                <> in <strong className="text-brown-900">{currentCategoryInfo?.name}</strong></>
              )}
              {selectedFilter !== "all" && (
                <> with filter <strong className="text-terracotta font-semibold">
                  {selectedFilter === "popular" ? "Most Popular" : selectedFilter === "vegetarian" ? "Vegetarian" : "Hearty Platters"}
                </strong></>
              )}
            </span>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedFilter("all");
                setSearchQuery("");
              }}
              className="ml-2 text-terracotta font-bold underline hover:text-terracotta-dark cursor-pointer text-xs"
            >
              Reset all filters
            </button>
          </div>
        )}
      </section>

      {/* ─── Main Menu Items Display ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mt-4">
        {/* Category Header Banner (when specific category active) */}
        {currentCategoryInfo && selectedCategory !== "all" && (
          <div className="mb-8 p-6 sm:p-8 bg-cream/80 rounded-[2rem] border border-brown-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold block mb-1">
                {currentCategoryInfo.tagline}
              </span>
              <h2
                className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brown-900"
                style={{ fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif" }}
              >
                {currentCategoryInfo.name}
              </h2>
              <p className="text-sm sm:text-base text-brown-700 mt-2 max-w-2xl font-body leading-relaxed">
                {currentCategoryInfo.description}
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="px-3.5 py-1.5 rounded-full bg-warm-white border border-brown-200 text-xs font-mono text-brown-700 font-semibold inline-block shadow-sm">
                {filteredItems.length} Available
              </span>
            </div>
          </div>
        )}

        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-cream rounded-3xl border border-brown-100 p-8">
            <Utensils size={40} className="mx-auto text-terracotta mb-4 opacity-70" />
            <h3 className="font-display text-2xl font-semibold text-brown-900">
              No dishes found matching your selection
            </h3>
            <p className="mt-2 text-sm text-brown-700 font-body">
              Try searching for something else or clearing your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedFilter("all");
              }}
              className="mt-6 px-6 py-2.5 bg-terracotta text-white rounded-xl text-xs font-semibold cursor-pointer shadow-sm"
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
