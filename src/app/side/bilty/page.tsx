"use client";

import React from 'react';

const Bilty = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-purple-900">Bilty</h1>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 border border-gray-300">
        <h2 className="text-3xl font-semibold mb-6 text-purple-700">Bilty Management</h2>
        <p className="text-gray-700 mb-6">Manage and view bilty documents here.</p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-purple-600 mb-4">Bilty Statistics</h3>
          <div className="flex space-x-4">
            <div className="w-1/3 bg-purple-100 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-purple-800">Total Bilty</h4>
              <p className="text-3xl font-semibold text-purple-700">600</p>
            </div>
            <div className="w-1/3 bg-purple-200 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-purple-800">Pending</h4>
              <p className="text-3xl font-semibold text-purple-700">150</p>
            </div>
            <div className="w-1/3 bg-purple-300 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-purple-800">Completed</h4>
              <p className="text-3xl font-semibold text-purple-700">450</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-purple-600 mb-4">Bilty List</h3>
          {/* Add bilty list table or component here */}
        </div>
      </div>
    </div>
  );
};

export default Bilty;
