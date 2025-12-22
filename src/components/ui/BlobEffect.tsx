"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BlobEffectProps {
  className?: string;
  blobColors?: {
    blob1?: string;
    blob2?: string;
    blob3?: string;
  };
  blurAmount?: {
    blob1?: number;
    blob2?: number;
    blob3?: number;
  };
  sizes?: {
    blob1?: number;
    blob2?: number;
    blob3?: number;
  };
  throttleAmount?: number;
}

const BlobEffect = ({
  className,
  blobColors = {
    blob1: "rgba(255, 0, 128, 0.6), rgba(0, 128, 255, 0.6), rgba(128, 255, 0, 0.6)",
    blob2: "rgba(255, 140, 0, 0.5), rgba(255, 0, 255, 0.5), rgba(0, 255, 255, 0.5)",
    blob3: "rgba(0, 255, 255, 0.5), rgba(255, 255, 0, 0.5), rgba(0, 255, 0, 0.5)",
  },
  blurAmount = {
    blob1: 100,
    blob2: 80,
    blob3: 60,
  },
  sizes = {
    blob1: 400,
    blob2: 300,
    blob3: 200,
  },
  throttleAmount = 10,
}: BlobEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Add CSS variables to document root
    document.documentElement.style.setProperty("--mouse-x", "50%");
    document.documentElement.style.setProperty("--mouse-y", "50%");

    // Simple throttling function
    const throttle = <T extends (...args: unknown[]) => void>(func: T, delay: number) => {
      let lastCall = 0;
      return function(this: unknown, ...args: Parameters<T>) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return func.apply(this, args);
      };
    };

    // Update CSS custom properties for mouse position
    const handleMouseMove = throttle((event: unknown) => {
      const mouseEvent = event as MouseEvent;
      document.documentElement.style.setProperty("--mouse-x", `${mouseEvent.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${mouseEvent.clientY}px`);
    }, throttleAmount);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [throttleAmount]);

  // Safe access to all potential undefined properties
  const width1 = sizes?.blob1 ?? 400;
  const height1 = sizes?.blob1 ?? 400;
  const width2 = sizes?.blob2 ?? 300;
  const height2 = sizes?.blob2 ?? 300;
  const width3 = sizes?.blob3 ?? 200;
  const height3 = sizes?.blob3 ?? 200;
  
  const color1 = blobColors?.blob1 ?? "rgba(255, 0, 128, 0.6), rgba(0, 128, 255, 0.6), rgba(128, 255, 0, 0.6)";
  const color2 = blobColors?.blob2 ?? "rgba(255, 140, 0, 0.5), rgba(255, 0, 255, 0.5), rgba(0, 255, 255, 0.5)";
  const color3 = blobColors?.blob3 ?? "rgba(0, 255, 255, 0.5), rgba(255, 255, 0, 0.5), rgba(0, 255, 0, 0.5)";
  
  const blur1 = blurAmount?.blob1 ?? 100;
  const blur2 = blurAmount?.blob2 ?? 80;
  const blur3 = blurAmount?.blob3 ?? 60;

  return (
    <div 
      ref={containerRef}
      className={cn(
        "fixed inset-0 pointer-events-none z-1",
        className
      )}
    >
      <div
        className="absolute"
        style={{
          "--blob-blur": `${blur1}px`,
          "--blob-blur-min": `${blur1 - 10}px`,
          width: `${width1}px`,
          height: `${height1}px`,
          left: "var(--mouse-x)",
          top: "var(--mouse-y)",
          translate: "-50% -50%",
          background: `linear-gradient(45deg, ${color1})`,
          borderRadius: "50%",
          filter: `blur(${blur1}px)`,
          pointerEvents: "none",
          mixBlendMode: "screen",
          animation: "blob-morph 8s ease-in-out infinite, blob-hue-rotate 10s linear infinite",
          transition: "left 0.6s cubic-bezier(0.22, 1, 0.36, 1), top 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
        } as React.CSSProperties}
      />
      <div
        className="absolute"
        style={{
          "--blob-blur": `${blur2}px`,
          "--blob-blur-min": `${blur2 - 10}px`,
          width: `${width2}px`,
          height: `${height2}px`,
          left: "var(--mouse-x)",
          top: "var(--mouse-y)",
          translate: "-50% -50%",
          background: `linear-gradient(45deg, ${color2})`,
          borderRadius: "50%",
          filter: `blur(${blur2}px)`,
          pointerEvents: "none",
          mixBlendMode: "screen",
          animation: "blob-morph 8s ease-in-out infinite -2s, blob-hue-rotate 12s linear infinite",
          transition: "left 1s cubic-bezier(0.22, 1, 0.36, 1), top 1s cubic-bezier(0.22, 1, 0.36, 1)"
        } as React.CSSProperties}
      />
      <div
        className="absolute"
        style={{
          "--blob-blur": `${blur3}px`,
          "--blob-blur-min": `${blur3 - 10}px`,
          width: `${width3}px`,
          height: `${height3}px`,
          left: "var(--mouse-x)",
          top: "var(--mouse-y)",
          translate: "-50% -50%",
          background: `linear-gradient(45deg, ${color3})`,
          borderRadius: "50%",
          filter: `blur(${blur3}px)`,
          pointerEvents: "none",
          mixBlendMode: "screen",
          animation: "blob-morph 8s ease-in-out infinite -4s, blob-hue-rotate 14s linear infinite",
          transition: "left 1.4s cubic-bezier(0.22, 1, 0.36, 1), top 1.4s cubic-bezier(0.22, 1, 0.36, 1)"
        } as React.CSSProperties}
      />
    </div>
  );
};

export default BlobEffect; 