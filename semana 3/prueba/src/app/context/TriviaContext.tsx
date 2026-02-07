import { createContext } from "react";

export const TriviaContext = createContext({
  puntaje: 0,
  respondidas: 0,
  incrementarPuntos: () => {},
  reiniciarJuego: () => {},
});
