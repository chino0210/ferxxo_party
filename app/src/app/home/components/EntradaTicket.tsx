"use client";
import React from "react";
import entradaSvg from "../svgs/entrada.svg";

interface EntradaTicketProps {
  nombre: string;
  codigo: string;
}

export default function EntradaTicket({ nombre, codigo }: EntradaTicketProps) {
  const safeNombre = nombre || "INVITADO";
  const safeCodigo = codigo || "---";

  const svgPath =
    typeof entradaSvg === "string"
      ? entradaSvg
      : (entradaSvg as { src?: string }).src || entradaSvg;

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        className="relative w-full aspect-[1100/400] bg-cover bg-center bg-no-repeat drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]"
        style={{ backgroundImage: `url(${svgPath})` }}
      >
        {/* Contenedor del texto: Alineado al final (abajo) y a la derecha */}
        <div className="absolute inset-0 flex flex-col items-end justify-end p-2 md:p-10 pointer-events-none">
          {/* NOMBRE - Tamaño reducido y alineado a la derecha */}
          <div className="text-right">
            <p className="text-[7px] font-semibold tracking-[0.2em] text-gray-400 uppercase leading-none">
              Nombre
            </p>
            <p className="text-lg md:text-[12px] font-black text-white tracking-tight drop-shadow-md">
              {safeNombre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
