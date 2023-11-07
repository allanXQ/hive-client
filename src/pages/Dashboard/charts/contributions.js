import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box, Typography } from "@mui/material";
import * as colors from "@mui/material/colors";

const Contributions = () => {
  const colorNames = [
    "red",
    "pink",
    "purple",
    "deepPurple",
    "indigo",
    "blue",
    "lightBlue",
    "cyan",
    "teal",
    "green",
    "lightGreen",
    "lime",
    "yellow",
    "amber",
    "orange",
    "deepOrange",
    "brown",
    "grey",
    "blueGrey",
  ];

  const getRandomColor = (colorType) => {
    let colorIndex = Math.floor(Math.random() * colorNames.length);
    let colorName = colorNames[colorIndex];
    return colors[colorName][colorType];
  };

  const backgroundColors = colorNames.map((name) => getRandomColor(500));

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: backgroundColors,
        borderColor: backgroundColors,
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
      // legend: {
      //   display: false,
      // },
    },
  };

  return (
    <Box
      sx={{
        // padding: 0,
        // margin: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h6">Contributions</Typography>
      <Box
        sx={{
          width: "15vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pie data={data} options={options} plugins={[ChartDataLabels]} />;
      </Box>
    </Box>
  );
};

export default Contributions;
