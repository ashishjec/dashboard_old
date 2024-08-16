"use client";

import React from 'react';

const Loaders = () => {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-5xl font-bold mb-10 text-green-800">Loaders</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-green-700 mb-6">Loader Overview</h2>
        <p className="text-lg text-gray-700 mb-6">
          Here you can manage and overview all loaders in your system.
        </p>
        <div className="flex space-x-4">
          <div className="w-1/3 bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-800">Total Loaders</h3>
            <p className="text-4xl text-green-700">45</p>
          </div>
          <div className="w-1/3 bg-green-200 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-800">Active Loaders</h3>
            <p className="text-4xl text-green-700">30</p>
          </div>
          <div className="w-1/3 bg-green-300 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-800">Inactive Loaders</h3>
            <p className="text-4xl text-green-700">15</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loaders;
