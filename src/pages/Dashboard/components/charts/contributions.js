import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box, Typography } from "@mui/material";
import * as colors from "@mui/material/colors";
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
import { useTheme } from "@mui/material";
import "chart.js/auto";

const DoughnutChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: "#fff",
        textAlign: "center",
        font: {
          weight: "bold",
        },
        formatter: (value, context) => {
          // Extract the label from the dataset
          let label = context.chart.data.labels[context.dataIndex];
          // Combine the label and value to display both
          return label + "\n" + value;
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <Doughnut
      data={data}
      options={options}
      plugins={[ChartDataLabels]}
      width={300}
      height={300}
    />
  );
};

export default DoughnutChart;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const theme = useTheme();

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Contributions",
        data: [65, 59, 80, 81, 56, 55, 40, 20],
        backgroundColor: theme.palette.primary.main,
        // borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 0,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };
  return (
    // <>
    //   <div className="header">
    //     <h1 className="title">Bar Chart</h1>
    //   </div>
    <Bar data={data} options={options} height={400} />
    // </>
  );
};

export { DoughnutChart, BarChart };
