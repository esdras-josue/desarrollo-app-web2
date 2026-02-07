"use client";
import Link from "next/link";
import { useTema } from "../provider/TemasProvider";

export default function Temas() {
  const { temas, marcarInteresante } = useTema();
  return (
    <main style={{ padding: 24 }}>
      <h1>Pantalla Principal</h1>

      {temas.map((tema) => (
        <div
          key={tema.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            padding: 12,
            border: "1px solid #ddd",
            borderRadius: 8,
            marginBottom: 10,
          }}
        >
          <span>{tema.titulo}</span>

          <button onClick={() => marcarInteresante(tema.id)}>
            {tema.interesante ? "Desmarcar" : "Marcar interesante"}
          </button>
        </div>
      ))}

      <Link href="./temas-interesantes">
        <button>Ir a Temas Interesantes</button>
      </Link>
    </main>
  );
}
