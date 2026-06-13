"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { INSTAGRAM_URL } from "@/lib/constants";

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(10,10,10,0)", "rgba(10,10,10,0.95)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(204,255,0,0)", "rgba(204,255,0,0.2)"]);

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg, borderBottomColor: border }}
        className="fixed top-0 z-50 flex h-[52px] w-full items-center justify-between border-b px-5 md:px-8"
      >
        <a href="#" className="font-display text-xl tracking-[3px] text-white md:text-2xl">
          SHOES <span className="text-volt">WALE</span>
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[2px] text-muted transition-colors hover:text-volt"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] items-center bg-volt px-5 py-2 text-xs font-bold uppercase tracking-wider text-pitch transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Follow IG
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((p) => !p)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] sm:hidden"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 7 }
                      : i === 1
                        ? { opacity: 0, scaleX: 0 }
                        : { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.25 }}
                className="block h-[2px] w-5 bg-volt"
              />
            ))}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-pitch pt-[52px] sport-mesh"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="font-display py-4 text-4xl tracking-[3px] text-white hover:text-volt"
              >
                {link.label}
              </motion.a>
            ))}
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-6 bg-volt px-8 py-3 text-sm font-bold uppercase tracking-wider text-pitch"
            >
              Follow on Instagram
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
