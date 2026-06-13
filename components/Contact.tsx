"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAP_EMBED_URL,
  MAP_LINK,
  STORE_ADDRESS,
  STORE_HOURS,
  STORE_NAME,
  STORE_PHONE,
  getWhatsAppLink,
} from "../lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Contact() {
  return (
    <section id="contact" className="section-padding relative bg-court sport-mesh">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 text-center md:mb-16"
        >
          <motion.p variants={fadeUp} className="mb-2 text-[11px] font-bold uppercase tracking-[4px] text-volt">
            Find Us
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-[clamp(40px,8vw,72px)] text-white">
            VISIT THE STORE
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-md text-muted">
            We sell offline at our Udaipur store and showcase new drops on Instagram. Come try before you buy.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {[
              { label: "Store", value: STORE_NAME, sub: STORE_ADDRESS },
              { label: "Hours", value: STORE_HOURS, sub: "Walk-ins welcome" },
              { label: "Phone", value: STORE_PHONE, sub: "Call before visiting", href: `tel:${STORE_PHONE.replace(/\s/g, "")}` },
              { label: "WhatsApp", value: STORE_PHONE, sub: "Chat with us directly", href: getWhatsAppLink("Hi Shoes Wale, I want to inquire about sneakers") },
              { label: "Instagram", value: `@${INSTAGRAM_HANDLE}`, sub: "Latest drops & availability", href: INSTAGRAM_URL },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="rounded-xl border border-white/10 bg-pitch p-6 transition-colors hover:border-volt/30"
              >
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-volt">{item.label}</p>
                {item.href ? (
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="mt-1 block font-display text-2xl text-white transition-colors hover:text-volt"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p className="mt-1 font-display text-2xl text-white">{item.value}</p>
                )}
                <p className="mt-1 text-sm text-muted">{item.sub}</p>
              </motion.div>
            ))}

            <Link
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-none bg-volt px-8 py-3 text-sm font-bold uppercase tracking-wider text-pitch transition-opacity hover:opacity-90"
            >
              Get Directions
            </Link>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden rounded-xl border border-white/10 volt-glow"
          >
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shoes Wale store location"
              className="h-full min-h-[400px] w-full grayscale-[30%] contrast-[1.1]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
