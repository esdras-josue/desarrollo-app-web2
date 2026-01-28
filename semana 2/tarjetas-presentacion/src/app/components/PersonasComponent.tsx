import React from "react";
import { TarjetaPresentacion } from "../models/TarjetaPresentacion";

interface TarjetaProps {
  persona: TarjetaPresentacion;
}

export default function PersonasComponent({ persona }: TarjetaProps) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md p-6 m-2">
      <h2 className="text-xl font-semibold text-gray-800">{persona.nombre}</h2>
      <p className="mt-2 text-gray-600">
        <span className="font-medium">Ocupación:</span> {persona.ocupacion}
      </p>
      <p className="mt-1 text-gray-600">
        <span className="font-medium">País:</span> {persona.pais}
      </p>
    </div>
  );
}
