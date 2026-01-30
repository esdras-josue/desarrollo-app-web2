"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const palabras = [
    {"es":"casa","en":"House"},
    {"es":"Perro","en": "Dog"},
    {"es":"Comida","en":"Food"},
    {"es":"Escuela","en":"School"},
    {"es":"Futbol","en":"Football"},
    {"es":"Hombre","en":"Man"},
    {"es":"Mujer","en":"Woman"},
    {"es":"Niño","en":"Boy"},
    {"es":"Niña","en":"Girl"},
    {"es":"Carro","en":"Car"}
  ]

  const [ idiomaActual, setIdioama] = useState<"es" | "en">("es");
  const [ listaMostrada, setListaMostrada] = useState<string[]>([])

  useEffect(() =>{
    const resultado = palabras.map((item, index) => {
      return idiomaActual === "es" ? item.es : item.en; 
    });

    setListaMostrada(resultado);

  },[idiomaActual]);

  return (
      <div>
        
      </div>
  );
}
