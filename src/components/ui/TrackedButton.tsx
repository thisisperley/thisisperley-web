"use client";

import { forwardRef, useCallback } from "react";
import { Button, ButtonProps } from "./Button";

export interface TrackedButtonProps extends ButtonProps {
  /** The event name to track (e.g., "signup-click", "play-video") */
  eventName: string;
  /** Additional event data to send with the tracking */
  eventData?: Record<string, string | number | boolean>;
}

/**
 * A button component that automatically tracks clicks with Umami analytics.
 * Extends the base Button component with all its variants.
 *
 * @example
 * <TrackedButton
 *   eventName="newsletter-signup"
 *   eventData={{ source: "footer" }}
 *   variant="default"
 * >
 *   Subscribe
 * </TrackedButton>
 */
const TrackedButton = forwardRef<HTMLButtonElement, TrackedButtonProps>(
  ({ eventName, eventData, onClick, ...props }, ref) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
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

    return <Button ref={ref} onClick={handleClick} {...props} />;
  }
);

TrackedButton.displayName = "TrackedButton";

export { TrackedButton };
