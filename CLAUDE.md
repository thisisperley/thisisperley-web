# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based portfolio website for Perley, a Toronto-based indie rock band. The site is built with Next.js 15, React 19, TypeScript, and TailwindCSS 4, and deployed to Vercel.

## Common Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

### Build Configuration
The project is configured via `next.config.ts`:
- `reactStrictMode: true` - Enables React strict mode
- `eslint.ignoreDuringBuilds: true` - Skips ESLint during builds
- Next.js Image optimization enabled with AVIF/WebP formats

### Key Technologies
- **Next.js 15** with App Router (`src/app/`)
- **TailwindCSS 4** for styling with PostCSS
- **Framer Motion** for animations and transitions
- **TypeScript** for type safety
- **Inter font** from Google Fonts

### Component Structure
- `src/components/home/` - Homepage sections (Hero, Music, About, Video, Event)
- `src/components/layout/` - Layout components including ClientThemeLayout
- `src/components/ui/` - Reusable UI components including BlobEffect
- `src/components/seo/` - SEO-related components like JsonLd
- `src/data/` - Static content data files
- `src/context/` - React context providers (ThemeContext)

### Special Features
- **BlobEffect Component**: Interactive mouse-following blob effect with customizable colors, blur amounts, and sizes
- **Theme System**: Built-in theming with CSS custom properties
- **SEO Optimization**: Comprehensive metadata, JSON-LD, sitemap, and robots.txt
- **Static Content Management**: Content stored in TypeScript files in `src/data/`
- **Umami Analytics**: Privacy-focused analytics with custom event tracking

### Analytics (Umami)

The site uses Umami Cloud for privacy-focused analytics. The implementation consists of:

**Configuration:**
- Script loaded in `src/app/layout.tsx` via Next.js `Script` component
- TypeScript definitions in `src/types/umami.d.ts`

**Tracking Components:**
- `src/components/ui/TrackedLink.tsx` - Anchor wrapper with click tracking
- `src/app/[slug]/TrackedStreamingLink.tsx` - Streaming link component for album pages

**Tracked Events:**
| Event | Component | Data |
|-------|-----------|------|
| `streaming-click` | TrackCard | platform, album |
| `album-streaming-click` | TrackedStreamingLink | platform, album |
| `album-card-click` | TrackCard | album, year |
| `video-play` | VideoSection | title, videoId |
| `event-cta-click` | EventSection | event, date, location |
| `social-click` | Footer | platform |
| `external-link` | Footer | destination |

**Adding New Tracking:**
```tsx
// Using TrackedLink
<TrackedLink
  href="/destination"
  eventName="my-event"
  eventData={{ key: "value" }}
>
  Link Text
</TrackedLink>

// Using direct tracking
if (window.umami) {
  window.umami.track("event-name", { key: "value" });
}
```

See `docs/umami-analytics.md` for comprehensive documentation.

### Deployment
- **Vercel**: Automated deployment on push to main branch
- Full Next.js features supported (SSR, ISR, image optimization, etc.)

### Development Notes
- The site uses client-side components for interactive features
- Next.js Image optimization is enabled (AVIF/WebP formats)
- ESLint is configured but ignored during builds
- The project follows Next.js App Router conventions with TypeScript

### Content Management
All content is managed through TypeScript files in `src/data/`:
- `aboutData.ts` - About section content
- `musicData.ts` - Music/discography data
- `videos.ts` - Video content data
- `eventData.ts` - Event/show information

### Styling Approach
- Uses TailwindCSS 4 with modern CSS features
- Custom CSS properties for theming
- Framer Motion for smooth animations
- Mobile-first responsive design