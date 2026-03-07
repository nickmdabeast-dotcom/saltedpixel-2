import { Phone } from "lucide-react";

export function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden" role="complementary" aria-label="Call now">
      <a
        href="tel:+15120000000"
        className="flex items-center justify-center gap-3 w-full bg-gold text-iron font-bold py-4 text-lg active:bg-gold-dark transition-colors"
      >
        <Phone size={20} aria-hidden="true" />
        Call Now: (512) 000-0000
      </a>
    </div>
  );
}
