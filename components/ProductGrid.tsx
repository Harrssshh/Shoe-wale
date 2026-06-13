"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { staggerContainerSlow } from "@/lib/motion";

export function ProductGrid() {
  return (
    <section id="collection" className="section-padding bg-black px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="FRESH DROPS" title="HOT COLLECTION" />
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
