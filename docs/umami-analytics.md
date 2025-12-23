# Umami Analytics Implementation

This document provides comprehensive documentation for the Umami Cloud analytics implementation in the Perley website.

## Overview

The site uses [Umami Cloud](https://umami.is/) for privacy-focused web analytics. Umami is a simple, fast, and privacy-focused alternative to Google Analytics that:

- Does not use cookies
- Does not collect personal data
- Is GDPR compliant
- Provides real-time analytics
- Supports custom event tracking

## Configuration

### Script Loading

The Umami tracking script is loaded in `src/app/layout.tsx`:

```tsx
<Script
  src="https://cloud.umami.is/script.js"
  data-website-id="51e45c2d-d440-460e-a454-b3c005130c1c"
  strategy="afterInteractive"
/>
```

- **strategy="afterInteractive"**: Loads after Next.js hydration for optimal performance
- **data-website-id**: Unique identifier for your Umami Cloud website

### TypeScript Definitions

Type definitions for the Umami global object are in `src/types/umami.d.ts`:

```typescript
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
```

## Automatic Page View Tracking

Umami automatically tracks page views for all pages, including:

- Homepage (`/`)
- Album pages (`/[slug]`)
- Any other routes

No additional configuration is needed for page view tracking.

## Custom Event Tracking

### Reusable Tracking Components

#### TrackedLink

Location: `src/components/ui/TrackedLink.tsx`

A link component that automatically tracks clicks:

```tsx
import { TrackedLink } from "@/components/ui/TrackedLink";

<TrackedLink
  href="https://spotify.com/..."
  eventName="spotify-click"
  eventData={{ album: "Hold Still", source: "footer" }}
  target="_blank"
  rel="noopener noreferrer"
  className="your-classes"
>
  Listen on Spotify
</TrackedLink>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `eventName` | `string` | Yes | The event name to track |
| `eventData` | `Record<string, string \| number \| boolean>` | No | Additional data to send |
| `href` | `string` | Yes | Link destination |
| ...rest | `AnchorHTMLAttributes` | No | Standard anchor props |

#### TrackedStreamingLink

Location: `src/app/[slug]/TrackedStreamingLink.tsx`

A specialized component for streaming platform links on album pages:

```tsx
import { TrackedStreamingLink } from "./TrackedStreamingLink";

<TrackedStreamingLink
  href="https://open.spotify.com/..."
  name="Spotify"
  color="text-green-500"
  icon={<SpotifyIcon />}
  albumTitle="Hold Still"
/>
```

### Direct Tracking

For custom tracking in event handlers, use the global `umami` object:

```tsx
const handleAction = () => {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track("event-name", {
      key1: "value1",
      key2: 123,
      key3: true
    });
  }
};
```

## Tracked Events Reference

### Homepage Events

| Event | Component | Data | Description |
|-------|-----------|------|-------------|
| `streaming-click` | TrackCard | `platform`, `album` | Streaming icon clicks on album cards |
| `album-card-click` | TrackCard | `album`, `year` | Album card navigation clicks |
| `video-play` | VideoSection | `title`, `videoId` | Video play button clicks |
| `event-cta-click` | EventSection | `event`, `date`, `location` | Event/show CTA clicks |
| `social-click` | Footer | `platform` | Social media link clicks |
| `external-link` | Footer | `destination` | External website link clicks |

### Album Page Events

| Event | Component | Data | Description |
|-------|-----------|------|-------------|
| `album-streaming-click` | TrackedStreamingLink | `platform`, `album` | Streaming service link clicks |

## Implementation Examples

### Adding Tracking to a New Link

```tsx
// Before (untracked)
<a href="https://example.com" target="_blank">
  Visit Site
</a>

// After (tracked)
import { TrackedLink } from "@/components/ui/TrackedLink";

<TrackedLink
  href="https://example.com"
  eventName="external-link"
  eventData={{ destination: "example" }}
  target="_blank"
  rel="noopener noreferrer"
>
  Visit Site
</TrackedLink>
```

### Adding Tracking to a Button Action

```tsx
// Before (untracked)
<button onClick={handlePlay}>Play</button>

// After (tracked)
const handlePlay = () => {
  // Track the event
  if (window.umami) {
    window.umami.track("audio-play", { track: "Song Name" });
  }
  // Original logic
  audioRef.current?.play();
};

<button onClick={handlePlay}>Play</button>
```

### Tracking Form Submissions

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (window.umami) {
    window.umami.track("form-submit", {
      form: "contact",
      hasMessage: message.length > 0
    });
  }

  // Submit form logic...
};
```

## Event Naming Conventions

Follow these conventions for consistent event naming:

1. **Use kebab-case**: `streaming-click`, not `streamingClick` or `streaming_click`
2. **Be descriptive**: `album-streaming-click` is better than just `click`
3. **Include context**: `tour-ticket-click` vs just `ticket-click`
4. **Use action verbs**: `video-play`, `form-submit`, `link-click`

## Data Property Conventions

1. **Keep it simple**: Only include relevant data
2. **Use lowercase keys**: `{ album: "Title" }` not `{ Album: "Title" }`
3. **Normalize values**: Use consistent casing (lowercase for platforms)
4. **Avoid PII**: Never track personal identifiable information

## Viewing Analytics

Access your Umami Cloud dashboard at:
- Dashboard: https://cloud.umami.is/

### Available Reports

- **Page Views**: Traffic to each page
- **Events**: Custom event tracking data
- **Referrers**: Where traffic comes from
- **Browsers/Devices**: Visitor technology info
- **Locations**: Geographic distribution
- **Real-time**: Live visitor activity

## Troubleshooting

### Events Not Tracking

1. **Check if script is loaded**: Open browser DevTools > Network > filter for "umami"
2. **Verify window.umami exists**: In console, run `window.umami`
3. **Check for errors**: Look for console errors related to tracking
4. **Ad blockers**: Some ad blockers may block Umami

### Testing Locally

Umami tracks localhost by default. To verify tracking:

1. Open browser DevTools > Network tab
2. Filter for requests to `cloud.umami.is`
3. Trigger an event (click a tracked link)
4. Look for the POST request with event data

### TypeScript Errors

If you see TypeScript errors about `window.umami`:

1. Ensure `src/types/umami.d.ts` exists
2. Check `tsconfig.json` includes the types directory
3. Restart your TypeScript server

## Performance Considerations

- The Umami script is ~2KB gzipped
- Uses `afterInteractive` strategy to not block initial render
- Events are sent asynchronously and don't block user interactions
- No impact on Core Web Vitals

## Privacy & Compliance

Umami is designed for privacy compliance:

- **No cookies**: Does not set any cookies
- **No fingerprinting**: Does not use browser fingerprinting
- **No cross-site tracking**: Only tracks within your domain
- **GDPR compliant**: No consent banner required
- **Data ownership**: All data stored in Umami Cloud

## Resources

- [Umami Documentation](https://umami.is/docs)
- [Umami Tracker Functions](https://umami.is/docs/tracker-functions)
- [Umami Cloud Dashboard](https://cloud.umami.is/)
- [Umami GitHub](https://github.com/umami-software/umami)
