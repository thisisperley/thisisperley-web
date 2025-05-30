"use client";

import { useState } from 'react';

type Video = {
  id: string;
  title: string;
};

const videos: Video[] = [
  { id: '8OzA3q4BETk', title: 'Perley Video' },
  { id: 'bb-sfQGfWbU', title: 'Perley Video' },
  { id: 'D6JqxFCIICs', title: 'Perley Video' },
  { id: 'v_CipXgtQEs', title: 'Perley Video' },
  { id: '2iLri7YCZUc', title: 'Perley Video' },
  { id: 'lVJpZ1u7jW4', title: 'Perley Video' },
];

export const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, videoId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleVideoClick(videoId);
    }
  };

  return (
    <section id="videos" className="py-24 bg-[#232323] text-white">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">VIDEOS</h2> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="aspect-video relative overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleVideoClick(video.id)}
              onKeyDown={(e) => handleKeyDown(e, video.id)}
              tabIndex={0}
              aria-label={`Play ${video.title} video`}
            >
              <img 
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={handleCloseModal}
              onKeyDown={(e) => e.key === 'Enter' && handleCloseModal()}
              className="absolute -top-10 right-0 text-white hover:text-red-500 transition-colors"
              aria-label="Close video"
              tabIndex={0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}; 