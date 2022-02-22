import React from "react";
import Dashboard from "./components/dashboard";
import c2 from "./data/c2.json";

export default function App() {
  const data = c2;
  return (
    <div>
      <div className="bg-gray-800 h-screen">
        <Dashboard chartData={data} />
      </div>
    </div>
  );
}
