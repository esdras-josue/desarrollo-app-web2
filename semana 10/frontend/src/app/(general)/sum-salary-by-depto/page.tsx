"use client";
import { useEffect, useState } from 'react';
import GraficaBarras from '../../components/GraficaBarras';
import { fetchSumSalaryDepto } from '../../services/api';

type Data = {
    department_id: number;
    salario_total_depto: number;
}

export default function page() {

    const [datos, setDatos] = useState<Data[]>([]);

    useEffect(() => {
        getData();
    },[]);

    async function getData() {
        try {
            const data = await fetchSumSalaryDepto();
            setDatos(data); 
        } catch (error) {
            console.error(error);
        }
    }
  
    const labels = datos.map((d:any) => d.department_id);
    const valores = datos.map((d:any) => d.salario_total_depto);
        
    if(datos.length === 0){
        return <p>Cargando...</p>
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <GraficaBarras 
            labels={labels}
            valores={valores}
            titulo = {'Salarios por departamento'}
        />
    </div>
  )
} 
