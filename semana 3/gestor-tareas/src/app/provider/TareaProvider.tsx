"use client";
import { useContext, ReactNode, useState} from "react";
import { Tarea } from '../models/Tarea';
import { TareaContext } from "../context/TareasContext";

interface viewReact {
  children: ReactNode;
}

export default function TareaProvider({children}: viewReact) {

  const [ tareas, setTareas ] = useState<Tarea[]>([]);

  function agregarTarea(titulo: string, descripcion: string){
    const nuevaTarea: Tarea = {
      id: tareas.length +1,
      titulo,
      descripcion,
      estado: "Pendiente",
    };

    setTareas([ ...tareas, nuevaTarea]);
  }

  function cambiarEstado(id: number, estado:string) {
    setTareas(
      tareas.map(t => t.id === id? { ...t, estado} : t)
    )
  }

  function eliminarTarea(id: number) {
    setTareas(tareas.filter(t => t.id !== id));
  }

  return (
    <TareaContext.Provider value={{ tareas, agregarTarea, cambiarEstado, eliminarTarea}}>
      {children}
    </TareaContext.Provider>
  )
}

export function useContextTarea() {
  return useContext(TareaContext);
}