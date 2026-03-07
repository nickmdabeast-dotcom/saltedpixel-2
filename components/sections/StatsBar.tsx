import { NumberTicker } from "@/components/magic/NumberTicker";
import { BlurFade } from "@/components/magic/BlurFade";

interface Stat {
  value: string;
  numericValue?: number;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="py-16 bg-card border-y border-iron-mid" aria-label="Key statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <BlurFade key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display font-bold text-gold mb-2" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}>
                  {stat.numericValue !== undefined ? (
                    <NumberTicker value={stat.numericValue} />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="eyebrow text-ivory/50">{stat.label}</div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
