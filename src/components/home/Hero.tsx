"use client";

import { League_Spartan } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Initialize the League Spartan font as a variable font with multiple weights
const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  // Include multiple weights so they can be easily changed via CSS classes
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-league-spartan', // Define a CSS variable
});

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true after component mounts to trigger the blur animation
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Fixed background */}
      <div className="fixed inset-0 w-full h-screen z-0">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/images/perley-web-header-v6.jpg')", 
            backgroundPosition: "center",
            filter: "brightness(1)",
          }}
        />
      </div>
      
      {/* Non-fixed content container that will scroll with the page */}
      <div className={`${leagueSpartan.variable} relative w-full h-[70vh] flex items-start justify-start p-8 md:p-12 lg:p-16 z-10`}>
        {/* Logo container */}
        <div className="relative z-10">
          {/* Visually hidden text for SEO */}
          <h1 className="sr-only">
            perley
          </h1>
          
          {/* Logo image */}
          <Image
            src="/images/perley-logo-hero.png"
            alt="Perley Logo"
            width={503}
            height={248}
            priority
            className="w-[240px] sm:w-[338px] md:w-[413px] lg:w-[503px] h-auto aspect-[670/248] opacity-[0.35]"
            style={{ 
              filter: isLoaded ? 'blur(0)' : 'blur(10px)',
              transition: 'filter 800ms ease-in-out'
            }}
          />
        </div>
      </div>
    </>
  );
}; 