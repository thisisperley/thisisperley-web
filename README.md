# This Is Perley - Portfolio Website

A modern, performant, and SEO-optimized Next.js website for the Toronto based indie rock band Perley.

## Features

- **Modern Stack**: Next.js 15, React 19, TypeScript, TailwindCSS 4
- **Performance Optimized**: Server-side rendering with Vercel edge deployment
- **SEO Ready**: Comprehensive metadata, JSON-LD structured data, sitemap
- **Responsive Design**: Fully responsive across all device sizes
- **Themeable**: Built-in theme system with 3 custom themes
- **Accessible**: Semantic HTML, ARIA attributes, keyboard navigation support
- **CI/CD**: Automated deployment via Vercel
- **Interactive UI**: Mouse-following blob effect for enhanced visual experience

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/thisisperley-web.git
   cd thisisperley-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── .github/workflows/ # GitHub Actions workflows for CI/CD
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # React components
│   ├── context/       # React context providers
│   ├── data/          # Static content data
│   └── lib/           # Utility functions
```

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm start`: Start the production server
- `npm run lint`: Lint the codebase

## Customization

### Themes

The website includes three built-in themes:
- **Theme A**: Blue-based color scheme
- **Theme B**: Green-based color scheme
- **Theme C**: Purple-based color scheme

You can customize the themes by editing the CSS variables in `src/app/globals.css`.

### Mouse-following Blob Effect

The website includes an interactive blob effect that follows the user's mouse cursor. This effect is implemented in the `BlobEffect` component and can be customized with the following properties:

#### Basic Usage

The BlobEffect component is implemented in `src/components/layout/ClientThemeLayout.tsx`:

```tsx
<BlobEffect 
  blobColors={{
    blob1: "rgba(120, 0, 255, 0.3), rgba(0, 128, 255, 0.3), rgba(128, 255, 0, 0.3)",
    blob2: "rgba(255, 140, 0, 0.3), rgba(255, 0, 255, 0.3), rgba(0, 255, 255, 0.3)",
    blob3: "rgba(0, 255, 255, 0.3), rgba(255, 255, 0, 0.3), rgba(0, 255, 0, 0.3)"
  }}
  blurAmount={{
    blob1: 120,
    blob2: 100,
    blob3: 80
  }}
/>
```

#### Customization Options

- **blobColors**: Define the gradient colors for each of the three blobs
- **blurAmount**: Set the blur intensity for each blob (in pixels)
- **sizes**: Adjust the size of each blob (in pixels)
- **throttleAmount**: Control the performance vs. smoothness of the mouse tracking (in milliseconds)
- **className**: Add additional CSS classes to the container element

#### Disabling the Effect

To disable the blob effect, simply remove or comment out the `<BlobEffect />` component in `src/components/layout/ClientThemeLayout.tsx`.

### Content

Update the content by modifying:
- Static content in `src/data/`
- Metadata in `src/app/metadata.ts`
- SEO components in `src/components/seo/`

## Deployment

The site is deployed to Vercel with automatic deployments on push to the main branch. Vercel provides:
- Automatic builds and deployments
- Preview deployments for pull requests
- Edge network distribution
- Full Next.js feature support (SSR, ISR, image optimization)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Developed by [@rocket5](https://github.com/rocket5) of [Rocket 5 Studios](https://rocket5studios.com/)
