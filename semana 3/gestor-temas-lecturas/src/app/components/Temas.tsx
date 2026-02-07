"use client";
import Link from "next/link";
import { useTema } from "../provider/TemasProvider";

export default function Temas() {
  const { temas, marcarInteresante } = useTema();
  return (
    <main className="max-w-2xl mx-auto p-6">

  <h1 className="text-2xl font-bold mb-6">
    Pantalla Principal
  </h1>

  <div className="space-y-3">
    {temas.map((tema) => (
      <div
        key={tema.id}
        className="flex justify-between items-center
                   border rounded-lg p-4
                   bg-gray-900 border-gray-700
                   hover:bg-gray-800 transition"
      >
        <span className="font-medium">
          {tema.titulo}
        </span>

        <button
          onClick={() => marcarInteresante(tema.id)}
          className={`px-3 py-1 rounded-md text-sm font-medium
            ${tema.interesante
              ? "bg-green-600 hover:bg-green-500"
              : "bg-blue-600 hover:bg-blue-500"
            }`}
        >
          {tema.interesante ? "Desmarcar" : "Marcar interesante"}
        </button>
      </div>
    ))}
  </div>

  <Link href="/temas-interesantes">
    <button className="mt-6 bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-md">
      Ir a Temas Interesantes
    </button>
  </Link>

</main>

  );
}
