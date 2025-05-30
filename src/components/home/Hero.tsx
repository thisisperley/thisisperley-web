"use client";
import { useState, useEffect, useRef } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [frames, setFrames] = useState<Array<{
    id: number;
    frameIndex: number;
    x: number;
    y: number;
  }>>([]);
  const [frameIndex, setFrameIndex] = useState(1);
  const lastFrameTimeRef = useRef<number>(0);
  const throttlingRef = useRef<boolean>(false);
  
  // Constants
  const FRAME_INTERVAL_MS = 100; // Create a frame every 500ms
  const FRAME_DURATION_MS = 1000; // Each frame stays visible for 1000ms
  const TOTAL_FRAMES = 7;
  
  // Initialize mouse tracking
  useEffect(() => {
    console.log("Initializing document mouse tracking with proper throttling");
    
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
      const x = e.clientX;
      const y = e.clientY;
      
      setMousePosition({ x, y });
      createNewFrame(x, y);
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
          backgroundImage: "url('/images/perley-web-header-v2.jpg')", 
          backgroundPosition: "center",
          filter: "brightness(1)",
        }}
      />
      
      {/* Mouse position indicator */}
      <div
        className="fixed w-10 h-10 rounded-full bg-red-500 pointer-events-none"
        style={{
          left: `${mousePosition.x - 5}px`,
          top: `${mousePosition.y - 5}px`,
          zIndex: 50
        }}
      />
      
      {/* Frames that follow the mouse */}
      {frames.map(frame => (
        <div 
          key={frame.id}
          className="fixed pointer-events-none"
          style={{
            left: `${frame.x - 50}px`,
            top: `${frame.y - 50}px`,
            width: "100px",
            height: "100px",
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
      
      {/* Debug info */}
      <div className="fixed top-0 left-0 bg-white p-2 text-black z-50">
        Mouse: ({mousePosition.x}, {mousePosition.y}) | Frames: {frames.length}
      </div>
      
      {/* Hidden heading for SEO */}
      <h1 className="sr-only">PERLEY</h1>
    </div>
  );
}; 