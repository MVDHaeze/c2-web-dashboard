import React from "react";
import Dashboard from "./components/dashboard";
import c2_logs from "./data/c2.json";
import kpis_data from "./data/kpis_nested.json";

export default function App() {
  const c2 = c2_logs;
  const kpis = kpis_data;
  return (
    <div>
      <div className="bg-gray-800 h-screen">
        <Dashboard {...{ c2, kpis }} />
      </div>
    </div>
  );
}
