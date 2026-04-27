import React from "react";
import Animacion from "./animacion";

export default function Inicio() {
  // Recuerda: nombres de componentes en Mayúscula
  return (
    <div className="w-full">
      {" "}
      {/* Asegúrate de no poner h-screen aquí */}
      <Animacion />
      {/* Este contenido ahora será escrolleable */}
      <div className="p-10 bg-white">
        <h1>Más contenido aquí</h1>
        <p>AAAAAAAAAAAAA</p>
        <p>AAAAAAAAAAEEEEAA</p>
      </div>
    </div>
  );
}
