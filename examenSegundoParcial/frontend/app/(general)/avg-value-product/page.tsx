"use client";
import { useRouter } from "next/navigation";
import { fetchAvgValueProduct } from "@/app/service/api";
import { Line } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

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
  const router = useRouter();
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [
      {
        label: "Valor promedio de productos",
        data: [],
        fill: true,
        borderColor: "rgb(75, 192, 192)", // color de la línea
        backgroundColor: "rgba(75, 192, 192, 0.2)", // relleno suave
        pointBackgroundColor: "rgb(75, 192, 192)",
        pointBorderColor: "#fff",
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 2,
        tension: 0.3, // curva más suav
      },
    ],
  });

  useEffect(() => {
    fetchAvgValueProduct().then((data) => {
      const labels = data.map((item: any) => item.categoryCode);
      const countData = data.map((item: any) => item.ValorPromedio);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Valor promedio de productos por categoria",
            data: countData,
            fill: true,
            borderColor: "rgba(250, 249, 249, 1)", // color de la línea
            backgroundColor: "rgba(75, 192, 192, 0.2)", // relleno suave
            pointBackgroundColor: "rgb(75, 192, 192)",
            pointBorderColor: "#fff",
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 2,
            tension: 0.3,
          },
        ],
      });
    });
  }, []);

  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8">
      <section className="rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-lg shadow-sky-900/10 backdrop-blur md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Promedio de Productos
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Valor Promedio de Productos por Categoría

            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Volver al inicio
          </button>
        </div>
        <div>
          {chartData ? (
            <div>
              {" "}
              <Line data={chartData} />
            </div>
          ) : (
            <p>Cargando infromacion...</p>
          )}
        </div>
      </section>
    </div>
  );
}
