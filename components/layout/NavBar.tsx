"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Storm Damage", href: "/storm-damage" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-iron/95 backdrop-blur-md border-b border-iron-mid shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span className="font-display font-bold text-xl text-ivory tracking-tight group-hover:text-gold transition-colors">
                IRONCLAD
              </span>
              <span className="w-full h-0.5 bg-gold" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="eyebrow text-ivory/70 hover:text-ivory transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+15120000000"
                className="flex items-center gap-2 text-gold eyebrow hover:text-gold-dark transition-colors"
              >
                <Phone size={14} />
                (512) 000-0000
              </a>
              <Link
                href="/contact"
                className="bg-gold text-iron font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-gold-dark transition-colors"
              >
                Free Inspection
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-ivory"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-iron flex flex-col">
          <div className="flex items-center justify-between px-4 h-16 border-b border-iron-mid">
            <Link
              href="/"
              className="flex flex-col leading-none"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-display font-bold text-xl text-ivory">IRONCLAD</span>
              <span className="w-full h-0.5 bg-gold" />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-ivory"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col p-8 gap-6 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl font-bold text-ivory hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="p-8 border-t border-iron-mid">
            <a
              href="tel:+15120000000"
              className="flex items-center gap-3 text-gold text-lg font-semibold mb-4"
            >
              <Phone size={20} />
              (512) 000-0000
            </a>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-gold text-iron font-bold py-4 rounded-full"
            >
              Get Free Inspection
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
