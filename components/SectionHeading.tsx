"use client";

import { motion } from "framer-motion";
import { clipReveal, fadeUp, viewportConfig } from "@/lib/motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeading({ label, title, className = "" }: SectionHeadingProps) {
  const words = title.split(" ");

  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[var(--orange)]"
      >
        {label}
      </motion.p>
      <h2
        className="font-display text-[clamp(36px,8vw,72px)] leading-none text-white"
        aria-label={title}
      >
        {words.map((word, index) => (
          <span key={word + index} className="inline-block overflow-hidden align-bottom">
            <motion.span
              variants={clipReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              transition={{ delay: index * 0.08 }}
              className="inline-block"
            >
              {word}
              {index < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </h2>
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportConfig}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="mt-4 h-[3px] w-[60px] bg-[var(--orange)]"
      />
    </div>
  );
}
