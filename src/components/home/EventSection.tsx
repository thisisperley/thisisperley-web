"use client";

import { Inter } from 'next/font/google';
import { upcomingEvent } from '@/data/eventData';
import { TrackedLink } from '@/components/ui/TrackedLink';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const EventSection = () => {
  if (!upcomingEvent.isActive) {
    return null;
  }

  return (
    <div className={`${inter.className} relative z-20 w-full flex justify-center px-4 sm:px-6 lg:px-8 -mt-8`}>
      <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 max-w-2xl w-full shadow-lg">
        <div className="text-center">
          <h2 className="text-white font-semibold text-lg sm:text-xl mb-2">
            {upcomingEvent.title}
          </h2>
          <div className="text-white/90 text-sm sm:text-base mb-3">
            <div className="font-medium">
              {upcomingEvent.date} • {upcomingEvent.time}
            </div>
            <div className="text-white/70">
              {upcomingEvent.location}
            </div>
          </div>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
            {upcomingEvent.description}
          </p>
          {upcomingEvent.link && (
            <TrackedLink
              href={upcomingEvent.link.url}
              eventName="event-cta-click"
              eventData={{
                event: upcomingEvent.title,
                date: upcomingEvent.date,
                location: upcomingEvent.location
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/40 text-white font-medium py-2 px-4 rounded-md transition-all duration-200 text-sm sm:text-base"
            >
              {upcomingEvent.link.label}
            </TrackedLink>
          )}
        </div>
      </div>
    </div>
  );
};