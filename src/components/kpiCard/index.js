import React from "react";
import MinimalistLine from "../minimalistLine";

export default function KpiCard({ data }) {
  return (
    <div className="shadow stats relative">
      <div className="stat content-start">
        <div className="stat-title">{data.Kpi.Name}</div>
        <div className="stat-value">{data.Kpi.Value}</div>
      </div>
      <MinimalistLine graph={data.Graph} />
    </div>
  );
}
