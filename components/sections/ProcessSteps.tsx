import { BlurFade } from "@/components/magic/BlurFade";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  heading?: string;
  steps: Step[];
  eyebrow?: string;
}

export function ProcessSteps({ heading = "How It Works", steps, eyebrow }: ProcessStepsProps) {
  return (
    <section className="py-24 bg-iron border-y border-iron-mid" aria-label="Process steps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="mb-16">
            {eyebrow && <span className="eyebrow text-gold block mb-4">{eyebrow}</span>}
            <h2 className="display-lg text-ivory max-w-2xl">{heading}</h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <BlurFade key={step.number} delay={i * 0.1}>
              <div className="relative">
                <div className="font-display font-bold text-gold mb-4" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1 }}>
                  {String(step.number).padStart(2, "0")}
                </div>
                <h3 className="font-display font-bold text-ivory text-xl mb-3">{step.title}</h3>
                <p className="text-ivory/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
