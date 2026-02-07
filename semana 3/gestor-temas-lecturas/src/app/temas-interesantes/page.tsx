import link from 'next/link';
import { useTema } from "../provider/TemasProvider";
import React from 'react'

export default function page() {
    const { temas } = useTema();
    const temasInteresantes = temas.filter((tema) => tema.interesante);

  return (
    <main style={{ padding: 24}}>
        <h1>Pantalla Temas Interesantes</h1>

        {temasInteresantes.length === 0 ? (
            <p>No hay temas interesantes.</p>
        ) : (
            temasInteresantes.map((tema) => (
                <div
                  key={tema.id}
                  style={{
                    padding: 12,
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    marginBottom : 10,
                  }}
                >
                    {tema.titulo}
                </div>
            ))
        )}

        <link href='/'>
            <button>Volver</button>
        </link>
    </main>
  );
}
