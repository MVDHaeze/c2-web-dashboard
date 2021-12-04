import React from "react";
import KPIGrid from "./components/kpiGrid";
import ResponsiveSideBar from "./components/responsiveSideBar";

export default function App() {
  return (
    <div>
      <div></div>
      <div className="bg-gray-200 h-screen w-screen">
        <ResponsiveSideBar />
        <KPIGrid />
      </div>
    </div>
  );
}
