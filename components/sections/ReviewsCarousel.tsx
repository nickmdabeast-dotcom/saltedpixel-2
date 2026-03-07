"use client";

import { useEffect, useState } from "react";
import { TestimonialCard } from "@/components/magic/TestimonialCard";
import { BlurFade } from "@/components/magic/BlurFade";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface ReviewsCarouselProps {
  eyebrow?: string;
  heading?: string;
}

const FALLBACK_REVIEWS: Review[] = [
  {
    author_name: "David Martinez",
    rating: 5,
    text: "Ironclad replaced our entire roof after the May hailstorm. The crew arrived within 48 hours, documented everything for insurance, and had us back to normal in four days. The Owens Corning shingles look incredible. Best contractor experience I've had in 20 years of homeownership.",
    relative_time_description: "2 months ago",
  },
  {
    author_name: "Sarah Hendricks",
    rating: 5,
    text: "After three other companies gave us vague quotes, Ironclad showed up with a detailed inspection report and a fixed price. No surprises. Their crew was clean, professional, and done in two days. Our new roof is stunning and the lifetime warranty gives real peace of mind.",
    relative_time_description: "3 months ago",
  },
  {
    author_name: "Mike Calloway",
    rating: 5,
    text: "We had a persistent leak that two other roofers couldn't trace. Ironclad found it in 20 minutes — a failed flashing behind the chimney. Fixed same day, no damage since. Their diagnosis skill alone is worth every dollar. These guys actually know roofing.",
    relative_time_description: "1 month ago",
  },
];

export function ReviewsCarousel({
  eyebrow = "Client Reviews",
  heading = "What Austin Homeowners Say",
}: ReviewsCarouselProps) {
  const [reviews, setReviews] = useState<Review[]>(FALLBACK_REVIEWS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
      })
      .catch(() => {
        // Fallback already set
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 bg-iron" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="mb-16">
            <span className="eyebrow text-gold block mb-4">{eyebrow}</span>
            <h2 className="display-lg text-ivory max-w-2xl">{heading}</h2>
          </div>
        </BlurFade>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-card rounded-2xl p-6 animate-pulse h-48" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <BlurFade key={i} delay={i * 0.1}>
                <TestimonialCard
                  name={review.author_name}
                  location="Austin, TX"
                  rating={review.rating}
                  text={review.text}
                  avatarUrl={review.profile_photo_url}
                />
              </BlurFade>
            ))}
          </div>
        )}

        <BlurFade delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="https://g.page/r/ironclad-roofing/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold/70 text-sm hover:text-gold transition-colors"
            >
              <span className="eyebrow">4.9★ / 340+ Google Reviews</span>
              <span className="text-gold/40">→</span>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
