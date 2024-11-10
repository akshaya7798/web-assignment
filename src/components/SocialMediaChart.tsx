// src/components/SocialMediaChart.tsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SocialMediaChart = () => {
  // Sample data for followers/subscribers on each platform
  const data = {
    labels: ["Facebook", "Instagram", "Twitter", "YouTube"],
    datasets: [
      {
        label: "Followers/Subscribers",
        data: [1987, 11000, 1044, 8239], // Replace with your dynamic data if needed
        backgroundColor: [
          "rgb(24, 119, 242)", // Facebook Blue
          "#d62976",// Instagram Gradient
          "#1da1f2", // Twitter Blue
          "#FF0000", // YouTube Red
        ],
        borderColor: [
          "rgba(59, 89, 152, 1)",
          "rgba(225, 48, 108, 1)",
          "rgba(29, 161, 242, 1)",
          "rgba(205, 32, 31, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.label || "";
            let value = context.raw || 0;
            return `${label}: ${value.toLocaleString()} followers`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SocialMediaChart;
