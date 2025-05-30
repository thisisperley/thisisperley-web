"use client";

import { Button } from "@/components/ui/Button";
import { merchItems, merchContent } from "@/data/merchData";

export const MerchSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">{merchContent.title}</h2>
        <p className="text-xl text-gray-700 text-center mb-16 max-w-2xl mx-auto">
          {merchContent.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {merchItems.map((item, index) => (
            <div key={index} className="group">
              <div className="aspect-square bg-gray-200 mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-700 font-medium">{item.name}</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    SHOP NOW
                  </Button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
              <p className="text-red-600 font-medium">{item.price}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            <a href={merchContent.ctaLink} className="text-white px-6 py-3 text-lg">{merchContent.ctaText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}; 