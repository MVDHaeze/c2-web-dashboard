import React from "react";

export default function ChartCard({ name }) {
  return (
    <div className="p-4 bg-gray-50 card drop-shadow-xl shadow-sm rounded-lg justify-center md:col-span-2 lg:col-span-3 lg:row-span-2 xl:col-span-2 xl:row-span-3 xl:order-2">
      {name}
    </div>
  );
}
