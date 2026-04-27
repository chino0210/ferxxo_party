"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="aspect-[1920/2160] md:aspect-[1920/1080]  grid grid-cols-2 overflow-hidden bg-red-500">
      <div className="relative w-full max-h-screen">
        <div className="relative w-full h-full overflow-hidden bg-gray-900">
          <motion.div
            className="flex flex-col gap-4 p-4"
            animate={{ y: ["0%", "-50%"] }} // Se desplaza la mitad de la altura
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40, // Ajusta la velocidad aquí
            }}
          >
            {/* Duplicamos las imágenes para el bucle infinito */}
            {[...images, ...images].map((src, index) => (
              <Image
                key={index}
                src={src}
                width={1920}
                height={1080}
                alt={`Imagen ${index}`}
                className="w-full h-auto rounded-lg object-cover"
              />
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center items-center text-white">
          <h2>Contenido pendiente</h2>
        </div>
      </div>
    </div>
  );
}
