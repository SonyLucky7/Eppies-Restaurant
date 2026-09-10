'use client';

import { restaurant } from '@/data/restaurant';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';
import { MapPin, Clock, Phone, Car, Accessibility, Utensils, ShoppingBag, Sparkles, Navigation } from 'lucide-react';

export default function LocationPage() {
  const featureIcons: Record<string, typeof MapPin> = {
    "Indoor Dining": Utensils,
    "Takeout": ShoppingBag,
    "ADA Accessible": Accessibility,
    "Free Parking": Car,
  };

  return (
    <div className="min-h-screen bg-ivory text-brown-900 pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream border border-brown-200/60 mb-6 text-xs font-mono uppercase tracking-widest text-terracotta">
            <Sparkles size={13} />
            <span>Easy Access off Lake Road & I-80</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-brown-900">
            Come Find Us.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-brown-400 leading-relaxed">
            Conveniently located in West Sacramento with a massive dedicated private parking lot, spacious indoor booths, and quick curbside takeout.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Left Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-warm-white rounded-[2rem] p-8 border border-brown-200 shadow-lg space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-terracotta/15 flex items-center justify-center text-terracotta shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-brown-900">
                    Physical Address
                  </h3>
                  <p className="text-base text-brown-700 font-medium mt-1">
                    {restaurant.address.street}
                  </p>
                  <p className="text-sm text-brown-400">
                    {restaurant.address.city}, {restaurant.address.state}
                  </p>
                  <span className="text-xs text-sage font-medium block mt-1">
                    Free spacious on-site customer parking
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-brown-100">
                <div className="w-12 h-12 rounded-2xl bg-terracotta/15 flex items-center justify-center text-terracotta shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-brown-900">
                    Service Hours
                  </h3>
                  <p className="text-base text-brown-700 font-medium mt-1">
                    Daily: {restaurant.hours.display}
                  </p>
                  <p className="text-xs text-brown-400">
                    Breakfast served all day · Lunch & Dinner starting at 11:00 AM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-brown-100">
                <div className="w-12 h-12 rounded-2xl bg-terracotta/15 flex items-center justify-center text-terracotta shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-brown-900">
                    Direct Phone Line
                  </h3>
                  <a
                    href={`tel:${restaurant.phone.replace(/-/g, "")}`}
                    className="text-lg font-mono font-bold text-terracotta hover:underline block mt-1"
                  >
                    {restaurant.phoneFormatted}
                  </a>
                  <p className="text-xs text-brown-400">
                    Call ahead for fast takeout or party reservations
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-brown-100">
                <h4 className="text-xs font-mono uppercase tracking-widest text-brown-400 mb-3">
                  Diner Amenities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {restaurant.features.map((feature) => {
                    const Icon = featureIcons[feature] || MapPin;
                    return (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cream rounded-full text-xs font-medium text-brown-700 border border-brown-200/50"
                      >
                        <Icon size={14} className="text-terracotta" />
                        {feature}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="primary"
                  className="w-full"
                >
                  <Navigation size={16} className="shrink-0" />
                  <span>Open in Apple / Google Maps</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Map Embed Card */}
          <div className="lg:col-span-7">
            <div className="w-full h-[520px] rounded-[2.5rem] overflow-hidden border border-brown-200 shadow-2xl bg-warm-white relative">
              <iframe
                src={restaurant.mapsEmbed || `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(restaurant.address.full)}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map to ${restaurant.name}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
