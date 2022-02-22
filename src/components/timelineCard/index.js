import React from "react";
import { Line } from "react-chartjs-2";
import c2 from "../../data/c2.json";

const data = {
  labels: [c2[1], c2[2], c2[3]],
  datasets: [c2[1].work_in_m, c2[2].work_in_m, c2[3].work_in_m],
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

export default function TimelineCard() {
  return (
    <div className=" p-4 bg-gray-50 card drop-shadow-xl shadow-sm rounded-lg justify-center sm:col-span-2 lg:col-span-4 lg:row-span-3 row-span-3">
      <Line data={data} options={options} />
    </div>
  );
}
