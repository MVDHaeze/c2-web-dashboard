import React from "react";
import { Line } from "react-chartjs-2";

let width, height, gradient;
function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(5, chartArea.bottom, 5, chartArea.top);
    gradient.addColorStop(1, "#FF2A4F");
    gradient.addColorStop(0.3, "#ff748c");
    gradient.addColorStop(0, "#FFF1F4");
  }

  return gradient;
}

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
      borderColor: "#FF0530",
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
        display: true,
        text: "Date",
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
        display: true,
        text: "value",
      },
    },
  },
};

function VerticalLine() {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default VerticalLine;
