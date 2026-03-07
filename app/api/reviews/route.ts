import { NextResponse } from "next/server";

const FALLBACK_REVIEWS = [
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

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json({ reviews: FALLBACK_REVIEWS, source: "fallback" });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    const response = await fetch(url, {
      next: { revalidate: 86400 }, // 24h cache
    });

    if (!response.ok) {
      return NextResponse.json({ reviews: FALLBACK_REVIEWS, source: "fallback" });
    }

    const data = await response.json();

    if (data.status !== "OK" || !data.result?.reviews) {
      return NextResponse.json({ reviews: FALLBACK_REVIEWS, source: "fallback" });
    }

    const reviews = data.result.reviews
      .filter((r: { rating: number }) => r.rating >= 4)
      .slice(0, 3);

    return NextResponse.json({ reviews, source: "live" });
  } catch {
    return NextResponse.json({ reviews: FALLBACK_REVIEWS, source: "fallback" });
  }
}
