'use client';
import { useEffect, useState } from "react";
import { fetchTotalValueBrand } from "@/app/service/api";
import { useRouter } from "next/navigation";
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
  const [chartData, setChartData] = useState<any>(null);
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

  useEffect(() => {
    fetchTotalValueBrand()
      .then((data) => {
        setError('');
        const labels = data.map((item: any) => item.brandCode);
        const totalValues = data.map((item: any) => Number(item.valorTotal));

        setChartData({
          labels,
          datasets: [
            {
              label: 'Valor total de productos por marca',
              data: totalValues,
              backgroundColor: 'rgba(16, 185, 129, 0.75)',
              borderColor: 'rgba(5, 150, 105, 1)',
              borderWidth: 1.6,
              borderRadius: 8,
            }
          ]
        });
      })
      .catch((err) => {
        console.error('Error cargando total por marca:', err);
        setError('No se pudieron cargar los datos.');
      });
  }, []);

  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8">
      <section className="rounded-2xl border border-emerald-100 bg-white/90 p-6 shadow-lg shadow-emerald-900/10 backdrop-blur md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">Valor Total por Marca</h1>
            <p className="mt-1 text-sm text-slate-600">Comparacion del valor total acumulado de productos por marca.</p>
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
          ) : chartData ? (
            <Bar data={chartData} options={options} />
          ) : (
            <p className="text-sm text-slate-600">Cargando informacion...</p>
          )}
        </div>
      </section>
    </div>
  );
}
