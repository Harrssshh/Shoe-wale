"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ShoeImage } from "@/components/ShoeImage";
import { useRef, useEffect, useState } from "react";
import { products } from "@/data/products";
import { INSTAGRAM_URL } from "@/lib/constants";
import { clipReveal, fadeUp } from "@/lib/motion";

export function ScrollShoes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackScrollRange, setTrackScrollRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (!trackRef.current) return;
    const updateRange = () => {
      const trackWidth = trackRef.current ? trackRef.current.scrollWidth : 0;
      const viewportWidth = window.innerWidth;
      setTrackScrollRange(Math.max(0, trackWidth - viewportWidth));
    };
    
    // Slight delay to ensure content has rendered and layout is stable
    const timer = setTimeout(updateRange, 100);
    window.addEventListener("resize", updateRange);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateRange);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${trackScrollRange}px`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section id="collection" ref={containerRef} className="relative h-[350vh] bg-pitch">
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
        {/* Header */}
        <div className="relative z-10 flex shrink-0 items-end justify-between px-5 pb-6 pt-[68px] md:px-10">
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-1 text-[11px] font-bold uppercase tracking-[4px] text-volt"
            >
              In-Store Collection
            </motion.p>
            <h2 className="font-display text-[clamp(40px,8vw,80px)] leading-none text-white">
              <span className="inline-block overflow-hidden">
                <motion.span variants={clipReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  SCROLL THE DROP
                </motion.span>
              </span>
            </h2>
          </div>
          <p className="hidden max-w-[200px] text-right text-sm text-muted md:block">
            Visit our store or DM us on Instagram to check availability
          </p>
        </div>

        {/* Progress bar */}
        <div className="relative z-10 mx-5 mb-4 h-[3px] overflow-hidden rounded-full bg-white/10 md:mx-10">
          <motion.div
            style={{ width: progressWidth }}
            className="h-full bg-volt"
          />
        </div>

        {/* Horizontal track */}
        <div className="relative flex-1 overflow-hidden sport-slash">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="absolute left-0 top-1/2 flex -translate-y-1/2 gap-6 px-5 md:gap-10 md:px-10"
          >
            {products.slice(0, 6).map((product, i, arr) => (
              <ShoeSlide key={product.id} product={product} index={i} totalItems={arr.length} progress={scrollYProgress} />
            ))}
            {/* End card */}
            <div className="flex h-[min(55vh,420px)] w-[min(80vw,340px)] shrink-0 flex-col items-center justify-center rounded-2xl border border-volt/30 bg-volt/5 p-8 text-center md:w-[380px]">
              <p className="font-display text-5xl text-volt">+100</p>
              <p className="mt-2 text-sm text-muted">More pairs in store</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[44px] items-center rounded-none bg-volt px-8 py-3 text-sm font-bold uppercase tracking-wider text-pitch transition-opacity hover:opacity-90"
              >
                See on Instagram
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.p
          style={{ opacity: hintOpacity }}
          className="relative z-10 pb-6 text-center text-xs uppercase tracking-[3px] text-muted"
        >
          Scroll to explore →
        </motion.p>
      </div>
    </section>
  );
}

function ShoeSlide({
  product,
  index,
  totalItems,
  progress,
}: {
  product: (typeof products)[0];
  index: number;
  totalItems: number;
  progress: MotionValue<number>;
}) {
  const start = index / totalItems;
  const end = (index + 1) / totalItems;
  const scale = useTransform(progress, [start, end], [0.88, 1]);
  const rotate = useTransform(progress, [start, end], [-6, 0]);
  const imgY = useTransform(progress, [start, end], [30, 0]);

  return (
    <motion.div
      style={{ scale, rotateZ: rotate }}
      className="group relative w-[min(80vw,340px)] shrink-0 md:w-[380px]"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-court transition-colors duration-300 group-hover:border-volt/40">
        <div className="relative flex h-[min(55vh,420px)] items-center justify-center overflow-hidden bg-track sport-mesh">
          <motion.div style={{ y: imgY }} className="relative h-[75%] w-[85%]">
            <ShoeImage
              src={product.image}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
              sizes="380px"
            />
          </motion.div>
          <div className="absolute left-4 top-4 rounded-sm bg-volt px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-pitch">
            {product.tag}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pitch/90 to-transparent p-5 pt-16">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-volt">{product.brand}</p>
            <p className="font-display text-2xl text-white">{product.name}</p>
            <p className="mt-1 text-xs text-muted">Available in-store · Ask on Instagram</p>
          </div>
        </div>
      </div>
      <span className="absolute -right-3 -top-3 font-display text-6xl text-white/5 md:text-7xl">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}
