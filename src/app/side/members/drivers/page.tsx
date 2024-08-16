"use client";

import React from "react";

const Drivers = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Drivers</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-blue-900">Total Drivers</h2>
          <p className="text-2xl text-blue-700">75</p>
        </div>
        <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-blue-900">Active Drivers</h2>
          <p className="text-2xl text-blue-700">60</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-blue-900">Pending Approvals</h2>
          <p className="text-2xl text-blue-700">8</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Drivers List</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b py-2 text-blue-900">Name</th>
              <th className="border-b py-2 text-blue-900">Company</th>
              <th className="border-b py-2 text-blue-900">Contact</th>
              <th className="border-b py-2 text-blue-900">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-2 text-blue-700">Rakesh Verma</td>
              <td className="border-b py-2 text-blue-700">Assam Transport</td>
              <td className="border-b py-2 text-blue-700">+91 789 012 345</td>
              <td className="border-b py-2 text-blue-700">Active</td>
            </tr>
            <tr>
              <td className="border-b py-2 text-blue-700">Ashish Chaudhry</td>
              <td className="border-b py-2 text-blue-700">Trolla Logistics</td>
              <td className="border-b py-2 text-blue-700">+91 321 654 987</td>
              <td className="border-b py-2 text-blue-700">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Graph / Chart */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Performance Overview</h2>
        {/* Example placeholder for a chart */}
        <div className="bg-blue-200 h-64 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Drivers;
