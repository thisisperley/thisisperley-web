"use client";
import { useState, useEffect, useRef } from "react";

export const Hero = () => {
  const [frames, setFrames] = useState<Array<{
    id: number;
    frameIndex: number;
    x: number;
    y: number;
  }>>([]);
  const [frameIndex, setFrameIndex] = useState(1);
  const throttlingRef = useRef<boolean>(false);
  
  // Constants
  const FRAME_INTERVAL_MS = 300;
  const FRAME_DURATION_MS = 1000;
  const TOTAL_FRAMES = 7;
  const FRAME_SIZE = 250; // Increased from 100px to 150px (50% larger)
  
  // Initialize mouse tracking
  useEffect(() => {
    // Create a new frame at the current mouse position
    const createNewFrame = (x: number, y: number) => {
      // Skip if we're currently throttling
      if (throttlingRef.current) return;
      
      // Set throttling flag
      throttlingRef.current = true;
      
      // Create frame
      const newId = Date.now();
      const newFrame = {
        id: newId,
        frameIndex: frameIndex,
        x: x,
        y: y
      };
      
      setFrames(prev => [...prev, newFrame]);
      
      // Update frame index for next frame
      setFrameIndex(prev => (prev % TOTAL_FRAMES) + 1);
      
      // Remove frame after duration
      setTimeout(() => {
        setFrames(prev => prev.filter(frame => frame.id !== newId));
      }, FRAME_DURATION_MS);
      
      // Reset throttling after interval
      setTimeout(() => {
        throttlingRef.current = false;
      }, FRAME_INTERVAL_MS);
    };
    
    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      createNewFrame(e.clientX, e.clientY);
    };
    
    // Add document-level event listener
    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [frameIndex]);
  
  return (
    <div className="fixed inset-0 w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/images/perley-web-header-v4.jpg')", 
          backgroundPosition: "center",
          filter: "brightness(1)",
        }}
      />
      
      {/* Frames that follow the mouse */}
      {frames.map(frame => (
        <div 
          key={frame.id}
          className="fixed pointer-events-none"
          style={{
            left: `${frame.x - FRAME_SIZE/2}px`,
            top: `${frame.y - FRAME_SIZE/2}px`,
            width: `${FRAME_SIZE}px`,
            height: `${FRAME_SIZE}px`,
            zIndex: 40
          }}
        >
          <img 
            src={`/frames/f0${frame.frameIndex}.png`} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
      ))}
      
      {/* Hidden heading for SEO */}
      <h1 className="sr-only">PERLEY</h1>
    </div>
  );
}; 