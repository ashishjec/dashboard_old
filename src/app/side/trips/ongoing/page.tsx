"use client";

import React from 'react';

const OngoingTripsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8 text-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-purple-800">Confirmed Trips</h1>

      {/* Filters Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Filters</h2>
        <form className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search by Trip ID"
            className="p-2 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option>Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>In Transit</option>
          </select>
          <button
            type="submit"
            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Apply
          </button>
        </form>
      </div>

      {/* Trips Table */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Trips List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-800">
              <th className="py-2 px-4 border-b">Trip ID</th>
              <th className="py-2 px-4 border-b">Driver Name</th>
              <th className="py-2 px-4 border-b">Vehicle</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">123456</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">Truck A</td>
              <td className="py-2 px-4 border-b text-green-600">Completed</td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
                  View Details
                </button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="bg-gray-100 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-purple-900">Total Confirmed Trips</h3>
            <p className="text-3xl font-bold text-purple-900">999</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-green-900">Completed Trips</h3>
            <p className="text-3xl font-bold text-green-900">500</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-yellow-900">Pending Trips</h3>
            <p className="text-3xl font-bold text-yellow-900">499</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingTripsPage;
