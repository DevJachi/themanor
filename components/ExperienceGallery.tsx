"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    id: 1,
    label: "Live Lounge Experience",
    labelPos: "bottom",
    rotate: "-rotate-[3deg]",
    baseline: "mt-12",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury jazz lounge live performance warm atmospheric lighting",
  },
  {
    id: 2,
    label: "Fine Dining Cuisine",
    labelPos: "top",
    rotate: "rotate-0",
    baseline: "mt-0",
    image:
      "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=800&auto=format&fit=crop",
    alt: "Molecular gastronomy fine dining smoke bubble presentation",
  },
  {
    id: 3,
    label: "Signature Cocktails",
    labelPos: "bottom",
    rotate: "rotate-0",
    baseline: "mt-0",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury bartender garnishing craft cocktail crystal glass",
  },
  {
    id: 4,
    label: "Private Dining Rooms",
    labelPos: "top",
    rotate: "rotate-0",
    baseline: "mt-0",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury private dining room sommelier moody lighting",
  },
  {
    id: 5,
    label: "Wine & Spirits Selection",
    labelPos: "bottom",
    rotate: "rotate-[3deg]",
    baseline: "mt-12",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    alt: "Premium wine cellar rack luxury bottles shelves",
  },
];

export default function ExperienceGallery() {
  return (
    <section className="bg-[#FBF9F6] py-24 px-8 md:px-16 overflow-hidden">
      {/* ── Headline ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-0"
      >
        <h2
          className="font-serif text-[#3A1C1C] uppercase leading-[1.05] tracking-wide
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Where Every Flavor
          <br />
          Elevated by Elegance
        </h2>
      </motion.div>

      {/* ── Gallery Row ── */}
      <div className="flex flex-row items-end justify-center gap-4 lg:gap-6 pt-16">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.id}
            className={`flex flex-col ${card.baseline} ${card.rotate} flex-shrink-0`}
            style={{ width: card.id === 3 ? "22%" : "17%" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
          >
            {/* Top label */}
            {card.labelPos === "top" && (
              <p className="font-serif text-[#3A1C1C]/70 text-xs tracking-wide mb-2 text-left">
                {card.label}
              </p>
            )}

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden cursor-pointer"
              style={{
                aspectRatio: card.id === 3 ? "3/4" : "2/3",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Bottom label */}
            {card.labelPos === "bottom" && (
              <p className="font-serif text-[#3A1C1C]/70 text-xs tracking-wide mt-2 text-left">
                {card.label}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
