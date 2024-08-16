"use client";

import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const Navbar = () => {
  return (
    <nav className="bg-purple-500 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
            <a href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={100} className="mr-3" />
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            Home
          </a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
