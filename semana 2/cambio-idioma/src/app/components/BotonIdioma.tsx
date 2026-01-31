import React from "react";
import {BotonIdiomaProps} from "../interface/BotonIdiomaProps"

export default function BotonIdioma({
  label,
  idiomaBoton,
  idiomaActual,
  CambiarIdioma,
}: BotonIdiomaProps) {
  const activo = idiomaActual === idiomaBoton;

  return (
    <button
      onClick={() => CambiarIdioma(idiomaBoton)}
      style={{
        marginRight: "8px",
        padding: "8px 12px",
        fontWeight: activo ? "bold" : "normal",
      }}
    >
        {label}
    </button>
  );
}
