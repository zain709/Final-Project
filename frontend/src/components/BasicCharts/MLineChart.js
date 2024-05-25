import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function MLineChart({ label, title, chartData }) {
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
  // console.log("Data: ", chartData);
  if (chartData) {
    const preds = chartData?.predictions;
    var sales = chartData?.sales;
    const labels = Object.keys(sales).concat(Object.keys(preds));
    const p = Object.keys(preds).map((d) => preds[d]);
    const s = Object.keys(sales).map((d) => sales[d]);
    const data = {
      labels,
      datasets: [
        {
          label: "Sales",
          data: s,
          borderColor: "rgb(0, 0, 255)",
          backgroundColor: "rgba(0, 0, 255, 0.5)",
        },
        {
          label: "Predicted Sales",
          data: s.concat(p),
          borderColor: "rgb(0, 255, 0)",
          backgroundColor: "rgba(0, 132, 0, 0.5)",
        },
      ],
    };
    return <Line options={options} data={data} />;
  } else {
    return <div>No Data To Display</div>;
  }
}

export default MLineChart;
