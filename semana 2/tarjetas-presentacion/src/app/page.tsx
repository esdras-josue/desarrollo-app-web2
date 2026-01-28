"use client";
import { TarjetaPresentacion } from "./models/TarjetaPresentacion";
import PersonasComponent from "./components/PersonasComponent";
import { useEffect, useState } from "react";

export default function Home() {

  const [ personas, setPersonas ] = useState<TarjetaPresentacion[]>([]);

  useEffect(() => {
    const personasLista: TarjetaPresentacion[] = [
      {
        nombre: "Esdras Peña",
        ocupacion: "Desarrolador Web",
        pais: "Honduras",
      },
      {
        nombre: "Kevin Lopez",
        ocupacion: "Jugador de Futbol",
        pais: "Canada",
      },
      {
        nombre: "Isaac Mejia",
        ocupacion: "Director Tecnico",
        pais: "Estados Unidos",
      },
      {
        nombre: "Esther Altamirano",
        ocupacion: "Chef",
        pais: "Honduras",
      },
      {
        nombre: "Lif Cardona",
        ocupacion: "Psicologa",
        pais: "España",
      },
    ];

    setPersonas(personasLista);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-start p-6">
        {personas.map((persona, index) => (
          <PersonasComponent key={index} persona={persona} />
        ))}
    </div>
  );
}
