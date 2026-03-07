import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { CTABand } from "@/components/sections/CTABand";
import { BlurFade } from "@/components/magic/BlurFade";

export const metadata: Metadata = {
  title: "Roof Repair Austin TX | Ironclad Roofing Co.",
  description:
    "Professional roof repair in Austin TX. Leak detection, flashing repair, shingle replacement, emergency repairs. Licensed, bonded, insured. ROC #TX-448821. Free inspection.",
};

const steps = [
  {
    number: 1,
    title: "Precise Leak Detection",
    description:
      "We don't guess. We trace the source of every leak to its origin — not just where it shows up on your ceiling. This is where most roofers get it wrong.",
  },
  {
    number: 2,
    title: "Honest Assessment",
    description:
      "We tell you whether it's a simple repair or a sign of deeper problems. If it's a repair, we fix it right. If it's more serious, we tell you before we touch anything.",
  },
  {
    number: 3,
    title: "Permanent Repair",
    description:
      "We fix the problem, not the symptom. Every repair is backed by our workmanship guarantee. If it fails, we come back.",
  },
];

const repairTypes = [
  { name: "Shingle Replacement", description: "Wind-damaged, cracked, or missing shingles replaced to match existing materials." },
  { name: "Flashing Repair", description: "Failed chimney, skylight, and wall flashing — the most common source of roof leaks." },
  { name: "Valley Repair", description: "Open and closed valley repairs and re-installation for proper water drainage." },
  { name: "Ridge Cap Replacement", description: "Worn or missing ridge cap shingles replaced for proper ventilation and aesthetics." },
  { name: "Emergency Repairs", description: "Tarping and emergency stabilization available 7 days a week after storm events." },
];

export default function RoofRepairPage() {
  return (
    <>
      <HeroSection
        variant="service"
        eyebrow="Roof Repair"
        heading="Leaks Stop Here."
        subheading="Fast diagnosis. Permanent fix. We trace every leak to its actual source — not just where it shows up on your ceiling. Emergency repairs available 7 days a week."
        image="/assets/hero/hero-repair.jpg"
        imageAlt="Expert roof repair in Austin Texas"
        ctaPrimary={{ label: "Get Free Inspection", href: "/contact" }}
        ctaSecondary={{ label: "Call (512) 000-0000", href: "tel:+15120000000", isPhone: true }}
      />

      {/* Emergency callout */}
      <div className="bg-gold py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-iron font-semibold text-center sm:text-left">
            Emergency roof damage? We respond 7 days a week.
          </p>
          <a
            href="tel:+15120000000"
            className="bg-iron text-ivory font-bold px-6 py-2 rounded-full text-sm hover:bg-iron-mid transition-colors shrink-0"
          >
            Call (512) 000-0000
          </a>
        </div>
      </div>

      {/* Repair types */}
      <section className="py-24 bg-iron" aria-label="Types of repairs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="mb-16">
              <span className="eyebrow text-gold block mb-4">What We Fix</span>
              <h2 className="display-lg text-ivory max-w-2xl">Common Repairs We Handle</h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map((repair, i) => (
              <BlurFade key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 border border-iron-mid">
                  <div className="w-8 h-0.5 bg-gold mb-4" />
                  <h3 className="font-display font-bold text-ivory text-lg mb-2">{repair.name}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed">{repair.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        eyebrow="Our Approach"
        heading="Repair Done Right"
        steps={steps}
      />

      <ReviewsCarousel />
      <CTABand heading="Don't Wait on That Leak." subtext="Small leaks become large water damage claims. A free inspection takes 30 minutes." />
    </>
  );
}
