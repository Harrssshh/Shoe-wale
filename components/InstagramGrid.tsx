"use client";

import { motion } from "framer-motion";
import { ShoeImage } from "@/components/ShoeImage";
import Link from "next/link";
import { products } from "@/data/products";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";
import { scaleIn, staggerContainer } from "@/lib/motion";

export function InstagramGrid() {
  const items = products.slice(0, 6);

  return (
    <section id="instagram" className="section-padding bg-court">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-[11px] font-bold uppercase tracking-[4px] text-volt"
        >
          Follow the drops
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(36px,7vw,56px)] text-white"
        >
          @{INSTAGRAM_HANDLE.toUpperCase()}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-3 max-w-sm text-sm text-muted"
        >
          We post new sport sneakers on Instagram. DM us to check size & availability.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 gap-[3px] overflow-hidden rounded-xl min-[480px]:grid-cols-3"
        >
          {items.map((p) => (
            <IGCell key={p.id} product={p} />
          ))}
        </motion.div>

        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ig-gradient mt-10 inline-flex min-h-[44px] items-center rounded-none px-10 py-3 text-xs font-bold uppercase tracking-[2px] text-white transition-opacity hover:opacity-90"
        >
          Follow on Instagram
        </Link>
      </div>
    </section>
  );
}

function IGCell({ product }: { product: (typeof products)[0] }) {
  return (
    <motion.div
      variants={scaleIn}
      className="group relative aspect-square overflow-hidden bg-track"
    >
      <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
        <ShoeImage src={product.image} alt={product.name} fill className="object-cover" sizes="33vw" />
      </div>
    </motion.div>
  );
}
