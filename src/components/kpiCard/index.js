import React from "react";
import MinimalistLine from "../minimalistLine";

export default function KpiCard({ name, value }) {
  return (
    <div className=" card p-4 bg-gray-50 drop-shadow-xl shadow-sm rounded-lg justify-center ">
      {name}:{value}
      <MinimalistLine />
    </div>
  );
}