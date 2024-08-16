"use client";

import React from 'react';

const Vehicles = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-indigo-900">Vehicles</h1>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 border border-gray-300">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Vehicle Overview</h2>
        <p className="text-gray-700 mb-6">Manage and view details of vehicles here.</p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Vehicle Statistics</h3>
          <div className="flex space-x-4">
            <div className="w-1/3 bg-indigo-100 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-indigo-800">Total Vehicles</h4>
              <p className="text-3xl font-semibold text-indigo-700">75</p>
            </div>
            <div className="w-1/3 bg-indigo-200 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-indigo-800">Active Vehicles</h4>
              <p className="text-3xl font-semibold text-indigo-700">60</p>
            </div>
            <div className="w-1/3 bg-indigo-300 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-indigo-800">Inactive Vehicles</h4>
              <p className="text-3xl font-semibold text-indigo-700">15</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Vehicle List</h3>
          {/* Add vehicle list table or component here */}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
