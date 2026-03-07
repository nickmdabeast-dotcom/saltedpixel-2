import Link from "next/link";
import { Phone } from "lucide-react";

interface CTABandProps {
  variant?: "default" | "urgent";
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CTABand({
  variant = "default",
  heading = "Your Roof. Protected.",
  subtext = "Get a free inspection from Austin's most trusted roofing contractor. No pressure. No obligation.",
  ctaLabel = "Get Free Inspection",
  ctaHref = "/contact",
}: CTABandProps) {
  if (variant === "urgent") {
    return (
      <section className="bg-iron border-t border-gold/30 py-20" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />
          <h2 className="display-lg text-ivory mb-4">
            Don&apos;t Let Storm Damage <span className="text-gold">Wait.</span>
          </h2>
          <p className="text-ivory/60 text-lg mb-10 max-w-2xl mx-auto">{subtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center bg-gold text-iron font-bold px-10 py-4 rounded-full text-lg hover:bg-gold-dark transition-colors"
            >
              {ctaLabel}
            </Link>
            <a
              href="tel:+15120000000"
              className="inline-flex items-center justify-center gap-2 border border-ivory/30 text-ivory font-semibold px-10 py-4 rounded-full text-lg hover:border-gold/60 transition-colors"
            >
              <Phone size={18} />
              (512) 000-0000
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gold py-20" aria-label="Call to action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="display-lg text-iron mb-4">{heading}</h2>
        <p className="text-iron/70 text-lg mb-10 max-w-2xl mx-auto">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center bg-iron text-ivory font-bold px-10 py-4 rounded-full text-lg hover:bg-iron-mid transition-colors"
          >
            {ctaLabel}
          </Link>
          <a
            href="tel:+15120000000"
            className="inline-flex items-center justify-center gap-2 border-2 border-iron/30 text-iron font-semibold px-10 py-4 rounded-full text-lg hover:border-iron/60 transition-colors"
          >
            <Phone size={18} />
            (512) 000-0000
          </a>
        </div>
      </div>
    </section>
  );
}
