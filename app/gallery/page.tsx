import type { Metadata } from "next";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { CTABand } from "@/components/sections/CTABand";
import { BlurFade } from "@/components/magic/BlurFade";

export const metadata: Metadata = {
  title: "Roofing Gallery | Ironclad Roofing Co. Austin TX",
  description:
    "See completed roofing projects from Ironclad Roofing Co. in Austin, TX. Storm damage repairs, full replacements, commercial roofing, and repairs across Central Texas.",
};

export default function GalleryPage() {
  return (
    <>
      <div className="pt-20 bg-iron border-b border-iron-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BlurFade>
            <span className="eyebrow text-gold block mb-4">Project Gallery</span>
            <h1 className="display-xl text-ivory max-w-3xl">2,300+ Roofs. See the Work.</h1>
            <p className="text-ivory/60 text-xl mt-6 max-w-2xl">
              Every project below was completed by our own crew. No subcontractors. No stock photography.
            </p>
          </BlurFade>
        </div>
      </div>

      <GalleryGrid />

      <CTABand
        heading="Like What You See?"
        subtext="Get a free inspection and let us show you what your roof can look like."
        ctaLabel="Get Free Inspection"
        ctaHref="/contact"
      />
    </>
  );
}
