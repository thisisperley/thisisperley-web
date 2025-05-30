"use client";

import { Button } from "@/components/ui/Button";
import { tourDates } from "@/data/tourData";

export const TourSection = () => {
  return (
    <section id="tour" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">TOUR DATES</h2>
        
        <div className="max-w-4xl mx-auto">
          {tourDates.map((tour, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center justify-between border-b border-gray-300 py-6 group"
            >
              <div className="flex flex-col md:flex-row items-center md:items-baseline">
                <span className="text-2xl font-bold text-red-600 mb-2 md:mb-0 md:mr-10">{tour.date}</span>
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900">{tour.city}</h3>
                  <p className="text-gray-600">{tour.venue}</p>
                </div>
              </div>
              <Button 
                className="border-2 border-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-white transition-colors"
              >
                <a href={tour.link} className="px-6 py-2">GET TICKETS</a>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-4">Don&apos;t see your city?</p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            <a href="#" className="text-white px-6 py-3 text-lg">VIEW ALL DATES</a>
          </Button>
        </div>
      </div>
    </section>
  );
}; 