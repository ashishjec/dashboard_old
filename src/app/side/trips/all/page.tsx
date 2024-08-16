"use client";

import React from "react";

const AllTrips = () => {
  return (
    <div className="min-h-screen bg-black-100 p-8">
      <h1 className="text-3xl font-bold mb-6">All Trips</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Total Trips</h2>
          <p className="text-2xl">230</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Ongoing Trips</h2>
          <p className="text-2xl">30</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Completed Trips</h2>
          <p className="text-2xl">190</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Trips List</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b py-2">Trip ID</th>
              <th className="border-b py-2">Origin</th>
              <th className="border-b py-2">Destination</th>
              <th className="border-b py-2">Status</th>
              <th className="border-b py-2">Driver</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-2">TRP12345</td>
              <td className="border-b py-2">New York</td>
              <td className="border-b py-2">Los Angeles</td>
              <td className="border-b py-2">Ongoing</td>
              <td className="border-b py-2">John Doe</td>
            </tr>
            <tr>
              <td className="border-b py-2">TRP67890</td>
              <td className="border-b py-2">Chicago</td>
              <td className="border-b py-2">Houston</td>
              <td className="border-b py-2">Completed</td>
              <td className="border-b py-2">Jane Smith</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Graph / Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Trips Overview</h2>
        {/* Example placeholder for a chart */}
        <div className="bg-gray-200 h-64 rounded-lg"></div>
      </div>
    </div>
  );
};

export default AllTrips;
