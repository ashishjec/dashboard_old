"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white text-black p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* <button
            className="text-black text-4xl p-2 focus:outline-none"
            onClick={toggleSidebar}
          >
            ☰
          </button> */}
          <a href="/">
            <Image src="/logo.png" alt="Logo" width={130} height={100} className="mr-3" />
          </a>
          <button
            className="text-black text-4xl p-2 focus:outline-none"
            onClick={toggleSidebar}
          >
             ☰
          </button>
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className="hover:bg-blue-700 px-3 py-2 rounded-md">
            <FaUserCircle size={38} />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded-md shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-1000 hover:bg-gray-200"
                onClick={() => {
                  alert("Browser data cleared!");
                }}
              >
                Clear Browser
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => {
                  alert("Logged out!");
                }}
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
