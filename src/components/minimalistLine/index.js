import React from "react";
import { Line } from "react-chartjs-2";
import getGradient from "../../utils/getGradient";

function MinimalistLine({ graph }) {
  const graph_labels = Object.keys(graph);
  const graph_data = Object.values(graph);
  const data = {
    labels: graph_labels,
    datasets: [
      {
        label: "# of Votes",
        data: graph_data,
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
        fill: false,
        borderWidth: 4,
        tension: 0.4,
        pointStyle: "circle",
        pointRadius: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: { display: false },
        title: {
          display: false,
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
    maintainAspectRatio: false,
    responsive: true,
  };
  return (
    <div className="p-3 h-20 w-40">
      <Line data={data} options={options} />
    </div>
  );
}

export default MinimalistLine;
