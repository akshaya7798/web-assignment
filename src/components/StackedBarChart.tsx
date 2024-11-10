// components/StackedBarChart.tsx

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

interface OverviewDataType {
  type: string;
  count: number | string;
  percentage: number;
  icon: React.ReactNode;
}

interface StackedBarChartProps {
  data: OverviewDataType[];
}

export const StackedBarChart: React.FC<StackedBarChartProps> = ({ data }) => {
  // Extract data for each platform and metric
  const chartData = {
    labels: ["Page Views", "Likes", "Profile Views", "Retweets", "Total Views"],
    datasets: [
      {
        label: "Facebook",
        data: [87, 52, 0, 0, 0], // Customize values based on your OverviewData
        backgroundColor: "rgb(24, 119, 242)", // Facebook Blue
      },
      {
        label: "Instagram",
        data: [0, 5462, 52000, 0, 0],
        backgroundColor: "#d62976", // Instagram Gradient Red
      },
      {
        label: "Twitter",
        data: [0, 0, 0, 117, 0],
        backgroundColor: "#1da1f2", // Twitter Blue
      },
      {
        label: "YouTube",
        data: [0, 107, 0, 0, 1407],
        backgroundColor: "#FF0000", // YouTube Red
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default StackedBarChart;
