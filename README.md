# This Is Perley - Portfolio Website

A modern, performant, and SEO-optimized Next.js portfolio website for Perley, showcasing projects, skills, and creative work.

## Features

- **Modern Stack**: Next.js 15, React 19, TypeScript, TailwindCSS 4
- **Performance Optimized**: Static site generation for maximum performance
- **SEO Ready**: Comprehensive metadata, JSON-LD structured data, sitemap
- **Responsive Design**: Fully responsive across all device sizes
- **Themeable**: Built-in theme system with 3 custom themes
- **Accessible**: Semantic HTML, ARIA attributes, keyboard navigation support
- **CI/CD**: Automated deployment via GitHub Actions
- **Interactive UI**: Mouse-following blob effect for enhanced visual experience

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/perley-web.git
   cd perley-web
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

The site is configured for static export and is deployed to GitHub Pages. A GitHub Actions workflow handles the automated deployment process.

The deployment workflow:
1. Builds the Next.js application
2. Exports static files
3. Deploys to GitHub Pages
4. Sets up the custom domain (thisisperley.com)

To set up GitHub Pages deployment:

1. Go to your repository settings
2. Navigate to "Pages"
3. Ensure GitHub Actions is selected as the build and deployment source
4. The custom domain is configured through the CNAME file in the public directory

No additional secrets are required for GitHub Pages deployment as it uses the built-in GITHUB_TOKEN.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment solutions
- TailwindCSS for the utility-first CSS framework
