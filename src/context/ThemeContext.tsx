"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "theme-a" | "theme-b" | "theme-c";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Create context with default values
const defaultThemeContextValue: ThemeContextType = {
  theme: "theme-a",
  setTheme: () => {}, // No-op function for SSR
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContextValue);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("theme-a");

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && ["theme-a", "theme-b", "theme-c"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleThemeChange,
      }}
    >
      <div
        className={`${theme} transition-colors duration-300`}
        suppressHydrationWarning
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
} 