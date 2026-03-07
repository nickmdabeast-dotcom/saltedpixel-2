import type { Metadata } from "next";
import { LocationPageContent } from "@/components/ui/LocationPage";

export const metadata: Metadata = {
  title: "Cedar Park Roofing Contractor | Ironclad Roofing Co.",
  description: "Cedar Park's trusted roofing contractor. Storm damage, roof replacement, repair. Ironclad Roofing — 14 years, Owens Corning Platinum Preferred. Free inspection. ROC #TX-448821.",
};

export default function CedarParkPage() {
  return (
    <LocationPageContent
      city="Cedar Park"
      county="Williamson"
      heading="Cedar Park Roofing Contractor."
      subheading="14 years protecting Cedar Park homes. Free inspection. Lifetime workmanship warranty."
      intro="Cedar Park's rapid growth has brought a mix of newer construction and aging roofs that need attention before the next hail season. Ironclad has worked throughout Cedar Park's neighborhoods — from Buttercup Creek to Ranch at Brushy Creek — and we understand the specific roofing challenges this community faces."
    />
  );
}
