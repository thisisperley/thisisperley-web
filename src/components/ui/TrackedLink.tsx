"use client";

import { AnchorHTMLAttributes, forwardRef, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The event name to track (e.g., "spotify-click", "tour-ticket") */
  eventName: string;
  /** Additional event data to send with the tracking */
  eventData?: Record<string, string | number | boolean>;
}

/**
 * A link component that automatically tracks clicks with Umami analytics.
 *
 * @example
 * <TrackedLink
 *   href="https://spotify.com/..."
 *   eventName="spotify-click"
 *   eventData={{ album: "Hold Still" }}
 * >
 *   Listen on Spotify
 * </TrackedLink>
 */
const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  ({ eventName, eventData, onClick, className, children, ...props }, ref) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Track the event with Umami
        if (typeof window !== "undefined" && window.umami) {
          if (eventData) {
            window.umami.track(eventName, eventData);
          } else {
            window.umami.track(eventName);
          }
        }
        // Call the original onClick handler if provided
        onClick?.(e);
      },
      [eventName, eventData, onClick]
    );

    return (
      <a
        ref={ref}
        className={cn(className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }
);

TrackedLink.displayName = "TrackedLink";

export { TrackedLink };
