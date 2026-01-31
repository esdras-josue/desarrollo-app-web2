"use client";
import { useState, useEffect } from "react";
import BotonIdioma from "./components/BotonIdioma";

export default function Home() {
  const palabras = [
    { es: "casa", en: "House" },
    { es: "Perro", en: "Dog" },
    { es: "Comida", en: "Food" },
    { es: "Escuela", en: "School" },
    { es: "Futbol", en: "Football" },
    { es: "Hombre", en: "Man" },
    { es: "Mujer", en: "Woman" },
    { es: "Niño", en: "Boy" },
    { es: "Niña", en: "Girl" },
    { es: "Carro", en: "Car" },
  ];

  const [idiomaActual, setIdioma] = useState<"es" | "en">("es");
  const [listaMostrada, setListaMostrada] = useState<string[]>([]);

  useEffect(() => {
    const resultado = palabras.map((item) => {
      return idiomaActual === "es" ? item.es : item.en;
    });

    setListaMostrada(resultado);
  }, [idiomaActual]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <BotonIdioma
          label="Cambiar Idioma Español"
          idiomaBoton="es"
          idiomaActual={idiomaActual}
          CambiarIdioma={setIdioma}
        />
        <BotonIdioma
          label="Cambiar Idioma Inglés"
          idiomaBoton="en"
          idiomaActual={idiomaActual}
          CambiarIdioma={setIdioma}
        />
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          width: "300px",
          margin: "20px auto",
        }}
      >
        {listaMostrada.map((palabras, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              marginBottom: "8px",
              backgroundColor: "#f2f2f2",
              borderRadius: "6px",
              textAlign: "center",
              color: "#000000",
              fontWeight: "500",
            }}
          >
            {palabras}
          </li>
        ))}
      </ul>
    </>
  );
}
