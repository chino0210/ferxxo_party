"use client";
import React from "react";
import { motion } from "framer-motion";
import tablero from "./svgs/tablero.svg";
import parrilla from "./svgs/parrilla.svg";
import tragaperras from "./svgs/tragaperras.svg";
import fondo_blanco from "./svgs/fondo_blanco.svg";
import maquina from "./svgs/maquina.svg";
import base from "./svgs/base.svg";
import cartel from "./svgs/cartel.svg";
import linea_1 from "./svgs/linea_1.svg";
import linea_2 from "./svgs/linea_2.svg";
import fff from "./svgs/fff.svg";
import sin_rencores from "./svgs/sin_rencorres.svg";
import fichas from "./svgs/fichas.svg";
import metal_1 from "./svgs/metal_1.svg";
import metal_2 from "./svgs/metal_2.svg";

const getSvgSrc = (img: unknown): string => {
  if (typeof img === "string") return img;
  if (img && typeof img === "object" && "src" in img)
    return (img as { src: string }).src;
  return String(img);
};

export default function Animacion() {
  // Paths
  const imagePath = getSvgSrc(tablero);
  const parrillaPath = getSvgSrc(parrilla);
  const tragaperrasPath = getSvgSrc(tragaperras);
  const fondoBlancoPath = getSvgSrc(fondo_blanco);
  const maquinaPath = getSvgSrc(maquina);
  const basePath = getSvgSrc(base);
  const cartelPath = getSvgSrc(cartel);
  const linea1Path = getSvgSrc(linea_1);
  const linea2Path = getSvgSrc(linea_2);
  const fffPath = getSvgSrc(fff);
  const sinRencoresPath = getSvgSrc(sin_rencores);
  const fichasPath = getSvgSrc(fichas);
  const metal1Path = getSvgSrc(metal_1);
  const metal2Path = getSvgSrc(metal_2);

  // --- CONFIGURACIÓN DE TAMAÑOS ---
  const scale = 0.8;

  const tWidth = 600 * scale;
  const tHeight = 900 * scale;
  const fbWidth = 800 * scale;
  const fbHeight = 600 * scale;
  const mWidth = 845 * scale;
  const mHeight = 875 * scale;
  const pWidth = 680 * scale;
  const pHeight = 450 * scale;
  const cWidth = 800 * scale;
  const cHeight = 400 * scale;
  const l1Width = 1500;
  const l1Height = 1300;
  const l2Width = 1500;
  const l2Height = 1300;
  const fffWidth = 600 * scale;
  const fffHeight = 600 * scale;
  const srWidth = 800 * scale;
  const srHeight = 200 * scale;
  const fWidth = 1500;
  const fHeight = 1300;
  const metal1Width = 850;
  const metal1Height = 250;
  const metal2Width = 850;
  const metal2Height = 800;

  const cX = 1920 / 2;
  const cY = 1080 / 2;

  // Posiciones
  const tX = cX - tWidth / 2;
  const tY = cY - tHeight / 2;
  const fbX = cX - fbWidth / 2;
  const fbY = cY - fbHeight / 2 - 100;
  const mX = cX - mWidth / 2;
  const mY = cY - mHeight / 2 - 210;
  const pX = cX - pWidth / 2;
  const pY = cY - pHeight / 2 - 140;
  const cCartelX = cX - cWidth / 2;
  const cCartelY = cY - cHeight / 2 + 180;
  const l1X = cX - l1Width / 2 + 650;
  const l1Y = cY - l1Height / 2;
  const l2X = cX - l2Width / 2 - 650;
  const l2Y = cY - l2Height / 2;
  const fX = cX - fWidth / 2;
  const fY = cY - fHeight / 2;
  const fffX = cX - fffWidth / 2;
  const fffY = cY - fffHeight / 2 - 40;
  const srX = cX - srWidth / 2;
  const srY = cY - srHeight / 2 + 180;
  const metalTopX = cX - metal1Width / 2;
  const metalTopY = -125;
  const metalBottomX = cX - metal2Width / 2;
  const metalBottomY = 1080 - metal2Height + 400;

  // --- ANIMACIONES OPTIMIZADAS ---
  const slotAnimation = (height: number) => ({
    animate: { y: [0, -height] },
    transition: { repeat: Infinity, duration: 3, ease: "linear" as const },
    style: { willChange: "transform" },
  });

  const cascadeAnimation = (height: number) => ({
    animate: { y: [0, height] },
    transition: { repeat: Infinity, duration: 5, ease: "linear" as const },
    style: { willChange: "transform" },
  });

  return (
    <section className="relative w-full h-[80vh] md:h-screen flex justify-center items-center overflow-hidden bg-black">
      {/* Ambient top/bottom light leaks */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#ffd700]/10 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#ff2a2a]/10 to-transparent z-10" />

      <div className="relative w-full h-full aspect-1920/2160 md:aspect-1920/1080">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Vignette más profunda para look cinematográfico */}
            <radialGradient id="vignetteGradient" cx="50%" cy="50%" r="75%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="60%" stopColor="rgba(0,0,0,0.3)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.95)" />
            </radialGradient>

            {/* Glow dorado sutil para elementos */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Fondo */}
          <image
            href={imagePath}
            width="1920"
            height="1080"
            preserveAspectRatio="xMidYMid slice"
          />
          <image
            href={fondoBlancoPath}
            x={fbX}
            y={fbY}
            width={fbWidth}
            height={fbHeight}
            preserveAspectRatio="none"
          />

          {/* Tragaperras */}
          <g transform={`translate(${tX}, ${tY})`}>
            <motion.image
              {...slotAnimation(tHeight)}
              href={tragaperrasPath}
              x={0}
              y={0}
              width={tWidth}
              height={tHeight}
              preserveAspectRatio="none"
            />
            <motion.image
              {...slotAnimation(tHeight)}
              href={tragaperrasPath}
              x={0}
              y={tHeight}
              width={tWidth}
              height={tHeight}
              preserveAspectRatio="none"
            />
          </g>

          <image
            href={maquinaPath}
            x={mX}
            y={mY}
            width={mWidth}
            height={mHeight}
            preserveAspectRatio="none"
          />

          <image
            href={parrillaPath}
            x={pX}
            y={pY}
            width={pWidth}
            height={pHeight}
            preserveAspectRatio="none"
          />

          {/* Metal top y bottom */}
          <g
            transform={`translate(${metalTopX}, ${metalTopY + metal1Height}) scale(1, -1)`}
          >
            <image
              href={metal1Path}
              x={0}
              y={0}
              width={metal1Width}
              height={metal1Height}
              preserveAspectRatio="none"
            />
          </g>
          <image
            href={metal2Path}
            x={metalBottomX}
            y={metalBottomY}
            width={metal2Width}
            height={metal2Height}
            preserveAspectRatio="none"
          />

          {/* Fichas en Cascada */}
          <g transform={`translate(${fX}, ${fY})`}>
            <motion.image
              {...cascadeAnimation(fHeight)}
              href={fichasPath}
              x={0}
              y={-fHeight}
              width={fWidth}
              height={fHeight}
              preserveAspectRatio="xMidYMid meet"
            />
            <motion.image
              {...cascadeAnimation(fHeight)}
              href={fichasPath}
              x={0}
              y={0}
              width={fWidth}
              height={fHeight}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>

          <image
            href={fffPath}
            x={fffX}
            y={fffY}
            width={fffWidth}
            height={fffHeight}
            preserveAspectRatio="xMidYMid meet"
          />

          {/* Linea 1 */}
          <g transform={`translate(${l1X}, ${l1Y})`}>
            <motion.image
              {...cascadeAnimation(l1Height)}
              href={linea1Path}
              x={0}
              y={-l1Height}
              width={l1Width}
              height={l1Height}
              preserveAspectRatio="xMidYMid meet"
            />
            <motion.image
              {...cascadeAnimation(l1Height)}
              href={linea1Path}
              x={0}
              y={0}
              width={l1Width}
              height={l1Height}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>

          {/* Linea 2 */}
          <g transform={`translate(${l2X}, ${l2Y})`}>
            <motion.image
              {...cascadeAnimation(l2Height)}
              href={linea2Path}
              x={0}
              y={-l2Height}
              width={l2Width}
              height={l2Height}
              preserveAspectRatio="xMidYMid meet"
            />
            <motion.image
              {...cascadeAnimation(l2Height)}
              href={linea2Path}
              x={0}
              y={0}
              width={l2Width}
              height={l2Height}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>

          <image
            href={cartelPath}
            x={cCartelX}
            y={cCartelY}
            width={cWidth}
            height={cHeight}
            preserveAspectRatio="none"
          />
          <image
            href={sinRencoresPath}
            x={srX}
            y={srY}
            width={srWidth}
            height={srHeight}
            preserveAspectRatio="xMidYMid meet"
          />

          {/* Vignette overlay */}
          <rect
            width="1920"
            height="1080"
            fill="url(#vignetteGradient)"
            fillOpacity="0.9"
          />
        </svg>
      </div>
    </section>
  );
}

