"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import BlobEffect from "@/components/ui/BlobEffect";

interface ClientThemeLayoutProps {
  children: ReactNode;
}

export const ClientThemeLayout = ({ children }: ClientThemeLayoutProps) => {
  return (
    <ThemeProvider>
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
      <main className="flex-1">{children}</main>
    </ThemeProvider>
  );
}; 