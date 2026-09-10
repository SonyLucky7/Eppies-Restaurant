'use client';

import { restaurant } from '@/data/restaurant';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';
import { Phone, MapPin, Clock, MessageSquare, Sparkles, Navigation } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory text-brown-900 pt-32 pb-32">
      <div className="w-full max-w-5xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream border border-brown-200/60 mb-6 text-xs font-mono uppercase tracking-widest text-terracotta">
            <Sparkles size={13} />
            <span>We&apos;re Always Happy to Hear From You</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-brown-900">
            Get In Touch.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-brown-400 max-w-2xl mx-auto leading-relaxed">
            Give us a call to order takeout, inquire about daily specials, plan group dining, or simply say hello.
          </p>
        </SectionReveal>

        {/* Double-Bezel Contact Enclosure */}
        <div className="bg-cream rounded-[2.5rem] p-3 sm:p-4 border border-brown-200 shadow-xl">
          <div className="bg-warm-white rounded-[2rem] p-8 md:p-14 border border-brown-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Info Column */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">
                    West Sacramento Landmark
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-brown-900 mt-1">
                    {restaurant.name}
                  </h2>
                  <p className="mt-2 text-base text-brown-400 leading-relaxed">
                    {restaurant.address.street}, {restaurant.address.city}, {restaurant.address.state}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-brown-100">
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-terracotta shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-brown-900">Operating Hours</p>
                      <p className="text-xs text-brown-400">7 Days a Week · {restaurant.hours.display}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-terracotta shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-brown-900">Phone Order Desk</p>
                      <p className="text-xs text-brown-400">Fast pickup ready in 15–20 minutes</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-cream/70 rounded-2xl border border-brown-100/70">
                  <span className="text-xs font-mono uppercase tracking-wider text-brown-900 font-semibold block mb-1">
                    Large Parties & Catering
                  </span>
                  <p className="text-xs text-brown-400">
                    Hosting a family reunion or sports team? Call our manager directly to arrange group seating or large takeout orders.
                  </p>
                </div>
              </div>

              {/* Right Action Column */}
              <div className="flex flex-col gap-4 p-6 bg-cream rounded-2xl border border-brown-200/60">
                <span className="text-xs font-mono uppercase tracking-widest text-brown-400 font-semibold">
                  Direct Actions
                </span>

                <Button
                  href={`tel:${restaurant.phone.replace(/-/g, "")}`}
                  size="lg"
                  variant="primary"
                  className="w-full"
                >
                  <Phone size={16} className="shrink-0" />
                  <span>Call {restaurant.phoneFormatted}</span>
                </Button>

                <Button
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="secondary"
                  className="w-full bg-warm-white"
                >
                  <Navigation size={16} className="shrink-0 text-terracotta" />
                  <span>Get Driving Directions</span>
                </Button>

                <p className="text-center text-xs text-brown-400 mt-1">
                  No online ordering service fees · Direct pickup pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
