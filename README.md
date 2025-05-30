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
