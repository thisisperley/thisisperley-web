import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
  fluid?: boolean;
}

export const Container = ({
  children,
  className,
  as: Component = "div",
  id,
  fluid = false,
  ...props
}: ContainerProps) => {
  return (
    <Component
      id={id}
      className={cn(
        fluid ? "container-fluid" : "container mx-auto px-4 md:px-6",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}; 