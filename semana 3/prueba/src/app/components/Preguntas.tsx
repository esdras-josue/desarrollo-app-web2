"use client";
import React, { useEffect, useState } from "react";
import { useTriviaContext } from "../provider/TriviaProvider";
import { Pregunta } from "../modelos/Pregunta";

export default function Preguntas() {
  const { puntaje, incrementarPuntos, reiniciarJuego } = useTriviaContext();
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [indice, setIndice] = useState<number>(0);
  const [seleccion, setSeleccion] = useState<boolean | null>(null);
  const [mensaje, setMensaje] = useState("");

  function reiniciarTrivia() {
    reiniciarJuego();
    setIndice(0);
    setSeleccion(null);
    setMensaje("")
  }

  useEffect(() => {
    const lista = [
      {
        idPregunta: 1,
        descripcion: "Messi es el jugador con mas balones de oro.",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntos: 1,
      },
      {
        idPregunta: 2,
        descripcion:
          "Cristiano Ronaldo es el jugador con mas goles en la historia del futbol.",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntos: 1,
      },
      {
        idPregunta: 3,
        descripcion: "El Real Madrid es el club con mas UEFA CHAMPIONS LEAGUE.",
        opcionRespuesta1: false,
        opcionRespuesta2: true,
        respuestaCorrecta: true,
        puntos: 1,
      },
      {
        idPregunta: 4,
        descripcion: "Olimpia es el club mas galardonado en Honduras.",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntos: 1,
      },
      {
        idPregunta: 5,
        descripcion: "Honduras de ha clasificado a 5 mundiales de la FIFA.",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: false,
        puntos: 1,
      },
    ];
    setPreguntas(lista);
  }, []);

  function responder(opcion: boolean) {
    const actual = preguntas[indice];
    setSeleccion(opcion);

    if (opcion === actual.respuestaCorrecta) {
      incrementarPuntos();
      setMensaje("Correcto");
    } else {
      setMensaje("Incorrecto");
    }
  }

  function siguiente() {
    setSeleccion(null);
    setMensaje("");
    if (indice < preguntas.length - 1) {
      setIndice((prev) => prev  + 1);
    } else {
      setMensaje("Has terminado la trivia");
    }
  }

  if (preguntas.length === 0) {
    return <p>Cargando....</p>;
  }

  const actual = preguntas[indice];

  return (
    <div>
      <p>
        Pregunta {indice + 1} de {preguntas.length}
      </p>
      <p>{actual.descripcion}</p>
      <div>
        <button onClick={() => responder(true)} disabled={seleccion !== null}>
          verdadero
        </button>
      </div>

      <div>
        <button onClick={() => responder(false)} disabled={seleccion !== null}>
          false
        </button>
      </div>

      {mensaje && (
        <div>
          <p>{mensaje}</p>
          {indice < preguntas.length - 1 ? (
            <button onClick={siguiente}>Siguiente</button>
          ) : (
            <button onClick={reiniciarTrivia}>Reiniciar Trivia</button>
          )}
        </div>
      )}
      <p>Puntaje actual: {puntaje}</p>
    </div>
  );
}
