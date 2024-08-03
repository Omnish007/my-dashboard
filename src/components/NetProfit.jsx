import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const NetProfit = () => {
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#7292FC", "#293261"], // Updated color for the remaining part
        borderWidth: 0,
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
      tooltip: {
        enabled: false,
      },
    },
    cutout: "80%", // Donut size
  };

  return (
    <div className="bg-primary-bg p-4 rounded-lg text-white flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between md:space-x-6 overflow-hidden">
      <div className="text-center md:text-left mb-4 md:mb-0 md:w-1/2">
        <span className="block text-sm text-text-subtle">Net Profit</span>
        <span className="block text-3xl font-bold">$6759.25</span>
        <span className="text-xs text-text-subtle mt-2">
          *The values here have been rounded off.
        </span>
      </div>
      <div className="relative w-24 h-20 sm:w-28 sm:h-24 md:w-32 md:h-28 lg:w-40 lg:h-32 flex-shrink-0">
        <Pie data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-base font-bold">70%</span>
            <span className="text-xs text-text-subtle block">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetProfit;
