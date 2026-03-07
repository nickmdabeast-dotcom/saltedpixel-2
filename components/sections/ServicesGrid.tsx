import Link from "next/link";
import { CloudLightning, Home, Wrench, Building2, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/magic/BlurFade";

const services = [
  {
    icon: CloudLightning,
    name: "Storm Damage",
    description: "Hail. Wind. Water intrusion. We respond within 48 hours, document every inch of damage, and coordinate directly with your insurance adjuster.",
    href: "/storm-damage",
  },
  {
    icon: Home,
    name: "Roof Replacement",
    description: "Complete tear-off and replacement using Owens Corning architectural shingles. Installed by our Platinum Preferred crew. Backed by a lifetime workmanship warranty.",
    href: "/roof-replacement",
  },
  {
    icon: Wrench,
    name: "Roof Repair",
    description: "Leaks stopped fast. Flashing, shingles, seals — we fix the problem, not just the symptom. Emergency repairs available 7 days a week.",
    href: "/roof-repair",
  },
  {
    icon: Building2,
    name: "Commercial Roofing",
    description: "TPO, EPDM, modified bitumen, metal. We service Austin's commercial properties with the same precision and accountability as our residential work.",
    href: "/commercial-roofing",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-iron" aria-label="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="mb-16">
            <span className="eyebrow text-gold block mb-4">What We Do</span>
            <h2 className="display-lg text-ivory max-w-2xl">
              Every Roof. Every Need.
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <BlurFade key={service.href} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group block bg-card rounded-2xl p-8 border border-iron-mid hover:border-gold/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,83,0.08)]"
                >
                  <Icon size={28} className="text-gold mb-6" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-ivory mb-3 group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-ivory/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-sm font-semibold">
                    Learn more
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
