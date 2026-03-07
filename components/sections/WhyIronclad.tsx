import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { BlurFade } from "@/components/magic/BlurFade";

const differentiators = [
  {
    heading: "Owens Corning Platinum Preferred",
    body: "Most roofing companies can install shingles. Few earn Owens Corning's Platinum Preferred designation — it requires documented quality, trained crews, and verified installs. We hold this credential because our work meets the highest standard, not just the minimum.",
    proof: "One of fewer than 1% of contractors in Texas to hold Platinum Preferred status.",
    checkpoints: ["Factory-certified installation", "Enhanced warranty coverage", "Verified quality inspections"],
    image: "/assets/services/replacement-thumb.jpg",
    imageAlt: "Owens Corning Platinum Preferred roof installation",
    imageLeft: false,
  },
  {
    heading: "14 Years. 2,300+ Roofs.",
    body: "Experience is verifiable. Ask us for references in your neighborhood. We have completed over 2,300 roofs across Central Texas and every one of those homeowners knows how to reach us. We do not disappear after the job.",
    proof: "4.9 stars across 340+ Google Reviews from real Austin homeowners.",
    checkpoints: ["Verifiable local references", "Same crew, same standards", "14 years without a single year out of business"],
    image: "/assets/hero/hero-about.jpg",
    imageAlt: "Ironclad Roofing crew on completed roof",
    imageLeft: true,
  },
  {
    heading: "Lifetime Workmanship Warranty",
    body: "Materials have warranties. Workmanship is where contractors hide their shortcuts. Our lifetime workmanship warranty means if anything we installed fails, we come back and fix it. No fine print about transfer conditions. No expiration.",
    proof: "Zero warranty claims left unresolved since 2010.",
    checkpoints: ["Covers all installation defects", "Transferable to new homeowner", "No deductible, no argument"],
    image: "/assets/services/repair-thumb.jpg",
    imageAlt: "Expert roofing repair workmanship",
    imageLeft: false,
  },
];

export function WhyIronclad() {
  return (
    <section className="py-24 bg-iron" aria-label="Why choose Ironclad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="mb-20">
            <span className="eyebrow text-gold block mb-4">Why Ironclad</span>
            <h2 className="display-lg text-ivory max-w-2xl">
              The Difference Is Verifiable.
            </h2>
          </div>
        </BlurFade>

        <div className="space-y-24">
          {differentiators.map((item, i) => (
            <BlurFade key={i} delay={0.1}>
              <div
                className={`flex flex-col ${item.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-16 items-center`}
              >
                {/* Text */}
                <div className="flex-1">
                  <h3 className="display-md text-ivory mb-4">{item.heading}</h3>
                  <p className="text-ivory/70 text-lg leading-relaxed mb-4">{item.body}</p>
                  <p className="text-gold/80 text-sm italic mb-8">{item.proof}</p>
                  <ul className="space-y-3">
                    {item.checkpoints.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-ivory/70 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1 relative aspect-[4/3] rounded-2xl overflow-hidden w-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
