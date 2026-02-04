import { createContext } from "react";
import { Tarea } from "../models/Tarea";

export const TareaContext = createContext({
    tareas: [] as Tarea[],
    agregarTarea: (titulo: string, descripcion: string) => {},
    cambiarEstado: (id: number, estado: string) => {},
    eliminarTarea:(id: number) => {}
});