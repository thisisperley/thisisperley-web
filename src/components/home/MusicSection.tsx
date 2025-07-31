"use client";

import Link from "next/link";
import { albums } from "@/data/musicData";
import { SlideIn } from "@/components/ui";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-inter" });

export const MusicSection = () => {
  return (
    <section id="music" className="py-24 text-white">
      <div className="container mx-auto px-4">
        {/* <SlideIn staggerDelay={0.1} viewportThreshold={0.05}>
          <h2 className="text-6xl md:text-6xl font-bold text-center mb-16">
            <span className="bg-[#232323] text-gray-300 px-6 py-0.5 box-decoration-clone">
              Music
            </span>
          </h2>
        </SlideIn> */}
        <SlideIn className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.2} duration={0.8} viewportThreshold={0.05}>
          {albums.map((album) => {
            const handleCardClick = () => {
              if (album.title === "Hold Still" && album.released) {
                window.location.href = "/hold-still";
              }
            };

            return (
              <article
                key={album.title}
                className={`w-full bg-neutral-900 border border-neutral-800 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-4 ${inter.variable} transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${album.title === "Hold Still" && album.released ? 'cursor-pointer' : ''}`}
                onClick={album.title === "Hold Still" && album.released ? handleCardClick : undefined}
              >
              <div className="aspect-square relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={album.cover}
                  alt={album.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-between flex-1">
                {album.released ? (
                  <>
                    <div>
                      <h3 className="font-inter font-semibold text-2xl md:text-3xl tracking-tight text-white mb-1">Perley • {album.title}</h3>
                      <p className="font-inter text-lg md:text-xl text-white mb-2">{album.year}</p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-4">
                      {album.links.spotify && (
                        <a 
                          href={album.links.spotify} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Listen on Spotify"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                        </a>
                      )}
                      {album.links.bandcamp && (
                        <a 
                          href={album.links.bandcamp} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Listen on Bandcamp"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM9.75 16.5H3.75l4.5-9h6l-4.5 9z"/>
                          </svg>
                        </a>
                      )}
                      {album.links.tidal && (
                        <a 
                          href={album.links.tidal} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Listen on Tidal"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.01 2.019L8.075 5.954 12.01 9.89l3.935-3.936L12.01 2.019zm0 7.871L8.075 13.826l3.935 3.935L15.945 13.826 12.01 9.89zM4.14 9.89l3.935-3.936L4.14 2.019.205 5.954 4.14 9.89zm15.72 0l3.935-3.936L19.86 2.019l-3.935 3.935L19.86 9.89zM8.075 17.761l3.935-3.935 3.935 3.935L12.01 21.697 8.075 17.761z"/>
                          </svg>
                        </a>
                      )}
                      {album.links.youtubemusic && (
                        <a 
                          href={album.links.youtubemusic} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Listen on YouTube Music"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.568 16.82c-.24 1.08-.96 1.68-2.04 1.8C13.64 18.84 12 18.84 12 18.84s-1.64 0-3.528-.22c-1.08-.12-1.8-.72-2.04-1.8C6.24 15.16 6.24 12 6.24 12s0-3.16.18-4.82c.24-1.08.96-1.68 2.04-1.8C10.36 5.16 12 5.16 12 5.16s1.64 0 3.528.22c1.08.12 1.8.72 2.04 1.8.18 1.66.18 4.82.18 4.82s0 3.16-.18 4.82zM10.8 14.4l4.32-2.4L10.8 9.6v4.8z"/>
                          </svg>
                        </a>
                      )}
                      {album.links.amazon && (
                        <a 
                          href={album.links.amazon} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Listen on Amazon Music"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                          </svg>
                        </a>
                      )}
                      {album.links.applemusic && (
                        <a 
                          href={album.links.applemusic} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Listen on Apple Music"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                        </a>
                      )}
                      {album.links.iheartradio && (
                        <a 
                          href={album.links.iheartradio} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Listen on iHeartRadio"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col h-full justify-center">
                    <p className="font-inter font-semibold text-2xl md:text-3xl tracking-tight text-white">Coming Soon</p>
                  </div>
                )}
              </div>
              </article>
            );
          })}
        </SlideIn>
        
        <div className="mt-16 text-center">
          {/* <Button size="lg" className="bg-red-600 hover:bg-red-700">
            <a href="#" className="text-white px-6 py-3 text-lg">VIEW ALL MUSIC</a>
          </Button> */}
        </div>
      </div>
    </section>
  );
}; 