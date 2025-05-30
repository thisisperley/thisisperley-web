"use client";

import { League_Spartan } from 'next/font/google';

// Initialize the League Spartan font as a variable font with multiple weights
const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  // Include multiple weights so they can be easily changed via CSS classes
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-league-spartan', // Define a CSS variable
});

export const Hero = () => {
  return (
    <>
      {/* Fixed background */}
      <div className="fixed inset-0 w-full h-screen">
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
      <div className={`${leagueSpartan.variable} relative w-full h-[70vh] flex items-center justify-center`}>
        {/* 
          Try different weights by changing the font-weight class:
          font-light (300), font-normal (400), font-medium (500), 
          font-semibold (600), font-bold (700), font-extrabold (800)
        */}
        <h1 className="font-medium text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] tracking-[0.15em] sm:tracking-[0.2em] leading-none text-white z-10 px-4 font-league-spartan">
          perley
        </h1>
      </div>
    </>
  );
}; 