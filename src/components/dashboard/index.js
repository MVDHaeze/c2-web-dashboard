import React, { Component } from "react";
import ChartCard from "../chartCard";
import KpiCard from "../kpiCard";
import ListingCard from "../listingCard";
import TimelineCard from "../timelineCard";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charts: ["time", "watt"],
    };
  }

  render() {
    return (
      // Dashboard Container
      <div
        id="container-dashboard"
        className="md:pr-24 md:pl-24 md:pt-20 sm:pr-20 sm:pl-16 sm:pt-16 pr-6 pl-6 pt-12 h-full pb-0"
      >
        <h1 className="font-semibold text-3xl pb-2  text-gray-50 ">
          Dashboard
        </h1>
        {/* Grid Dashboard Cards */}
        <div className="grid grid-cols-5 grid-rows-5">
          {/* KPI Boxes */}
          {Object.entries(this.props.kpis).map(([key, value]) => (
            <div>
              <KpiCard data={value} key={key} name={key} />
            </div>
          ))}
          {/* Small Graphs */}
          {this.state.charts.map((chart) => (
            <div className="row-span-2 col-span-2">
              <ChartCard name={chart} key={chart} />
            </div>
          ))}
          {/* Long Graph */}
          <div className="row-span-2 col-span-4">
            <TimelineCard />
          </div>
          {/* Table */}
          <div className="row-span-5">
            {" "}
            <ListingCard />
          </div>
        </div>
      </div>
    );
  }
}
