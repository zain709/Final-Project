import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ title, label, chartData, color }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  const labels = chartData.map((d) => d.type);

  const data = {
    labels,
    datasets: [
      {
        label: label,
        data:
          label == "Sales"
            ? chartData.map((d) => d.sale)
            : chartData.map((d) => d.count),
        backgroundColor: color,
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default BarChart;
