import React from "react";

export default function ChartCard({ name }) {
  return (
    <div className="p-4 bg-gray-50 card drop-shadow-xl shadow-sm rounded-lg justify-center sm:col-span-2 lg:col-span-2 lg:row-span-2 xl:col-span-2 xl:row-span-2">
      {name}
    </div>
  );
}
