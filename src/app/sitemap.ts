import { MetadataRoute } from "next";
import { counties } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://atlantairrigation.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/areas-served`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];

  const countyRoutes: MetadataRoute.Sitemap = counties.map((county) => ({
    url: `${base}/areas-served/${county.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityRoutes: MetadataRoute.Sitemap = counties.flatMap((county) =>
    county.cities.map((city) => ({
      url: `${base}/areas-served/${county.slug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }))
  );

  return [...staticRoutes, ...countyRoutes, ...cityRoutes];
}
