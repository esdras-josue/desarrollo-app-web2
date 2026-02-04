"use client";
import { useContextTarea} from '@/app/provider/TareaProvider'
import { useState } from 'react';
;
export default function TareaFormulario() {
    const { agregarTarea } = useContextTarea();
    const [ titulo, setTitulo ] = useState("");
    const [ descripcion, setDescripcion ] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        agregarTarea(titulo,descripcion);
        setTitulo("");
        setDescripcion("");
    }

  return (
    <form onSubmit={handleSubmit}
    className="grid grid-cols-1 gap-3 md:grid-cols-3 md:items-end"
    >
        <input
            className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-indigo-400/60"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            placeholder='Titulo'
         />
         <input 
            className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-indigo-400/60"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            placeholder='Descripción'
         />

         <button type="submit"
          className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 active:bg-indigo-600"
         >
         Agregar
         </button>

    </form>
  )
}
