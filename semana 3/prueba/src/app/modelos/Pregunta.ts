export interface Pregunta {
  idPregunta: number;
  descripcion: string;
  opcionRespuesta1: boolean;
  opcionRespuesta2: boolean;
  respuestaCorrecta: boolean;
  puntos: number;
}
