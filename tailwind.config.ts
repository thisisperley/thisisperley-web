import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          dark: "var(--text-dark)",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "var(--foreground)",
            a: {
              color: "var(--primary)",
              "&:hover": {
                color: "var(--primary-dark)",
              },
            },
            h1: { color: "var(--foreground)" },
            h2: { color: "var(--foreground)" },
            h3: { color: "var(--foreground)" },
            h4: { color: "var(--foreground)" },
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss/plugin")(({ addBase }: { addBase: (styles: Record<string, Record<string, string>>) => void }) => {
    addBase({
      ":root": {
        "--radius": "0.5rem",
      },
    });
  })],
};

export default config; 