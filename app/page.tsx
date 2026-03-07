import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyIronclad } from "@/components/sections/WhyIronclad";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Ironclad Roofing Co. | Austin's Premier Roofing Contractor",
  description:
    "14 years serving Austin, TX. Storm damage, roof replacement, repair & commercial roofing. Owens Corning Platinum Preferred. 4.9★ / 340+ Google Reviews. Free inspections.",
  openGraph: {
    title: "Ironclad Roofing Co. | Austin's Premier Roofing Contractor",
    description:
      "14 years. 2,300+ roofs. Owens Corning Platinum Preferred. Austin's most trusted roofing contractor.",
    type: "website",
    url: "https://ironcladroofingco.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection
        variant="default"
        eyebrow="Austin's Premier Roofing Contractor"
        heading="When Your Roof Needs to Hold, Call Ironclad."
        subheading="Owens Corning Platinum Preferred. 14 years. 2,300+ roofs. Lifetime workmanship warranty. Serving Austin and all surrounding suburbs."
        image="/assets/hero/hero-main.jpg"
        imageAlt="Premium Austin Texas roof at golden hour"
        ctaPrimary={{ label: "Get Your Free Inspection", href: "/contact" }}
        ctaSecondary={{ label: "Call (512) 000-0000", href: "tel:+15120000000", isPhone: true }}
      />
      <TrustStrip />
      <ServicesGrid />
      <WhyIronclad />
      <ReviewsCarousel
        eyebrow="Client Reviews"
        heading="What Austin Homeowners Say"
      />
      <CTABand
        heading="Your Roof. Protected."
        subtext="Get a free inspection from Austin's most trusted roofing contractor. No pressure. No obligation."
        ctaLabel="Get Free Inspection"
        ctaHref="/contact"
      />
    </>
  );
}
