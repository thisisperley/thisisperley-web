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
    // Add potential future routes with appropriate priorities
    // {
    //   url: `${baseUrl}/music`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/tour`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/merch`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
  ] as MetadataRoute.Sitemap;

  return routes;
} 