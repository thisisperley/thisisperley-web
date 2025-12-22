import { MetadataRoute } from "next";
import { albums } from "@/data/musicData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thisisperley.com";

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  // Dynamically add all released album pages
  const albumRoutes = albums
    .filter((album) => album.released)
    .map((album) => ({
      url: `${baseUrl}/${album.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...routes, ...albumRoutes];
}
