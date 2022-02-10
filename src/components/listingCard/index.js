import React from "react";

export default function ListingCard() {
  return (
    <div className="card justify-start sm:col-span-2 lg:col-span-1 lg:row-span-6 xl:row-span-6 h-auto lg:order-first order-last w-full">
      <table className="table table-compact w-fit rounded-lg">
        {" "}
        <thead>
          <tr>
            <th></th>
            <th>Time</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
