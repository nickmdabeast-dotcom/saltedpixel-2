import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { CTABand } from "@/components/sections/CTABand";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BlurFade } from "@/components/magic/BlurFade";

export const metadata: Metadata = {
  title: "Commercial Roofing Austin TX | Ironclad Roofing Co.",
  description:
    "Commercial roofing contractor in Austin TX. TPO, EPDM, metal, modified bitumen. Flat and low-slope roofing specialists. Free commercial roof inspection. ROC #TX-448821.",
};

const systems = [
  { name: "TPO Membrane", description: "Single-ply thermoplastic membrane. Energy-efficient, heat-welded seams, 15–25 year life expectancy. Preferred for most Austin commercial applications." },
  { name: "EPDM (Rubber Roofing)", description: "Highly durable synthetic rubber membrane for flat and low-slope roofs. Excellent UV resistance and long service life for Austin's climate." },
  { name: "Modified Bitumen", description: "Multi-layer reinforced asphalt system. Superior puncture resistance. Ideal for roofs with foot traffic and mechanical equipment." },
  { name: "Metal Roofing", description: "Standing seam and through-fastened metal systems for commercial applications requiring maximum longevity and minimal maintenance." },
];

export default function CommercialRoofingPage() {
  return (
    <>
      <HeroSection
        variant="commercial"
        eyebrow="Commercial Roofing"
        heading="Austin's Commercial Roofing Experts."
        subheading="TPO, EPDM, modified bitumen, metal. We serve Austin's commercial properties with the same precision and accountability as our 2,300+ residential installs. ROC #TX-448821."
        image="/assets/hero/hero-commercial.jpg"
        imageAlt="Commercial flat roof installation in Austin Texas"
        ctaPrimary={{ label: "Get a Commercial Quote", href: "/contact" }}
        ctaSecondary={{ label: "Call (512) 000-0000", href: "tel:+15120000000", isPhone: true }}
      />

      <TrustStrip />

      <section className="py-24 bg-iron" aria-label="Commercial roofing systems">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="mb-16">
              <span className="eyebrow text-gold block mb-4">Commercial Systems</span>
              <h2 className="display-lg text-ivory max-w-2xl">Every Commercial System. One Contractor.</h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {systems.map((system, i) => (
              <BlurFade key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 border border-iron-mid">
                  <div className="w-8 h-0.5 bg-gold mb-4" />
                  <h3 className="font-display font-bold text-ivory text-xl mb-3">{system.name}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed">{system.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.2}>
            <div className="bg-card rounded-2xl p-10 border border-iron-mid max-w-3xl">
              <h3 className="display-md text-ivory mb-4">Why Ironclad for Commercial?</h3>
              <p className="text-ivory/70 text-lg leading-relaxed mb-6">
                Commercial roofing requires a different level of project management — phased access for occupied buildings, coordination with property managers, and documentation that satisfies commercial insurance requirements. We have managed this for 14 years across Austin&apos;s commercial sector.
              </p>
              <p className="text-ivory/70 text-lg leading-relaxed">
                We are licensed, bonded, and insured to commercial limits. ROC #TX-448821. Our commercial quotes include full scope documentation, material specifications, and a timeline your operations team can plan around.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <ReviewsCarousel />
      <CTABand heading="Your Commercial Roof, Handled." subtext="Free inspection and written quote. We work around your business hours." />
    </>
  );
}
