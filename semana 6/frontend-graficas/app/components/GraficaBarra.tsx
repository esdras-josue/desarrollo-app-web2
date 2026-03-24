import React from 'react'
import "@/app/chartConfig";
import { Props } from '../Types/Props';
import { plugins } from 'chart.js';
import { Bar } from 'react-chartjs-2';


export default function GraficaBarra({labels, valores, titulo}: Props) {

    const data = {
        labels,
        datasets: [
            {
                label: titulo || "Datos",
                data: valores,
                borderWidth: 1,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins:{
            legend:{
                position: "top" as const,
            },
            tittle: {
                display: !! titulo,
                text: titulo,
            },
        },
    }
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}
