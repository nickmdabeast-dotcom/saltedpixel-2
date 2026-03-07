import type { Metadata } from "next";
import { LocationPageContent } from "@/components/ui/LocationPage";

export const metadata: Metadata = {
  title: "Pflugerville Roofing Contractor | Ironclad Roofing Co.",
  description: "Pflugerville's trusted roofing contractor. Storm damage, roof replacement, repair. Ironclad Roofing — 14 years, Owens Corning Platinum Preferred. Free inspection. ROC #TX-448821.",
};

export default function PflugervillePage() {
  return (
    <LocationPageContent
      city="Pflugerville"
      county="Travis"
      heading="Pflugerville Roofing Contractor."
      subheading="Trusted Pflugerville roofing since 2010. Free inspection. Lifetime workmanship warranty."
      intro="Pflugerville sits in one of Central Texas's most active storm corridors. Hail season consistently brings significant damage to this area, and Ironclad has been the first call for hundreds of Pflugerville homeowners navigating storm damage claims and roof replacements."
    />
  );
}
