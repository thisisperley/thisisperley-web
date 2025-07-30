"use client";

import Link from "next/link";
import { albums } from "@/data/musicData";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-inter" });

export default function HoldStillPage() {
  const holdStillAlbum = albums.find(album => album.title === "Hold Still");
  
  if (!holdStillAlbum) {
    return <div>Album not found</div>;
  }

  return (
    <div className={`min-h-screen bg-black text-white ${inter.variable}`}>
      {/* Header with Perley logo */}
      <header className="p-6 flex justify-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <img 
            src="/images/perley-logo-hero.png" 
            alt="Perley" 
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
            <div className="w-full aspect-square rounded-2xl overflow-hidden">
              <img 
                src={holdStillAlbum.cover}
                alt={holdStillAlbum.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title and artist */}
          <div className="text-center mb-8">
            <h1 className="font-inter font-bold text-3xl mb-2">{holdStillAlbum.title}</h1>
            <p className="font-inter text-lg text-gray-400">Perley</p>
          </div>

          {/* Streaming platform links */}
          <div className="w-full space-y-3">
          {holdStillAlbum.links.tidal && (
            <a 
              href={holdStillAlbum.links.tidal}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.01 2.019L8.075 5.954 12.01 9.89l3.935-3.936L12.01 2.019zm0 7.871L8.075 13.826l3.935 3.935L15.945 13.826 12.01 9.89zM4.14 9.89l3.935-3.936L4.14 2.019.205 5.954 4.14 9.89zm15.72 0l3.935-3.936L19.86 2.019l-3.935 3.935L19.86 9.89zM8.075 17.761l3.935-3.935 3.935 3.935L12.01 21.697 8.075 17.761z"/>
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

          {holdStillAlbum.links.spotify && (
            <a 
              href={holdStillAlbum.links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
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

          {holdStillAlbum.links.youtubemusic && (
            <a 
              href={holdStillAlbum.links.youtubemusic}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.568 16.82c-.24 1.08-.96 1.68-2.04 1.8C13.64 18.84 12 18.84 12 18.84s-1.64 0-3.528-.22c-1.08-.12-1.8-.72-2.04-1.8C6.24 15.16 6.24 12 6.24 12s0-3.16.18-4.82c.24-1.08.96-1.68 2.04-1.8C10.36 5.16 12 5.16 12 5.16s1.64 0 3.528.22c1.08.12 1.8.72 2.04 1.8.18 1.66.18 4.82.18 4.82s0 3.16-.18 4.82zM10.8 14.4l4.32-2.4L10.8 9.6v4.8z"/>
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

          {holdStillAlbum.links.amazon && (
            <a 
              href={holdStillAlbum.links.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
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

          {holdStillAlbum.links.bandcamp && (
            <a 
              href={holdStillAlbum.links.bandcamp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM9.75 16.5H3.75l4.5-9h6l-4.5 9z"/>
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