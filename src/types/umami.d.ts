// Umami Analytics type definitions
// https://umami.is/docs/tracker-functions

interface UmamiTrackPayload {
  website?: string;
  hostname?: string;
  language?: string;
  referrer?: string;
  screen?: string;
  title?: string;
  url?: string;
}

interface UmamiEventData {
  [key: string]: string | number | boolean;
}

interface Umami {
  track(event?: string): void;
  track(event: string, data: UmamiEventData): void;
  track(payload: UmamiTrackPayload): void;
  track(callback: (props: UmamiTrackPayload) => UmamiTrackPayload): void;
  identify(sessionId: string): void;
  identify(sessionId: string, data: UmamiEventData): void;
  identify(data: UmamiEventData): void;
}

declare global {
  interface Window {
    umami?: Umami;
  }
}

export {};
