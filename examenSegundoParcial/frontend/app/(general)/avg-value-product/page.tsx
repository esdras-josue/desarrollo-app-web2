'use client';
import { fetchAvgValueProduct } from '@/app/service/api';
import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  );

export default function page() {
    const [chartData, setChartData] = useState<any>({
        labels: [],
        datasets: [
            {
                label: 'Valor promedio de productos',
                data: [],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',   // color de la línea
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // relleno suave
                pointBackgroundColor: 'rgb(75, 192, 192)',
                pointBorderColor: '#fff',
                pointRadius: 5,
                pointHoverRadius: 7,
                borderWidth: 2,
                tension: 0.3, // curva más suav
            }
        ]
    });

    useEffect(() =>{
        fetchAvgValueProduct().then((data) => {
            const labels = data.map((item:any) => item.categoryCode);
            const countData = data.map((item:any) => item.ValorPromedio);

            setChartData({
                labels: labels,
                datasets:[
                    {
                        label: 'Valor promedio de productos por categoria',
                        data: countData,
                        fill: true,
                        borderColor: 'rgba(250, 249, 249, 1)',   // color de la línea
                        backgroundColor: 'rgba(75, 192, 192, 0.2)', // relleno suave
                        pointBackgroundColor: 'rgb(75, 192, 192)',
                        pointBorderColor: '#fff',
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        borderWidth: 2,
                        tension: 0.3,
                    }
                ]
            });
        });
    },[]);

  return (
    <div>
      {
        chartData ? (
            <div> <Line data={chartData} /></div>
        ) : (
            <p>Cargando infromacion...</p>
        )
      }
    </div>
  )
}
