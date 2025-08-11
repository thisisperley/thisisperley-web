"use client";

import { useState } from 'react';
import { videos } from '@/data/videos';
import { SlideInItem } from '@/components/ui';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-inter" });

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // Show only the first video by default, can be modified to show more later
  const visibleVideos = videos.slice(0, 1);
  const videoId = visibleVideos[0]?.id || '';

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleVideoClick();
    }
  };

  return (
    <section id="videos" className="py-24 text-white">
      <div className="container mx-auto px-4">
        <SlideInItem className="flex justify-center items-center" duration={0.8} delay={0.2} viewportThreshold={0.05}>
          <article
            className={`w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] p-8 md:p-12 flex flex-col gap-6 ${inter.variable} transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
          >
            {/* <header>
              <h2 className="font-inter font-semibold text-3xl md:text-4xl tracking-tight text-white mb-2">Featured Video</h2>
              <p className="font-inter text-lg md:text-xl text-white mb-4">Watch our latest performance</p>
            </header> */}
            <section>
              <div 
                className="aspect-video relative overflow-hidden rounded-lg border border-neutral-800 bg-black"
              >
                {!isPlaying ? (
                  <>
                    <img 
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt={visibleVideos[0]?.title || "Video thumbnail"}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer bg-transparent border-none"
                      onClick={handleVideoClick}
                      onKeyDown={handleKeyDown}
                      aria-label={`Play ${visibleVideos[0]?.title || "video"}`}
                    >
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform transition-transform hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  </>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </section>
          </article>
        </SlideInItem>
      </div>
    </section>
  );
}; 