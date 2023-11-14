// import React from "react";
// import { Pie } from "react-chartjs-2";
// import "chart.js/auto";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import { Box, Typography } from "@mui/material";
// import * as colors from "@mui/material/colors";

// const Contributions = () => {
//   const colorNames = [
//     "red",
//     "pink",
//     "purple",
//     "deepPurple",
//     "indigo",
//     "blue",
//     "lightBlue",
//     "cyan",
//     "teal",
//     "green",
//     "lightGreen",
//     "lime",
//     "yellow",
//     "amber",
//     "orange",
//     "deepOrange",
//     "brown",
//     "grey",
//     "blueGrey",
//   ];

//   const getRandomColor = (colorType) => {
//     let colorIndex = Math.floor(Math.random() * colorNames.length);
//     let colorName = colorNames[colorIndex];
//     return colors[colorName][colorType];
//   };

//   const backgroundColors = colorNames.map((name) => getRandomColor(500));

//   const data = {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: backgroundColors,
//         borderColor: backgroundColors,
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       datalabels: {
//         color: "#fff",
//         textAlign: "center",
//         font: {
//           weight: "bold",
//         },
//         formatter: (value, context) => {
//           // Extract the label from the dataset
//           let label = context.chart.data.labels[context.dataIndex];
//           // Combine the label and value to display both
//           return label + "\n" + value;
//         },
//       },
//       // legend: {
//       //   display: false,
//       // },
//     },
//   };

//   return (
//     <Box
//       sx={{
//         // padding: 0,
//         // margin: 0,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 2,
//       }}
//     >
//       <Typography variant="h6">Contributions</Typography>
//       <Box
//         sx={{
//           width: "15vw",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Pie data={data} options={options} plugins={[ChartDataLabels]} />;
//       </Box>
//     </Box>
//   );
// };

// export default Contributions;

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
import { useTheme } from "@mui/material";

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

export default BarChart;
