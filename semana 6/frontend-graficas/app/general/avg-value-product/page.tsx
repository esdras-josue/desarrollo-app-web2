"use client";
import React, { useEffect, useState } from "react";
import { fetchAvgValueProduct } from "@/app/service/api";
import { useRouter } from "next/navigation";
import "@/app/chartConfig";
import { Bar } from "react-chartjs-2";
import { ChartDataType } from "@/app/Types/chart";

export default function page() {
  const router = useRouter();
  const [chartData, setChartData] = useState<ChartDataType>({
    labels: [],
    datasets: [
      {
        label: "avg value products",
        data: [],
      },
    ],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAvgValueProduct()
      .then((data) => {
        if (data.length > 0) {
          setChartData({
            labels: ["Avg Value"],
            datasets: [
              {
                label: "Valor promedio de los productos",
                data: data.map((item: any) => item.valorPromedio),
                backgroundColor: "rgba(59, 130, 246, 0.4)",
                borderColor: "rgba(59, 130, 246, 1)",
                borderWidth: 2,
              },
            ],
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Productos registrados",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if(loading){
    return (
        <div className="flex min-h-screen items-center justify-center">
            <p className="text-lg font-medium text-gray-600">
                cargando informacion...
            </p>
        </div>
    );
  }

  return(
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-700">
          Gráfico promedio de productos
        </h2>
        <div className="w-full">
          <Bar data={chartData} options={options} />
        </div>
        <div className="flex justify-end mb-4">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  )
}
