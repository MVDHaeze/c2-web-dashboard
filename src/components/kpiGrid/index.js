import { React } from "react";
import VerticalBar from "../testchart-1";
import VerticalLine from "../testchart-2";

function KPIGrid() {
  return (
    // Dashboard Container
    <div
      id="container-dashboard"
      className="absolute top-16 lg:left-80 container border-red-600 border-2"
    >
      <h1 className="font-semibold text-3xl mb-2  text-gray-900 ">Dashboard</h1>
      {/* Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-4 h-full w-full  ">
        {/* Dashboard Cards */}
        <div className=" card p-4 bg-gray-50 drop-shadow-xl shadow-sm rounded-lg justify-center flex-grow">
          <VerticalLine />
        </div>
        <div className="card p-4 bg-gray-50 card drop-shadow-xl shadow-sm rounded-lg justify-center">
          <VerticalBar />
        </div>

        <div className=" p-4 bg-gray-50 card drop-shadow-xl shadow-sm rounded-lg justify-center md:col-span-2 lg:col-span-1 lg:row-span-3">
          <VerticalBar />
        </div>
        <div className=" p-4 bg-gray-50 card drop-shadow-xl shadow-sm rounded-lg justify-center md:col-span-2 lg:col-span-2 lg:row-span-2">
          <VerticalLine />
        </div>
      </div>
    </div>
  );
}

export default KPIGrid;
