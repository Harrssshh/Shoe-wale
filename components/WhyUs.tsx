"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion";

const stats = [
  { emoji: "", stat: "100+", label: "Sport pairs in store" },
  { emoji: "", stat: "7A", label: "Premium quality grade" },
  { emoji: "", stat: "1", label: "Store in Udaipur — visit us" },
  { emoji: "", stat: "IG", label: "New drops on Instagram weekly" },
];

export function WhyUs() {
  return (
    <section id="about" className="section-padding bg-pitch sport-slash">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.p variants={fadeUp} className="mb-2 text-[11px] font-bold uppercase tracking-[4px] text-volt">
            Why Shoes Wale
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-[clamp(40px,8vw,72px)] text-white">
            BUILT FOR SPORT
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={i % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(204,255,0,0.3)" }}
              className="rounded-xl border border-white/10 bg-court p-6 text-center transition-colors"
            >
              <span className="text-3xl">{s.emoji}</span>
              <p className="mt-3 font-display text-4xl text-volt">{s.stat}</p>
              <p className="mt-2 text-xs text-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
