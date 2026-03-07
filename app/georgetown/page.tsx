import type { Metadata } from "next";
import { LocationPageContent } from "@/components/ui/LocationPage";

export const metadata: Metadata = {
  title: "Georgetown Roofing Contractor | Ironclad Roofing Co.",
  description: "Georgetown's trusted roofing contractor. Storm damage, roof replacement, repair. Ironclad Roofing — 14 years, Owens Corning Platinum Preferred. Free inspection. ROC #TX-448821.",
};

export default function GeorgetownPage() {
  return (
    <LocationPageContent
      city="Georgetown"
      county="Williamson"
      heading="Georgetown Roofing Contractor."
      subheading="Serving Georgetown and all of Williamson County. Free inspection. Lifetime workmanship warranty."
      intro="Georgetown's mix of historic homes and fast-growing new construction creates unique roofing demands. Older homes need careful inspection for underlying structural issues; new construction needs the same Owens Corning Platinum standard we bring to every Ironclad install."
    />
  );
}
