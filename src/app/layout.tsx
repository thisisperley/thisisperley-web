import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ClientThemeLayout } from "@/components/layout/ClientThemeLayout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Perley",
    template: "%s | Perley",
  },
  description: "Toronto based Perley fuses indie, shoegaze, punk & prog rock with soulful melodies and hard-hitting percussion.",
  keywords: ["perley", "Toronto indie band", "indie rock band", "alternative rock", "experimental", "Canadian indie artists", "shoegaze", "punk"],
  authors: [{ name: "Perley", url: "https://thisisperley.com" }],
  creator: "Perley",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thisisperley.com",
    title: "Perley",
    description: "Toronto based Perley fuses indie, shoegaze, punk & prog rock with soulful melodies and hard-hitting percussion.",
    siteName: "Perley",
    images: [
      {
        url: "https://thisisperley.com/og-perley.jpg",
        width: 1200,
        height: 630,
        alt: "Perley",
      },
    ],
  },
  alternates: {
    canonical: "https://thisisperley.com",
    types: {
      "application/rss+xml": "https://thisisperley.com/rss.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perley",
    description: "Toronto based Perley fuses indie, shoegaze, punk & prog rock with soulful melodies and hard-hitting percussion.",
    creator: "@thisisperley",
    images: ["https://thisisperley.com/og-perley.jpg"],
  },
  other: {
    "instagram:username": "@thisisperley",
  },
  metadataBase: new URL("https://thisisperley.com"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#121212" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased flex flex-col">
        <ClientThemeLayout>{children}</ClientThemeLayout>
      </body>
    </html>
  );
}
