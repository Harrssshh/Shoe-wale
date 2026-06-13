"use client";

import { MotionConfig } from "framer-motion";

// reducedMotion="never" ensures all animations always play on this
// marketing/e-commerce site regardless of the user's OS accessibility setting.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="never">
      {children}
    </MotionConfig>
  );
}
