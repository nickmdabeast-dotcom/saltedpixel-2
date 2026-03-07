import type { Metadata } from "next";
import { LocationPageContent } from "@/components/ui/LocationPage";

export const metadata: Metadata = {
  title: "Round Rock Roofing Contractor | Ironclad Roofing Co.",
  description: "Round Rock's trusted roofing contractor. Storm damage, roof replacement, repair. Ironclad Roofing — 14 years, Owens Corning Platinum Preferred. Free inspection. ROC #TX-448821.",
};

export default function RoundRockPage() {
  return (
    <LocationPageContent
      city="Round Rock"
      county="Williamson"
      heading="Round Rock Roofing Contractor."
      subheading="Serving Round Rock homeowners for 14 years. Free inspection. Lifetime workmanship warranty."
      intro="Round Rock's established neighborhoods and new construction alike require experienced roofing expertise. Ironclad has completed hundreds of projects throughout Round Rock — from the historic downtown neighborhoods to the newer communities near IH-35 — and we know what these roofs need."
    />
  );
}
