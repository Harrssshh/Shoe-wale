"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const items = [
  { icon: "", label: "Walk-In Store", sub: "Try before you buy" },
  { icon: "", label: "Instagram Drops", sub: "@shoes_wale7773" },
  { icon: "", label: "Sport Sneakers", sub: "Nike, Jordan, Adidas+" },
  { icon: "", label: "Udaipur, Rajasthan", sub: "Local & trusted" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-white/5 bg-pitch px-5 py-8 md:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4"
      >
        {items.map((item) => (
          <motion.div key={item.label} variants={fadeUp} className="text-center md:text-left">
            <span className="text-2xl">{item.icon}</span>
            <p className="mt-2 text-xs font-bold uppercase tracking-[2px] text-volt">{item.label}</p>
            <p className="text-sm text-muted">{item.sub}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
