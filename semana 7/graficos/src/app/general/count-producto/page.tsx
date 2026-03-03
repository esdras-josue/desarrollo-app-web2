'use client';
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { fetchCountProducto } from "@/app/service/api";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function CountProductoChart() {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [
      {
        label: "Total de productos",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.5)"
      }
    ]
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCountProducto();
        const total = Number(data?.[0]?.Productos ?? 0);

        setChartData({
          labels: ["Total de productos"],
          datasets: [
            {
              label: "Total de productos",
              data: [total],
              backgroundColor: "rgba(75, 192, 192, 0.5)"
            }
          ]
        });
      } catch (error) {
        console.error("Error cargando count-producto:", error);
      }
    };

    getData();
  }, []);

  return <Bar data={chartData} />;
}
