"use client";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/images/perley-web-header-v2.jpg')", 
          backgroundPosition: "center",
          filter: "brightness(1)"
        }}
      />
      
      {/* Hidden heading for SEO */}
      <h1 className="sr-only">PERLEY</h1>
    </div>
  );
}; 