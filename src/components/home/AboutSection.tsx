"use client";

import { Button } from "@/components/ui/Button";
import { aboutContent } from "@/data/aboutData";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* <h2 className="text-4xl md:text-5xl font-bold mb-8">THE BAND</h2> */}
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-xl text-gray-300 mb-6">
                {paragraph}
              </p>
            ))}

            {/* <Button className="bg-red-600 hover:bg-red-700">
              <a href="#" className="text-white px-6 py-3">READ FULL BIO</a>
            </Button> */}
          </div>
          <div className="relative h-[375px] w-[75%] rounded-lg overflow-hidden mx-auto">
            <img 
              src={aboutContent.imageSrc} 
              alt={aboutContent.imageAlt} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}; 