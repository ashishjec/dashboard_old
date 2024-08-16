"use client";

import React from 'react';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-900">Support</h1>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 border border-gray-300">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">Support Center</h2>
        <p className="text-gray-700 mb-6">Get help and support here.</p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Support Statistics</h3>
          <div className="flex space-x-4">
            <div className="w-1/3 bg-blue-100 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-800">Total Requests</h4>
              <p className="text-3xl font-semibold text-blue-700">300</p>
            </div>
            <div className="w-1/3 bg-blue-200 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-800">Resolved</h4>
              <p className="text-3xl font-semibold text-blue-700">250</p>
            </div>
            <div className="w-1/3 bg-blue-300 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-800">Pending</h4>
              <p className="text-3xl font-semibold text-blue-700">50</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Support Request Form</h3>
          {/* Add support request form or component here */}
        </div>
      </div>
    </div>
  );
};

export default Support;
