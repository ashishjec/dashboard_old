"use client";

import React from 'react';

const GenerateBilty = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-teal-900">Generate Bilty</h1>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 border border-gray-300">
        <h2 className="text-3xl font-semibold mb-6 text-teal-700">Bilty Generation</h2>
        <p className="text-gray-700 mb-6">Generate and manage bilty documents here.</p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">Bilty Generation Statistics</h3>
          <div className="flex space-x-4">
            <div className="w-1/3 bg-teal-100 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-teal-800">Total Bilty Generated</h4>
              <p className="text-3xl font-semibold text-teal-700">500</p>
            </div>
            <div className="w-1/3 bg-teal-200 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-teal-800">Pending</h4>
              <p className="text-3xl font-semibold text-teal-700">100</p>
            </div>
            <div className="w-1/3 bg-teal-300 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-teal-800">Completed</h4>
              <p className="text-3xl font-semibold text-teal-700">400</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">Bilty Generation Form</h3>
          {/* Add bilty generation form or component here */}
        </div>
      </div>
    </div>
  );
};

export default GenerateBilty;
