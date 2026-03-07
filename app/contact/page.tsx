import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { BlurFade } from "@/components/magic/BlurFade";

export const metadata: Metadata = {
  title: "Contact Ironclad Roofing Co. | Free Roof Inspection Austin TX",
  description:
    "Contact Ironclad Roofing Co. for a free roof inspection in Austin, TX. Call (512) 000-0000 or fill out our contact form. We respond within 1 business day.",
};

export default function ContactPage() {
  const calcomLink = process.env.NEXT_PUBLIC_CALCOM_LINK ?? "ironclad-roofing/free-roof-inspection";

  return (
    <>
      <div className="pt-20 bg-iron border-b border-iron-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <BlurFade>
            <span className="eyebrow text-gold block mb-4">Get in Touch</span>
            <h1 className="display-xl text-ivory max-w-3xl">Let&apos;s Talk Roofing.</h1>
            <p className="text-ivory/60 text-xl mt-6 max-w-2xl">
              Free inspection. No pressure. Just a straight assessment of your roof from Austin&apos;s most trusted contractor.
            </p>
          </BlurFade>
        </div>
      </div>

      <section className="py-24 bg-iron" aria-label="Contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <BlurFade>
              <div>
                <h2 className="font-display text-2xl font-bold text-ivory mb-2">Send a Request</h2>
                <p className="text-ivory/50 text-sm mb-8">We respond within 1 business day. For urgent issues, call directly.</p>
                <ContactForm />
              </div>
            </BlurFade>

            {/* Right: Info + Booking */}
            <BlurFade delay={0.15}>
              <div className="space-y-8">
                {/* Contact info */}
                <div className="bg-card rounded-2xl p-8 border border-iron-mid">
                  <h2 className="font-display text-2xl font-bold text-ivory mb-6">Contact Info</h2>
                  <ul className="space-y-5">
                    <li>
                      <a href="tel:+15120000000" className="flex items-center gap-4 text-ivory/70 hover:text-gold transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                          <Phone size={16} className="text-gold" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs eyebrow text-ivory/40 mb-0.5">Phone</div>
                          <div className="font-semibold">(512) 000-0000</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:team@ironcladroofingco.com" className="flex items-center gap-4 text-ivory/70 hover:text-ivory transition-colors">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                          <Mail size={16} className="text-gold" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs eyebrow text-ivory/40 mb-0.5">Email</div>
                          <div className="font-semibold">team@ironcladroofingco.com</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center gap-4 text-ivory/70">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                          <MapPin size={16} className="text-gold" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs eyebrow text-ivory/40 mb-0.5">Service Area</div>
                          <div className="font-semibold">Austin & All Surrounding Suburbs</div>
                          <div className="text-xs text-ivory/40 mt-0.5">Cedar Park · Round Rock · Pflugerville · Bee Cave · Georgetown</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-4 text-ivory/70">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                          <Clock size={16} className="text-gold" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs eyebrow text-ivory/40 mb-0.5">Hours</div>
                          <div className="font-semibold">Mon–Sat: 7AM–7PM</div>
                          <div className="text-xs text-ivory/40 mt-0.5">Emergency repairs: 7 days/week</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Cal.com booking */}
                <div className="bg-card rounded-2xl p-8 border border-iron-mid">
                  <h3 className="font-display text-xl font-bold text-ivory mb-2">Book a Free Inspection</h3>
                  <p className="text-ivory/50 text-sm mb-6">Schedule directly on our calendar. 30-minute on-site inspection, no charge.</p>
                  <a
                    href={`https://cal.com/${calcomLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gold text-iron font-bold py-4 rounded-full hover:bg-gold-dark transition-colors"
                  >
                    Book on Cal.com →
                  </a>
                  <p className="text-ivory/30 text-xs text-center mt-3">Opens in Cal.com — no account required</p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </>
  );
}
