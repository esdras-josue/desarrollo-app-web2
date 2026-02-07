"use client";
import React, { useContext, useEffect, useState } from "react";
import { ViewReact } from "../models/ViewReact";
import { Temas } from "../models/Temas";
import { TemasContext } from "../context/TemasContext";

export default function TemasProvider({ children }: ViewReact) {
  const [temas, setTemas] = useState<Temas[]>([]);
  //const [ id, setId ] = useState(1);

  useEffect(() => {
    setTemas((prev) => {
      if (prev.length > 0) return prev;
      const lista: Temas[] = [];
      for (let i = 1; i <= 20; i++) {
        lista.push({ id: i, titulo: "Tema " + i, interesante: false });
      }
      return lista;
    });
  }, []);

  function marcarInteresante(id: number) {
    setTemas((temaAnterior) =>
      temaAnterior.map((tema) =>
        tema.id === id ? { ...tema, interesante: !tema.interesante } : tema,
      ),
    );
  }

  return (
    <TemasContext.Provider value={{ temas, marcarInteresante }}>
      {children}
    </TemasContext.Provider>
  );
}

export function useTema() {
  return useContext(TemasContext);
}
