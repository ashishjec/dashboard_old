"use client";

import React from 'react';

const ClosedTrips = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Closed Trips</h1>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 border border-gray-300">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Closed Trips Overview</h2>
        <p className="text-gray-700 mb-6">Manage and review closed trips here.</p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-600 mb-4">Closed Trip Statistics</h3>
          <div className="flex space-x-4">
            <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-800">Total Closed Trips</h4>
              <p className="text-3xl font-semibold text-gray-700">50</p>
            </div>
            <div className="w-1/3 bg-gray-200 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-800">High Priority</h4>
              <p className="text-3xl font-semibold text-gray-700">10</p>
            </div>
            <div className="w-1/3 bg-gray-300 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-800">Low Priority</h4>
              <p className="text-3xl font-semibold text-gray-700">40</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-4">Closed Trips List</h3>
          {/* Add closed trips list table or component here */}
        </div>
      </div>
    </div>
  );
};

export default ClosedTrips;
