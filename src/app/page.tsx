import { WebsiteJsonLd, MusicGroupJsonLd } from "@/components/seo/JsonLd";
import { Hero, MusicSection, VideoSection, AboutSection } from "@/components/home";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <WebsiteJsonLd />
      <MusicGroupJsonLd />
      
      {/* Hero Section (fixed background) */}
      <Hero />
      
      {/* Content that scrolls over the hero */}
      <div className="relative z-10">
        {/* Add some space at the top to initially show the hero */}
        {/* <div className="h-[40vh]" /> */}
        
        {/* Music Section */}
        <MusicSection />
        
        {/* Video Section */}
        <VideoSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
