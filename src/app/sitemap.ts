import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thisisperley.com";
  
  // Define your static pages
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/hold-still`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/holidark`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ] as MetadataRoute.Sitemap;

  return routes;
} 