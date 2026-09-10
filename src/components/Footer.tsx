"use client";

import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-brown-100">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-3xl font-semibold text-brown-900 tracking-wide"
            >
              EPPIES
            </Link>
            <p className="mt-3 text-sm text-brown-400 leading-relaxed max-w-xs">
              West Sacramento&apos;s favorite family restaurant. Serving the
              community for over 40 years.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-brown-900 mb-4">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "Our Story" },
                { href: "/menu", label: "Menu" },
                { href: "/location", label: "Location" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brown-400 hover:text-terracotta transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-brown-900 mb-4">
              Visit Us
            </h3>
            <ul className="space-y-3 text-sm text-brown-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-terracotta" />
                <span>
                  4025 Lake Road
                  <br />
                  West Sacramento, CA
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-terracotta" />
                <a
                  href="tel:9163717767"
                  className="hover:text-terracotta transition-colors"
                >
                  (916) 371-7767
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-terracotta" />
                <span>Daily 7:00 AM — 8:30 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-brown-900 mb-4">
              Quick Actions
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:9163717767"
                className="inline-flex items-center justify-center gap-2 h-10 px-5 bg-terracotta text-white text-xs font-semibold tracking-wider rounded-xl hover:bg-terracotta-dark shadow-sm transition-all cursor-pointer"
              >
                <Phone size={14} className="shrink-0" />
                <span>Call Eppies</span>
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=4025+Lake+Road+West+Sacramento+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-10 px-5 border border-brown-200 bg-white text-brown-800 text-xs font-semibold tracking-wider rounded-xl hover:border-terracotta hover:text-terracotta shadow-sm transition-all cursor-pointer"
              >
                <MapPin size={14} className="shrink-0 text-terracotta" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brown-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brown-400">
            © {new Date().getFullYear()} Eppies Restaurant. All rights reserved.
          </p>
          <p className="text-xs text-brown-400">
            4025 Lake Road, West Sacramento, CA · (916) 371-7767
          </p>
        </div>
      </div>
    </footer>
  );
}
