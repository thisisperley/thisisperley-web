"use client";

import { Button } from "@/components/ui/Button";
import { albums } from "@/data/musicData";

export const MusicSection = () => {
  return (
    <section id="music" className="py-24 bg-[#232323] text-white">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">LATEST RELEASES</h2> */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div key={album.title} className="bg-gray-900 rounded-lg overflow-hidden group hover:bg-gray-800 transition-colors duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={album.cover}
                  alt={album.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end justify-center pb-6">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <a href={album.link} className="text-white px-4 py-2">Listen Now</a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{album.title}</h3>
                <p className="text-gray-400">{album.year}</p>
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