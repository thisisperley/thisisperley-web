import Link from "next/link";
import Image from "next/image";
import { albums } from "@/data/musicData";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-inter" });

// This tells Next.js to generate this page at build time for static export
export function generateStaticParams() {
  return [{}];
}

export const metadata: Metadata = {
  title: "Holidark",
  description: "Holidark by Perley - Listen to the new single from Toronto indie rock band Perley on Spotify, Bandcamp, Tidal, YouTube Music, Amazon Music, and Apple Music.",
  keywords: ["Holidark", "Perley", "Toronto indie band", "indie rock", "new single", "streaming", "music"],
  openGraph: {
    title: "Holidark | Perley",
    description: "Holidark by Perley - Listen to the new single from Toronto indie rock band Perley on all major streaming platforms.",
    url: "https://thisisperley.com/holidark",
    type: "music.song",
    images: [
      {
        url: "https://thisisperley.com/images/perley-single-holidark.webp",
        width: 1200,
        height: 1200,
        alt: "Holidark by Perley - Album Cover",
      },
    ],
    siteName: "Perley",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holidark | Perley",
    description: "Holidark by Perley - Listen to the new single from Toronto indie rock band Perley on all major streaming platforms.",
    images: ["https://thisisperley.com/images/perley-single-holidark.webp"],
    creator: "@thisisperley",
  },
  alternates: {
    canonical: "https://thisisperley.com/holidark",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HolidarkPage() {
  const holidarkAlbum = albums.find(album => album.slug === "holidark");

  if (!holidarkAlbum) {
    return <div>Album not found</div>;
  }

  const musicRecordingJsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: "Holidark",
    byArtist: {
      "@type": "MusicGroup",
      name: "Perley",
      url: "https://thisisperley.com",
    },
    datePublished: "2025",
    genre: ["Indie", "Shoegaze", "Punk", "Prog Rock"],
    url: "https://thisisperley.com/holidark",
    image: "https://thisisperley.com/images/perley-single-holidark.webp",
    sameAs: [
      holidarkAlbum.links.spotify,
      holidarkAlbum.links.bandcamp,
      holidarkAlbum.links.tidal,
      holidarkAlbum.links.youtubemusic,
      holidarkAlbum.links.amazon,
      holidarkAlbum.links.applemusic,
    ].filter(Boolean),
  };

  return (
    <div className={`min-h-screen bg-black text-white ${inter.variable}`}>
      <JsonLd data={musicRecordingJsonLd} />
      {/* Header with Perley logo */}
      <header className="p-6 flex justify-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/images/perley-logo-hero.png"
            alt="Perley"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center px-6 pb-20">
        {/* Card container */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl max-w-sm w-full">
          {/* Album artwork */}
          <div className="mb-8">
            <div className="w-full aspect-square rounded-2xl overflow-hidden relative">
              <Image
                src={holidarkAlbum.cover}
                alt={holidarkAlbum.title}
                fill
                sizes="(max-width: 640px) 100vw, 384px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Title and artist */}
          <div className="text-center mb-8">
            <h1 className="font-inter font-bold text-3xl mb-2">{holidarkAlbum.title}</h1>
            <p className="font-inter text-lg text-gray-400">Perley</p>
          </div>

          {/* Streaming platform links */}
          <div className="w-full space-y-3">
            {holidarkAlbum.links.bandcamp && (
              <a
                href={holidarkAlbum.links.bandcamp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-colors group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM9.75 16.5H3.75l4.5-9h6l-4.5 9z" />
                    </svg>
                  </div>
                  <span className="font-inter font-medium text-lg">Bandcamp</span>
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </div>
              </a>
            )}
            {holidarkAlbum.links.tidal && (
              <a
                href={holidarkAlbum.links.tidal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-colors group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.01 2.019L8.075 5.954 12.01 9.89l3.935-3.936L12.01 2.019zm0 7.871L8.075 13.826l3.935 3.935L15.945 13.826 12.01 9.89zM4.14 9.89l3.935-3.936L4.14 2.019.205 5.954 4.14 9.89zm15.72 0l3.935-3.936L19.86 2.019l-3.935 3.935L19.86 9.89zM8.075 17.761l3.935-3.935 3.935 3.935L12.01 21.697 8.075 17.761z" />
                    </svg>
                  </div>
                  <span className="font-inter font-medium text-lg">TIDAL</span>
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </div>
              </a>
            )}

            {holidarkAlbum.links.spotify && (
              <a
                href={holidarkAlbum.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-colors group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </div>
                  <span className="font-inter font-medium text-lg">Spotify</span>
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </div>
              </a>
            )}

            {holidarkAlbum.links.youtubemusic && (
              <a
                href={holidarkAlbum.links.youtubemusic}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-colors group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.568 16.82c-.24 1.08-.96 1.68-2.04 1.8C13.64 18.84 12 18.84 12 18.84s-1.64 0-3.528-.22c-1.08-.12-1.8-.72-2.04-1.8C6.24 15.16 6.24 12 6.24 12s0-3.16.18-4.82c.24-1.08.96-1.68 2.04-1.8C10.36 5.16 12 5.16 12 5.16s1.64 0 3.528.22c1.08.12 1.8.72 2.04 1.8.18 1.66.18 4.82.18 4.82s0 3.16-.18 4.82zM10.8 14.4l4.32-2.4L10.8 9.6v4.8z" />
                    </svg>
                  </div>
                  <span className="font-inter font-medium text-lg">Youtube Music</span>
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </div>
              </a>
            )}

            {holidarkAlbum.links.amazon && (
              <a
                href={holidarkAlbum.links.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-colors group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center text-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  </div>
                  <span className="font-inter font-medium text-lg">Amazon Music</span>
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </div>
              </a>
            )}

            {holidarkAlbum.links.applemusic && (
              <a
                href={holidarkAlbum.links.applemusic}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-colors group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <span className="font-inter font-medium text-lg">Apple Music</span>
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </div>
              </a>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2025 Perley</p>
        </footer>
      </main>
    </div>
  );
}
