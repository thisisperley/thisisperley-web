"use client";

import { useCallback } from "react";

interface TrackedStreamingLinkProps {
  href: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  albumTitle: string;
}

export function TrackedStreamingLink({ href, name, color, icon, albumTitle }: TrackedStreamingLinkProps) {
  const handleClick = useCallback(() => {
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track("album-streaming-click", {
        platform: name.toLowerCase().replace(/\s+/g, "-"),
        album: albumTitle,
      });
    }
  }, [name, albumTitle]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex items-center justify-between w-full p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-colors group"
    >
      <div className="flex items-center space-x-4">
        <div className={`w-8 h-8 flex items-center justify-center ${color}`}>
          {icon}
        </div>
        <span className="font-inter font-medium text-lg">{name}</span>
      </div>
      <div className="text-gray-400 group-hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </div>
    </a>
  );
}
