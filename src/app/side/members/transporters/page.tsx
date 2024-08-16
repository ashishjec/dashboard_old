"use client";

import React from 'react';

const Transporters = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-5xl font-bold mb-10 text-blue-800">Transporters</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Add New Transporter</h2>
          <form>
            {/* Form Fields */}
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">Submit</button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Transporter List</h2>
          {/* Add Transporter List Table */}
        </div>
      </div>
    </div>
  );
};

export default Transporters;
