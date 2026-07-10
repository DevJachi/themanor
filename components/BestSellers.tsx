"use client";

import { motion } from "framer-motion";

const PRODUCTS = [
  {
    id: 2,
    tagline: "Red Wine • 750ml",
    title: "CHÂTEAU\nMARGAUX 2015",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    alt: "Luxury red wine bottle poured into elegant crystal glasses dark moody",
  },
  {
    id: 3,
    tagline: "Dry-Aged Wagyu Ribeye • 300g",
    title: "MANOR\nSTEAK",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop",
    alt: "Gourmet dry aged wagyu ribeye steak sliced on dark stone board coarse salt",
  },
  {
    id: 4,
    tagline: "Handmade Pasta • 200g",
    title: "BLACK\nTRUFFLE",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=900&auto=format&fit=crop",
    alt: "Gourmet handmade truffle pasta shaved parmesan cheese plate luxury restaurant",
  },
];

export default function BestSellers() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 w-full min-h-[80vh]">
      {/* ── Column 1: Title Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="bg-[#FBF9F6] p-12 flex flex-col justify-between min-h-[60vh] md:min-h-0"
      >
        {/* Top block */}
        <div>
          <h2 className="font-serif text-[#3A1C1C] uppercase leading-[0.95] tracking-tight text-5xl md:text-5xl lg:text-6xl">
            Best<br />Sellers
          </h2>
          <p className="font-serif text-[#3A1C1C]/60 text-sm leading-relaxed mt-4 max-w-[180px]">
            Our Most Loved Dishes & Drinks, Crafted For Every Luxurious Moment.
          </p>
        </div>

        {/* Bottom CTA */}
        <a
          href="#"
          className="font-serif text-[#3A1C1C] text-sm underline underline-offset-4 decoration-[#3A1C1C]/50 hover:decoration-[#3A1C1C] transition-all duration-300 flex items-center gap-1.5"
        >
          View Full Menu
          <span>↗</span>
        </a>
      </motion.div>

      {/* ── Columns 2–4: Product Cards ── */}
      {PRODUCTS.map((product, i) => (
        <motion.div
          key={product.id}
          className="relative overflow-hidden min-h-[70vh] md:min-h-0 cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.12 }}
        >
          {/* Background image with hover zoom */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.alt}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 w-full z-20 p-8 flex flex-col items-start gap-2">
            <p className="font-sans text-white/60 text-xs tracking-widest uppercase">
              {product.tagline}
            </p>
            <h3 className="font-serif text-white text-3xl md:text-4xl leading-[1.05] whitespace-pre-line">
              {product.title}
            </h3>
            <a
              href="#"
              className="font-serif text-white/80 text-sm underline underline-offset-4 decoration-white/40 hover:text-white hover:decoration-white transition-all duration-300 mt-1"
            >
              Add to Bag
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
