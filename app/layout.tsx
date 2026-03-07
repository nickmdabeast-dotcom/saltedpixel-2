import type { Metadata } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ironcladroofingco.com"),
  title: {
    default: "Ironclad Roofing Co. | Austin's Premier Roofing Contractor",
    template: "%s | Ironclad Roofing Co.",
  },
  description:
    "14 years serving Austin, TX. Storm damage, roof replacement, repair & commercial roofing. Owens Corning Platinum Preferred. 4.9★ / 340+ Google Reviews. Free inspections.",
  openGraph: {
    siteName: "Ironclad Roofing Co.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Ironclad Roofing Co.",
  url: "https://ironcladroofingco.com",
  telephone: "+15120000000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78701",
    addressCountry: "US",
  },
  areaServed: [
    "Austin, TX",
    "Cedar Park, TX",
    "Round Rock, TX",
    "Pflugerville, TX",
    "Bee Cave, TX",
    "Georgetown, TX",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "340",
    bestRating: "5",
  },
  hasCredential: [
    "ROC #TX-448821",
    "Owens Corning Platinum Preferred Contractor",
  ],
  foundingDate: "2010",
  slogan: "Protecting Austin Roofs Since 2010",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${workSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="bg-iron text-ivory antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
