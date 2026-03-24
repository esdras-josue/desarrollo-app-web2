"use client";
import GraficaBarras from '@/app/components/GraficaBarras';
import { fetchMaxMinValue } from '@/app/services/api';
import React, { useEffect, useState } from 'react'

type Data = {
    productType: string;
    maxValue: number;
    minValue: number;
}

export default function page() {

    const [ datos, setDatos] = useState<Data[]>([]);

    useEffect(() =>{
        getData();
    },[]);

    async function getData() {
        try {
            const data = await fetchMaxMinValue();
            setDatos(data);
        } catch (error) {
            console.log(error);
        }
    }

    const labels = datos.map((d:any) => d.productType);
    const maxValue = datos.map((d:any) => d.maxValue);
    const minValue = datos.map((d:any) => d.minValue);

    if(datos.length === 0) {
        return <p>Cargando...</p>
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <GraficaBarras 
        labels={labels}
        valores={maxValue}
        valores2={minValue}
      />
    </div>
  )
}
