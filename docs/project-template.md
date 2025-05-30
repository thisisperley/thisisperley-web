# Next.js Portfolio Website Template

Create a modern, performant, and SEO-optimized Next.js portfolio website template with the following specifications:

## Core Technologies

- **Framework**: Next.js 15.3.2 with TypeScript
- **React**: React 19 with TypeScript
- **Styling**: TailwindCSS 4.x with custom theming
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Utility Libraries**: clsx, tailwind-merge, class-variance-authority

## Project Structure

### Root Configuration

- TypeScript configuration with path aliases (@ points to src/)
- Next.js config with static export support and image optimization settings
- TailwindCSS config with custom themes and typography extensions
- ESLint and PostCSS configurations
- Package.json with standard scripts (dev, build, start, lint)

### Directory Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml      # FTP deployment workflow
├── public/                 # Static assets including favicons
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout with theme provider
│   │   ├── page.tsx        # Homepage
│   │   ├── globals.css     # Global styles
│   │   ├── metadata.ts     # Centralized site metadata
│   │   ├── manifest.ts     # PWA manifest
│   │   ├── robots.ts       # Robots configuration
│   │   └── sitemap.ts      # Dynamic sitemap generator
│   ├── components/
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   ├── ui/             # Reusable UI components
│   │   ├── home/           # Homepage-specific components
│   │   └── seo/            # SEO components (JsonLd)
│   ├── context/
│   │   └── ThemeContext.tsx # Theme provider with multiple themes
│   ├── data/               # Static content data
│   └── lib/
│       └── utils.ts        # Utility functions
```

## SEO Optimization

- Comprehensive metadata setup with OpenGraph and Twitter cards
- JSON-LD structured data for Person, Organization, Website, and WebPage
- Canonical URLs
- Sitemap generation
- Robots.txt configuration
- Web manifest for PWA support
- Favicons in various sizes

## Theme System

Implement a theme system with these features:
- Client-side theme switching with localStorage persistence
- Three predefined themes (A, B, C) with different color palettes
- CSS variables for dynamic theming
- Theme transition effects

### Theme Colors

Each theme should include:
- Primary colors (with light/dark variants)
- Secondary colors (with light/dark variants)
- Accent colors (with light/dark variants)
- Text colors (primary, secondary, dark)

## CI/CD and Deployment

GitHub Actions workflow for automated deployment:
- Trigger on push to main branch
- Node.js setup with npm caching
- Static export configuration
- FTP deployment using lftp
- Environment secrets for FTP credentials

## Accessibility

- Semantic HTML structure
- Font optimization with next/font
- Keyboard navigation support
- ARIA attributes where appropriate
- Color contrast compliance

## Performance Optimization

- Static site generation for maximum performance
- Optimized images with appropriate sizing
- Font optimization with next/font
- Code splitting and lazy loading
- Minimized JavaScript bundles

## Additional Features

- Responsive design for all device sizes
- Container queries for advanced responsive layouts
- Custom utility classes for consistent spacing
- Dynamic imports for code splitting
- Type safety throughout the codebase

This template should provide a solid foundation for creating a portfolio website with best practices for SEO, performance, and maintainability, while allowing for easy customization of content, theming, and styling.
