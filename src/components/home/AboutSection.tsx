"use client";

import { aboutContent } from "@/data/aboutData";
import { SlideIn } from "@/components/ui";

export const AboutSection = () => {
  return (
    <section className="py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SlideIn staggerDelay={0.1} viewportThreshold={0.05}>
            {aboutContent.paragraphs.map((paragraph, index) => (
              <div key={index} className="mb-6">
                <p className="text-xl leading-relaxed">
                  <span className="bg-[#232323] text-gray-300 px-1 py-0.5 box-decoration-clone">
                    {paragraph}
                  </span>
                </p>
              </div>
            ))}
          </SlideIn>
        </div>
      </div>
    </section>
  );
}; 