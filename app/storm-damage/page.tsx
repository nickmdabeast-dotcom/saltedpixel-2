import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { StatsBar } from "@/components/sections/StatsBar";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { CTABand } from "@/components/sections/CTABand";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { BlurFade } from "@/components/magic/BlurFade";

export const metadata: Metadata = {
  title: "Storm Damage Roof Repair Austin TX | Ironclad Roofing Co.",
  description:
    "Hail or wind damage? Ironclad Roofing responds within 48 hours across Austin, Cedar Park, Round Rock. Free inspection, insurance claim coordination. ROC #TX-448821.",
  openGraph: {
    title: "Storm Damage Roof Repair Austin TX | Ironclad Roofing Co.",
    description:
      "48-hour response. Free inspection. Insurance claim coordination. Serving all of Austin and surrounding areas.",
  },
};

const steps = [
  {
    number: 1,
    title: "Free Storm Inspection",
    description:
      "We arrive within 48 hours, inspect every inch of your roof, and document all damage with photographs and a written report. Zero cost to you.",
  },
  {
    number: 2,
    title: "Damage Documentation",
    description:
      "Our detailed damage report is formatted specifically for insurance adjusters. We know what they need to see. We make sure they see it.",
  },
  {
    number: 3,
    title: "Insurance Coordination",
    description:
      "We work directly with your insurance company through the claims process. You don't need to navigate that alone — it's part of what we do.",
  },
  {
    number: 4,
    title: "Expert Repair or Replacement",
    description:
      "Once the claim is approved, our crew gets to work. Owens Corning materials. Platinum Preferred installation. Lifetime workmanship warranty.",
  },
];

const stats = [
  { value: "500+", numericValue: 500, label: "Storm Claim Jobs Completed" },
  { value: "48hr", label: "Average Response Time" },
  { value: "100%", label: "Insurance Coordination" },
  { value: "14", numericValue: 14, label: "Years in Austin" },
];

export default function StormDamagePage() {
  return (
    <>
      <HeroSection
        variant="urgent"
        eyebrow="Storm Damage Response"
        heading="Storm Hit Your Roof? Don't Wait."
        subheading="Ironclad responds within 48 hours. Free inspection. Full insurance claim coordination. We've handled 500+ storm claims across Austin. ROC #TX-448821."
        image="/assets/hero/hero-storm.jpg"
        imageAlt="Storm damaged roof requiring immediate inspection"
        ctaPrimary={{ label: "Book Free Inspection", href: "/contact" }}
        ctaSecondary={{ label: "Call Now", href: "tel:+15120000000", isPhone: true }}
      />

      {/* Problem section */}
      <section className="py-24 bg-iron" aria-label="Storm damage information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="max-w-3xl">
              <span className="eyebrow text-gold block mb-4">What You&apos;re Dealing With</span>
              <h2 className="display-lg text-ivory mb-8">Hail and Wind Do More Damage Than You See</h2>
              <div className="space-y-6 text-ivory/70 text-lg leading-relaxed">
                <p>
                  A storm rolls through. You walk outside and your roof looks fine. But what you can&apos;t see from the ground — the bruised granules, the cracked seals, the micro-fractures from hail impact — will cost you tens of thousands of dollars in water damage in the next 18 months.
                </p>
                <p>
                  Insurance companies require documented storm damage to process a claim. Without a professional inspection report, they can deny your claim or low-ball the estimate. Our inspection reports are built for adjusters — detailed, photographic, and formatted to your policy requirements.
                </p>
                <p>
                  The window to file a storm damage claim is typically 1–2 years from the storm event. Delaying inspection delays your claim. The sooner we document, the stronger your position.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <ProcessSteps
        eyebrow="Our Process"
        heading="How Ironclad Handles Storm Claims"
        steps={steps}
      />

      <StatsBar stats={stats} />

      <ReviewsCarousel
        eyebrow="Storm Damage Reviews"
        heading="What Storm Clients Say"
      />

      <CTABand
        variant="urgent"
        subtext="The sooner we document, the stronger your insurance claim. Call now or book an inspection online."
        ctaLabel="Book Free Inspection"
        ctaHref="/contact"
      />

      <StickyCallBar />
    </>
  );
}
