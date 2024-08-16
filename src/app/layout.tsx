"use client";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex">
          <Sidebar isOpen={isOpen} />
          <main className="flex-1 min-h-screen bg-gray-50 p-3">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
