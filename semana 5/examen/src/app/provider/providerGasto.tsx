'use client';
import React, { useContext, useEffect, useState } from 'react'
import { Gasto } from '../models/Gasto';
import { GastoContext } from '../context/GastoContext';
import { Plantilla } from '../models/Plantilla';

export default function ProviderGasto({children}: Plantilla) {
    const [ presupuesto, setPresupuesto ] = useState(0);
    const [ gastos, setGastos ] = useState<Gasto[]>([]);
    const [ categorias, setCaegoria ] = useState<string[]>([
        "comida",
        "transporte",
        "Entretenimiento"
    ]);

    const [ totalGastado, setTotalGastado ] = useState(0);
    const [ porcentajeGastado, setPorcentajeGastado ] = useState(0);
    const [ estadoPresupuesto, setEstadoPresupuesto ] = useState<"ok" | "warning" | "over">("ok");

    async function obtenerGastos(){
        try {
            const res = await fetch("http://localhost:5000/gasto");
            const data = await res.json();
            setGastos(data);
        } catch (error) {
            alert('Error al obtener gastos');
        }
    }

    async function agregarGasto(gasto: Gasto) {
        try {
            await fetch("http://localhost:5000/gasto", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify({
                    categoria: gasto.categoria,
                    monto: gasto.monto,
                    fecha: gasto.fecha,
                }),
            });
            obtenerGastos();
        } catch (error) {
            alert('Error al agregar gasto');
        }
    }

    function agregarCategoria(nombre: string){
        const limpiar = nombre.trim();
        if (!limpiar) return;
        const existeCategoria = categorias.some((categoria) => categoria === limpiar)
        if(existeCategoria) return;

        setCaegoria([...categorias, limpiar]);
    }

    useEffect(() => {
        obtenerGastos();
    }, []);

    // calcular total cuando cambian los gastos
    useEffect(() => {
        let total = 0;
        for(const gasto of gastos) {
            total += Number(gasto.monto);
        }

        setTotalGastado(total);
    },[gastos]);

    // recalcular porcentaje y estado cuando cambien
    useEffect(() => {
        if(presupuesto <= 0){
            setPorcentajeGastado(0);
            setEstadoPresupuesto('ok');
            return;
        }

            const p = Math.round((totalGastado / presupuesto) * 100);
    setPorcentajeGastado(p);

    if(totalGastado > presupuesto) {
        setEstadoPresupuesto('over')
    }
    else if(totalGastado >= presupuesto * 0.8){
        setEstadoPresupuesto("warning");
    } 
    else {
        setEstadoPresupuesto('ok')
    }
    }, [totalGastado,presupuesto]);


  return (
    <GastoContext.Provider value={{presupuesto,setPresupuesto,gastos,categorias,agregarGasto,obtenerGastos,agregarCategoria,totalGastado,porcentajeGastado,estadoPresupuesto}}>
        {children}
    </GastoContext.Provider>
  )
}

export function useGasto(){
    return useContext(GastoContext);
}
