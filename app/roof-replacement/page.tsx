import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { CTABand } from "@/components/sections/CTABand";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BlurFade } from "@/components/magic/BlurFade";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Replacement Austin TX | Ironclad Roofing Co.",
  description:
    "Complete roof replacement using Owens Corning Platinum Preferred materials. Serving Austin, Cedar Park, Round Rock and all surrounding areas. Free inspection, lifetime workmanship warranty.",
};

const steps = [
  {
    number: 1,
    title: "Free Inspection & Assessment",
    description:
      "We inspect your existing roof, assess its condition, and provide a written report with your replacement options. No pressure, no obligation.",
  },
  {
    number: 2,
    title: "Material Selection",
    description:
      "Choose from Owens Corning's full architectural shingle line. We walk you through styles, colors, and warranty levels. Every material we install meets our Platinum Preferred standard.",
  },
  {
    number: 3,
    title: "Installation",
    description:
      "Full tear-off of existing materials. New underlayment. Precision installation by our certified crew. We protect your property and clean up completely every day.",
  },
  {
    number: 4,
    title: "Final Inspection",
    description:
      "We walk the roof with you. Review the workmanship. Register your manufacturer warranty. Hand you our lifetime workmanship warranty in writing.",
  },
];

const differentiators = [
  "Owens Corning Platinum Preferred — fewer than 1% of Texas contractors qualify",
  "Full tear-off, never roof-over — your new roof starts fresh",
  "Lifetime workmanship warranty, not limited manufacturer warranty",
  "We register your warranty with Owens Corning immediately after installation",
  "Same crew from tear-off to final inspection — no subcontractors",
];

export default function RoofReplacementPage() {
  return (
    <>
      <HeroSection
        variant="service"
        eyebrow="Roof Replacement"
        heading="Built to Last Decades."
        subheading="Owens Corning Platinum Preferred installation. Full tear-off. Lifetime workmanship warranty. Not just a new roof — the right roof, installed correctly, for the rest of your time in this home."
        image="/assets/hero/hero-replacement.jpg"
        imageAlt="New Owens Corning roof replacement in Austin Texas"
        ctaPrimary={{ label: "Get Free Inspection", href: "/contact" }}
        ctaSecondary={{ label: "Call (512) 000-0000", href: "tel:+15120000000", isPhone: true }}
      />

      <TrustStrip />

      {/* What's included */}
      <section className="py-24 bg-iron" aria-label="What's included">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <BlurFade>
              <div>
                <span className="eyebrow text-gold block mb-4">What You Get</span>
                <h2 className="display-lg text-ivory mb-8">No Shortcuts. No Roof-Overs.</h2>
                <p className="text-ivory/70 text-lg leading-relaxed mb-8">
                  A proper roof replacement isn&apos;t just new shingles on top of old ones. It&apos;s a complete system: tear-off, deck inspection, new underlayment, drip edge, flashing, ventilation, and finally — Owens Corning architectural shingles installed to factory specification.
                </p>
                <ul className="space-y-4">
                  {differentiators.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-ivory/70 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
            <BlurFade delay={0.15}>
              <div className="bg-card rounded-2xl p-8 border border-iron-mid">
                <h3 className="font-display text-xl font-bold text-ivory mb-6">Every Replacement Includes</h3>
                <ul className="space-y-3 text-ivory/60 text-sm">
                  {[
                    "Complete tear-off of existing roofing materials",
                    "Deck inspection and repair where needed",
                    "High-performance synthetic underlayment",
                    "Drip edge and ice & water shield",
                    "Proper ventilation assessment and correction",
                    "Owens Corning architectural shingles",
                    "Complete cleanup — magnetic nail sweep included",
                    "Owens Corning System Plus Limited Warranty",
                    "Ironclad lifetime workmanship warranty (written)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <ProcessSteps
        eyebrow="Our Process"
        heading="Replacement, Step by Step"
        steps={steps}
      />

      <ReviewsCarousel />
      <CTABand heading="Your New Roof Starts Here." subtext="Free inspection. Fixed price. No surprises. Get started today." />
    </>
  );
}
