"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
  src: string;
  alt: string;
  category: "storm" | "replacement" | "repair" | "commercial";
}

const galleryImages: GalleryImage[] = [
  { src: "/assets/gallery/storm-01.jpg", alt: "Storm damage documentation on Austin roof", category: "storm" },
  { src: "/assets/gallery/storm-02.jpg", alt: "Hail damage inspection by Ironclad crew", category: "storm" },
  { src: "/assets/gallery/storm-03.jpg", alt: "Completed roof after storm damage repair", category: "storm" },
  { src: "/assets/gallery/replace-01.jpg", alt: "New architectural shingle roof replacement", category: "replacement" },
  { src: "/assets/gallery/replace-02.jpg", alt: "Roof replacement in progress", category: "replacement" },
  { src: "/assets/gallery/replace-03.jpg", alt: "Completed luxury home roof replacement", category: "replacement" },
  { src: "/assets/gallery/repair-01.jpg", alt: "Expert chimney flashing repair", category: "repair" },
  { src: "/assets/gallery/repair-02.jpg", alt: "Roof leak repair completed", category: "repair" },
  { src: "/assets/gallery/commercial-01.jpg", alt: "Commercial TPO flat roof installation", category: "commercial" },
  { src: "/assets/gallery/commercial-02.jpg", alt: "Commercial roof inspection", category: "commercial" },
];

const categories = [
  { key: "all" as const, label: "All Work" },
  { key: "storm" as const, label: "Storm Damage" },
  { key: "replacement" as const, label: "Replacement" },
  { key: "repair" as const, label: "Repair" },
  { key: "commercial" as const, label: "Commercial" },
];

type Category = "all" | "storm" | "replacement" | "repair" | "commercial";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const lightboxSlides = filtered.map((img) => ({
    src: img.src,
    alt: img.alt,
    width: 1200,
    height: 800,
  }));

  return (
    <section className="py-24 bg-iron" aria-label="Project gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`eyebrow px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === cat.key
                  ? "bg-gold text-iron"
                  : "border border-iron-mid text-ivory/50 hover:text-ivory hover:border-ivory/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((image, i) => (
            <button
              key={image.src}
              onClick={() => setLightboxIndex(i)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={`View ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-iron/0 group-hover:bg-iron/20 transition-colors" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={lightboxSlides}
          styles={{
            container: { backgroundColor: "rgba(28, 28, 30, 0.97)" },
          }}
        />
      </div>
    </section>
  );
}
