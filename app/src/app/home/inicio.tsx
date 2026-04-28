import React from "react";
import Animacion from "./animacion";
import Entradas from "./entradas";

export default function Inicio() {
  return (
    <main className="w-full">
      <Animacion />
      {/* Subtle divider between hero and tickets */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#ffd700]/30 to-transparent" />
      <Entradas />
    </main>
  );
}

