'use client';

import Link from 'next/link';
import { restaurant } from '@/data/restaurant';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';
import { Award, Clock, Heart, Users, Utensils, Sparkles, MapPin, ChevronRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory text-brown-900 pt-32 pb-32">
      {/* ─── Hero Section with Visual Double-Bezel Card ──────── */}
      <section className="px-6 max-w-7xl mx-auto">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream border border-brown-200/70 mb-6 text-xs font-semibold tracking-wider text-terracotta">
            <Sparkles size={14} />
            <span>Serving West Sacramento Since the 1980s</span>
          </div>

          <h1
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.0] tracking-tight font-bold text-brown-900 text-balance"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif" }}
          >
            Over 40 Years of <br />
            <span className="italic font-normal text-terracotta">Warm Family Tradition.</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-brown-700 max-w-3xl leading-relaxed font-body font-normal">
            {restaurant.story.description} A true neighborhood landmark where generations of West Sacramento families, workers, and travelers have gathered over generous, honest plates.
          </p>
        </SectionReveal>

        {/* Visual Story Image Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 rounded-[2.5rem] overflow-hidden bg-cream border border-brown-200/60 shadow-xl aspect-[16/10] relative">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Warm restaurant dining room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block mb-1">
                Atmosphere & Hospitality
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold leading-snug">
                A warm booth, hot coffee, and a welcoming smile.
              </h3>
            </div>
          </div>

          <div className="md:col-span-5 rounded-[2.5rem] overflow-hidden bg-cream border border-brown-200/60 shadow-xl aspect-[16/10] md:aspect-auto md:h-full relative">
            <img
              src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80"
              alt="Breakfast skillet"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block mb-1">
                Scratch Kitchen Since Day One
              </span>
              <h3 className="font-display text-2xl font-semibold leading-snug">
                Made to order every single morning.
              </h3>
            </div>
          </div>
        </div>

        {/* Editorial Pull Quote */}
        <div className="my-16 py-12 px-8 sm:px-14 bg-cream/70 rounded-[2.5rem] border border-brown-200/80 text-center relative max-w-4xl mx-auto shadow-sm">
          <span className="font-display text-7xl text-terracotta/30 leading-none block select-none -mb-6">
            “
          </span>
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl italic text-brown-900 leading-snug">
            We don&apos;t just serve meals — we share memories, morning coffee, and four decades of genuine West Sacramento hospitality.
          </blockquote>
          <p className="font-body text-xs sm:text-sm font-bold uppercase tracking-widest text-terracotta mt-5">
            The Eppies Family Promise · 4025 Lake Road
          </p>
        </div>
      </section>

      {/* ─── Timeline / Four Decades of Heritage ──────────────── */}
      <section className="py-24 bg-cream/60 border-y border-brown-200/70">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta block mb-2">
              Our Journey Through The Decades
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brown-900 tracking-tight">
              Rooted in West Sacramento
            </h2>
            <p className="mt-4 text-brown-700 text-lg font-body leading-relaxed">
              How a humble family dream became one of Yolo County&apos;s most cherished dining institutions.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-warm-white rounded-[2rem] p-8 sm:p-10 border border-brown-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <span className="font-display text-5xl font-bold text-terracotta italic block">
                1980s
              </span>
              <h3 className="font-display text-2xl font-bold text-brown-900">
                The First Fluffy Pancake
              </h3>
              <p className="text-sm sm:text-base text-brown-700 leading-relaxed font-body">
                Founded with a straightforward mission: serve honest, hearty portions of American family classics at fair prices with genuine neighborly kindness to every guest.
              </p>
            </div>

            <div className="bg-warm-white rounded-[2rem] p-8 sm:p-10 border border-brown-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <span className="font-display text-5xl font-bold text-terracotta italic block">
                2000s
              </span>
              <h3 className="font-display text-2xl font-bold text-brown-900">
                Weekly Specials Legend
              </h3>
              <p className="text-sm sm:text-base text-brown-700 leading-relaxed font-body">
                Word spread across Sacramento for our Wednesday Meatloaf, Thursday Slow-Cooked Ribs, and Friday Prime Rib. Local families made weekly traditions out of dining together.
              </p>
            </div>

            <div className="bg-warm-white rounded-[2rem] p-8 sm:p-10 border border-brown-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <span className="font-display text-5xl font-bold text-terracotta italic block">
                Today
              </span>
              <h3 className="font-display text-2xl font-bold text-brown-900">
                40+ Years of Excellence
              </h3>
              <p className="text-sm sm:text-base text-brown-700 leading-relaxed font-body">
                Honored with repeated culinary recognition, yet still family-owned, still cooking from scratch, and proud to serve breakfast, lunch, and dinner daily from 7:00 AM at 4025 Lake Road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Core Values ─────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta block mb-2">
            What Guides Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brown-900 tracking-tight">
            The Four Pillars of Eppies
          </h2>
          <p className="mt-4 text-brown-700 text-lg font-body">
            The foundation of our relationship with West Sacramento for more than four decades.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Heart,
              title: "Great Service",
              desc: "Warm hospitality where the staff remembers your favorite order and greets you like family.",
            },
            {
              icon: Utensils,
              title: "Broad Menu",
              desc: "From fluffy pancakes and hearty omelettes to burgers, steaks, and comforting pasta dinners.",
            },
            {
              icon: Users,
              title: "Family Owned",
              desc: "Independent, hands-on leadership with recipes passed down and perfected over generations.",
            },
            {
              icon: MapPin,
              title: "Community Focused",
              desc: "Deeply committed to West Sacramento, supporting neighbors and serving regulars daily.",
            },
          ].map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="bg-warm-white rounded-[2rem] p-8 border border-brown-200/80 shadow-sm space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-terracotta/10 text-terracotta flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-brown-900 pt-2">
                  {val.title}
                </h3>
                <p className="text-sm text-brown-700 leading-relaxed font-body">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Recognition & Awards ────────────────────────────── */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-t border-brown-200/60">
        <SectionReveal className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta block mb-2">
            Local & Regional Recognition
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brown-900 tracking-tight">
            Honored by Our Guests
          </h2>
          <p className="mt-3 text-brown-700 text-base font-body">
            Proudly recommended and celebrated across West Sacramento & Yolo County.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restaurant.recognition.map((rec) => (
            <div
              key={rec.year}
              className="p-8 rounded-[2rem] bg-cream border border-brown-200 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-terracotta/15 text-terracotta mx-auto flex items-center justify-center">
                <Award size={24} />
              </div>
              <span className="font-display text-4xl sm:text-5xl font-bold text-brown-900 block italic">
                {rec.year}
              </span>
              <h4 className="font-display text-xl font-semibold text-brown-900">
                {rec.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Button href="/menu" size="lg" variant="primary" arrow={true}>
            Discover Our Menu
          </Button>
          <Button
            href={`tel:${restaurant.phone.replace(/-/g, "")}`}
            size="lg"
            variant="secondary"
            className="bg-white"
          >
            <span>Call (916) 371-7767</span>
          </Button>
        </div>
      </section>
    </div>
  );
}
