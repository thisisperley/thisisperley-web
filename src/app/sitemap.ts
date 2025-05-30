import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rocklegends.com";
  
  // Define your static pages
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    }
  ] as MetadataRoute.Sitemap;

  return routes;
} 