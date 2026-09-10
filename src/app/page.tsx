"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Clock,
  Sparkles,
  Utensils,
  Car,
  Accessibility,
  Phone,
  ChevronRight,
  Award,
  Heart,
  CalendarDays,
  Flame,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/SectionReveal";
import { restaurant } from "@/data/restaurant";
import { InteractiveMotionHero } from "@/components/InteractiveMotionHero";

export default function HomePage() {
  const [activeSpecial, setActiveSpecial] = useState<number>(2); // Default to Friday Prime Rib

  const specialsData = [
    {
      day: "Wednesday",
      name: "Homestyle Glazed Meatloaf",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=1200&q=90",
      description: "Our 40-year secret family recipe: tender seasoned beef & pork slow-baked under a sweet brown sugar tomato glaze. Served with buttery Idaho mashed potatoes, sweet pan gravy, and crisp sweet corn.",
      badge: "Wednesday Heritage Special",
      note: "Served fresh from 11:00 AM until sold out",
      highlight: "Idaho Mashed Potatoes & Scratch Pan Gravy"
    },
    {
      day: "Thursday",
      name: "Slow-Smoked Fall-Off-The-Bone BBQ Ribs",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1200&q=90",
      description: "St. Louis cut ribs slow-smoked for 6 hours until tender, caramelized with our signature tangy hickory BBQ glaze. Served with golden crinkle fries, crisp creamy coleslaw, and grilled garlic toast.",
      badge: "Thursday Smoked Tradition",
      note: "Full Rack & Half Rack Options Available",
      highlight: "Hickory Smoke & House Dry Rub"
    },
    {
      day: "Friday",
      name: "Slow-Roasted Herb-Crusted Prime Rib",
      price: "$23.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=90",
      description: "Our crown jewel since the 1980s: USDA Choice ribeye roast coated in fresh rosemary, cracked pepper, and sea salt, slow roasted all day. Hand-carved thick with savory rosemary au jus and horseradish cream.",
      badge: "Friday Night Sacramento King",
      note: "Starts at 4:00 PM Every Friday Night",
      highlight: "Hand-Carved 12oz Center Cut"
    },
  ];

  const signatureDishes = [
    {
      title: "The 40-Year Eppies Breakfast Platter",
      category: "Morning Classic",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=85",
      description: "Two farm-fresh eggs any style, thick applewood smoked bacon, country sausage, crispy hash browns, and warm buttermilk pancakes.",
      badge: "House Legend",
    },
    {
      title: "The Eppies Deluxe Bacon Burger",
      category: "Hearty Lunch",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85",
      description: "Half-pound fresh Angus beef, melted aged cheddar, smoked bacon, and our secret recipe burger sauce on toasted brioche.",
      badge: "#1 Best Seller",
    },
    {
      title: "Pacific Herb-Butter Grilled Salmon",
      category: "Dinner Specialty",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=85",
      description: "Wild-caught salmon fillet grilled over open flame with lemon herb garlic butter, wild rice pilaf, and steamed garden vegetables.",
      badge: "Dinner Favorite",
    },
    {
      title: "Warm Dutch Apple Pie A La Mode",
      category: "Fresh Bakery",
      price: "$6.49",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=85",
      description: "Flaky buttery crust filled with spiced Granny Smith apples and brown sugar crumble, served warm with vanilla bean ice cream.",
      badge: "Baked Fresh Daily",
    },
  ];

  return (
    <div className="bg-ivory text-brown-900 overflow-hidden font-body">
      {/* ─── 1. INTERACTIVE 3D MOTION HERO (4K PHOTOGRAPHY) ──── */}
      <InteractiveMotionHero />

      {/* ─── 2. THE STATS & HERITAGE ACCREDITATION BAR ───────── */}
      <section className="py-16 bg-cream border-y border-brown-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <StaggerItem>
              <span className="font-display text-5xl md:text-6xl font-bold text-terracotta block">
                40+
              </span>
              <span className="mt-2 block text-xs font-mono uppercase tracking-widest text-brown-700 font-semibold">
                Years in West Sac
              </span>
            </StaggerItem>
            <StaggerItem>
              <span className="font-display text-5xl md:text-6xl font-bold text-terracotta block">
                100%
              </span>
              <span className="mt-2 block text-xs font-mono uppercase tracking-widest text-brown-700 font-semibold">
                Family Owned & Operated
              </span>
            </StaggerItem>
            <StaggerItem>
              <span className="font-display text-5xl md:text-6xl font-bold text-terracotta block">
                7 Days
              </span>
              <span className="mt-2 block text-xs font-mono uppercase tracking-widest text-brown-700 font-semibold">
                7:00 AM – 8:30 PM Daily
              </span>
            </StaggerItem>
            <StaggerItem>
              <span className="font-display text-5xl md:text-6xl font-bold text-terracotta block">
                21
              </span>
              <span className="mt-2 block text-xs font-mono uppercase tracking-widest text-brown-700 font-semibold">
                Scratch Menu Categories
              </span>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ─── 3. SIGNATURE DISHES SHOWCASE (4K PHOTO CARDS) ───── */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionReveal>
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold block mb-2">
              Made From Scratch Daily
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brown-900 tracking-tight">
              Crafted with generous care.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <Button href="/menu" variant="secondary" size="lg" arrow={true}>
              View All Menu Categories
            </Button>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureDishes.map((dish, i) => (
            <SectionReveal key={dish.title} delay={i * 0.1}>
              <div className="group bg-warm-white rounded-[2rem] border border-brown-200/80 p-2.5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full">
                <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-cream">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-terracotta text-white rounded-full text-[10px] font-mono font-bold tracking-wider uppercase shadow-md">
                    {dish.badge}
                  </span>
                  <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-warm-white/95 backdrop-blur-md font-mono text-sm font-bold text-terracotta shadow-md">
                    {dish.price}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-brown-400 font-medium">
                      {dish.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-brown-900 group-hover:text-terracotta transition-colors mt-1 leading-snug">
                      {dish.title}
                    </h3>
                    <p className="mt-2 text-xs text-brown-700 leading-relaxed line-clamp-2">
                      {dish.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-brown-100 flex items-center justify-between text-xs text-terracotta font-semibold">
                    <span>Explore details</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ─── 4. WEEKLY SPECIALS: CINEMATIC SHOWCASE ─────────── */}
      <section className="py-24 md:py-32 bg-cream/70 border-y border-brown-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-white border border-brown-200 text-xs font-mono uppercase tracking-widest text-terracotta mb-4">
              <CalendarDays size={13} />
              <span>West Sacramento&apos;s Weekly Ritual</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brown-900 tracking-tight">
              Weekly Daily Specials
            </h2>
            <p className="mt-4 text-brown-700 text-lg">
              Prepared fresh in limited batches according to our 40-year family recipes. Select a day to view the cut:
            </p>
          </SectionReveal>

          {/* Interactive Day Switcher */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {specialsData.map((s, idx) => (
              <button
                key={s.day}
                onClick={() => setActiveSpecial(idx)}
                className={`px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeSpecial === idx
                    ? "bg-terracotta text-white shadow-xl scale-105 font-bold"
                    : "bg-warm-white text-brown-700 hover:bg-brown-100 border border-brown-200/70"
                }`}
              >
                {s.day} Special
              </button>
            ))}
          </div>

          {/* Active Special Hero Showcase Card */}
          <div className="max-w-5xl mx-auto bg-warm-white rounded-[2.5rem] border border-brown-200 p-4 sm:p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brown-900 shadow-md">
              <img
                src={specialsData[activeSpecial].image}
                alt={specialsData[activeSpecial].name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-terracotta text-white rounded-full text-xs font-mono font-bold tracking-wider uppercase shadow-md">
                {specialsData[activeSpecial].badge}
              </span>
              <div className="absolute bottom-4 right-4 bg-warm-white/95 backdrop-blur-md px-4 py-2 rounded-full font-mono text-2xl font-bold text-terracotta shadow-md">
                {specialsData[activeSpecial].price}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
                  Every {specialsData[activeSpecial].day}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-brown-900 mt-1 leading-snug">
                  {specialsData[activeSpecial].name}
                </h3>
              </div>

              <p className="text-base text-brown-700 leading-relaxed">
                {specialsData[activeSpecial].description}
              </p>

              <div className="p-4 bg-cream rounded-xl border border-brown-100/80 flex items-center gap-3">
                <Clock size={18} className="text-terracotta shrink-0" />
                <span className="text-xs font-medium text-brown-800">
                  {specialsData[activeSpecial].note}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  href={`tel:${restaurant.phone.replace(/-/g, "")}`}
                  variant="primary"
                  size="lg"
                >
                  <Phone size={15} className="shrink-0" />
                  <span>Call for Takeout Pickup</span>
                </Button>
                <Button
                  href="/menu"
                  variant="secondary"
                  size="lg"
                  arrow={true}
                >
                  View Full Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. HERITAGE BENTO: 40 YEARS OF COMMUNITY ───────── */}
      <section className="py-24 md:py-36 px-6 max-w-7xl mx-auto">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold block mb-2">
            The Eppies Legacy
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brown-900 tracking-tight">
            More than just breakfast.
            <br />
            <span className="text-terracotta italic font-normal">A West Sacramento landmark.</span>
          </h2>
        </SectionReveal>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Card with Photography */}
          <div className="md:col-span-8 bg-cream rounded-[2.5rem] p-8 md:p-12 border border-brown-200 relative overflow-hidden flex flex-col justify-between">
            <div className="max-w-xl relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
                Since 1980s · 4025 Lake Road
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-brown-900 mt-2 leading-tight">
                Where neighbors become family over shared meals.
              </h3>
              <p className="mt-4 text-brown-700 text-sm md:text-base leading-relaxed">
                For over four decades, Eppies has opened its doors before dawn to welcome regular locals, hard-working crews, and traveling families off I-80. We believe in honest portions, freshly brewed coffee, and smiles that make you feel right at home.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5 relative z-10">
              {restaurant.story.values.map((v) => (
                <span
                  key={v}
                  className="px-4 py-2 bg-warm-white rounded-full text-xs font-medium text-brown-800 border border-brown-200 shadow-sm"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Stacked Side Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-warm-white rounded-[2.5rem] p-8 border border-brown-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-terracotta/15 flex items-center justify-center text-terracotta mb-4">
                <Award size={22} />
              </div>
              <h4 className="font-display text-2xl font-bold text-brown-900">
                Triple Award Winner
              </h4>
              <p className="mt-2 text-xs text-brown-700 leading-relaxed">
                2022 Restaurant Guru Winner, 2023 Excellent Service Award, and 2024 Recommended Dining.
              </p>
            </div>

            <div className="bg-warm-white rounded-[2.5rem] p-8 border border-brown-200 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold mb-4">
                  <Heart size={22} />
                </div>
                <h4 className="font-display text-2xl font-bold text-brown-900">
                  Community Focused
                </h4>
                <p className="mt-2 text-xs text-brown-700 leading-relaxed">
                  Proudly serving local families, seniors, sports teams, and Sacramento travelers for generations.
                </p>
              </div>
              <Link href="/about" className="mt-6 text-xs text-terracotta font-bold flex items-center gap-1">
                Read our full history <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. LOCATION & VISIT EXPERIENCE ──────────────────── */}
      <section className="py-24 md:py-32 bg-cream/70 border-t border-brown-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-6 space-y-6">
              <SectionReveal>
                <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold block mb-2">
                  Visit Eppies
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-brown-900 tracking-tight">
                  Easy to find.
                  <br />
                  Hard to leave.
                </h2>
                <p className="mt-4 text-brown-700 text-base leading-relaxed">
                  Conveniently situated at 4025 Lake Road in West Sacramento with a massive private free parking lot and direct ground-level ADA accessibility.
                </p>
              </SectionReveal>

              <div className="bg-warm-white rounded-3xl p-7 border border-brown-200/80 space-y-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <MapPin size={22} className="text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-brown-900 text-sm">Restaurant Address</h5>
                    <p className="text-sm text-brown-700">{restaurant.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-brown-100">
                  <Clock size={22} className="text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-brown-900 text-sm">Hours of Operation</h5>
                    <p className="text-sm text-brown-700">Open 7 Days a Week: 7:00 AM – 8:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-brown-100">
                  <Phone size={22} className="text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-brown-900 text-sm">Phone Orders & Takeout</h5>
                    <a href={`tel:${restaurant.phone.replace(/-/g, "")}`} className="text-base text-terracotta hover:underline font-mono font-bold">
                      {restaurant.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  <MapPin size={16} className="shrink-0" />
                  <span>Get GPS Directions</span>
                </Button>
                <Button
                  href="/location"
                  variant="secondary"
                  size="lg"
                  arrow={true}
                >
                  View Location Details
                </Button>
              </div>
            </div>

            {/* Right Column: Google Maps Embed Card */}
            <div className="lg:col-span-6">
              <div className="w-full h-[450px] rounded-[2.5rem] overflow-hidden border border-brown-200 shadow-2xl bg-warm-white relative">
                <iframe
                  src={restaurant.mapsEmbed || `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(restaurant.address.full)}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eppies Restaurant map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. FINAL HERO CTA ───────────────────────────────── */}
      <section className="py-28 px-6 text-center bg-brown-900 text-warm-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C69234_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <SectionReveal>
            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono uppercase tracking-widest text-gold-light inline-block mb-4">
              Comfort Food Done Right
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
              Come hungry. Leave happy.
            </h2>
            <p className="text-lg text-brown-200 max-w-xl mx-auto leading-relaxed">
              Serving breakfast, lunch, and dinner daily from 7:00 AM. Dine in our welcoming dining room or call ahead for quick takeout.
            </p>
            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <Button href="/menu" size="lg" variant="primary" arrow={true}>
                Explore The Menu
              </Button>
              <Button
                href={`tel:${restaurant.phone.replace(/-/g, "")}`}
                size="lg"
                variant="light"
                className="shadow-lg font-bold"
              >
                <Phone size={16} className="shrink-0 text-terracotta" />
                <span className="text-[#1C1410] font-bold">Call (916) 371-7767</span>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
