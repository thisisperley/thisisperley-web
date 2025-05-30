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
  description: "Official website of Perley - Experience the sound of legends.",
  keywords: ["rock band", "music", "concerts", "albums", "perley"],
  authors: [{ name: "Perley", url: "https://thisisperley.com" }],
  creator: "Perley",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thisisperley.com",
    title: "Perley",
    description: "Official website of Perley - Experience the sound of legends.",
    siteName: "Perley",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perley",
    description: "Official website of Perley - Experience the sound of legends.",
    creator: "@rocklegends",
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
