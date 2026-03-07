import type { Metadata } from "next";
import { LocationPageContent } from "@/components/ui/LocationPage";

export const metadata: Metadata = {
  title: "Bee Cave Roofing Contractor | Ironclad Roofing Co.",
  description: "Bee Cave's premium roofing contractor. Storm damage, roof replacement, repair. Ironclad Roofing — 14 years, Owens Corning Platinum Preferred. Free inspection. ROC #TX-448821.",
};

export default function BeeCavePage() {
  return (
    <LocationPageContent
      city="Bee Cave"
      county="Travis"
      heading="Bee Cave Roofing Contractor."
      subheading="Premium roofing for Bee Cave's discerning homeowners. Free inspection. Lifetime warranty."
      intro="Bee Cave homes represent a significant investment — and require a roofing contractor who operates at the same level. Ironclad brings the same precision, materials, and workmanship standard to every Bee Cave project that makes the homes in this community worth what they are."
    />
  );
}
