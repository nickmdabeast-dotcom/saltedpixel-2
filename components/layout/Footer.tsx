import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "Storm Damage", href: "/storm-damage" },
  { label: "Roof Replacement", href: "/roof-replacement" },
  { label: "Roof Repair", href: "/roof-repair" },
  { label: "Commercial Roofing", href: "/commercial-roofing" },
  { label: "All Services", href: "/services" },
];

const locationLinks = [
  { label: "Cedar Park", href: "/cedar-park" },
  { label: "Round Rock", href: "/round-rock" },
  { label: "Pflugerville", href: "/pflugerville" },
  { label: "Bee Cave", href: "/bee-cave" },
  { label: "Georgetown", href: "/georgetown" },
];

export function Footer() {
  return (
    <footer className="bg-iron border-t border-iron-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-display font-bold text-2xl text-ivory">IRONCLAD</span>
              <span className="w-full h-0.5 bg-gold mt-1" />
            </div>
            <p className="text-ivory/60 text-sm leading-relaxed mb-6">
              Austin&apos;s most trusted roofing contractor. 14 years of protecting
              Central Texas homes and businesses.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-ivory/50 text-xs eyebrow">Owens Corning Platinum Preferred</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-ivory/50 text-xs eyebrow">ROC #TX-448821</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="eyebrow text-gold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/60 text-sm hover:text-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="eyebrow text-gold mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/60 text-sm hover:text-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-ivory/40 text-sm">+ Greater Austin Area</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow text-gold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+15120000000"
                  className="flex items-center gap-3 text-ivory/60 text-sm hover:text-gold transition-colors"
                >
                  <Phone size={14} className="text-gold shrink-0" />
                  (512) 000-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:team@ironcladroofingco.com"
                  className="flex items-center gap-3 text-ivory/60 text-sm hover:text-ivory transition-colors"
                >
                  <Mail size={14} className="text-gold shrink-0" />
                  team@ironcladroofingco.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-ivory/60 text-sm">
                  <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                  <span>Austin, TX<br />Serving Central Texas</span>
                </div>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-gold text-iron text-sm font-bold px-6 py-3 rounded-full hover:bg-gold-dark transition-colors"
            >
              Get Free Inspection
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-iron-mid flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ivory/30 text-xs">
            © {new Date().getFullYear()} Ironclad Roofing Co. All rights reserved. Licensed, Bonded &amp; Insured.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-ivory/30 text-xs hover:text-ivory/60 transition-colors">About</Link>
            <Link href="/gallery" className="text-ivory/30 text-xs hover:text-ivory/60 transition-colors">Gallery</Link>
            <Link href="/contact" className="text-ivory/30 text-xs hover:text-ivory/60 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
