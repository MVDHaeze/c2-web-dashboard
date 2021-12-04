import React from "react";
import ChartCard from "../chartCard";
import KpiCard from "../kpiCard";
import ListingCard from "../listingCard";
import TimelineCard from "../timelineCard";

function Dashboard() {
  const kpis = [
    { name: "blue", value: 5 },
    { name: "red", value: 7 },
    { name: "yellow", value: 4 },
    { name: "green", value: 4 },
  ];
  const charts = ["time", "watt"];
  return (
    // Dashboard Container
    <div
      id="container-dashboard"
      className="md:pr-24 md:pl-24 md:pt-20 sm:pr-20 sm:pl-16 sm:pt-16 pr-6 pl-6 pt-12 h-full pb-0"
    >
      <h1 className="font-semibold text-3xl pb-2  text-gray-900 ">Dashboard</h1>
      {/* Grid Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-6 lg:grid-cols-4 xl:grid-cols-5 grid-rows-4 gap-4 h-5/6 ">
        {kpis.map((kpi) => (
          <KpiCard name={kpi.name} value={kpi.value} />
        ))}
        <ListingCard />
        {charts.map((chart) => (
          <ChartCard name={chart} />
        ))}
        <TimelineCard />
      </div>
    </div>
  );
}

export default Dashboard;
