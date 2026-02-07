"use client";
import React, { useState, useContext } from "react";
import { PlantillaReact } from "../modelos/PlantillaReact";
import { TriviaContext } from "../context/TriviaContext";

export default function TriviaProvider({ children }: PlantillaReact) {
  const [puntaje, setPuntaje] = useState(0);
  const [respondidas, setRespondidas] = useState(0);

  function incrementarPuntos() {
    setPuntaje(puntaje + 1);
    setRespondidas(respondidas + 1);
  }

  function reiniciarJuego() {
    setPuntaje(0);
    setRespondidas(0);
    
  }
  return (
    <TriviaContext.Provider
      value={{ puntaje, respondidas,incrementarPuntos, reiniciarJuego }}
    >
      {children}
    </TriviaContext.Provider>
  );
}

export const useTriviaContext = () => {
  return useContext(TriviaContext);
};
