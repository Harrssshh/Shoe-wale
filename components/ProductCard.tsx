"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { getProductWhatsAppLink } from "../lib/constants";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { fadeUp } from "@/lib/motion";
import type { Variants } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const tagColors: Record<string, string> = {
  Bestseller: "bg-[var(--orange)]/20 text-[var(--orange)]",
  Limited: "bg-purple-500/20 text-purple-300",
  "New Drop": "bg-blue-500/20 text-blue-300",
  Hot: "bg-red-500/20 text-red-300",
  Value: "bg-green-500/20 text-green-300",
  Classic: "bg-amber-500/20 text-amber-300",
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const rotateX = useSpring(0, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 20 });
  const isHoverSupported = useMediaQuery("(hover: hover)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    rotateX.set(((y - rect.height / 2) / rect.height) * -10);
    rotateY.set(((x - rect.width / 2) / rect.width) * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  const cardVariants: Variants = {
    hidden: fadeUp.hidden,
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: index * 0.1 },
    },
  };

  return (
    <motion.article
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        WebkitBackfaceVisibility: "hidden",
      }}
      className="group overflow-hidden rounded-[20px] border border-white/[0.07] bg-[var(--gray-2)] transition-colors duration-300 hover:border-[rgba(255,69,0,0.3)]"
    >
      <div className="relative flex h-[220px] items-center justify-center overflow-hidden bg-[#0d0d0d]">
        <motion.div
          whileHover={{ scale: 1.1, rotate: -4 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative h-[180px] w-[180px]"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 260px"
          />
        </motion.div>
      </div>

      <div className="p-5">
        <p className="text-[10px] font-medium uppercase tracking-[2px] text-[var(--orange)]">
          {product.brand}
        </p>
        <h3 className="mt-1 text-[17px] font-semibold text-white">{product.name}</h3>
        <motion.p
          animate={isHovered ? { scale: [1, 1.08, 1] } : { scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-sm text-[var(--muted)]"
        >
          {formatPrice(product.price)}
        </motion.p>

        <div className="mt-4 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wide ${
              tagColors[product.tag] ?? "bg-white/10 text-white/70"
            }`}
          >
            {product.tag}
          </span>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isHoverSupported ? (isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }) : { opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            <Link
              href={getProductWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Order ${product.name} on WhatsApp`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--orange)] text-xl font-light text-white transition-transform duration-200 hover:scale-105"
            >
              +
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
