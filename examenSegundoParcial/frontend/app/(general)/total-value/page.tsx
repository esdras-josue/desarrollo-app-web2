"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchTotalValue } from "@/app/service/api";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function page() {
  const router = useRouter();
  const [charData, setCharData] = useState<any>({
    labels: [],
    responsive: true,
    maintainAspectRatio: false,
    datasets: [
      {
        label: "Valor total de marcas",
        data: [],
      },
    ],
  });

  useEffect(() => {
    fetchTotalValue().then((data) => {
      const labels = data.map((item: any) => item.brandCode);
      const values = data.map((item: any) => item.valorTotal);

      setCharData({
        labels: labels,
        datasets: [
          {
            label: "Cantidad de productos",
            data: values,
            backgroundColor: [
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 99, 132, 0.8)",
              "rgba(153, 102, 255, 0.8)",
            ],
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
              Cantidad De Productos Por Marca
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              productos registrados.
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
        <div >
          {charData ? (
            <div style={{ width: "400px", height: "400px", margin: "0 auto" }}>
              {" "}
              <Pie data={charData} />
            </div>
          ) : (
            <p>Cargando Informacion...</p>
          )}
        </div>
      </section>
    </div>
  );
}
