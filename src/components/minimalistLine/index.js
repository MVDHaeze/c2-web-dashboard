import React from "react";
import { Line } from "react-chartjs-2";
import getGradient from "../../utils/getGradient";

const data = {
  labels: [1, 2, 3, 4, 5, 6],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 6, 7, 12, 9],
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return;
        }
        return getGradient(ctx, chartArea);
      },
      borderColor: "#5C62F7",
      fill: true,
      borderWidth: 4,
      cubicInterpolationMode: "monotone",
    },
  ],
};

const options = {
  scales: {
    x: {
      display: false,
      grid: { display: false },
      title: {
        display: false,
      },
      ticks: {
        major: {
          enabled: true,
        },
      },
    },
    y: {
      display: false,
      grid: { display: false },
      title: {
        display: false,
      },
    },
  },
};

function MinimalistLine() {
  return (
    <div className="h-2/3 w-full">
      <Line data={data} options={options} />
    </div>
  );
}

export default MinimalistLine;
