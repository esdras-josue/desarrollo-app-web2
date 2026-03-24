"use client";
import React from "react";
import "@/app/chartConfig";
import { Props } from "../types/Props";
import { Bar } from "react-chartjs-2";
import { useRouter } from 'next/navigation';

export default function GraficaBarras({ labels, valores, titulo }: Props) {
  const router = useRouter();

  const data = {
    labels,
    datasets: [
      {
        label: titulo || "Datos",
        data: valores,
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6",
          "#06b6d4",
        ],
        borderRadius: 8,
      },
    ],
  };

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#374151"
      }
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#6b7280"
      }
    },
    y: {
      ticks: {
        color: "#6b7280"
      }
    }
  }
}

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
      {/* Título */}
      {titulo && (
        <h2 className="text-xl font-semibold mb-4 text-gray-700">{titulo}</h2>
      )}
    <div className="flex justify-end mb-4">
      <button
        type="button"
        onClick={() => router.push('/')}
        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
      >
        Volver al inicio
      </button>
    </div>

      {/* Contenedor de la gráfica */}
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
