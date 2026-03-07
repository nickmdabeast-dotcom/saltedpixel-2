import type { Metadata } from "next";
import Image from "next/image";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { CTABand } from "@/components/sections/CTABand";
import { BlurFade } from "@/components/magic/BlurFade";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Ironclad Roofing Co. | 14 Years in Austin TX",
  description:
    "Ironclad Roofing Co. — Austin's trusted roofing contractor since 2010. Licensed ROC #TX-448821. Owens Corning Platinum Preferred. 2,300+ roofs completed across Central Texas.",
};

const credentials = [
  { name: "ROC #TX-448821", description: "Licensed, bonded, and insured by the State of Texas. Verified contractor status." },
  { name: "Owens Corning Platinum Preferred", description: "Fewer than 1% of roofing contractors in Texas hold this designation. Earned through verified installs and crew certification." },
  { name: "Licensed & Bonded", description: "Full state licensing and bonding protects you on every project." },
  { name: "Fully Insured", description: "General liability and workers' compensation. You are never at risk on our jobs." },
];

const values = [
  { title: "Transparency First", description: "We tell you what we find, what it means, and what it will cost — before we touch your roof. No surprises on the invoice." },
  { title: "Workmanship Over Volume", description: "We could take more jobs. We choose not to. Every crew member is ours — no subcontractors, ever." },
  { title: "We Stand Behind Our Work", description: "A lifetime warranty is only as good as the company behind it. We have been in Austin since 2010 and plan to be here in 2040." },
];

export default function AboutPage() {
  return (
    <>
      <div className="pt-20 bg-iron border-b border-iron-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BlurFade>
            <span className="eyebrow text-gold block mb-4">About Us</span>
            <h1 className="display-xl text-ivory max-w-3xl">14 Years of Iron-Clad Work.</h1>
          </BlurFade>
        </div>
      </div>

      <TrustStrip />

      {/* Company story */}
      <section className="py-24 bg-iron" aria-label="Company story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <BlurFade>
              <div>
                <span className="eyebrow text-gold block mb-6">Our Story</span>
                <h2 className="display-lg text-ivory mb-8">Built on a Simple Idea.</h2>
                <div className="space-y-6 text-ivory/70 text-lg leading-relaxed">
                  <p>
                    Ironclad Roofing Co. was founded in Austin in 2010 on a belief that had become rare in the local contractor market: that homeowners deserve honest assessments, fixed prices, and work they can verify.
                  </p>
                  <p>
                    We started with residential replacements and repairs. As Austin grew, so did our commercial work. Today we have completed over 2,300 roofing projects across Central Texas — from Bee Cave to Georgetown, from single-family homes to commercial warehouses. Every project has been done by our own crew.
                  </p>
                  <p>
                    We earned Owens Corning Platinum Preferred status not because we applied for it, but because our install quality qualified us. We have maintained it for a decade. Our 4.9-star rating across 340+ Google Reviews is not from a review service — it is from homeowners who know how to reach us and choose to leave one.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.15}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/about/founder.jpg"
                  alt="Ironclad Roofing Co. founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-card border-y border-iron-mid" aria-label="Credentials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="mb-16">
              <span className="eyebrow text-gold block mb-4">Credentials</span>
              <h2 className="display-lg text-ivory max-w-2xl">Verifiable. Not Just Claimed.</h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred, i) => (
              <BlurFade key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-iron rounded-2xl p-6 border border-iron-mid">
                  <CheckCircle size={20} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-display font-bold text-ivory text-lg mb-2">{cred.name}</h3>
                    <p className="text-ivory/60 text-sm leading-relaxed">{cred.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-iron" aria-label="Our values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="mb-16">
              <span className="eyebrow text-gold block mb-4">What We Believe</span>
              <h2 className="display-lg text-ivory max-w-2xl">Three Things We Don&apos;t Compromise On.</h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <BlurFade key={i} delay={i * 0.1}>
                <div>
                  <div className="w-8 h-0.5 bg-gold mb-6" />
                  <h3 className="font-display font-bold text-ivory text-xl mb-4">{value.title}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <ReviewsCarousel />
      <CTABand heading="Ready to Work with Austin's Best?" subtext="Free inspection. No pressure. Just a straight assessment of your roof." />
    </>
  );
}
