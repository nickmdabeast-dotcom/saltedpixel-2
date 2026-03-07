import { Shield, Home, Award, Star, CheckCircle, Infinity } from "lucide-react";
import { NumberTicker } from "@/components/magic/NumberTicker";

const trustItems = [
  { icon: Home, label: "Years in Business", value: 14, suffix: "", prefix: "" },
  { icon: Shield, label: "Roofs Completed", value: 2300, suffix: "+", prefix: "" },
  { icon: Award, label: "OC Platinum Preferred", value: null, suffix: "", prefix: "", static: "Certified" },
  { icon: Star, label: "Google Reviews", value: 340, suffix: "+", prefix: "4.9★ / " },
  { icon: CheckCircle, label: "Licensed & Insured", value: null, suffix: "", prefix: "", static: "ROC #TX-448821" },
  { icon: Infinity, label: "Workmanship Warranty", value: null, suffix: "", prefix: "", static: "Lifetime" },
];

export function TrustStrip() {
  return (
    <section className="bg-iron border-y border-iron-mid py-6 lg:py-8" aria-label="Trust signals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-0 lg:divide-x lg:divide-iron-mid">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center px-3 py-2 gap-1.5">
                <Icon size={18} className="text-gold" aria-hidden="true" />
                <div className="text-ivory font-display font-bold text-sm leading-tight">
                  {item.value !== null ? (
                    <>
                      {item.prefix}
                      <NumberTicker value={item.value} className="tabular-nums" />
                      {item.suffix}
                    </>
                  ) : (
                    item.static
                  )}
                </div>
                <div className="eyebrow text-ivory/40 text-[0.65rem] leading-tight">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
