# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based portfolio website for Perley, a Toronto-based indie rock band. The site is built with Next.js 15, React 19, TypeScript, and TailwindCSS 4, configured for static export and deployed to an FTP server via GitHub Actions.

## Common Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build for production (static export to `/out` directory)
- `npm start` - Start production server (rarely used due to static export)
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

### Static Export Configuration
The project is configured for static export via `next.config.ts`:
- `output: 'export'` - Generates static HTML files
- `distDir: 'out'` - Output directory for built files
- `images.unoptimized: true` - Required for static export
- `eslint.ignoreDuringBuilds: true` - Skips ESLint during builds

### Key Technologies
- **Next.js 15** with App Router (`src/app/`)
- **TailwindCSS 4** for styling with PostCSS
- **Framer Motion** for animations and transitions
- **TypeScript** for type safety
- **Inter font** from Google Fonts

### Component Structure
- `src/components/home/` - Homepage sections (Hero, Music, Tour, etc.)
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

### Deployment
- **GitHub Actions**: Automated deployment on push to main branch
- **FTP Deployment**: Uses SamKirkland/FTP-Deploy-Action@v4.3.4
- **Static Export**: Files are built to `/out` and deployed to FTP server
- **Required Secrets**: FTP_SERVER, FTP_USERNAME, FTP_PASSWORD, FTP_SERVER_DIR

### Development Notes
- The site uses client-side components for interactive features
- Images are unoptimized due to static export requirements
- ESLint is configured but ignored during builds
- The project follows Next.js App Router conventions with TypeScript

### Content Management
All content is managed through TypeScript files in `src/data/`:
- `aboutData.ts` - About section content
- `musicData.ts` - Music/discography data
- `tourData.ts` - Tour dates and venues
- `merchData.ts` - Merchandise information
- `videos.ts` - Video content data

### Styling Approach
- Uses TailwindCSS 4 with modern CSS features
- Custom CSS properties for theming
- Framer Motion for smooth animations
- Mobile-first responsive design