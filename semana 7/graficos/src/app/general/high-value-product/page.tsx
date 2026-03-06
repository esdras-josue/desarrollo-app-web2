'use client';
import { fetchHighValueProduct } from '@/app/service/api';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { useRouter } from 'next/navigation';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Page() {
    const router = useRouter();
    const [charData, setCharData] = useState<any>(null);
    const [error, setError] = useState<string>('');

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top' as const,
          labels: {
            color: '#334155',
            boxWidth: 14,
            boxHeight: 14,
          },
        },
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(148, 163, 184, 0.18)',
          },
          ticks: {
            color: '#334155',
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(148, 163, 184, 0.22)',
          },
          ticks: {
            color: '#334155',
          },
        },
      },
    };

    useEffect(() =>{
        fetchHighValueProduct()
          .then((data) => {
            setError('');

            const productType = data.map((item: any) => item.productType);
            const product = data.map((item: any) => item.valorMaximo);
              
            setCharData({
                labels: productType,
                datasets: [
                    {
                        label: 'Productos con el valor mas alto',
                        data: product,
                        backgroundColor: 'rgba(99, 102, 241, 0.74)',
                        borderColor: 'rgba(79, 70, 229, 1)',
                        borderWidth: 1.6,
                        borderRadius: 8,
                    }
                ]
            });
        })
          .catch((err) => {
            console.error('Error cargando productos de alto valor:', err);
            setError('No se pudieron cargar los datos.');
          });
    }, []);

  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8">
      <section className="rounded-2xl border border-cyan-100 bg-white/90 p-6 shadow-lg shadow-cyan-900/10 backdrop-blur md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">Productos con Mayor Valor</h1>
            <p className="mt-1 text-sm text-slate-600">Visualizacion del valor maximo alcanzado por tipo de producto.</p>
          </div>
          <button
            type="button"
            onClick={() => router.push('/')}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Volver al inicio
          </button>
        </div>

        <div className="h-[420px] rounded-xl border border-slate-200 bg-slate-50 p-4">
          {error ? (
            <p className="text-sm font-medium text-red-600">{error}</p>
          ) : charData ? (
            <Bar data={charData} options={options} />
          ) : (
            <p className="text-sm text-slate-600">Cargando informacion...</p>
          )}
        </div>
      </section>
    </div>
  )
}
