"use client";

import React from 'react';

const GodEyeView = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-yellow-900">God Eye View</h1>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 border border-gray-300">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-700">Overview</h2>
        <p className="text-gray-700 mb-6">Get a comprehensive view of all activities here.</p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Activity Statistics</h3>
          <div className="flex space-x-4">
            <div className="w-1/3 bg-yellow-100 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-yellow-800">Total Activities</h4>
              <p className="text-3xl font-semibold text-yellow-700">1200</p>
            </div>
            <div className="w-1/3 bg-yellow-200 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-yellow-800">Ongoing</h4>
              <p className="text-3xl font-semibold text-yellow-700">300</p>
            </div>
            <div className="w-1/3 bg-yellow-300 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-yellow-800">Completed</h4>
              <p className="text-3xl font-semibold text-yellow-700">900</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Activity List</h3>
          {/* Add activity list table or component here */}
        </div>
      </div>
    </div>
  );
};

export default GodEyeView;
