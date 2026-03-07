import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  heading: string;
  subheading?: string;
  eyebrow?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string; isPhone?: boolean };
  image: string;
  imageAlt?: string;
  variant?: "default" | "urgent" | "service" | "commercial";
  minHeight?: string;
}

export function HeroSection({
  heading,
  subheading,
  eyebrow,
  ctaPrimary = { label: "Get Your Free Inspection", href: "/contact" },
  ctaSecondary,
  image,
  imageAlt = "Ironclad Roofing Co.",
  variant = "default",
  minHeight = "min-h-screen",
}: HeroSectionProps) {
  const isUrgent = variant === "urgent";

  if (variant === "default") {
    // Split panel: left text / right image (Variant B)
    return (
      <section className={cn("relative flex flex-col lg:flex-row", minHeight)} aria-label="Hero">
        {/* Left panel — text */}
        <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-24 pb-16 lg:pt-0 lg:pb-0 lg:w-1/2 bg-iron">
          {eyebrow && (
            <span className="eyebrow text-gold mb-6 block">{eyebrow}</span>
          )}
          <div className="w-12 h-0.5 bg-gold mb-6" />
          <h1 className="display-xl text-ivory mb-6">{heading}</h1>
          {subheading && (
            <p className="text-ivory/70 text-lg leading-relaxed mb-10 max-w-xl">
              {subheading}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaPrimary.href}
              className="inline-flex items-center justify-center bg-gold text-iron font-bold px-8 py-4 rounded-full text-base hover:bg-gold-dark transition-colors"
            >
              {ctaPrimary.label}
            </Link>
            {ctaSecondary && (
              ctaSecondary.isPhone ? (
                <a
                  href={ctaSecondary.href}
                  className="inline-flex items-center justify-center gap-2 border border-ivory/30 text-ivory font-semibold px-8 py-4 rounded-full text-base hover:border-ivory/60 transition-colors"
                >
                  <Phone size={16} />
                  {ctaSecondary.label}
                </a>
              ) : (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center justify-center gap-2 border border-ivory/30 text-ivory font-semibold px-8 py-4 rounded-full text-base hover:border-ivory/60 transition-colors"
                >
                  {ctaSecondary.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Right panel — image */}
        <div className="relative lg:w-1/2 h-72 lg:h-auto">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>
    );
  }

  // Full-bleed variants: urgent / service / commercial
  return (
    <section
      className={cn("relative flex items-center", minHeight, isUrgent ? "pt-16" : "pt-16")}
      aria-label="Hero"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0",
          isUrgent
            ? "bg-gradient-to-b from-iron/85 via-iron/70 to-iron/85"
            : "bg-gradient-to-r from-iron/90 via-iron/70 to-iron/40"
        )}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="eyebrow text-gold mb-6 block">{eyebrow}</span>
          )}
          <div className="w-12 h-0.5 bg-gold mb-6" />
          <h1 className="display-xl text-ivory mb-6">{heading}</h1>
          {subheading && (
            <p className="text-ivory/80 text-lg leading-relaxed mb-10 max-w-2xl">
              {subheading}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaPrimary.href}
              className="inline-flex items-center justify-center bg-gold text-iron font-bold px-8 py-4 rounded-full text-base hover:bg-gold-dark transition-colors"
            >
              {ctaPrimary.label}
            </Link>
            {ctaSecondary && (
              ctaSecondary.isPhone ? (
                <a
                  href={ctaSecondary.href}
                  className="inline-flex items-center justify-center gap-2 border border-ivory/40 text-ivory font-semibold px-8 py-4 rounded-full text-base hover:border-ivory/70 transition-colors"
                >
                  <Phone size={16} />
                  {ctaSecondary.label}
                </a>
              ) : (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center justify-center gap-2 border border-ivory/40 text-ivory font-semibold px-8 py-4 rounded-full text-base hover:border-ivory/70 transition-colors"
                >
                  {ctaSecondary.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
