"use client";

import { useState } from 'react';
import { videos } from '@/data/videos';
import { SlideInItem } from '@/components/ui';

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
        {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">VIDEOS</h2> */}
        
        <SlideInItem className="max-w-3xl mx-auto" viewportThreshold={0.05}>
          <div 
            className="bg-black p-4 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 rounded-none hover:rounded-xl transform hover:scale-105"
          >
            <div className="aspect-video relative overflow-hidden">
              {!isPlaying ? (
                <>
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={visibleVideos[0]?.title || "Video thumbnail"}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={handleVideoClick}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    aria-label={`Play ${visibleVideos[0]?.title || "video"}`}
                  >
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform transition-transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </SlideInItem>
      </div>
    </section>
  );
}; 