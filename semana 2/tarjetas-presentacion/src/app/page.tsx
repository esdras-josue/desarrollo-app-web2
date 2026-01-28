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
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {personas.map((persona, index) => (
          <PersonasComponent key={index} persona={persona} />
        ))}
      </main>
    </div>
  );
}
