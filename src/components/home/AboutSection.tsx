"use client";

import { aboutContent } from "@/data/aboutData";
import { SlideIn } from "@/components/ui";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-inter" });

export const AboutSection = () => {
  return (
    <section className="py-24 text-white">
      <div className="container mx-auto px-4">
        <SlideIn duration={0.8} staggerDelay={0.2} className="flex justify-center items-center" viewportThreshold={0.05}>
          <article
            className={`w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] p-8 md:p-12 flex flex-col gap-6 ${inter.variable} transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
          >
            {/* <header>
              <h2 className="font-inter font-semibold text-3xl md:text-4xl tracking-tight text-white mb-2">About Perley</h2>
              <p className="font-inter text-lg md:text-xl text-white mb-4">Toronto-based indie rock band</p>
            </header> */}
            <section>
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg text-gray-300 font-sans mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </section>
          </article>
        </SlideIn>
      </div>
    </section>
  );
}; 