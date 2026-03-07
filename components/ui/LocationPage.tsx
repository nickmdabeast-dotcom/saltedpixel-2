import type { Metadata } from "next";
import Link from "next/link";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { CTABand } from "@/components/sections/CTABand";
import { BlurFade } from "@/components/magic/BlurFade";
import { CloudLightning, Home, Wrench, Building2, ArrowRight } from "lucide-react";

interface LocationPageProps {
  city: string;
  county: string;
  heading: string;
  subheading: string;
  intro: string;
  metadata: Metadata;
}

const services = [
  { icon: CloudLightning, name: "Storm Damage Repair", href: "/storm-damage" },
  { icon: Home, name: "Roof Replacement", href: "/roof-replacement" },
  { icon: Wrench, name: "Roof Repair", href: "/roof-repair" },
  { icon: Building2, name: "Commercial Roofing", href: "/commercial-roofing" },
];

export function LocationPageContent({
  city,
  county,
  heading,
  subheading,
  intro,
}: Omit<LocationPageProps, "metadata">) {
  return (
    <>
      <div className="pt-20 bg-iron border-b border-iron-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BlurFade>
            <span className="eyebrow text-gold block mb-4">{city}, {county} County</span>
            <h1 className="display-xl text-ivory max-w-3xl">{heading}</h1>
            <p className="text-ivory/60 text-xl mt-6 max-w-2xl">{subheading}</p>
          </BlurFade>
        </div>
      </div>

      <TrustStrip />

      <section className="py-24 bg-iron" aria-label={`Roofing services in ${city}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <BlurFade>
              <div>
                <span className="eyebrow text-gold block mb-4">Serving {city}</span>
                <h2 className="display-lg text-ivory mb-6">{city}&apos;s Trusted Roofing Contractor</h2>
                <p className="text-ivory/70 text-lg leading-relaxed mb-6">{intro}</p>
                <p className="text-ivory/70 text-lg leading-relaxed">
                  Ironclad Roofing Co. has served {city} homeowners for 14 years. Our crew knows the neighborhoods, the local permit requirements, and the storm patterns that affect {county} County roofs. We are licensed (ROC #TX-448821), bonded, insured, and Owens Corning Platinum Preferred certified.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.15}>
              <div className="bg-card rounded-2xl p-8 border border-iron-mid">
                <h3 className="font-display text-xl font-bold text-ivory mb-6">Services in {city}</h3>
                <div className="space-y-4">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-4 text-ivory/70 hover:text-ivory transition-colors group"
                      >
                        <Icon size={18} className="text-gold shrink-0" aria-hidden="true" />
                        <span className="font-medium">{service.name}</span>
                        <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-8 pt-6 border-t border-iron-mid">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-gold text-iron font-bold py-4 rounded-full hover:bg-gold-dark transition-colors"
                  >
                    Get Free {city} Inspection
                  </Link>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <ReviewsCarousel eyebrow={`${city} Reviews`} heading={`What ${city} Homeowners Say`} />
      <CTABand
        heading={`${city}'s Roof, Protected.`}
        subtext={`Serving ${city} and all of ${county} County. Free inspection, lifetime warranty.`}
        ctaLabel={`Get Free ${city} Inspection`}
        ctaHref="/contact"
      />
    </>
  );
}
