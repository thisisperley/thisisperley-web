"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideInProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  distance?: number;
  viewportThreshold?: number;
}

export const SlideIn = ({
  children,
  className = "",
  staggerDelay = 0,
  duration = 0.8,
  distance = 50,
  viewportThreshold = 0.1,
}: SlideInProps) => {
  // Handle both single children and arrays of children
  const childrenArray = Array.isArray(children) 
    ? children 
    : [children];

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: distance }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportThreshold }}
          transition={{
            duration,
            ease: "easeInOut",
            delay: staggerDelay * index,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

// For convenience, also export a SlideInItem for individual elements
export const SlideInItem = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  distance = 50,
  viewportThreshold = 0.1,
}: Omit<SlideInProps, "staggerDelay"> & { delay?: number }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportThreshold }}
      transition={{
        duration,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}; 