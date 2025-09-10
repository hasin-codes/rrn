"use client";

import React from "react";
import clsx from "clsx";

type PatternVariant = "events" | "blog" | "about";

interface PatternedContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidthClassName?: string; // e.g., "max-w-7xl" (default)
  variant?: PatternVariant;
}

// PatternedContainer: unified patterned card with consistent width and padding
// Patterns intentionally vary by variant to preserve the design system semantics.
export function PatternedContainer({
  children,
  className,
  maxWidthClassName = "max-w-7xl",
  variant = "events",
}: PatternedContainerProps) {
  // Define per-page pattern styles
  const patternStyleByVariant: Record<PatternVariant, React.CSSProperties> = {
    events: {
      backgroundImage:
        "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px)," +
        "linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)," +
        "radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)",
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    },
    blog: {
      backgroundImage:
        "repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px)," +
        "repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px)," +
        "radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)," +
        "radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)",
      backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
    },
    about: {
      backgroundImage:
        "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)," +
        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)," +
        "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)",
      backgroundSize: "8px 8px, 32px 32px, 32px 32px",
    },
  };

  return (
    <div className="w-full">
      <div className={clsx("mx-auto", maxWidthClassName)}>
        <div className={clsx("neumorphic-card overflow-hidden relative", className)} style={patternStyleByVariant[variant]}>
          {/* Pattern goes here (variant-specific). Keep this container as the single source of truth for patterned cards. */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default PatternedContainer;


