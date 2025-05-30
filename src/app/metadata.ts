import { Metadata } from "next";

// Define default metadata for the site
export const defaultMetadata: Metadata = {
  title: {
    default: "This Is Perley",
    template: "%s | This Is Perley",
  },
  description: "Perley's personal website and portfolio.",
  keywords: ["perley", "portfolio", "developer", "designer", "creative"],
  authors: [{ name: "Perley", url: "https://thisisperley.com" }],
  creator: "Perley",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thisisperley.com",
    title: "This Is Perley",
    description: "Perley's personal website and portfolio.",
    siteName: "This Is Perley",
    images: [
      {
        url: "https://thisisperley.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "This Is Perley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "This Is Perley",
    description: "Perley's personal website and portfolio.",
    creator: "@thisisperley",
    images: ["https://thisisperley.com/twitter-image.jpg"],
  },
  metadataBase: new URL("https://thisisperley.com"),
};

// Function to create page-specific metadata
export function createMetadata({
  title,
  description,
  path,
  ogImage,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = path ? `https://thisisperley.com${path}` : "https://thisisperley.com";
  const ogImageUrl = ogImage || "https://thisisperley.com/og-image.jpg";
  
  return {
    title: title,
    description: description || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title || defaultMetadata.openGraph?.title,
      description: description || defaultMetadata.openGraph?.description,
      url,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title || "This Is Perley",
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title || defaultMetadata.twitter?.title,
      description: description || defaultMetadata.twitter?.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
} 