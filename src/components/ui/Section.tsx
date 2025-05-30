import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  id?: string;
  withContainer?: boolean;
}

export const Section = ({
  children,
  className,
  containerClassName,
  as: Component = "section",
  id,
  withContainer = true,
  ...props
}: SectionProps) => {
  return (
    <Component
      id={id}
      className={cn("py-12 md:py-16 lg:py-20", className)}
      {...props}
    >
      {withContainer ? (
        <div className={cn("container-fluid", containerClassName)}>
          {children}
        </div>
      ) : (
        children
      )}
    </Component>
  );
};

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  align?: "left" | "center" | "right";
}

export const SectionHeader = ({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  align = "left",
}: SectionHeaderProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div
      className={cn(
        "max-w-3xl mb-12",
        alignmentClasses[align],
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight text-text-primary md:text-4xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg text-text-secondary",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}; 