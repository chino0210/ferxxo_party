"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import foto_1 from "./image/foto_1.jpg";
import foto_2 from "./image/foto_2.jpg";
import foto_3 from "./image/foto_3.jpg";
import foto_4 from "./image/foto_4.jpg";
import foto_5 from "./image/foto_5.jpg";
import foto_6 from "./image/foto_6.jpg";
import foto_7 from "./image/foto_7.jpg";
import foto_8 from "./image/foto_8.jpg";
import foto_9 from "./image/foto_9.jpg";
import foto_10 from "./image/foto_10.jpg";
import foto_11 from "./image/foto_11.jpg";
import foto_12 from "./image/foto_12.jpg";
import foto_13 from "./image/foto_13.jpg";
import foto_14 from "./image/foto_14.jpg";
import foto_15 from "./image/foto_15.jpg";
import foto_16 from "./image/foto_16.jpg";
import foto_17 from "./image/foto_17.jpg";
import foto_18 from "./image/foto_18.jpg";
import foto_19 from "./image/foto_19.jpg";
import foto_20 from "./image/foto_20.jpg";
import foto_21 from "./image/foto_21.jpg";
import foto_22 from "./image/foto_22.jpg";

const getSrc = (img: unknown): string => {
  if (typeof img === "string") return img;
  if (img && typeof img === "object" && "src" in img)
    return (img as { src: string }).src;
  return String(img);
};

const images = [
  getSrc(foto_1),
  getSrc(foto_2),
  getSrc(foto_3),
  getSrc(foto_4),
  getSrc(foto_5),
  getSrc(foto_6),
  getSrc(foto_7),
  getSrc(foto_8),
  getSrc(foto_9),
  getSrc(foto_10),
  getSrc(foto_11),
  getSrc(foto_12),
  getSrc(foto_13),
  getSrc(foto_14),
  getSrc(foto_15),
  getSrc(foto_16),
  getSrc(foto_17),
  getSrc(foto_18),
  getSrc(foto_19),
  getSrc(foto_20),
  getSrc(foto_21),
  getSrc(foto_22),
];

export default function Entradas() {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-black">
      {/* ─── LEFT: Photo Carousel ─── */}
      <div className="relative w-full h-[50vh] md:h-screen overflow-hidden bg-gray-900">
        <motion.div
          className="flex flex-col"
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {/* Duplicamos las imágenes para el bucle infinito */}
          {[...images, ...images].map((src, index) => (
            <Image
              key={index}
              src={src}
              width={1920}
              height={1080}
              alt={`Feria ${(index % images.length) + 1}`}
              className="w-full h-auto object-cover"
              priority={index < 4}
            />
          ))}
        </motion.div>

        {/* Mobile gradient overlay to blend into form */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent md:hidden pointer-events-none" />

        {/* Desktop subtle edge vignette */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>

      {/* ─── RIGHT: Ticket Form ─── */}
      <div className="relative flex flex-col justify-center items-center gap-6 px-6 py-12 md:px-12 md:py-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#ffd700]/30 rounded-tl-lg" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#ffd700]/30 rounded-br-lg" />

        {/* Heading */}
        <div className="text-center space-y-2 z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-neon-gold">
            Entradas
          </h2>
          <p className="text-gray-400 text-sm md:text-base tracking-wide uppercase">
            Sé parte de la experiencia
          </p>
        </div>

        {/* Form card */}
        <div className="w-full max-w-sm space-y-5 z-10">
          {/* Input */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Ingresa tu nombre o código"
              className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 
                         outline-none transition-all duration-300
                         focus:border-[#ffd700]/60 focus:bg-white/10 focus:ring-1 focus:ring-[#ffd700]/40
                         hover:border-white/20"
            />
            <div className="absolute inset-0 rounded-xl bg-[#ffd700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Link
              href="#"
              className="block w-full text-center px-6 py-4 rounded-xl 
                         bg-gradient-to-r from-[#ffd700] via-[#ffcc00] to-[#ffd700]
                         text-black font-black text-lg uppercase tracking-wider
                         shadow-[0_0_15px_rgba(255,215,0,0.4)]
                         hover:shadow-[0_0_30px_rgba(255,215,0,0.7)]
                         transition-shadow duration-300"
            >
              Adquirir entrada
            </Link>
          </motion.div>
        </div>

        {/* Footer tagline */}
        <p className="text-gray-600 text-xs uppercase tracking-[0.3em] z-10">
          Sin rencores · Solo buena vibra
        </p>
      </div>
    </section>
  );
}
