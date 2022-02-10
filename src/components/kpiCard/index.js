import React from "react";
import MinimalistLine from "../minimalistLine";

export default function KpiCard({ name, value }) {
  return (
    <div className="shadow stats relative">
      <div className="stat content-start">
        <div className="stat-title">{name}</div>
        <div className="stat-value">{value}</div>
      </div>
      <MinimalistLine />
    </div>
  );
}
