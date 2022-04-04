import React from "react";
import MinimalistLine from "../minimalistLine";

export default function KpiCard({ data }) {
  return (
    <div className="shadow stats relative min-w-min lg:h-32 max-w-fit">
      <div className="stat content-start relative">
        <div className="stat-title ">{data.Kpi.Name}</div>
        <div className="stat-value">{data.Kpi.Value}</div>
        <div className="stat-desc">{data.Kpi.Description}</div>
        <div class="stat-figure">
          <MinimalistLine graph={data.Graph} />
        </div>
      </div>
    </div>
  );
}
