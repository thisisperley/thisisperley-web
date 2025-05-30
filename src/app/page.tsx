import { WebsiteJsonLd, MusicGroupJsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/home/Hero";
import { MusicSection, TourSection, AboutSection, MerchSection } from "@/components/home/Sections";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <WebsiteJsonLd />
      <MusicGroupJsonLd />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Tour Section */}
      {/* <TourSection /> */}
      
      {/* Music Section */}
      <MusicSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Merch Section */}
      {/* <MerchSection /> */}
      
      {/* Footer */}
      <Footer />
    </>
  );
}
