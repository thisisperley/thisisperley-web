"use client";

import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/images/perley-web-header.jpg')", 
          backgroundPosition: "center",
          filter: "brightness(0.5)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight">
          ROCK LEGENDS
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Experience the raw power of rock and roll with the most electrifying band on the planet
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
            <a href="#tour" className="w-full h-full inline-flex items-center justify-center">
              TOUR DATES
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
          >
            <a href="#music" className="w-full h-full inline-flex items-center justify-center">
              LATEST ALBUM
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}; 