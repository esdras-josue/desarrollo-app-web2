"use client";
import React, { useEffect, useState } from "react";
import { fetchTotalValue } from "@/app/service/api";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function page() {
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
            label: "Valor Total de productos por marca",
            data: values,
            backgroundColor: [
              "rgba(78, 146, 218, 0.89)",
              "rgba(118, 175, 233, 0.94)",
            ],
          },
        ],
      });
    });
  }, []);

  return (
    <div>
      {charData ? (
        <div style={{ width: '400px', height: '400px', margin: '0 auto', }}>
          {" "}
          <Pie data={charData} />
        </div>
      ) : (
        <p>Cargando Informacion...</p>
      )}
    </div>
  );
}
