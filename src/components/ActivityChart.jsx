import React from "react";
import { Bar } from "react-chartjs-2";
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

const ActivityChart = () => {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Activity",
        data: [
          500, 1000, 1500, 1000, 1500, 2000, 2500, 2000, 2500, 3000, 3500, 4000,
          3500, 3000, 2500, 2000, 1500, 1000, 500, 1000, 1500, 2000, 2500, 3000,
          3500, 4000, 3500, 3000, 2500, 2000,
        ],
        backgroundColor: "#7292FC",
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-primary-bg p-4 rounded min-h-[196px] overflow-x-auto">
      <div className="min-w-max">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ActivityChart;
