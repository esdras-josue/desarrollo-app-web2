'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { fetchCountProducto } from "@/app/service/api";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function CountProductoChart() {
  const router = useRouter();
  const [chartData, setChartData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setError("");
        const data = await fetchCountProducto();
        const total = Number(data?.[0]?.Productos ?? 0);

        setChartData({
          labels: ["Total de productos"],
          datasets: [
            {
              label: "Total de productos",
              data: [total],
              backgroundColor: "rgba(59, 130, 246, 0.74)",
              borderColor: "rgba(37, 99, 235, 1)",
              borderWidth: 1.5,
              borderRadius: 10,
            }
          ]
        });
      } catch (error) {
        console.error("Error cargando count-producto:", error);
        setError("No se pudieron cargar los datos.");
      }
    };

    getData();
  }, []);

  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8">
      <section className="rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-lg shadow-sky-900/10 backdrop-blur md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">Total de Productos</h1>
            <p className="mt-1 text-sm text-slate-600">Conteo general de productos registrados.</p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/")}
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
            <p className="text-sm text-slate-600">Cargando información...</p>
          )}
        </div>
      </section>
    </div>
  );
}
