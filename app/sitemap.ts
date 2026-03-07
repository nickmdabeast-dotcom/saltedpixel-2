import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ironcladroofingco.com";

  const pages = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/storm-damage", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/services", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/roof-replacement", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/roof-repair", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/commercial-roofing", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/about", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/gallery", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/cedar-park", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/round-rock", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/pflugerville", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/bee-cave", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/georgetown", priority: 0.7, changeFreq: "monthly" as const },
  ];

  return pages.map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
