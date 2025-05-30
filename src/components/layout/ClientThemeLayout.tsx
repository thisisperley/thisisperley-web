"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";

interface ClientThemeLayoutProps {
  children: ReactNode;
}

export const ClientThemeLayout = ({ children }: ClientThemeLayoutProps) => {
  return (
    <ThemeProvider>
      <main className="flex-1">{children}</main>
    </ThemeProvider>
  );
}; 