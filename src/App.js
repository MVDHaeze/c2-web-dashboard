import React from "react";
import Dashboard from "./components/dashboard";
import c2 from "./data/c2.json";

export default function App() {
  const data = c2;
  const kpis = [
    {
      name: "Rowing Sessions",
      value: "test",
    },
    { name: "Meters Rowed", value: "745615m" },
    { name: "Power Delivered", value: "4546w" },
    { name: "Calories Spent", value: 45496 },
  ];
  return (
    <div>
      <div className="bg-gray-800 h-screen">
        <Dashboard chartData={data} kpis={kpis} />
      </div>
    </div>
  );
}
