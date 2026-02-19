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
    <div className="p-6 space-y-6">
      <h1 className="text-2x1 font-bold">Dashboard</h1>

      {/** ALERTAS */}
      {estadoPresupuesto === "warming" && (
        <div className="bg-yellow-200 p-3 rounded">
          Has alcanzado el 80% del presupuesto
        </div>
      )}

      {estadoPresupuesto === "over" && (
        <div className="bg-red-300 p-3 rounded">
          Has superado el limite del presupuesto, debes ajustar gastos
        </div>
      )}

      {/**Presupuesto */}
      <div className="bg-white p-4 shadow rounded">
        <h2>Presupuesto mensual</h2>

        <p>Presupuesto: {presupuesto}</p>
        <p>Total gastado: {totalGastado}</p>
        <p>{porcentajeGastado}%</p>

        <input
          placeholder="Nuevo presupuesto"
          value={inputPresupuesto}
          onChange={(e) => setInputPresupuesto(e.target.value)}
          className="border p-2"
        />

        <button
          onClick={() => setPresupuesto(Number(inputPresupuesto))}
          className="bg-blue-500 text-white p-2"
        >
          Guardar
        </button>
      </div>

      <div className="bg-white p-4 shadow rounded space-y-2">
        <input
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          className="border p-2"
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border p-2"
        >
          {categorias.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="border p-2"
        />

        <button
          onClick={() =>
            agregarGasto({
              idGasto: gastos.length + 1,
              categoria,
              monto: Number(monto),
              fecha,
              descripcion,
            })
          }
          className="bg-green-500 text-white p-2"
        >
          Agregar gasto
        </button>
      </div>
      {/**Nueva categoria */}
      <div>
        <input
          placeholder="Nueva categoria"
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}
          className="border p-2"
        />

        <button
          onClick={() => agregarCategoria(nuevaCategoria)}
          className="bg-black text-white p-2"
        >
          Agregar categoria
        </button>
      </div>

      <div className="bg-white p-4 shadow rounded">
        {gastos.map((g,i)=>(
            <div key={i}>
                {g.categoria} - {g.monto} - {g.fecha}
            </div>
        ))}

      </div>
    </div>
  );
}
