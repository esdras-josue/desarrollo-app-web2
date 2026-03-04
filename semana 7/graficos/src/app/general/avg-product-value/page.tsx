'use client';
import { fetchAvgProdValue } from '@/app/service/api';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
      },
    },
  };

  useEffect(() => {
    fetchAvgProdValue()
      .then((data) => {
        setError('');

        const labels = data.map((item: any) => item.valueCurrency.trim());
        const valores = data.map((item: any) => item.promedioProductos);

        setCharData({
          labels,
          datasets: [
            {
              label: 'Valor promedio de Productos',
              data: valores,
              backgroundColor: 'rgba(8, 145, 178, 0.75)',
              borderColor: 'rgba(14, 116, 144, 1)',
              borderWidth: 1.5,
              borderRadius: 8,
            },
          ],
        });
      })
      .catch((err) => {
        console.error('Error cargando promedio por producto:', err);
        setError('No se pudieron cargar los datos.');
      });
  }, []);

  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8">
      <section className="rounded-2xl border border-cyan-100 bg-white/90 p-6 shadow-lg shadow-cyan-900/10 backdrop-blur md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">Promedio por Moneda</h1>
            <p className="mt-1 text-sm text-slate-600">Comparacion del valor promedio de productos por tipo de moneda.</p>
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
  );
}
