"use client";

import React from 'react';

const Loads = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-pink-900">Loads</h1>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 border border-gray-300">
        <h2 className="text-3xl font-semibold mb-6 text-pink-700">Load Overview</h2>
        <p className="text-gray-700 mb-6">Manage and view details of loads here.</p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-pink-600 mb-4">Load Statistics</h3>
          <div className="flex space-x-4">
            <div className="w-1/3 bg-pink-100 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-pink-800">Total Loads</h4>
              <p className="text-3xl font-semibold text-pink-700">150</p>
            </div>
            <div className="w-1/3 bg-pink-200 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-pink-800">Loaded</h4>
              <p className="text-3xl font-semibold text-pink-700">100</p>
            </div>
            <div className="w-1/3 bg-pink-300 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-pink-800">Unloaded</h4>
              <p className="text-3xl font-semibold text-pink-700">50</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-pink-600 mb-4">Load List</h3>
          {/* Add load list table or component here */}
        </div>
      </div>
    </div>
  );
};

export default Loads;
