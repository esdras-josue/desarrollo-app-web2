"use client";
import { useState } from "react";
import { useGasto } from "@/app/provider/providerGasto";

export default function Page() {
  const {
    presupuesto,
    setPresupuesto,
    categorias,
    agregarCategoria,
    gastos,
    agregarGasto,
    totalGastado,
    porcentajeGastado,
    estadoPresupuesto,
  } = useGasto();

  const [inputPresupuesto, setInputPresupuesto] = useState("");
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState("comida");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");

  return (
    <div className="min-h-screen bg-zinc-100 p-6 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        {/** ALERTAS */}
        {estadoPresupuesto === "warning" && (
          <div className="rounded-lg border border-yellow-300 bg-yellow-100 p-3 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
            Has alcanzado el 80% del presupuesto
          </div>
        )}

        {estadoPresupuesto === "over" && (
          <div className="rounded-lg border border-red-300 bg-red-100 p-3 text-red-900 dark:border-red-800 dark:bg-red-900/30 dark:text-red-200">
            Has superado el limite del presupuesto, debes ajustar gastos
          </div>
        )}

        {/**Presupuesto */}
        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-2 text-lg font-semibold">Presupuesto mensual</h2>

          <p className="text-sm">Presupuesto: {presupuesto}</p>
          <p className="text-sm">Total gastado: {totalGastado}</p>
          <p className="mb-3 text-sm font-medium">{porcentajeGastado}%</p>

          <input
            placeholder="Nuevo presupuesto"
            value={inputPresupuesto}
            onChange={(e) => setInputPresupuesto(e.target.value)}
            className="mr-2 rounded-md border border-zinc-300 bg-white p-2 text-zinc-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-blue-900"
          />

          <button
            onClick={() => setPresupuesto(Number(inputPresupuesto))}
            className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>

        <div className="space-y-2 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <input
            placeholder="Monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            className="w-full rounded-md border border-zinc-300 bg-white p-2 text-zinc-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-blue-900"
          />

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full rounded-md border border-zinc-300 bg-white p-2 text-zinc-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:ring-blue-900"
          >
            {categorias.length === 0 ? (
              <option value="" className="text-zinc-900">
                No hay categorias
              </option>
            ) : (
              categorias.map((c) => (
                <option key={c} value={c} className="text-zinc-900">
                  {c}
                </option>
              ))
            )}
          </select>

          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full rounded-md border border-zinc-300 bg-white p-2 text-zinc-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-blue-900"
          />

          <button
            onClick={() =>
              agregarGasto({
                idGasto: Date.now(),
                categoria,
                monto: Number(monto),
                fecha,
                descripcion,
              })
            }
            className="rounded-md bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
          >
            Agregar gasto
          </button>
        </div>
        {/**Nueva categoria */}
        <div className="space-y-2 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <input
            placeholder="Nueva categoria"
            value={nuevaCategoria}
            onChange={(e) => setNuevaCategoria(e.target.value)}
            className="mr-2 rounded-md border border-zinc-300 bg-white p-2 text-zinc-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-blue-900"
          />

          <button
            onClick={() => agregarCategoria(nuevaCategoria)}
            className="rounded-md bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Agregar categoria
          </button>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          {gastos.map((g, i) => (
            <div
              key={i}
              className="border-b border-zinc-200 py-2 text-sm last:border-b-0 dark:border-zinc-700"
            >
              {g.categoria} - {g.monto} - {g.fecha}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
