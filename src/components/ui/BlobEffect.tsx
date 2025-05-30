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
    const throttle = <T extends (...args: any[]) => void>(func: T, delay: number) => {
      let lastCall = 0;
      return function(this: any, ...args: Parameters<T>) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return func.apply(this, args);
      };
    };

    // Update CSS custom properties for mouse position
    const handleMouseMove = throttle((event: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    }, throttleAmount);

    document.addEventListener("mousemove", handleMouseMove);

    // Calculate blur values with fallbacks
    const blur1 = blurAmount.blob1 ?? 100;
    const blur2 = blurAmount.blob2 ?? 80;
    const blur3 = blurAmount.blob3 ?? 60;

    // Add keyframes for hue rotation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes morph {
        0% { border-radius: 48% 52% 57% 43% / 44% 57% 43% 56%; }
        25% { border-radius: 63% 37% 57% 43% / 55% 48% 52% 45%; }
        50% { border-radius: 40% 60% 43% 57% / 52% 32% 68% 48%; }
        75% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; }
        100% { border-radius: 48% 52% 57% 43% / 44% 57% 43% 56%; }
      }
      
      @keyframes hue-rotate1 {
        0% { filter: blur(${blur1}px) hue-rotate(0deg); }
        50% { filter: blur(${blur1 - 10}px) hue-rotate(180deg); }
        100% { filter: blur(${blur1}px) hue-rotate(360deg); }
      }
      
      @keyframes hue-rotate2 {
        0% { filter: blur(${blur2}px) hue-rotate(0deg); }
        50% { filter: blur(${blur2 - 10}px) hue-rotate(180deg); }
        100% { filter: blur(${blur2}px) hue-rotate(360deg); }
      }
      
      @keyframes hue-rotate3 {
        0% { filter: blur(${blur3}px) hue-rotate(0deg); }
        50% { filter: blur(${blur3 - 10}px) hue-rotate(180deg); }
        100% { filter: blur(${blur3}px) hue-rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [blurAmount, throttleAmount]);

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
          animation: "morph 8s ease-in-out infinite, hue-rotate1 10s linear infinite",
          transition: "left 0.6s cubic-bezier(0.22, 1, 0.36, 1), top 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
        }}
      />
      <div 
        className="absolute"
        style={{
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
          animation: "morph 8s ease-in-out infinite -2s, hue-rotate2 12s linear infinite",
          transition: "left 1s cubic-bezier(0.22, 1, 0.36, 1), top 1s cubic-bezier(0.22, 1, 0.36, 1)"
        }}
      />
      <div 
        className="absolute"
        style={{
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
          animation: "morph 8s ease-in-out infinite -4s, hue-rotate3 14s linear infinite",
          transition: "left 1.4s cubic-bezier(0.22, 1, 0.36, 1), top 1.4s cubic-bezier(0.22, 1, 0.36, 1)"
        }}
      />
    </div>
  );
};

export default BlobEffect; 