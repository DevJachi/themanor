"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = ["Menu", "Bar", "Experience", "Reservations"];

export default function SiteFooter() {
  return (
    <footer className="relative w-full overflow-hidden h-[80vh] bg-[#FBF9F6] flex flex-col justify-end">

      {/* ── Layer 3: Utility row ── */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-8 z-30">
        {/* Left links — slide in from left */}
        <motion.div
          className="flex items-center gap-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-xs uppercase tracking-widest text-[#3A1C1C]/70 font-light hover:text-[#3A1C1C] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </motion.div>

        {/* Right copyright — slide in from right */}
        <motion.p
          className="font-sans text-xs tracking-widest text-[#3A1C1C]/70 font-light"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          © 2026 The Manor. All Rights Reserved.
        </motion.p>
      </div>

      {/* ── Layer 1: Giant italic brand text (back) ── */}
      <motion.div
        className="absolute bottom-0 left-0 w-full z-10 flex items-end justify-center overflow-hidden"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
      >
        <h2
          className="font-serif italic text-[#3A1C1C] uppercase leading-none select-none whitespace-nowrap"
          style={{ fontSize: "clamp(5rem, 16vw, 18rem)", lineHeight: 0.85 }}
        >
          The Manor
        </h2>
      </motion.div>

      {/* ── Layer 2: Bottle image (front) ── */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
        style={{ height: "92%", width: "auto" }}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
      >
        <Image
          src="/assets/bottle.png"
          alt="The Manor signature bottle"
          height={700}
          width={260}
          className="h-full w-auto object-contain object-bottom"
          priority
        />
      </motion.div>

    </footer>
  );
}
