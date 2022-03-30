import React from "react";
import Dashboard from "./components/dashboard";
import c2 from "./data/c2.json";
import kpis from "./data/kpis.json";
import kpis_graph from "./data/kpis_graph.json";

export default function App() {
  const SESSIONS = c2;
  const KPIS = kpis;
  const KPIS_GRAPH = kpis_graph;
  return (
    <div>
      <div className="bg-gray-800 h-screen">
        <Dashboard chartData={SESSIONS} kpis={KPIS} kpis_graph={KPIS_GRAPH} />
      </div>
    </div>
  );
}
