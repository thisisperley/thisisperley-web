import { Metadata } from "next";

// Define default metadata for the site
export const defaultMetadata: Metadata = {
  title: {
    default: "This Is Perley",
    template: "%s | This Is Perley",
  },
  description: "Toronto based Perley fuses indie, shoegaze, punk & prog rock with soulful melodies and hard-hitting percussion.",
  keywords: ["perley", "Toronto indie band", "indie rock band", "alternative rock", "experimental,", "Canadian indie artists", "shoegaze", "punk"],
  authors: [{ name: "Perley", url: "https://thisisperley.com" }],
  creator: "Perley",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thisisperley.com",
    title: "This Is Perley",
    description: "Toronto based Perley fuses indie, shoegaze, punk & prog rock with soulful melodies and hard-hitting percussion.",
    siteName: "This Is Perley",
    images: [
      {
        url: "https://thisisperley.com/og-perley.jpg",
        width: 1200,
        height: 630,
        alt: "This Is Perley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "This Is Perley",
    description: "Toronto based Perley fuses indie, shoegaze, punk & prog rock with soulful melodies and hard-hitting percussion.",
    creator: "@thisisperley",
    images: ["https://thisisperley.com/og-perley.jpg"],
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
  const ogImageUrl = ogImage || "https://thisisperley.com/og-perley.jpg";
  
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