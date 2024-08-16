"use client";

import React from 'react';
import Link from 'next/link';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-purple-800">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-purple-100 shadow-lg p-6 rounded-lg">
          <Link href="/side/loads">
            <h2 className="text-lg font-semibold mb-2 text-purple-900">Total LOADS</h2>
            <p className="text-3xl font-bold text-purple-900">6107</p>
          </Link>
        </div>

        <div className="bg-blue-100 shadow-lg p-6 rounded-lg">
          <Link href="/side/trips/ongoing">
            <h2 className="text-lg font-semibold mb-2 text-blue-900">Confirmed Trips</h2>
            <p className="text-3xl font-bold text-blue-900">999</p>
          </Link>
        </div>

        <div className="bg-green-100 shadow-lg p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-2 text-green-900">In-transit Trips</h2>
          <p className="text-3xl font-bold text-green-900">125</p>
        </div>

        <div className="bg-red-100 shadow-lg p-6 rounded-lg">
          <Link href="/side/trips/closed">
            <h2 className="text-lg font-semibold mb-2 text-red-900">Closed Trips</h2>
            <p className="text-3xl font-bold text-red-900">21</p>
          </Link>
        </div>

        <div className="bg-yellow-100 shadow-lg p-6 rounded-lg">
          <Link href="/side/members/loaders">
            <h2 className="text-lg font-semibold mb-2 text-yellow-900">Verified Loaders</h2>
            <p className="text-3xl font-bold text-yellow-900">80</p>
          </Link>
        </div>

        <div className="bg-indigo-100 shadow-lg p-6 rounded-lg">
          <Link href="/side/members/transporters">
            <h2 className="text-lg font-semibold mb-2 text-indigo-900">Verified Partners</h2>
            <p className="text-3xl font-bold text-indigo-900">131</p>
          </Link>
        </div>

        <div className="bg-teal-100 shadow-lg p-6 rounded-lg">
          <Link href="/side/vehicles">
            <h2 className="text-lg font-semibold mb-2 text-teal-900">Verified Vehicles</h2>
            <p className="text-3xl font-bold text-teal-900">831</p>
          </Link>
        </div>

        <div className="bg-pink-100 shadow-lg p-6 rounded-lg">
          <Link href="/side/drivers">
            <h2 className="text-lg font-semibold mb-2 text-pink-900">Verified Drivers</h2>
            <p className="text-3xl font-bold text-pink-900">789</p>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-lg p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 text-purple-800">Recent Activity</h2>
        <ul className="list-disc list-inside text-gray-800">
          
        </ul>
      </div>

      {/* Data Table */}
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-purple-800">Recent Orders</h2>
        <table className="min-w-full bg-white text-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-1 bg-gray-100 border-b text-gray-800">Order ID</th>
              <th className="py-2 px-1 bg-gray-100 border-b text-gray-800">Customer</th>
              <th className="py-2 px-1 bg-gray-100 border-b text-gray-800">Total</th>
              <th className="py-2 px-1 bg-gray-100 border-b text-gray-800">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-20 border-b">98765432</td>
              <td className="py-2 px-20 border-b">Rajesh Kumar</td>
              <td className="py-2 px-20 border-b">₹100.00</td>
              <td className="py-2 px-20 border-b">Completed</td>
            </tr>
            <tr>
              <td className="py-2 px-20 border-b">8796546</td>
              <td className="py-2 px-20 border-b">Anjali Verma</td>
              <td className="py-2 px-20 border-b">₹200.00</td>
              <td className="py-2 px-20 border-b">Pending</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
