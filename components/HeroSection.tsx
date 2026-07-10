"use client";

import { motion } from "framer-motion";

const BG_VIDEO =
  "https://res.cloudinary.com/xpozjqgp/video/upload/v1783717460/c7e98513-192d-4d38-b187-c2b08c9cd0e4_vs8lxi.mp4";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* ── Background Video ── */}
      <video
        src={BG_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ── Dark Vignette Overlay ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.28) 45%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* ════════════════════════════════════
          NAV BAR — fades down from top
      ════════════════════════════════════ */}
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-12 py-7"
      >
        {/* Left — nav links */}
        <div className="flex items-center space-x-8">
          {["Menu", "Bar", "Experience", "Reservations"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-xs uppercase tracking-widest2 text-white/90 font-light hover:text-white transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Center — brand logo */}
        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl tracking-widest text-white font-light select-none whitespace-nowrap"
        >
          The Manor
        </a>

        {/* Right — utilities */}
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="font-sans text-xs uppercase tracking-widest2 text-white/90 font-light hover:text-white transition-colors duration-300"
          >
            Login
          </a>
          {/* Search icon */}
          <button
            aria-label="Search"
            className="text-white/90 hover:text-white transition-colors duration-300"
          >
            <SearchIcon />
          </button>
          <a
            href="#"
            className="font-sans text-xs uppercase tracking-widest2 text-white/90 font-light hover:text-white transition-colors duration-300"
          >
            Bag (0)
          </a>
        </div>
      </motion.nav>

      {/* ════════════════════════════════════
          BOTTOM CONTENT — fades up from bottom
      ════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
        className="absolute bottom-12 left-0 w-full px-12 z-40"
      >
        {/* Main headline — centered, bold editorial serif */}
        <h1 className="font-serif font-light text-white uppercase leading-none tracking-tight text-[clamp(7.5rem,17vw,17rem)] w-full text-center">
          The Manor
        </h1>

        {/* Sub-row: description left / CTA right */}
        <div className="flex items-end justify-between mt-4">
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
            className="font-serif text-sm md:text-base text-white/70 font-light max-w-xs leading-relaxed"
          >
            An exquisite dining journey where culinary artistry meets
            world-class cocktails in an atmosphere of timeless elegance
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.55 }}
            className="font-serif text-sm md:text-base text-white font-light underline underline-offset-4 decoration-white/60 hover:decoration-white transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap"
          >
            Reserve a Table
            <span className="text-base leading-none">↗</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" />
    </svg>
  );
}
