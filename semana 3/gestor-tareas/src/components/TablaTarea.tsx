"use client";
import { useContextTarea } from "@/app/provider/TareaProvider";

export default function TablaTarea() {
  const { tareas, cambiarEstado, eliminarTarea } = useContextTarea();

  return (
    <div>
      <table>
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-slate-300">
            <th className="py-3 px-3">ID</th>
            <th className="py-3 px-3">Titulo</th>
            <th className="py-3 px-3">Descripción</th>
            <th className="py-3 px-3">Estado</th>
            <th className="py-3 px-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}
            className="border-t border-white/10 hover:bg-white/5"
            >
              <td className="py-3 px-3 text-sm text-slate-200">{tarea.id}</td>
              <td className="py-3 px-3 text-sm font-medium text-slate-100">{tarea.titulo}</td>
              <td className="py-3 px-3 text-sm text-slate-200">{tarea.descripcion}</td>
              <td className="py-3 px-3">
                <select
                  value={tarea.estado}
                  onChange={(e) => cambiarEstado(tarea.id, e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-indigo-400/60"
          >
                  <option value="Pendiente">Pendiente</option>
                  <option value="En Proceso">En Proceso</option>
                  <option value="Completada">Completada</option>
                </select>
              </td>
              <td  className="py-3 px-3">
                <button onClick={() => eliminarTarea(tarea.id)}
                className="rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-200 hover:bg-red-500/20"
                    >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
