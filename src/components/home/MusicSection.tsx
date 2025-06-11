"use client";

import { albums } from "@/data/musicData";

export const MusicSection = () => {
  return (
    <section id="music" className="py-24 text-white">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">LATEST RELEASES</h2> */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div 
              key={album.title} 
              className="bg-transparent overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 rounded-none hover:rounded-xl transform hover:scale-105"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={album.cover}
                  alt={album.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pb-8 bg-black h-[130px] flex flex-col justify-between">
                {album.released ? (
                  <>
                    <div>
                      <h3 className="text-xl font-bold">Perley • {album.title}</h3>
                      <p className="text-gray-400">{album.year}</p>
                    </div>
                    <div className="mt-4 flex space-x-4">
                      {album.links.spotify && (
                        <a 
                          href={album.links.spotify} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Listen on Spotify"
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
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM9.75 16.5H3.75l4.5-9h6l-4.5 9z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col h-full justify-center">
                    <p className="text-xl font-bold text-white">Coming Soon</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          {/* <Button size="lg" className="bg-red-600 hover:bg-red-700">
            <a href="#" className="text-white px-6 py-3 text-lg">VIEW ALL MUSIC</a>
          </Button> */}
        </div>
      </div>
    </section>
  );
}; 