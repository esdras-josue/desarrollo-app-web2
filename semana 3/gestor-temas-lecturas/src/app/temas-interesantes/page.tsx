"use client";
import Link from 'next/link';
import { useTema } from "../provider/TemasProvider";


export default function page() {
    const { temas } = useTema();
    const temasInteresantes = temas.filter((tema) => tema.interesante);

  return (
    <main className="max-w-2xl mx-auto p-6">

  <h1 className="text-2xl font-bold mb-6">
    Temas Interesantes
  </h1>

  {temasInteresantes.length === 0 ? (
    <p className="text-gray-400">
      No hay temas interesantes.
    </p>
  ) : (
    <div className="space-y-3">
      {temasInteresantes.map((tema) => (
        <div
          key={tema.id}
          className="border rounded-lg p-4
                     bg-gray-900 border-green-600"
        >
          {tema.titulo}
        </div>
      ))}
    </div>
  )}

  <Link href="/">
    <button className="mt-6 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md">
      Volver
    </button>
  </Link>

</main>
  );
}
