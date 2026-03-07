import type { Metadata } from "next";
import Link from "next/link";
import { CloudLightning, Home, Wrench, Building2, ArrowRight } from "lucide-react";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTABand } from "@/components/sections/CTABand";
import { BlurFade } from "@/components/magic/BlurFade";

export const metadata: Metadata = {
  title: "Roofing Services Austin TX | Ironclad Roofing Co.",
  description:
    "Roofing services in Austin TX: storm damage repair, roof replacement, roof repair, and commercial roofing. Free inspections. Owens Corning Platinum Preferred. ROC #TX-448821.",
};

const services = [
  {
    icon: CloudLightning,
    name: "Storm Damage",
    href: "/storm-damage",
    eyebrow: "48-Hour Response",
    description:
      "Austin storms can cause significant damage that isn't visible from the ground. Our inspection process documents every impact — hail bruising, wind damage, compromised seals — in a format your insurance adjuster can act on. We have coordinated 500+ storm claims across Central Texas.",
    highlights: ["Free inspection and damage report", "Insurance claim coordination included", "48-hour response time", "500+ claims successfully processed"],
  },
  {
    icon: Home,
    name: "Roof Replacement",
    href: "/roof-replacement",
    eyebrow: "Platinum Preferred Install",
    description:
      "A complete tear-off and replacement done right — not a roof-over patch. We use Owens Corning architectural shingles installed to Platinum Preferred standards, with new underlayment, flashing, and ventilation. Every replacement includes our lifetime workmanship warranty.",
    highlights: ["Full tear-off — never a roof-over", "Owens Corning Platinum Preferred installation", "Lifetime workmanship warranty", "Factory warranty registration included"],
  },
  {
    icon: Wrench,
    name: "Roof Repair",
    href: "/roof-repair",
    eyebrow: "Emergency Available",
    description:
      "Leaks, missing shingles, failed flashing, damaged valleys. We diagnose the actual source of the problem — not just where it appears inside your home — and fix it permanently. Emergency repair available 7 days a week.",
    highlights: ["Precise leak source detection", "Permanent repair, not temporary patch", "Emergency service 7 days/week", "Backed by workmanship guarantee"],
  },
  {
    icon: Building2,
    name: "Commercial Roofing",
    href: "/commercial-roofing",
    eyebrow: "Licensed to Commercial Limits",
    description:
      "TPO, EPDM, modified bitumen, and metal systems for Austin's commercial properties. We coordinate access with property managers, phase work to minimize business disruption, and provide the documentation your commercial insurance requires.",
    highlights: ["TPO, EPDM, modified bitumen, metal", "Works around your business operations", "Commercial insurance documentation", "ROC #TX-448821 — licensed to commercial limits"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="pt-20 bg-iron border-b border-iron-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BlurFade>
            <span className="eyebrow text-gold block mb-4">Services</span>
            <h1 className="display-xl text-ivory max-w-3xl">Every Roof. Every Need.</h1>
            <p className="text-ivory/60 text-xl mt-6 max-w-2xl">
              Residential and commercial. Repair and replacement. Storm damage and standard maintenance. One contractor. One standard of work.
            </p>
          </BlurFade>
        </div>
      </div>

      <TrustStrip />

      <section className="py-24 bg-iron" aria-label="All services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <BlurFade key={service.href} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 lg:p-10 border border-iron-mid hover:border-gold/30 transition-colors">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Icon size={24} className="text-gold" aria-hidden="true" />
                        <span className="eyebrow text-gold">{service.eyebrow}</span>
                      </div>
                      <h2 className="font-display text-3xl font-bold text-ivory mb-4">{service.name}</h2>
                      <p className="text-ivory/70 text-base leading-relaxed mb-6">{service.description}</p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-dark transition-colors"
                      >
                        Learn more <ArrowRight size={16} />
                      </Link>
                    </div>
                    <div className="lg:w-64 space-y-3">
                      {service.highlights.map((h, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                          <span className="text-ivory/60 text-sm">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </section>

      <CTABand heading="Not Sure What You Need?" subtext="A free inspection takes 30 minutes and gives you a complete picture of your roof's condition." />
    </>
  );
}
