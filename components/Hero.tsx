"use client";

import { ShoeImage } from "@/components/ShoeImage";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";
import { clipReveal, fadeUp, staggerContainer } from "@/lib/motion";

const words = ["GAME", "ON."];

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const shoeScale = useTransform(scrollY, [0, 400], [1, 0.85]);
  const shoeRotate = useTransform(scrollY, [0, 400], [0, -8]);
  const arrowOpacity = useTransform(scrollY, [0, 80], [1, 0]);

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-12 pt-[52px]">
      {/* Sport background */}
      <div className="pointer-events-none absolute inset-0 sport-mesh" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 70%, rgba(204,255,0,0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rotate-12 bg-volt/5 blur-3xl" aria-hidden />

      <motion.div
        variants={staggerContainer}
        initial="visible"
        animate="visible"
        className="relative z-10 text-center"
      >
        <motion.p variants={fadeUp} className="mb-3 text-[11px] font-bold uppercase tracking-[5px] text-volt">
          Udaipur · Sport Sneakers
        </motion.p>

        <h1 className="font-display text-[clamp(72px,18vw,160px)] leading-[0.9] tracking-[4px] text-white">
          {words.map((word, i) => (
            <span key={word} className="inline-block overflow-hidden">
              <motion.span
                variants={clipReveal}
                transition={{ delay: i * 0.08 }}
                className={`inline-block ${word.includes("ON") ? "text-volt" : ""}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-md text-base text-muted">
          Premium sport sneakers — visit our store or check new drops on Instagram.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#collection"
            className="inline-flex min-h-[44px] min-w-[180px] items-center justify-center bg-volt px-8 py-3 text-xs font-bold uppercase tracking-[2px] text-pitch transition-opacity hover:opacity-90"
          >
            View Collection
          </a>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] min-w-[180px] items-center justify-center border border-volt/40 px-8 py-3 text-xs font-bold uppercase tracking-[2px] text-volt transition-colors hover:bg-volt/10"
          >
            @{INSTAGRAM_HANDLE}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y, opacity, scale: shoeScale, rotateZ: shoeRotate }}
        className="relative z-10 mt-8 w-full max-w-md px-4"
      >
        <div className="relative mx-auto aspect-square w-full max-w-[340px] flex items-center justify-center">
          {/* Shoe Image */}
          <div className="relative h-[95%] w-[95%] z-10">
            <ShoeImage
              src="/hero-shoe.png"
              alt="Sport sneaker"
              fill
              priority
              className="object-contain drop-shadow-[0_20px_50px_rgba(204,255,0,0.25)]"
              sizes="340px"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: arrowOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="text-volt"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
