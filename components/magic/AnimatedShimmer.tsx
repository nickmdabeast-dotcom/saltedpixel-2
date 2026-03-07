'use client';

// No external deps — pure CSS animation via Tailwind arbitrary values.
// Renders a shimmer sweep over child content; ideal as a hero accent or
// badge highlight for the Ironclad brand gold (#D4A853).

interface AnimatedShimmerProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedShimmer({ children, className = '' }: AnimatedShimmerProps) {
  return (
    <span
      className={`relative inline-block overflow-hidden ${className}`}
      aria-hidden="false"
    >
      {children}
      {/* Shimmer overlay */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_2.2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          animationTimingFunction: 'linear',
        }}
      />
      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </span>
  );
}

// --- Gradient border card variant for service cards ---
// Usage: wrap any <div> content in <GradientBorderCard>

interface GradientBorderCardProps {
  children: React.ReactNode;
  className?: string;
  /** Border gradient. Defaults to Ironclad gold. */
  gradient?: string;
}

export function GradientBorderCard({
  children,
  className = '',
  gradient = 'linear-gradient(135deg, #D4A853 0%, #1C1C1E 50%, #D4A853 100%)',
}: GradientBorderCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-[1.5px] ${className}`}
      style={{ background: gradient }}
    >
      <div className="relative z-10 rounded-2xl bg-[#1C1C1E] h-full w-full">
        {children}
      </div>
    </div>
  );
}
