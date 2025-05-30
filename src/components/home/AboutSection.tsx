"use client";

import { aboutContent } from "@/data/aboutData";

export const AboutSection = () => {
  return (
    <section className="py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="inline text-xl mb-6 leading-relaxed">
              <span className="bg-[#232323] text-gray-300 px-1 py-0.5 box-decoration-clone">
                {paragraph}
              </span>
              <br /><br />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}; 